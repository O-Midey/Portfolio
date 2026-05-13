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
      <div className="text-center flex flex-col items-center justify-center gap-4 sm:gap-8 max-w-5xl w-full">
        {/* Greeting */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-gray-400 uppercase">
          Hey, I&apos;m 👋
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
          Omotosho
          <br />
          <span className="text-gray-500 dark:text-[#bbb]">David A.</span>
        </h1>
        <div className="flex items-center gap-3 h-8 sm:h-10">
          <span className="w-6 h-px bg-gray-300" />
          <span
            className={`text-base sm:text-lg md:text-xl font-medium tracking-wide text-gray-500 dark:text-[#bbb] transition-all duration-500 ${
              isAnimating
                ? "opacity-0 -translate-y-3 blur-sm"
                : "opacity-100 translate-y-0 blur-0"
            }`}
          >
            {TITLES[currentTitle]}
          </span>
          <span className="w-6 h-px bg-gray-300" />
        </div>
        <p className="text-sm sm:text-base text-gray-400 dark:text-[#999] font-light max-w-lg leading-relaxed tracking-wide">
          I design and build full-stack web applications and Web3 tools —{" "}
          <span className="text-gray-600 dark:text-[#aaa] font-medium">
            handling everything from the database layer to on-chain logic.
          </span>
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://github.com/o-midey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:bg-[#111] dark:hover:bg-white transition-all duration-300 hover:scale-110 group"
          >
            <Github
              size={20}
              className="text-gray-700 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black sm:w-6 sm:h-6 transition-colors"
            />
          </a>
          <a
            href="https://linkedin.com/in/omotosho-david"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:bg-[#0077B5] transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin
              size={20}
              className="text-[#0077B5] group-hover:text-white sm:w-6 sm:h-6 transition-colors"
            />
          </a>
          <a
            href="https://twitter.com/meeedzy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:bg-[#111] dark:hover:bg-white transition-all duration-300 hover:scale-110 group"
          >
            <Twitter
              size={20}
              className="text-gray-700 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black sm:w-6 sm:h-6 transition-colors"
            />
          </a>
          <a
            href="https://instagram.com/thismidey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full hover:bg-pink-500 transition-all duration-300 hover:scale-110 group"
          >
            <Instagram
              size={20}
              className="text-pink-500 group-hover:text-white sm:w-6 sm:h-6 transition-colors"
            />
          </a>
        </div>
        <a
          href="/projects"
          className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#111] dark:bg-white dark:text-black text-white rounded-xl hover:bg-[#333] dark:hover:bg-gray-200 transition-all duration-300 font-mono text-sm sm:text-base shadow-lg hover:shadow-xl uppercase"
        >
          View My Work 🚀
          <ArrowRight
            className="transform transition-transform duration-300 group-hover:translate-x-1"
            size={18}
          />
        </a>
      </div>
    </AnimatedDiv>
  );
}
