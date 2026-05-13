import { skillGroups } from "../data/skills";
import { MailOpen, ExternalLink, ArrowRight } from "lucide-react";
import AnimatedDiv from "../components/AnimatedDiv";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-white dark:bg-[#111]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <AnimatedDiv>
          {/* Header */}
          <div className="mb-14">
            <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase mb-3">
              about me ✦
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-4">
              Full-Stack &
              <br />
              <span className="text-gray-400 dark:text-[#999]">
                Blockchain Dev. ⛓️
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-400 dark:text-[#999] font-light max-w-sm leading-relaxed">
              Building end-to-end products — from databases to smart contracts.
            </p>
          </div>

          {/* Stats row */}
          {/* <div className="grid grid-cols-3 gap-4 mb-14 border-y border-gray-100 dark:border-[#2a2a2a] py-8">
            {[
              { value: "10+", label: "Projects shipped" },
              { value: "5+", label: "Web3 apps" },
              { value: "3+", label: "Years building" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 dark:text-[#999] font-light mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div> */}

          {/* Story */}
          <div className="mb-14 space-y-5">
            <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase mb-6">
              background 📍
            </p>
            <p className="text-gray-600 dark:text-[#bbb] text-sm sm:text-base leading-relaxed font-light">
              I&apos;m a full-stack developer who builds end-to-end solutions
              using the{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                MERN stack
              </span>{" "}
              and creates decentralized applications with{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Solidity
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Hardhat
              </span>
              , and{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Ethers.js
              </span>
              .
            </p>
            <p className="text-gray-600 dark:text-[#bbb] text-sm sm:text-base leading-relaxed font-light">
              From database design to smart contracts, I deliver complete
              solutions that bridge traditional web development with blockchain
              technology — approaching every project with precision and
              creativity.
            </p>
            <p className="text-gray-600 dark:text-[#bbb] text-sm sm:text-base leading-relaxed font-light">
              When I&apos;m not coding, I&apos;m usually vibing to some good
              Afrobeats 🎶✨ — check out my playlist{" "}
              <a
                className="text-gray-900 dark:text-white font-medium underline underline-offset-4 decoration-gray-300 dark:decoration-[#444] hover:decoration-gray-900 dark:hover:decoration-white transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://open.spotify.com/user/31jibew2j4bcfy3edf6ezxorcbxu/playlists"
              >
                here
              </a>
              .
            </p>
          </div>

          {/* Skills */}
          <div className="mb-14">
            <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase mb-6">
              tech stack 🛠️
            </p>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label} className="flex gap-4 items-start">
                  <p className="text-xs text-gray-400 dark:text-[#999] font-mono w-20 shrink-0 pt-1.5">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-[#aaa] text-xs font-mono rounded-full hover:bg-gray-100 dark:hover:bg-[#222] transition-colors duration-200 cursor-default"
                      >
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
              <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase mb-2">
                what&apos;s next
              </p>
              <p className="text-gray-900 dark:text-white font-semibold text-lg">
                Let&apos;s build something. 👏
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:talk2adeoluwa2310@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-105"
              >
                <MailOpen className="w-3.5 h-3.5" />
                Get in touch
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-[#333] text-gray-700 dark:text-[#ccc] text-sm font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-all duration-200"
              >
                My work
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
