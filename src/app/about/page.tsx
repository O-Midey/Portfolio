import Link from "next/link";
import { ArrowUpRight, MailOpen } from "lucide-react";
import AboutStory from "../components/AboutStory";
import FlexedArmsDoodle from "../components/FlexedArmsDoodle";
import TechBubbleStack from "../components/TechBubbleStack";
import ToolboxDoodle from "../components/ToolboxDoodle";
import { ScribbledText } from "../components/Scribble";
import MobileAbout from "../components/mobile/MobileAbout";
import { skills } from "../data/skills";

export default function AboutPage() {
  return (
    <>
      <div className="md:hidden">
        <MobileAbout />
      </div>

      <main className="relative hidden min-h-screen overflow-x-clip bg-[#fafafa] px-6 py-16 text-[#171717] motion-safe:animate-fade-up dark:bg-[#111] dark:text-white md:block lg:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <header className="relative mb-16 max-w-3xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              Useful products, carefully built
            </p>
            <h1 className="text-6xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
              Full-stack, AI &
              <br />
              <ScribbledText color="emerald" variant="loop">Blockchain Dev.</ScribbledText>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300 lg:text-xl lg:leading-9">
              I’m Omotosho David Ayomide, a full-stack, AI, and Web3 engineer based in Lagos. I build production-ready products across the entire stack—from interfaces and infrastructure to AI agents and smart contracts. I care about how they feel to use, how their parts fit together, and what happens when things go wrong.
            </p>
          </header>

          <AboutStory />

          <section className="grid gap-8 border-t border-neutral-200 py-10 dark:border-white/15 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <h2 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Tools I reach for
                <ToolboxDoodle />
              </h2>
              <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                Tools across product engineering, AI, and blockchain.
              </p>
            </div>
            <TechBubbleStack skills={skills} compact />
          </section>

          <footer className="flex flex-col items-center gap-6 border-t border-neutral-200 pt-9 dark:border-white/15">
            <div className="relative isolate flex flex-col items-center">
              <FlexedArmsDoodle className="relative z-0 h-auto w-20 max-w-full" />
              <h2 className="relative z-10 -mt-2 text-center text-2xl font-semibold leading-none tracking-tight [paint-order:stroke_fill] [-webkit-text-stroke:4px_#fafafa] dark:[-webkit-text-stroke:4px_#111]">
                Let&apos;s build something useful.
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              <a
                href="mailto:talk2adeoluwa2310@gmail.com"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#171717] px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-500 dark:bg-white dark:text-[#111] dark:hover:bg-neutral-200"
              >
                <MailOpen size={15} aria-hidden="true" /> Get in touch
              </a>
              <Link
                href="/projects"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-300 px-5 text-sm font-medium transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-500 dark:border-white/25 dark:hover:bg-white/10"
              >
                See my work <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
