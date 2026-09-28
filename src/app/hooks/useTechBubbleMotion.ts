"use client";

import { useEffect, useRef } from "react";
import { advanceTechBubbles, type TechBubble } from "../lib/techBubblePhysics";

export function useTechBubbleMotion(paused: boolean, skills: readonly string[]) {
  const fieldRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(paused);
  const synchronizeRef = useRef<() => void>(() => {});

  useEffect(() => {
    pausedRef.current = paused;
    synchronizeRef.current();
  }, [paused]);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    const items = Array.from(field.querySelectorAll<HTMLLIElement>("li"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let bubbles: TechBubble[] = [];
    let origins: { x: number; y: number }[] = [];
    let bounds = { width: 0, height: 0, padding: 12 };
    let frame: number | null = null;
    let previousTime = 0;
    let inView = false;
    let disposed = false;
    let measuredWidth = 0;

    const paint = () => {
      bubbles.forEach((bubble, index) => {
        items[index].style.transform = `translate3d(${bubble.x - origins[index].x}px, ${bubble.y - origins[index].y}px, 0)`;
      });
    };

    const tick = (time: number) => {
      advanceTechBubbles(bubbles, bounds, previousTime ? (time - previousTime) / 1000 : 0);
      previousTime = time;
      paint();
      frame = requestAnimationFrame(tick);
    };

    const synchronize = () => {
      const running = !pausedRef.current && !reducedMotion.matches && inView && !document.hidden && bubbles.length > 0;
      field.dataset.motion = running ? "running" : "paused";
      if (running && frame === null) {
        previousTime = 0;
        frame = requestAnimationFrame(tick);
      } else if (!running && frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
    };

    const measure = () => {
      if (disposed) return;
      items.forEach((item) => { item.style.transform = ""; });
      field.style.height = "";
      measuredWidth = field.clientWidth;
      bubbles = [];
      if (measuredWidth === 0 || reducedMotion.matches) {
        synchronize();
        return;
      }

      const flowHeight = field.clientHeight;
      const styles = getComputedStyle(field);
      const room = Number.parseFloat(styles.getPropertyValue("--tech-bubble-room")) || 1.08;
      const minimumHeight = Number.parseFloat(styles.getPropertyValue("--tech-bubble-min-height")) || 280;
      bounds = {
        width: measuredWidth,
        height: Math.max(minimumHeight, Math.round(flowHeight * room)),
        padding: 12,
      };
      origins = items.map((item) => ({ x: item.offsetLeft, y: item.offsetTop }));
      bubbles = items.map((item, index) => {
        const angle = Math.random() * Math.PI * 2;
        const availableFlow = Math.max(1, flowHeight - 24 - item.offsetHeight);
        const availableField = bounds.height - 24 - item.offsetHeight;
        return {
          x: origins[index].x,
          y: 12 + (origins[index].y - 12) / availableFlow * availableField,
          width: item.offsetWidth,
          height: item.offsetHeight,
          vx: Math.cos(angle) * 18,
          vy: Math.sin(angle) * 18,
        };
      });
      field.style.height = `${bounds.height}px`;
      advanceTechBubbles(bubbles, bounds, 0);
      paint();
      synchronize();
    };

    synchronizeRef.current = synchronize;
    const resizeObserver = new ResizeObserver(() => {
      // Height is simulation-owned; only width changes require a new layout.
      if (field.clientWidth !== measuredWidth) measure();
    });
    resizeObserver.observe(field);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      synchronize();
    });
    intersectionObserver.observe(field);
    reducedMotion.addEventListener("change", measure);
    document.addEventListener("visibilitychange", synchronize);
    measure();
    void document.fonts.ready.then(measure);

    return () => {
      disposed = true;
      if (frame !== null) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      reducedMotion.removeEventListener("change", measure);
      document.removeEventListener("visibilitychange", synchronize);
      synchronizeRef.current = () => {};
      items.forEach((item) => { item.style.transform = ""; });
      field.style.height = "";
    };
  }, [skills]);

  return fieldRef;
}
