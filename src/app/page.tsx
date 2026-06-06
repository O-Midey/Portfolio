"use client";

import AnimatedDiv from "./components/AnimatedDiv";
import MagneticButton from "./components/MagneticButton";
import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const TITLES = [
  "Full Stack Developer",
  "AI Engineer",
  "Blockchain Engineer",
  "Web3 Builder",
];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function useScramble(target: string, trigger: boolean) {
  const [output, setOutput] = useState(target);
  const frame = useRef(0);

  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    clearInterval(frame.current);
    frame.current = window.setInterval(() => {
      setOutput(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return target[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );
      if (iteration >= target.length) clearInterval(frame.current);
      iteration += 0.4;
    }, 30);
    return () => clearInterval(frame.current);
  }, [trigger, target]);

  return output;
}

export default function HomePage() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [scrambled, setScrambled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const line1 = useScramble("Omotosho", scrambled);
  const line2 = useScramble("David A.", scrambled);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setScrambled(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Typing animation
  useEffect(() => {
    const full = TITLES[currentTitle];
    const i = displayed.length;

    if (typing) {
      if (i < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, i + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(full.slice(0, i - 1)), 35);
        return () => clearTimeout(t);
      } else {
        setCurrentTitle((prev) => (prev + 1) % TITLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, currentTitle]);

  return (
    <AnimatedDiv className="h-dvh overflow-hidden flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#111] relative">
      {/* Animated dot grid */}
      <div className="dot-grid absolute inset-0 opacity-60 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10 justify-center items-center">
        {/* Left: text */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6 max-w-lg">
          <p className="text-xs font-mono tracking-[0.25em] text-gray-500 dark:text-[#555] uppercase">
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
            <span className="text-sm font-mono tracking-widest text-gray-600 dark:text-[#919191] uppercase typing-cursor whitespace-nowrap">
              {displayed}
            </span>
            <span className="flex-1 h-px bg-gray-500 dark:bg-[#333]" />
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-[#888] font-light leading-relaxed">
            I build products end-to-end —{" "}
            <span className="text-gray-800 dark:text-[#ccc] font-medium">
              shipping real apps across the full stack, on-chain, and with AI in the loop.
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
                  className="text-gray-600 dark:text-[#888] group-hover:text-white dark:group-hover:text-black transition-colors"
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
                  className="text-gray-600 dark:text-[#888] group-hover:text-white dark:group-hover:text-black transition-colors"
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
        <div className="hidden lg:block relative flex-shrink-0 w-80 h-[480px]">
          {/* depth 0.03 — slowest, furthest back */}
          <div
            className="absolute -top-14 left-1/2 -translate-x-1/2 w-12 h-32 bg-emerald-400 dark:bg-emerald-500 z-0 transition-transform duration-200 ease-out"
            style={{
              transform: `translate(calc(-50% + ${mouse.x * 12}px), ${mouse.y * 12}px)`,
            }}
          />
          {/* depth 0.06 — mid */}
          <div
            className="absolute top-[38%] -right-6 w-36 h-11 bg-rose-400 dark:bg-rose-500 z-0 transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${mouse.x * 22}px, ${mouse.y * 22}px)`,
            }}
          />
          {/* depth 0.09 — closest, fastest */}
          <div
            className="absolute bottom-55 left-2 w-20 h-20 rounded-full bg-amber-400 dark:bg-amber-500 z-0 transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${mouse.x * 32}px, ${mouse.y * 32}px)`,
            }}
          />
          {/* Photo with scanlines */}
          <div className="scanlines absolute inset-0 z-10">
            <Image
              src="/profile.png"
              alt="Omotosho David"
              fill
              priority
              className="object-contain object-[center_18px] grayscale scale-110 contrast-125 brightness-110 drop-shadow-[0_20px_34px_rgba(0,0,0,0.22)]"
              style={{ clipPath: "inset(0 0 15% 0)" }}
            />
            <Image
              src="/profile.png"
              alt=""
              aria-hidden
              fill
              className="object-contain object-[center_18px] grayscale scale-110 contrast-125 brightness-110 glitch-layer-top pointer-events-none"
              style={{ clipPath: "inset(0 0 15% 0)" }}
            />
            <Image
              src="/profile.png"
              alt=""
              aria-hidden
              fill
              className="object-contain object-[center_18px] grayscale scale-110 contrast-125 brightness-110 glitch-layer-bottom pointer-events-none"
              style={{ clipPath: "inset(0 0 15% 0)" }}
            />
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}
