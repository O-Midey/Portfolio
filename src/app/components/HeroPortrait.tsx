"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Hero portrait with the parallax color shapes + scanline/glitch treatment.
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
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!parallax) return;
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [parallax]);

  return (
    <div className={className}>
      {/* depth 0.03 — slowest, furthest back */}
      <div
        className="absolute -top-14 left-1/2 -translate-x-1/2 w-12 h-32 bg-emerald-400 dark:bg-emerald-500 z-0 transition-transform duration-200 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mouse.x * 12}px), ${mouse.y * 12}px)`,
        }}
      />
      {/* depth 0.06 — mid */}
      <div
        className="absolute top-[38%] -right-6 w-36 h-11 bg-rose-400 dark:bg-rose-500 z-0 transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${mouse.x * 22}px, ${mouse.y * 22}px)`,
        }}
      />
      {/* depth 0.09 — closest, fastest */}
      <div
        className="absolute bottom-55 left-2 w-20 h-20 rounded-full bg-amber-400 dark:bg-amber-500 z-0 transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${mouse.x * 32}px, ${mouse.y * 32}px)`,
        }}
      />
      {/* Photo with scanlines */}
      <div className="scanlines absolute inset-0 z-10">
        <Image
          src="/profile.png"
          alt="Omotosho David A."
          fill
          priority
          className="object-contain object-[center_18px] grayscale scale-110 contrast-125 brightness-110 drop-shadow-[0_20px_34px_rgba(0,0,0,0.22)]"
          style={{ clipPath: "inset(0 0 15% 0)" }}
        />
        <Image
          src="/profile.png"
          alt=""
          aria-hidden
          fill
          className="object-contain object-[center_18px] grayscale scale-110 contrast-125 brightness-110 glitch-layer-top pointer-events-none"
          style={{ clipPath: "inset(0 0 15% 0)" }}
        />
        <Image
          src="/profile.png"
          alt=""
          aria-hidden
          fill
          className="object-contain object-[center_18px] grayscale scale-110 contrast-125 brightness-110 glitch-layer-bottom pointer-events-none"
          style={{ clipPath: "inset(0 0 15% 0)" }}
        />
      </div>
      {showBadges && (
        <>
          <span className="absolute bottom-0 left-0 z-20 bg-term-bg/80 px-2.5 py-1.5 font-jet text-[10px] text-term-fg/80">
            BASED IN NIGERIA 🇳🇬
          </span>
          <span className="absolute bottom-0 right-0 z-20 bg-term-bg/80 px-2.5 py-1.5 font-jet text-[10px] text-term-accent">
            ● OPEN TO WORK
          </span>
        </>
      )}
    </div>
  );
}
