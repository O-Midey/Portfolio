"use client";

import AnimatedDiv from "./components/AnimatedDiv";
import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const TITLES = ["Full Stack Developer", "Blockchain Engineer", "Web3 Builder"];

export default function HomePage() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    <AnimatedDiv className="min-h-dvh flex items-center justify-center px-4 py-4 sm:py-8 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center flex flex-col items-center justify-center gap-4 sm:gap-8 max-w-5xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-none">
          Omotosho David A.
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl font-light tracking-wide h-10 sm:h-12 md:h-14 lg:h-16 flex items-center justify-center overflow-hidden">
          <span
            className={`transition-all duration-500 ${
              isAnimating
                ? "opacity-0 -translate-y-8 scale-95 blur-sm"
                : "opacity-100 translate-y-0 scale-100 blur-0"
            }`}
            style={{
              transform: isAnimating ? "rotateX(90deg)" : "rotateX(0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {TITLES[currentTitle]}
          </span>
        </div>

        <p className="text-base sm:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
          I build full-stack web apps and Web3 tools — from databases to smart contracts.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://github.com/o-midey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110 group"
          >
            <Github size={20} className="text-gray-700 group-hover:text-white sm:w-6 sm:h-6 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/omotosho-david"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin size={20} className="text-blue-600 group-hover:text-white sm:w-6 sm:h-6 transition-colors" />
          </a>
          <a
            href="https://twitter.com/meeedzy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 rounded-full hover:bg-sky-500 transition-all duration-300 hover:scale-110 group"
          >
            <Twitter size={20} className="text-sky-500 group-hover:text-white sm:w-6 sm:h-6 transition-colors" />
          </a>
          <a
            href="https://instagram.com/thismidey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 rounded-full hover:bg-pink-500 transition-all duration-300 hover:scale-110 group"
          >
            <Instagram size={20} className="text-pink-500 group-hover:text-white sm:w-6 sm:h-6 transition-colors" />
          </a>
        </div>

        <a
          href="/projects"
          className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold text-base sm:text-lg tracking-wide shadow-lg hover:shadow-xl"
        >
          View My Work
          <ArrowRight
            className="transform transition-transform duration-300 group-hover:translate-x-1"
            size={18}
          />
        </a>
      </div>
    </AnimatedDiv>
  );
}
