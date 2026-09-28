"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { useTechBubbleMotion } from "../hooks/useTechBubbleMotion";

export default function TechBubbleStack({ skills }: { skills: readonly string[] }) {
  const [paused, setPaused] = useState(false);
  const fieldRef = useTechBubbleMotion(paused, skills);

  return (
    <div className="tech-bubble-stack">
      <ul
        ref={fieldRef}
        aria-label="Tech stack"
        className="relative isolate flex flex-wrap content-start gap-2 overflow-hidden rounded-2xl border border-term-fg/10 bg-term-panel/40 p-3 md:gap-3"
      >
        {skills.map((skill) => (
          <li
            key={skill}
            className="max-w-full rounded-full border border-term-fg/25 dark:border-term-fg/45 bg-term-card px-2.5 py-1.5 font-mono text-[10.5px] leading-4 text-term-fg shadow-[0_2px_6px_rgba(0,0,0,0.04)] md:px-3 md:py-2 md:text-xs"
          >
            {skill}
          </li>
        ))}
      </ul>
      <div className="tech-bubble-controls mt-1 flex justify-end">
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Resume motion" : "Pause motion"}
          className="tech-bubble-control inline-flex min-h-11 items-center gap-1.5 rounded-md px-1.5 font-mono text-[10.5px] text-term-muted transition-colors hover:text-term-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-term-accent"
        >
          {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
    </div>
  );
}
