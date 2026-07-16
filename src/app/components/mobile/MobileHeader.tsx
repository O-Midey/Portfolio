"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import sections from "../../data/sections";
import { useThemeWipe } from "../ThemeWipeProvider";
import SocialShortLinks from "./SocialShortLinks";

const BACK_TOP_ROUTES = ["/", "/projects"];
const BACK_TOP_THRESHOLD = 480;

export default function MobileHeader() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const { triggerWipe } = useThemeWipe();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  const pathLabel =
    sections.find((s) => s.href === pathname)?.id ?? pathname.slice(1);

  // Close the menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock background scroll while the menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > BACK_TOP_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showBackTop =
    scrolled && !menuOpen && BACK_TOP_ROUTES.includes(pathname);

  return (
    <div className="md:hidden">
      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-term-fg/10 bg-term-bg/92 px-5 text-term-fg backdrop-blur-[8px]">
        <Link
          href="/"
          className="flex flex-col gap-px transition-opacity active:opacity-70"
        >
          <span className="font-jet text-[9px] tracking-[0.22em] text-term-fg">
            PORTFOLIO
          </span>
          <span className="text-[15px] font-bold">Omotosho David</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-jet text-[10.5px] text-term-fg">
            ~/{pathLabel}
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative h-11 w-11 rounded-full border border-term-fg transition-opacity active:opacity-60"
          >
            {menuOpen ? (
              <>
                <span className="absolute left-[12px] top-[21px] h-[1.5px] w-[18px] rotate-45 bg-term-fg" />
                <span className="absolute left-[12px] top-[21px] h-[1.5px] w-[18px] -rotate-45 bg-term-fg" />
              </>
            ) : (
              <>
                <span className="absolute left-[13px] top-[17px] h-[1.5px] w-[17px] bg-term-fg" />
                <span className="absolute left-[13px] top-[24px] h-[1.5px] w-[17px] bg-term-fg" />
              </>
            )}
          </button>
        </div>
      </header>

      {/* ── Fullscreen menu overlay ── */}
      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-30 animate-overlay-in overflow-y-auto overscroll-contain bg-term-overlay text-term-fg">
          <div className="flex min-h-full flex-col">
            {mounted && (
              <div className="px-5 pt-6">
                <div
                  role="group"
                  aria-label="Color theme"
                  className="relative flex rounded-full border border-term-fg bg-term-panel p-1"
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-term-fg transition-transform duration-300 ease-out"
                    style={{
                      transform:
                        resolvedTheme === "dark"
                          ? "translateX(100%)"
                          : "translateX(0)",
                    }}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      if (resolvedTheme === "dark")
                        triggerWipe(e.clientX, e.clientY);
                    }}
                    aria-pressed={resolvedTheme !== "dark"}
                    className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 font-jet text-[11.5px] transition-colors ${
                      resolvedTheme !== "dark" ? "text-term-bg" : "text-term-fg"
                    }`}
                  >
                    <Sun size={14} strokeWidth={2} />
                    Light
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      if (resolvedTheme !== "dark")
                        triggerWipe(e.clientX, e.clientY);
                    }}
                    aria-pressed={resolvedTheme === "dark"}
                    className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 font-jet text-[11.5px] transition-colors ${
                      resolvedTheme === "dark" ? "text-term-bg" : "text-term-fg"
                    }`}
                  >
                    <Moon size={14} strokeWidth={2} />
                    Dark
                  </button>
                </div>
              </div>
            )}
            <nav className="flex flex-1 flex-col justify-center px-5 py-8">
              {sections.map((section, i) => {
                const isActive = pathname === section.href;
                return (
                  <Link
                    key={section.id}
                    href={section.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex animate-fade-up items-center gap-4 border-term-fg/10 py-5 transition-opacity active:opacity-60 ${
                      i < sections.length - 1 ? "border-b" : ""
                    }`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <span
                      className={`font-jet text-[11px] ${isActive ? "text-term-accent" : "text-term-fg"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-jet text-[40px] font-extrabold tracking-[-0.02em] ${isActive ? "text-term-accent" : ""}`}
                    >
                      {section.label}
                    </span>
                    {isActive && (
                      <span className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-term-fg text-base text-term-bg">
                        →
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center justify-between px-5 pb-[calc(1.75rem+env(safe-area-inset-bottom))]">
              <SocialShortLinks className="text-term-fg" />
              <span className="font-jet text-[10.5px] text-term-fg">
                © {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Back to top ── */}
      {showBackTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-40 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-term-fg text-lg text-term-bg shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-opacity active:opacity-75"
        >
          ↑
        </button>
      )}
    </div>
  );
}
