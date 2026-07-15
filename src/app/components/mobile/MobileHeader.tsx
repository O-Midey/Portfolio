"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import sections from "../../data/sections";
import { socialLinks } from "../../data/socials";
import { useThemeWipe } from "../ThemeWipeProvider";

const BACK_TOP_ROUTES = ["/", "/projects"];
const BACK_TOP_THRESHOLD = 480;

function SocialShortLinks({ className }: { className?: string }) {
  return (
    <div className={`flex gap-4 font-jet text-[11.5px] ${className ?? ""}`}>
      {socialLinks.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="transition-opacity active:opacity-60"
        >
          {s.short}
        </a>
      ))}
    </div>
  );
}

export default function MobileHeader() {
  const pathname = usePathname();
  const { theme } = useTheme();
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
          <span className="font-jet text-[9px] tracking-[0.22em] text-term-fg/45">
            PORTFOLIO
          </span>
          <span className="text-[15px] font-bold">Omotosho David</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-jet text-[10.5px] text-term-fg/45">
            ~/{pathLabel}
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative h-11 w-11 rounded-full border border-term-fg/20 transition-opacity active:opacity-60"
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
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-30 flex animate-overlay-in flex-col bg-term-overlay text-term-fg">
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
                    className={`font-jet text-[11px] ${isActive ? "text-term-accent" : "text-term-fg/40"}`}
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
          <div className="flex flex-col gap-3.5 px-5 pb-7">
            {mounted && (
              <button
                type="button"
                onClick={(e) => triggerWipe(e.clientX, e.clientY)}
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                className="flex items-center justify-between rounded-lg border border-term-fg/12 bg-term-panel px-3.5 py-3 font-jet text-[11.5px] transition-opacity active:opacity-70"
              >
                <span className="text-term-fg/70">
                  <span className="text-term-accent">$</span> theme --
                  {theme === "dark" ? "light" : "dark"}
                </span>
                {theme === "dark" ? (
                  <Sun size={15} strokeWidth={2} className="text-term-fg/70" />
                ) : (
                  <Moon size={15} strokeWidth={2} className="text-term-fg/70" />
                )}
              </button>
            )}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg border border-term-fg/12 bg-term-panel px-3.5 py-3 font-jet text-[11.5px] transition-opacity active:opacity-70"
            >
              <span className="text-term-accent">$</span>
              <span className="text-term-fg/70">open contact.sh</span>
              <span className="animate-[blink_1.1s_steps(1)_infinite] text-term-accent">
                _
              </span>
            </Link>
            <div className="flex items-center justify-between">
              <SocialShortLinks className="text-term-fg/60" />
              <span className="font-jet text-[10.5px] text-term-fg/40">
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
