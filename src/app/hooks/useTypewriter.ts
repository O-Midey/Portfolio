"use client";
import { useEffect, useState } from "react";

type TypewriterOptions = {
  /** Run the timer only when this title is currently relevant. */
  enabled?: boolean;
  /** ms per character while typing */
  typeMs?: number;
  /** ms per character while deleting */
  deleteMs?: number;
  /** ms a fully-typed title stays on screen */
  holdMs?: number;
};

// Types each title out, holds it, deletes it, then moves to the next.
export function useTypewriter(
  titles: readonly string[],
  { enabled = true, typeMs = 60, deleteMs = 35, holdMs = 2000 }: TypewriterOptions = {},
) {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (!enabled || titles.length === 0) return;
    const full = titles[current];
    const i = displayed.length;

    if (typing) {
      if (i < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, i + 1)), typeMs);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), holdMs);
      return () => clearTimeout(t);
    }

    if (i > 0) {
      const t = setTimeout(() => setDisplayed(full.slice(0, i - 1)), deleteMs);
      return () => clearTimeout(t);
    }
    setCurrent((prev) => (prev + 1) % titles.length);
    setTyping(true);
  }, [enabled, displayed, typing, current, titles, typeMs, deleteMs, holdMs]);

  return enabled ? displayed : (titles[0] ?? "");
}
