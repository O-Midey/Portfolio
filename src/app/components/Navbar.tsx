"use client";
import { Home, User, Code, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Code, label: "Projects", href: "/projects" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[80%] max-w-sm z-50">
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
                    className={`group relative flex flex-col items-center gap-1.5 px-3 py-2 rounded-2xl transition-all duration-300 active:scale-95 ${
                      isActive ? "bg-gray-900" : "hover:bg-gray-100/80"
                    }`}
                    aria-label={`Navigate to ${item.label}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? "text-white scale-110"
                          : "text-gray-600 group-hover:text-gray-900 group-hover:scale-105"
                      }`}
                      aria-hidden="true"
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span
                      className={`text-[10px] font-medium transition-all duration-300 ${
                        isActive ? "text-white" : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 blur-xl bg-gradient-to-t from-gray-300/20 to-transparent rounded-[30px]" />
      </nav>
    </div>
  );
}
