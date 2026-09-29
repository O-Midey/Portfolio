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
          <span className="font-mono text-[9px] tracking-[0.22em] text-term-fg">
            PORTFOLIO
          </span>
          <span className="text-[15px] font-bold">Omotosho David</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] text-term-fg">
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
                      className={`font-mono text-[11px] ${isActive ? "text-term-accent" : "text-term-fg"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-sans text-[40px] font-extrabold tracking-[-0.02em] ${isActive ? "text-term-accent" : ""}`}
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
              {mounted && (
                <button
                  type="button"
                  onClick={(event) => triggerWipe(event.clientX, event.clientY)}
                  aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
                  className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 text-left font-mono text-xs text-term-muted transition-colors hover:text-term-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-term-fg"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun size={15} strokeWidth={1.8} aria-hidden="true" />
                  ) : (
                    <Moon size={15} strokeWidth={1.8} aria-hidden="true" />
                  )}
                  {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
                </button>
              )}
            </nav>
            <div className="flex items-center justify-between px-5 pb-[calc(1.75rem+env(safe-area-inset-bottom))]">
              <SocialShortLinks className="text-term-fg" />
              <span className="font-mono text-[10.5px] text-term-fg">
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
