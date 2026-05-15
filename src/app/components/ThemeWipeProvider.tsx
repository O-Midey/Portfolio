"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

type WipeContext = {
  triggerWipe: (x: number, y: number) => void;
};

const Ctx = createContext<WipeContext>({ triggerWipe: () => {} });

export function useThemeWipe() {
  return useContext(Ctx);
}

export default function ThemeWipeProvider({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [wipe, setWipe] = useState<{ x: number; y: number; to: string } | null>(null);

  const triggerWipe = useCallback((x: number, y: number) => {
    if (wipe) return;
    const next = theme === "dark" ? "light" : "dark";
    setWipe({ x, y, to: next });
  }, [theme, wipe]);

  const onAnimationComplete = () => {
    if (!wipe) return;
    setTheme(wipe.to);
    setWipe(null);
  };

  // Max radius needed to cover the screen from any point
  const maxR = typeof window !== "undefined"
    ? Math.hypot(
        Math.max(wipe?.x ?? 0, window.innerWidth - (wipe?.x ?? 0)),
        Math.max(wipe?.y ?? 0, window.innerHeight - (wipe?.y ?? 0))
      ) * 1.1
    : 2000;

  return (
    <Ctx.Provider value={{ triggerWipe }}>
      {children}
      <AnimatePresence>
        {wipe && (
          <motion.div
            key="wipe"
            className="fixed inset-0 z-[99998] pointer-events-none rounded-full"
            style={{
              left: wipe.x,
              top: wipe.y,
              translateX: "-50%",
              translateY: "-50%",
              backgroundColor: wipe.to === "dark" ? "#111" : "#fafafa",
            }}
            initial={{ width: 0, height: 0 }}
            animate={{ width: maxR * 2, height: maxR * 2 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={onAnimationComplete}
          />
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
