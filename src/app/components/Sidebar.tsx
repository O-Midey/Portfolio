"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import sections from "../data/sections";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function ScrambleLabel({ label }: { label: string }) {
  const [output, setOutput] = useState(label);
  const frame = useRef(0);

  const scramble = () => {
    let iteration = 0;
    clearInterval(frame.current);
    frame.current = window.setInterval(() => {
      setOutput(
        label.split("").map((char, i) => {
          if (char === " ") return " ";
          if (i < iteration) return label[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      if (iteration >= label.length) clearInterval(frame.current);
      iteration += 0.5;
    }, 30);
  };

  const reset = () => {
    clearInterval(frame.current);
    setOutput(label);
  };

  return (
    <span
      className="text-sm font-mono tracking-wide"
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      {output}
    </span>
  );
}

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="px-3 mb-4">
      <p className="text-[9px] font-mono tracking-[0.2em] text-gray-400 dark:text-[#555] uppercase mb-0.5">local time</p>
      <p className="text-xs font-mono text-gray-500 dark:text-[#666] tabular-nums">{time}</p>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`hidden md:flex fixed top-0 left-0 h-screen flex-col bg-[#fafafa]/80 dark:bg-[#111]/80 backdrop-blur-sm border-r border-gray-100/50 dark:border-[#1a1a1a]/50 z-40 transition-all duration-300 ease-in-out overflow-hidden ${expanded ? "w-52 px-4" : "w-14 px-2"}`}
    >
      {/* Animated gradient border on right edge */}
      <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent animate-[sidebar-glow_3s_ease-in-out_infinite]" />

      {/* Identity — only when expanded */}
      <div className={`pt-10 mb-8 transition-all duration-200 ${expanded ? "opacity-100 px-3" : "opacity-0 px-0 h-0 mb-0 overflow-hidden"}`}>
        <p className="text-[9px] font-mono tracking-[0.2em] text-gray-400 uppercase mb-1">Portfolio</p>
        <p className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">Omotosho David</p>
      </div>

      {/* Icon-only top padding when collapsed */}
      {!expanded && <div className="pt-10" />}

      <div className={`h-px bg-gray-100/50 dark:bg-[#1a1a1a]/50 mb-6 transition-all duration-200 ${expanded ? "mx-3" : "mx-1"}`} />

      {/* Nav Links */}
      <nav className="space-y-1 flex-1">
        {sections.map((section, i) => {
          const Icon = section.icon;
          const isActive = pathname === section.href;
          const num = String(i + 1).padStart(2, "0");

          return (
            <Link key={section.id} href={section.href}>
              <div className={`relative flex items-center gap-3 py-2.5 rounded-lg transition-all duration-200 ${expanded ? "px-3" : "px-2 justify-center"} ${isActive ? "text-gray-900 dark:text-white font-semibold" : "text-gray-400 hover:text-gray-700 dark:hover:text-[#ccc]"}`}>
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
                )}

                {/* Number prefix — only when expanded */}
                {expanded && (
                  <span className={`text-[9px] font-mono tabular-nums ${isActive ? "text-emerald-400" : "text-gray-300 dark:text-[#444]"}`}>
                    {num}
                  </span>
                )}

                <Icon size={15} />

                {expanded && <ScrambleLabel label={section.label} />}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className={`pb-8 transition-all duration-200 ${expanded ? "px-3" : "px-1"}`}>
        <div className={`h-px bg-gray-100/50 dark:bg-[#1a1a1a]/50 mb-6`} />

        {/* Live clock — only when expanded */}
        {expanded && <LiveClock />}

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`flex items-center gap-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group ${!expanded && "justify-center w-full"}`}
          >
            {theme === "dark"
              ? <Sun size={14} className="group-hover:rotate-12 transition-transform duration-200 shrink-0" />
              : <Moon size={14} className="group-hover:-rotate-12 transition-transform duration-200 shrink-0" />
            }
            {expanded && (
              <span className="text-[10px] font-mono tracking-widest uppercase">
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
