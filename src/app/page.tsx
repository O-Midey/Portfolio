"use client";

import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

type AnimatedDivProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedDiv = ({ children, className }: AnimatedDivProps) => {
  return <div className={className}>{children}</div>;
};

const TITLES = ["Full-Stack Developer", "Blockchain Engineer"];

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
    <AnimatedDiv className="h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col items-center justify-center gap-4 sm:gap-10 lg:gap-8 max-w-5xl w-full">
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

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 sm:my-6 lg:my-8">
          <a
            href="https://github.com/o-midey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
          >
            <Github size={20} className="text-gray-700 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://linkedin.com/in/omotosho-david"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} className="text-blue-600 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://twitter.com/meeedzy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-110"
          >
            <Twitter size={20} className="text-blue-400 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://instagram.com/thismidey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-gray-100 rounded-full hover:bg-pink-50 transition-all duration-300 hover:scale-110"
          >
            <Instagram size={20} className="text-pink-500 sm:w-6 sm:h-6" />
          </a>
        </div>

        <a
          href="/about"
          className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold text-base sm:text-lg tracking-wide shadow-lg hover:shadow-xl"
        >
          Learn More About Me
          <ArrowRight
            className="transform transition-transform duration-300 group-hover:translate-x-1"
            size={18}
          />
        </a>
      </div>
    </AnimatedDiv>
  );
}
