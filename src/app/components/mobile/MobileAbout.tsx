"use client";
import Link from "next/link";
import { aboutSections } from "../../data/about";
import { skills } from "../../data/skills";
import TerminalWindow from "./TerminalWindow";

export default function MobileAbout() {
  return (
    <div className="term-dot-grid flex min-h-dvh animate-fade-up flex-col bg-term-bg text-term-fg">
      {/* ── Heading ── */}
      <section className="flex flex-col gap-3.5 px-5 pt-12">
        <p className="font-jet text-[11px] tracking-[0.3em] text-term-fg">
          ABOUT ME
        </p>
        <h1 className="text-[41px] font-bold leading-[1.12] tracking-[-0.02em]">
          Full-Stack, AI &amp;{" "}
          <span className="text-term-muted">Blockchain Dev.</span>
        </h1>
      </section>

      {/* ── about.txt terminal ── */}
      <section className="px-5 pt-9">
        <TerminalWindow title="omotosho@portfolio ~ about.txt">
          <div className="px-4.5 pb-5.5 pt-4.5 font-jet text-[13px] leading-[1.85]">
            {aboutSections.map((section, i) => (
              <div key={section.heading} className={i > 0 ? "mt-3.5" : ""}>
                <p className="text-term-accent">{`// ${section.heading}`}</p>
                <p className="text-term-fg">
                  {section.body}
                  {section.link && (
                    <>
                      {" "}
                      <a
                        href={section.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-term-accent underline underline-offset-4"
                      >
                        {section.link.label}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </section>

      {/* ── Tech stack ── */}
      <section className="flex flex-col gap-4 px-5 pt-11">
        <p className="font-jet text-[11px] tracking-[0.3em] text-term-fg">
          TECH STACK
        </p>
        <div className="flex flex-wrap gap-2 font-jet text-[11.5px]">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-term-fg bg-term-fg/5 px-3 py-[7px] text-term-fg transition-opacity active:opacity-70"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <footer className="mt-12 flex flex-col gap-[18px] border-t border-term-fg/10 px-5 pb-8 pt-11">
        <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.01em]">
          Let&apos;s build something amazing
          <span className="text-term-accent">.</span>
        </h2>
        <div className="flex gap-2.5">
          <Link
            href="/contact"
            className="flex flex-1 items-center justify-center rounded-full bg-term-fg py-[15px] font-jet text-xs font-semibold tracking-[0.12em] text-term-bg transition-opacity active:opacity-75"
          >
            GET IN TOUCH
          </Link>
          <Link
            href="/projects"
            className="flex flex-1 items-center justify-center rounded-full border border-term-fg py-[15px] font-jet text-xs tracking-[0.12em] text-term-fg transition-opacity active:opacity-60"
          >
            MY WORK →
          </Link>
        </div>
      </footer>
    </div>
  );
}
