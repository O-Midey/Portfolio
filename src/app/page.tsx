"use client";

import AnimatedDiv from "./components/AnimatedDiv";
import MagneticButton from "./components/MagneticButton";
import MobileHome from "./components/mobile/MobileHome";
import HeroPortrait from "./components/HeroPortrait";
import HeroIntroduction from "./components/HeroIntroduction";
import HeroName from "./components/HeroName";
import HeroTitle from "./components/HeroTitle";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useEffect } from "react";

export default function HomePage() {
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
            <HeroName variant="desktop" />

            {/* Typing animation */}
            <div className="flex items-center gap-3 w-full">
              <span className="flex-1 h-px bg-gray-500 dark:bg-[#333]" />
              <HeroTitle variant="desktop" />
              <span className="flex-1 h-px bg-gray-500 dark:bg-[#333]" />
            </div>

            <HeroIntroduction />

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
                    className="text-[#0077B5] dark:text-sky-400 group-hover:text-white dark:group-hover:text-white transition-colors"
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
