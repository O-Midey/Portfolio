import { Onest } from "next/font/google";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useScramble } from "../hooks/useScramble";
import Scribble from "./Scribble";

const onest = Onest({ subsets: ["latin"], display: "swap" });

export default function HeroName({
  variant,
}: {
  variant: "mobile" | "desktop";
}) {
  const [scrambleStarted, setScrambleStarted] = useState(false);
  const motionEnabled = useMediaQuery(
    variant === "desktop"
      ? "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
      : "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
  );
  const firstLine = useScramble("Omotosho", motionEnabled && scrambleStarted);
  const secondLine = useScramble("David A.", motionEnabled && scrambleStarted);

  useEffect(() => {
    if (!motionEnabled) return;
    const timer = window.setTimeout(() => setScrambleStarted(true), 400);
    return () => window.clearTimeout(timer);
  }, [motionEnabled]);

  return (
    <div className="relative w-fit max-w-full pb-4 pr-9 md:pr-12">
      <h1
        className={`${onest.className} select-none text-[clamp(36px,10vw,44px)] font-semibold leading-[1.08] tracking-[-0.04em] text-term-fg md:text-[56px] lg:text-[72px]`}
      >
        <span className="group relative block w-fit">
          {firstLine}
          <span aria-hidden="true" className="name-glitch-layer text-term-accent">
            {firstLine}
          </span>
        </span>
        <span className="group relative block w-fit text-term-muted">
          {secondLine}
          <span aria-hidden="true" className="name-glitch-layer text-rose-400">
            {secondLine}
          </span>
        </span>
      </h1>
      <Scribble variant="spark" color="pink" className="absolute right-0 top-1 size-7 -rotate-12 md:size-9" />
      <Scribble variant="underline" color="amber" className="absolute bottom-0 left-0 h-3 w-[70%]" />
    </div>
  );
}
