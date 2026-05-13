"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import sections from "../data/sections";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="hidden md:flex fixed top-0 left-0 h-screen w-52 px-4 pt-10 flex-col bg-white dark:bg-[#111] border-r border-gray-100 dark:border-[#1a1a1a] z-40">
      {/* Identity */}
      <div className="mb-8 px-3">
        <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase mb-1">
          Portfolio
        </p>
        <p className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">
          Omotosho David
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 dark:bg-[#1a1a1a] mx-3 mb-6" />

      {/* Nav Links */}
      <nav className="space-y-1">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = pathname === section.href;
          return (
            <Link key={section.id} href={section.href}>
              <div
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-gray-900 dark:text-white font-semibold bg-gray-50 dark:bg-[#1a1a1a]"
                    : "text-gray-400 hover:text-gray-700 dark:hover:text-[#ccc] hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full transition-all duration-200 ${
                    isActive ? "bg-gray-900 dark:bg-white" : "bg-transparent"
                  }`}
                />
                <Icon size={15} />
                <span className="text-sm">{section.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="mt-auto pb-8 px-3">
        <div className="h-px bg-gray-100 dark:bg-[#1a1a1a] mb-6" />

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
          >
            {theme === "dark" ? (
              <Sun size={14} className="group-hover:rotate-12 transition-transform duration-200" />
            ) : (
              <Moon size={14} className="group-hover:-rotate-12 transition-transform duration-200" />
            )}
            <span className="text-[10px] font-mono tracking-widest uppercase">
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
