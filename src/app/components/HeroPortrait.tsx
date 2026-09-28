"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "../hooks/useMediaQuery";

const PORTRAIT_SIZES = "(max-width: 767px) 280px, 320px";

function PortraitImage({ decorative = false, className }: {
  decorative?: boolean;
  className: string;
}) {
  return (
    <Image
      src="/profile.png"
      alt={decorative ? "" : "Omotosho David A."}
      aria-hidden={decorative || undefined}
      fill
      sizes={PORTRAIT_SIZES}
      priority={!decorative}
      loading={decorative ? "lazy" : "eager"}
      fetchPriority={decorative ? "auto" : "high"}
      className={className}
      style={{ clipPath: "inset(0 0 15% 0)" }}
    />
  );
}

// Hero portrait with parallax color shapes, scanlines, and hand-drawn accents.
// Shared by the desktop hero (parallax on) and the mobile terminal home
// (static shapes, optional status badges).
export default function HeroPortrait({
  className,
  parallax = false,
  showBadges = false,
}: {
  className?: string;
  parallax?: boolean;
  showBadges?: boolean;
}) {
  const emeraldRef = useRef<HTMLDivElement>(null);
  const pinkRef = useRef<HTMLDivElement>(null);
  const amberRef = useRef<HTMLDivElement>(null);
  const desktopMotion = useMediaQuery("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");

  useEffect(() => {
    if (!parallax || !desktopMotion) return;
    const emerald = emeraldRef.current;
    const pink = pinkRef.current;
    const amber = amberRef.current;
    let frame: number | null = null;
    let x = 0;
    let y = 0;
    const paint = () => {
      if (emerald) emerald.style.transform = `translate(calc(-50% + ${x * 12}px), ${y * 12}px)`;
      if (pink) pink.style.transform = `translate(${x * 22}px, ${y * 22}px)`;
      if (amber) amber.style.transform = `translate(${x * 32}px, ${y * 32}px)`;
      frame = null;
    };
    const onMove = (e: MouseEvent) => {
      x = (e.clientX / window.innerWidth - 0.5) * 2;
      y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (frame === null) frame = requestAnimationFrame(paint);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame !== null) cancelAnimationFrame(frame);
      if (emerald) emerald.style.transform = "translate(-50%, 0)";
      if (pink) pink.style.transform = "translate(0, 0)";
      if (amber) amber.style.transform = "translate(0, 0)";
    };
  }, [parallax, desktopMotion]);

  return (
    <div className={className}>
      {/* depth 0.03 — slowest, furthest back */}
      <div
        ref={emeraldRef}
        className="absolute -top-[12%] md:-top-14 left-1/2 -translate-x-1/2 w-[15%] md:w-12 h-[27%] md:h-32 bg-scribble-emerald z-0 transition-transform duration-200 ease-out"
        style={{ transform: "translate(-50%, 0)" }}
      />
      {/* depth 0.06 — mid */}
      <div
        ref={pinkRef}
        className="absolute top-[38%] -right-[7.5%] md:-right-6 w-[45%] md:w-36 h-[9%] md:h-11 bg-scribble-pink z-0 transition-transform duration-200 ease-out"
        style={{ transform: "translate(0, 0)" }}
      />
      {/* depth 0.09 — closest, fastest */}
      <div
        ref={amberRef}
        className="absolute bottom-[46%] md:bottom-55 left-[2.5%] md:left-2 w-[25%] md:w-20 aspect-square md:h-20 rounded-full bg-scribble-amber z-0 transition-transform duration-200 ease-out"
        style={{ transform: "translate(0, 0)" }}
      />
      {/* Photo with scanlines */}
      <div className="scanlines absolute inset-0 z-10">
        <PortraitImage
          className="object-contain object-[center_18px] grayscale scale-110 contrast-125 brightness-110 drop-shadow-[0_20px_34px_rgba(0,0,0,0.22)]"
        />
        <PortraitImage
          decorative
          className="object-contain object-[center_18px] grayscale scale-110 contrast-125 brightness-110 glitch-layer-top pointer-events-none"
        />
        <PortraitImage
          decorative
          className="object-contain object-[center_18px] grayscale scale-110 contrast-125 brightness-110 glitch-layer-bottom pointer-events-none"
        />
      </div>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 320 400"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="portrait-scribbles pointer-events-none absolute inset-0 z-20 size-full"
      >
        <g className="text-scribble-amber">
          <path d="M55 52L39 37M44 69L24 66M70 38L67 20" />
        </g>
        <g className="text-scribble-emerald">
          <path d="M252 17C286 7 294 33 276 38C259 43 262 19 281 26C306 36 307 65 284 91M284 91L287 77M284 91L299 87" />
        </g>
        <g className="text-scribble-pink">
          <path d="M44 350C95 345 178 348 264 344M58 356C119 351 200 353 248 350" />
        </g>
      </svg>
      {showBadges && (
        <>
          <span className="absolute bottom-0 left-0 z-20 bg-term-bg/80 px-2.5 py-1.5 font-mono text-[10px] text-term-fg/80">
            LAGOS, NIGERIA 🇳🇬
          </span>
          <span className="absolute bottom-0 right-0 z-20 bg-term-bg/80 px-2.5 py-1.5 font-mono text-[10px] text-term-accent">
            ● OPEN TO WORK
          </span>
        </>
      )}
    </div>
  );
}
