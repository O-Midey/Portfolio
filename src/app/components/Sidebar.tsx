"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import sections from "../data/sections";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-shrink-0 sticky top-8 h-screen w-52 px-4 pt-10 flex-col">
      {/* Identity */}
      <div className="mb-8 px-3">
        <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase mb-1">
          Portfolio
        </p>
        <p className="text-sm font-bold text-gray-900 tracking-tight">
          Omotosho David
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mx-3 mb-6" />

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
                    ? "text-gray-900 font-semibold bg-gray-50"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                {/* Left accent bar */}
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full transition-all duration-200 ${
                    isActive ? "bg-gray-900" : "bg-transparent"
                  }`}
                />
                <Icon size={15} />
                <span className="text-sm">{section.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom subtle branding */}
      <div className="mt-auto pb-8 px-3">
        <div className="h-px bg-gray-100 mb-6" />
        <p className="text-[10px] font-mono text-gray-300 tracking-widest uppercase">
          Built with Next.js
        </p>
      </div>
    </div>
  );
}
