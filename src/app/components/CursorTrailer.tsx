"use client";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function CursorTrailer() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const enabled = useMediaQuery("(min-width: 769px)");

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (raf.current === null && !document.hidden) {
        raf.current = requestAnimationFrame(animate);
      }
    };

    const setHover = (kind: "link" | "button" | null, external = false) => {
      const dot = dotRef.current;
      const ringEl = ringRef.current;
      const arrow = arrowRef.current;
      if (!dot || !ringEl || !arrow) return;

      const hovering = kind !== null;
      dot.classList.toggle("cursor-dot--hover", hovering);
      // Buttons get the faint enlarged ring; links get a solid ring + arrow.
      ringEl.classList.toggle("cursor-ring--hover", kind === "button");

      const isLink = kind === "link";
      ringEl.classList.toggle("cursor-ring--link", isLink);
      if (isLink) arrow.textContent = external ? "↗" : "→";
    };

    // Event delegation: derive hover state from the topmost element under the
    // cursor on every mouseover. Works for dynamically-rendered links without
    // re-binding per-element listeners.
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target || typeof target.closest !== "function") return;

      const link = target.closest("a[href]") as HTMLAnchorElement | null;
      if (link) {
        const href = link.getAttribute("href") || "";
        const external =
          link.target === "_blank" || /^(https?:|mailto:|tel:)/i.test(href);
        setHover("link", external);
        return;
      }

      if (target.closest("button, [role='button']")) {
        setHover("button");
        return;
      }

      setHover(null);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current)
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`;

      // Stop once the ring catches up instead of running an idle frame loop.
      raf.current = Math.abs(pos.current.x - ring.current.x) > 0.1 || Math.abs(pos.current.y - ring.current.y) > 0.1
        ? requestAnimationFrame(animate)
        : null;
    };

    const stopWhenHidden = () => {
      if (document.hidden && raf.current !== null) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    };
    document.addEventListener("visibilitychange", stopWhenHidden);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("visibilitychange", stopWhenHidden);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      raf.current = null;
    };
  }, [enabled]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring">
        <span ref={arrowRef} className="cursor-arrow" aria-hidden />
      </div>
    </>
  );
}
