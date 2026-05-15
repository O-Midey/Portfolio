"use client";
import { useEffect, useState } from "react";
import { skillGroups } from "../data/skills";
import { MailOpen, ArrowRight } from "lucide-react";

const SECTIONS = [
  {
    heading: "Who I am",
    body: "I'm Omotosho David — a Full-Stack & Blockchain Developer based in Nigeria. I build complete products from the ground up, handling everything from the database to the user interface.",
  },
  {
    heading: "What I do",
    body: "I specialise in building web apps and Web3 tools. Think marketplaces, dashboards, Ethereum wallets, and smart contracts — shipped end-to-end with React, Node.js, Postgres, Solidity, and Golang.",
  },
  {
    heading: "Why Web3",
    body: "Web3 is one of the few spaces where software can genuinely shift how people own and exchange value. That's the kind of work I want to be part of.",
  },
  {
    heading: "Outside of code",
    body: "I'm vibing to Afrobeats 🎶✨ — check out my playlist on Spotify.",
    link: { label: "Open playlist →", href: "https://open.spotify.com/user/31jibew2j4bcfy3edf6ezxorcbxu/playlists" },
  },
];

export default function AboutPage() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= SECTIONS.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), visible === 0 ? 300 : 600);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section className="relative min-h-screen bg-[#fafafa] dark:bg-[#111] px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase mb-3">about me</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-4">
            Full-Stack &<br />
            <span className="text-gray-400 dark:text-[#999]">Blockchain Dev.</span>
          </h1>
        </div>

        {/* Terminal card */}
        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-[#2a2a2a] shadow-2xl mb-12">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-[#2a2a2a]">
            <span className="w-3 h-3 rounded-full bg-rose-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs font-mono text-gray-400 dark:text-[#555]">omotosho@portfolio ~ about.txt</span>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-[#0d0d0d] p-6 space-y-6 min-h-[320px]">
            {SECTIONS.map((s, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${i < visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              >
                <p className="text-xs font-mono text-emerald-500 mb-1">{`// ${s.heading}`}</p>
                <p className="text-sm text-gray-700 dark:text-[#bbb] leading-relaxed">{s.body}</p>
                {s.link && (
                  <a href={s.link.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-mono text-gray-400 dark:text-[#666] hover:text-gray-900 dark:hover:text-white underline underline-offset-4 transition-colors mt-1 inline-block">
                    {s.link.label}
                  </a>
                )}
              </div>
            ))}
            {visible < SECTIONS.length && (
              <span className="inline-block animate-pulse text-emerald-500 font-mono">▋</span>
            )}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase mb-6">tech stack 🛠️</p>
          <div className="space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex gap-4 items-start">
                <p className="text-xs text-gray-400 dark:text-[#999] font-mono w-20 shrink-0 pt-1.5">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill}
                      className="px-3 py-1 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-[#aaa] text-xs font-mono rounded-full hover:bg-gray-100 dark:hover:bg-[#222] transition-colors duration-200 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-gray-100 dark:border-[#2a2a2a] pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase mb-2">what&apos;s next</p>
            <p className="text-gray-900 dark:text-white font-semibold text-lg">Let&apos;s build something. 👏</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:talk2adeoluwa2310@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] dark:bg-white dark:text-black text-white text-sm font-medium rounded-full hover:bg-[#333] dark:hover:bg-gray-200 transition-all duration-200 hover:scale-105">
              <MailOpen className="w-3.5 h-3.5" /> Get in touch
            </a>
            <a href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-[#333] text-gray-700 dark:text-[#ccc] text-sm font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all duration-200">
              My work <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
