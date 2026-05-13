"use client";
import { Home, User, Code, Mail, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Code, label: "Projects", href: "/projects" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[88%] max-w-sm z-50">
      <nav className="relative" aria-label="Mobile navigation">
        <div className="bg-white/90 dark:bg-[#111]/90 border border-gray-200/50 dark:border-[#2a2a2a]/50 shadow-xl backdrop-blur-md overflow-hidden rounded-[30px]">
          <div className="w-full px-2 py-1.5 flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl transition-all duration-300 active:scale-95 ${
                    isActive
                      ? "bg-gray-900 dark:bg-white"
                      : "hover:bg-gray-100/80 dark:hover:bg-gray-800/80"
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon
                    className={`w-4 h-4 transition-all duration-300 ${
                      isActive
                        ? "text-white dark:text-gray-900"
                        : "text-gray-500 dark:text-[#888] group-hover:text-gray-900 dark:group-hover:text-white"
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span
                    className={`text-[9px] font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white dark:text-gray-900"
                        : "text-gray-500 dark:text-[#888] group-hover:text-gray-900 dark:group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="group flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-300 active:scale-95"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-gray-500 dark:text-[#888] group-hover:text-gray-900 dark:group-hover:text-white transition-colors" strokeWidth={2} />
                ) : (
                  <Moon className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" strokeWidth={2} />
                )}
                <span className="text-[9px] font-medium text-gray-500 dark:text-[#888] group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {theme === "dark" ? "Light" : "Dark"}
                </span>
              </button>
            )}
          </div>
        </div>
        <div className="absolute inset-0 -z-10 blur-xl bg-gradient-to-t from-gray-300/20 dark:from-gray-700/20 to-transparent rounded-[30px]" />
      </nav>
    </div>
  );
}
