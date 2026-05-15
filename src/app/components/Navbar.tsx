"use client";
import { Home, User, Code, Mail, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";

const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "About", href: "/about" },
  { icon: Code, label: "Projects", href: "/projects" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

function RippleEffect({ x, y }: { x: number; y: number }) {
  return (
    <motion.span
      className="absolute rounded-full bg-gray-400/20 dark:bg-white/10 pointer-events-none"
      style={{ left: x - 20, top: y - 20, width: 40, height: 40 }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 3, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  );
}

function NavItem({
  item,
  isActive,
  shrunk,
}: {
  item: typeof NAV_ITEMS[0];
  isActive: boolean;
  shrunk: boolean;
}) {
  const Icon = item.icon;
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [tooltip, setTooltip] = useState(false);
  const longPressTimer = useRef<ReturnType<typeof setTimeout>>();
  const scale = useSpring(1, { stiffness: 400, damping: 15 });

  const handleTap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples((r) => [...r, { id: Date.now(), x, y }]);
    setTimeout(() => setRipples((r) => r.slice(1)), 600);
  };

  const handlePointerDown = () => {
    longPressTimer.current = setTimeout(() => setTooltip(true), 500);
  };

  const handlePointerUp = () => {
    clearTimeout(longPressTimer.current);
    setTimeout(() => setTooltip(false), 800);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            className="absolute -top-9 px-2.5 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-mono rounded-lg whitespace-nowrap z-50"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
          >
            {item.label}
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glowing dot above active icon */}
      {isActive && (
        <motion.span
          layoutId="glow-dot"
          className="absolute -top-1 w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.7)]"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <Link
        href={item.href}
        onClick={handleTap}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl overflow-hidden z-10"
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
      >
        {ripples.map((r) => <RippleEffect key={r.id} x={r.x} y={r.y} />)}

        <motion.div
          animate={{ scale: isActive ? 1.2 : 1 }}
          whileTap={{ scale: 1.4 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
        >
          <Icon
            className={`w-4 h-4 transition-colors duration-300 ${
              isActive ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-[#bbb]"
            }`}
            strokeWidth={isActive ? 2.5 : 2}
          />
        </motion.div>

        <AnimatePresence>
          {!shrunk && (
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`text-[9px] font-medium overflow-hidden ${
                isActive ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-[#bbb]"
              }`}
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      setShrunk(true);
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setShrunk(false), 800);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[88%] max-w-sm z-50">
      <nav aria-label="Mobile navigation" className="relative">

        {/* Gradient border */}
        <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-emerald-400/40 via-rose-400/40 to-amber-400/40 animate-[nav-border_3s_ease-in-out_infinite] z-0" />

        <motion.div
          animate={{ paddingTop: shrunk ? 6 : undefined, paddingBottom: shrunk ? 6 : undefined }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative bg-white/90 dark:bg-[#111]/90 backdrop-blur-md overflow-hidden rounded-[30px] z-10"
        >
          {/* Sliding pill indicator */}
          <div className="relative w-full px-2 py-1.5 flex items-center justify-around">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} item={item} isActive={pathname === item.href} shrunk={shrunk} />
            ))}

            {/* Theme toggle */}
            {mounted && (
              <div className="relative flex flex-col items-center">
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  whileTap={{ scale: 1.4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl z-10"
                >
                  <motion.div animate={{ scale: 1 }} whileTap={{ scale: 1.3 }}>
                    {theme === "dark"
                      ? <Sun className="w-4 h-4 text-gray-400 dark:text-[#bbb]" strokeWidth={2} />
                      : <Moon className="w-4 h-4 text-gray-400" strokeWidth={2} />
                    }
                  </motion.div>
                  <AnimatePresence>
                    {!shrunk && (
                      <motion.span
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[9px] font-medium text-gray-400 dark:text-[#bbb] overflow-hidden"
                      >
                        {theme === "dark" ? "Light" : "Dark"}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Glow underneath */}
        <div className="absolute inset-0 -z-10 blur-xl bg-gradient-to-t from-emerald-300/10 dark:from-emerald-900/20 to-transparent rounded-[30px]" />
      </nav>
    </div>
  );
}
