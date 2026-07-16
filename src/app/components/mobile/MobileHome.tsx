"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import { heroTitles } from "../../data/hero";
import { marqueeSkills } from "../../data/skills";
import { SITE_HANDLE } from "../../data/socials";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useScramble } from "../../hooks/useScramble";
import HeroPortrait from "../HeroPortrait";
import MobileProjectCard from "./MobileProjectCard";
import MobileProjectSheet from "./MobileProjectSheet";
import SocialShortLinks from "./SocialShortLinks";

const SELECTED_COUNT = 2;

export default function MobileHome() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [marqueePaused, setMarqueePaused] = useState(false);
  const [scrambled, setScrambled] = useState(false);
  const title = useTypewriter(heroTitles);
  const line1 = useScramble("Omotosho", scrambled);
  const line2 = useScramble("David A.", scrambled);

  useEffect(() => {
    const t = setTimeout(() => setScrambled(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="term-dot-grid flex min-h-dvh animate-fade-up flex-col overflow-x-clip bg-term-bg text-term-fg">
      {/* ── Hero ── */}
      <section className="flex flex-col gap-5 px-5 pt-12">
        <p className="font-jet text-xs tracking-[0.3em]">HEY, I&apos;M 👋</p>
        <h1 className="font-jet text-[clamp(44px,13vw,57px)] font-extrabold leading-[1.02] tracking-[-0.04em] select-none">
          {line1}
          <span className="block text-term-muted">{line2}</span>
        </h1>
        <div className="flex items-center gap-3 my-6">
          <span className="h-px flex-1 bg-term-fg/20" />
          <span className="whitespace-nowrap font-jet text-[11.5px] tracking-[0.22em]">
            {title.toUpperCase()}
            <span className="animate-[blink_1.1s_steps(1)_infinite] text-term-accent">
              |
            </span>
          </span>
          <span className="h-px flex-1 bg-term-fg/20" />
        </div>
        <div className="pt-16">
          <HeroPortrait showBadges className="relative aspect-[4/5] w-full" />
        </div>
        <p className="text-[17px] leading-[1.68] text-center italic">
          <strong className="font-semibold text-term-fg">
            I build products end-to-end — shipping real apps across the full
            stack, on-chain, and with AI in the loop.
          </strong>
        </p>
        <div className="flex gap-2.5">
          <Link
            href="/projects"
            className="flex flex-1 items-center justify-center rounded-full bg-term-fg py-[18px] font-jet text-[13px] font-semibold tracking-[0.14em] text-term-bg transition-opacity active:opacity-75"
          >
            VIEW MY WORK →
          </Link>
          <Link
            href="/contact"
            aria-label="Contact me"
            className="flex w-[54px] items-center justify-center rounded-full border border-term-fg transition-opacity active:opacity-60"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-term-fg"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 6l10 7 10-7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Skills marquee (tap to pause) ── */}
      <button
        type="button"
        onClick={() => setMarqueePaused((paused) => !paused)}
        aria-label={
          marqueePaused ? "Resume skills ticker" : "Pause skills ticker"
        }
        className="mt-8 overflow-hidden whitespace-nowrap border-y border-term-fg py-4"
      >
        <div
          className="inline-flex animate-marquee gap-[26px] pr-[26px] font-jet text-[12.5px] text-term-accent"
          style={{ animationPlayState: marqueePaused ? "paused" : "running" }}
        >
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span key={`${skill}-${i}`}>{skill.toUpperCase()}</span>
          ))}
        </div>
      </button>

      {/* ── whoami strip ── */}
      {/* <section className="px-5 pt-11">
        <Link
          href="/about"
          className="flex items-center justify-between gap-3 rounded-[10px] border border-term-fg/12 bg-term-panel px-4.5 py-4 font-jet text-[12.5px] transition-opacity active:opacity-70"
        >
          <span className="text-term-fg">
            <span className="text-term-accent">$</span> whoami → full-stack, AI
            &amp; blockchain dev
          </span>
          <span className="text-term-accent">/about</span>
        </Link>
      </section> */}

      {/* ── Selected projects ── */}
      <section className="flex flex-col gap-8 px-5 pb-2 pt-13">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-jet text-[11px] tracking-[0.3em] ">MY WORK 🛠️</p>
            <h2 className="text-[42px] font-bold leading-none tracking-[-0.02em]">
              Selected<span className="text-term-accent">.</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="pb-1 font-jet text-[11px] text-term-fg transition-opacity active:opacity-60"
          >
            ALL →
          </Link>
        </div>

        {projects.slice(0, SELECTED_COUNT).map((project, i) => (
          <MobileProjectCard
            key={project.title}
            project={project}
            onSelect={() => setSelectedIndex(i)}
          />
        ))}

        <Link
          href="/projects"
          className="flex items-center justify-center gap-2 rounded-full border border-term-fg py-[15px] font-jet text-xs tracking-[0.12em] text-term-fg transition-opacity active:opacity-60"
        >
          ALL PROJECTS →
        </Link>
      </section>

      {/* ── Contact CTA + footer ── */}
      <footer className="mt-13 flex flex-col gap-[18px] border-t border-term-fg/10 px-5 pb-8 pt-12">
        <p className="font-jet text-[11px] tracking-[0.3em] ">CONTACT 📬</p>
        <h2 className="text-[46px] font-bold leading-[1.02] tracking-[-0.03em]">
          Get in <span className="text-term-muted">Touch.</span>
        </h2>
        <p className="text-[15.5px] text-term-fg">
          Open to new opportunities and interesting projects ✨
        </p>
        <Link
          href="/contact"
          className="flex items-center justify-center rounded-full bg-term-fg py-[17px] font-jet text-[13px] font-semibold tracking-[0.12em] text-term-bg transition-opacity active:opacity-75"
        >
          SEND A MESSAGE ✍️
        </Link>
        <div className="flex flex-col gap-3 pt-2 font-jet text-[11px] text-term-fg">
          <span>
            © {new Date().getFullYear()} {SITE_HANDLE}
          </span>
          <SocialShortLinks className="text-term-fg" />
        </div>
      </footer>

      <AnimatePresence>
        {selectedIndex !== null && (
          <MobileProjectSheet
            project={projects[selectedIndex]}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
