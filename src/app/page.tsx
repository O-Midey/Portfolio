"use client";

import AnimatedDiv from "./components/AnimatedDiv";
import MagneticButton from "./components/MagneticButton";
import MobileHome from "./components/mobile/MobileHome";
import HeroPortrait from "./components/HeroPortrait";
import { heroTitles } from "./data/hero";
import { useTypewriter } from "./hooks/useTypewriter";
import { useScramble } from "./hooks/useScramble";
import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [scrambled, setScrambled] = useState(false);
  const displayed = useTypewriter(heroTitles);

  const line1 = useScramble("Omotosho", scrambled);
  const line2 = useScramble("David A.", scrambled);

  // The desktop hero is a fixed, non-scrolling viewport; the mobile terminal
  // view is a long scrolling page — only lock body scroll on md and up.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      document.body.style.overflow = mq.matches ? "hidden" : "";
    };
    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setScrambled(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="md:hidden">
        <MobileHome />
      </div>
      <AnimatedDiv className="hidden h-dvh overflow-hidden md:flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#111] relative">
        {/* Animated dot grid */}
        <div className="dot-grid absolute inset-0 opacity-60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10 justify-center items-center">
          {/* Left: text */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6 max-w-lg">
            <p className="text-xs font-mono tracking-[0.25em] text-gray-900 dark:text-white uppercase">
              Hey, I&apos;m 👋
            </p>

            {/* Name with scramble + hover glitch */}
            <div className="space-y-1">
              <div className="group relative">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-none select-none font-mono">
                  {line1}
                </h1>
                <h1
                  aria-hidden
                  className="name-glitch-layer text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-emerald-400 tracking-tighter leading-none font-mono"
                >
                  {line1}
                </h1>
              </div>
              <div className="group relative">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-500 dark:text-[#999] tracking-tighter leading-none select-none font-mono">
                  {line2}
                </h1>
                <h1
                  aria-hidden
                  className="name-glitch-layer text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-rose-400 tracking-tighter leading-none font-mono"
                >
                  {line2}
                </h1>
              </div>
            </div>

            {/* Typing animation */}
            <div className="flex items-center gap-3 w-full">
              <span className="flex-1 h-px bg-gray-500 dark:bg-[#333]" />
              <span className="text-sm font-mono tracking-widest text-gray-900 dark:text-white uppercase typing-cursor whitespace-nowrap">
                {displayed}
              </span>
              <span className="flex-1 h-px bg-gray-500 dark:bg-[#333]" />
            </div>

            <p className="text-sm sm:text-base text-gray-900 dark:text-white font-light leading-relaxed">
              <span className="text-gray-900 dark:text-white font-medium">
                I build products end-to-end — shipping real apps across the full
                stack, on-chain, and with AI in the loop.
              </span>
            </p>

            <div className="w-full max-w-xs h-px bg-gray-100 dark:bg-[#222]" />

            {/* Magnetic social buttons */}
            <div className="flex items-center gap-3">
              <MagneticButton>
                <a
                  href="https://github.com/o-midey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:bg-[#111] dark:hover:bg-white transition-all duration-300 hover:scale-110 group"
                >
                  <Github
                    size={18}
                    className="text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors"
                  />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://linkedin.com/in/omotosho-david"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:bg-[#0077B5] transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin
                    size={18}
                    className="text-[#0077B5] group-hover:text-white transition-colors"
                  />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://twitter.com/meeedzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:bg-[#111] dark:hover:bg-white transition-all duration-300 hover:scale-110 group"
                >
                  <Twitter
                    size={18}
                    className="text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors"
                  />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://instagram.com/thismidey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:bg-pink-500 transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram
                    size={18}
                    className="text-pink-500 group-hover:text-white transition-colors"
                  />
                </a>
              </MagneticButton>
            </div>

            <a
              href="/projects"
              className="group inline-flex items-center gap-2 w-fit px-6 py-3 bg-[#111] dark:bg-white dark:text-black text-white rounded-full hover:bg-[#333] dark:hover:bg-gray-200 transition-all duration-300 font-mono text-xs tracking-widest uppercase"
            >
              View My Work
              <ArrowRight
                className="transform transition-transform duration-300 group-hover:translate-x-1"
                size={14}
              />
            </a>
          </div>

          {/* Right: photo with shapes — desktop only */}
          <HeroPortrait
            parallax
            className="hidden lg:block relative flex-shrink-0 w-80 h-[480px]"
          />
        </div>
      </AnimatedDiv>
    </>
  );
}
