"use client";
import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(400px circle at ${e.clientX}px ${e.clientY}px, rgba(52,211,153,0.06), transparent 70%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="pointer-events-none fixed inset-0 z-[2] transition-none" />;
}
