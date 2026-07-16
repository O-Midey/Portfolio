"use client";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

// Resolves `target` one character at a time from random noise once `trigger` is true.
export function useScramble(target: string, trigger: boolean) {
  const [output, setOutput] = useState(target);
  const frame = useRef(0);

  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    clearInterval(frame.current);
    frame.current = window.setInterval(() => {
      setOutput(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return target[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );
      if (iteration >= target.length) clearInterval(frame.current);
      iteration += 0.4;
    }, 30);
    return () => clearInterval(frame.current);
  }, [trigger, target]);

  return output;
}
