import Link from "next/link";
import { ArrowUpRight, MailOpen } from "lucide-react";
import AboutStory from "../AboutStory";
import FlexedArmsDoodle from "../FlexedArmsDoodle";
import TechBubbleStack from "../TechBubbleStack";
import ToolboxDoodle from "../ToolboxDoodle";
import { ScribbledText } from "../Scribble";
import { skills } from "../../data/skills";

export default function MobileAbout() {
  return (
    <main className="term-dot-grid min-h-dvh animate-fade-up overflow-x-clip bg-term-bg px-5 pb-10 pt-12 text-term-fg">
      <header className="relative">
        <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-term-muted">
          USEFUL PRODUCTS, CAREFULLY BUILT
        </p>
        <h1 className="max-w-[18ch] text-[clamp(2.45rem,10.2vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
          Full-stack, AI & <ScribbledText color="emerald" variant="loop">Blockchain Dev.</ScribbledText>
        </h1>
        <p className="mt-6 text-[15px] leading-[1.8] text-term-muted">
          I’m Omotosho David Ayomide, a full-stack, AI, and Web3 engineer based in Lagos. I build production-ready products across the entire stack—from interfaces and infrastructure to AI agents and smart contracts. I care about how they feel to use, how their parts fit together, and what happens when things go wrong.
        </p>
      </header>

      <div className="mt-9">
        <AboutStory />
      </div>

      <section className="mt-10 border-t border-term-fg/15 pt-6">
        <h2 className="mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-term-muted">
          TOOLS I REACH FOR
          <ToolboxDoodle />
        </h2>
        <TechBubbleStack skills={skills} compact />
      </section>

      <footer className="mt-10 border-t border-term-fg/15 pt-7">
        <div className="relative isolate flex flex-col items-center">
          <FlexedArmsDoodle className="relative z-0 h-auto w-[4.5rem] max-w-full" />
          <h2 className="relative z-10 -mt-2 text-center text-[25px] font-semibold leading-none tracking-[-0.035em] [paint-order:stroke_fill] [-webkit-text-stroke:4px_var(--term-bg)]">
            Let&apos;s build something useful.
          </h2>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          <a
            href="mailto:talk2adeoluwa2310@gmail.com"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-term-fg px-4.5 text-[13px] font-medium text-term-bg"
          >
            <MailOpen size={15} aria-hidden="true" /> Get in touch
          </a>
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-term-fg/25 px-4 text-[13px] font-medium"
          >
            See my work <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
