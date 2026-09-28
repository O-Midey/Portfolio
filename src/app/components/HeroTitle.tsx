"use client";

import { heroTitles } from "../data/hero";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useTypewriter } from "../hooks/useTypewriter";

export default function HeroTitle({ variant }: { variant: "mobile" | "desktop" }) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const desktopMotion = useMediaQuery("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
  const enabled = variant === "mobile" ? isMobile : desktopMotion;
  const title = useTypewriter(heroTitles, { enabled });

  if (variant === "desktop") {
    return (
      <span className="text-sm font-mono tracking-widest text-gray-900 dark:text-white uppercase typing-cursor whitespace-nowrap">
        {title}
      </span>
    );
  }

  return (
    <span className="animate-[blink_1.1s_steps(1)_infinite] text-term-accent">
      {title.toUpperCase()}|
    </span>
  );
}
