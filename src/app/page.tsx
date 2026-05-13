"use client";

import AnimatedDiv from "./components/AnimatedDiv";
import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const TITLES = ["Full Stack Developer", "Blockchain Engineer", "Web3 Builder"];

export default function HomePage() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % TITLES.length);
        setIsAnimating(false);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedDiv className="h-dvh overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#111]">
      <div className="text-center flex flex-col items-center justify-center gap-6 sm:gap-8 max-w-2xl w-full">
        {/* Greeting */}
        <p className="text-xs font-mono tracking-[0.25em] text-gray-400 dark:text-[#555] uppercase">
          Hey, I&apos;m 👋
        </p>

        {/* Name */}
        <div className="space-y-1">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
            Omotosho
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-300 dark:text-[#333] tracking-tighter leading-none">
            David A.
          </h1>
        </div>

        {/* Rotating title */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-gray-200 dark:bg-[#333]" />
          <span
            className={`text-sm font-mono tracking-widest text-gray-500 dark:text-[#666] uppercase transition-all duration-400 ${
              isAnimating
                ? "opacity-0 -translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            {TITLES[currentTitle]}
          </span>
          <span className="w-8 h-px bg-gray-200 dark:bg-[#333]" />
        </div>

        {/* Bio */}
        <p className="text-sm sm:text-base text-gray-500 dark:text-[#888] font-light leading-relaxed max-w-md">
          I build products end-to-end — shipping real apps across the full stack
          and on-chain.
        </p>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-gray-100 dark:bg-[#222]" />

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://github.com/o-midey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:bg-[#111] dark:hover:bg-white transition-all duration-300 hover:scale-110 group"
          >
            <Github
              size={18}
              className="text-gray-600 dark:text-[#888] group-hover:text-white dark:group-hover:text-black transition-colors"
            />
          </a>
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
          <a
            href="https://twitter.com/meeedzy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:bg-[#111] dark:hover:bg-white transition-all duration-300 hover:scale-110 group"
          >
            <Twitter
              size={18}
              className="text-gray-600 dark:text-[#888] group-hover:text-white dark:group-hover:text-black transition-colors"
            />
          </a>
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
        </div>

        {/* CTA */}
        <a
          href="/projects"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-[#111] dark:bg-white dark:text-black text-white rounded-full hover:bg-[#333] dark:hover:bg-gray-200 transition-all duration-300 font-mono text-xs tracking-widest uppercase"
        >
          View My Work
          <ArrowRight
            className="transform transition-transform duration-300 group-hover:translate-x-1"
            size={14}
          />
        </a>
      </div>
    </AnimatedDiv>
  );
}
