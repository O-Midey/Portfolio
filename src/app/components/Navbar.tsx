"use client";
import { useState, useEffect } from "react";
import { Home, User, Code, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 300);
  const scale = Math.max(0.92, 1 - scrollY / 1500);
  const blur = Math.min(4, scrollY / 75);
  const pointerEvents = scrollY > 250 ? "none" : "auto";

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Code, label: "Projects", href: "/projects" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  return (
    <div
      className="md:hidden fixed bottom-6 left-1/2 w-[80%] max-w-sm z-50 transition-all duration-300"
      style={{
        opacity,
        transform: `translateX(-50%) scale(${scale})`,
        filter: `blur(${blur}px)`,
        pointerEvents,
      }}
    >
      <nav className="relative" aria-label="Mobile navigation">
        <div className="bg-white/90 border border-gray-200/50 shadow-xl backdrop-blur-md overflow-hidden rounded-[30px]">
          <div className="w-full p-2 flex items-center justify-center">
            <div className="flex items-center justify-around w-full">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group relative flex flex-col items-center gap-1.5 px-3 py-2 rounded-2xl transition-all duration-300 hover:bg-gray-100/80 active:scale-95"
                    aria-label={`Navigate to ${item.label}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full" />
                    )}

                    <Icon
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? "text-black scale-110"
                          : "text-gray-600 group-hover:text-black group-hover:scale-105"
                      }`}
                      aria-hidden="true"
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span
                      className={`text-[10px] font-medium transition-all duration-300 ${
                        isActive
                          ? "text-black"
                          : "text-gray-600 group-hover:text-black"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-100/0 to-gray-100/0 group-hover:from-gray-50/50 group-hover:to-transparent transition-all duration-300 -z-10" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subtle bottom glow effect */}
        <div className="absolute inset-0 -z-10 blur-xl bg-gradient-to-t from-gray-300/20 to-transparent rounded-[30px]" />
      </nav>
    </div>
  );
}
