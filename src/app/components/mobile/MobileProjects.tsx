"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import { Project, ProjectCategory } from "../../types/types";
import MobileProjectCard from "./MobileProjectCard";
import MobileProjectSheet from "./MobileProjectSheet";

type Filter = "ALL" | ProjectCategory;

const FILTERS: Filter[] = ["ALL", "AI", "FULL-STACK", "WEB3"];

export default function MobileProjects() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [selected, setSelected] = useState<Project | null>(null);

  const visibleProjects =
    filter === "ALL"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <div className="term-dot-grid flex min-h-dvh animate-fade-up flex-col bg-term-bg text-term-fg">
      {/* ── Heading ── */}
      <section className="flex flex-col gap-3.5 px-5 pt-12">
        <p className="font-jet text-[11px] tracking-[0.3em] text-term-fg/50">
          MY WORK 🛠️
        </p>
        <h1 className="text-[44px] font-bold leading-none tracking-[-0.02em]">
          Projects<span className="text-term-accent">.</span>
        </h1>
        <p className="mt-0.5 text-base leading-[1.55] text-term-fg/60">
          AI-powered apps, full-stack products, Web3 tools, and everything in
          between 👷
        </p>
      </section>

      {/* ── Filter chips ── */}
      <div className="flex flex-wrap gap-2 px-5 pb-1.5 pt-6.5">
        {FILTERS.map((f) => {
          const isActive = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={isActive}
              className={`rounded-full border px-[15px] py-[9px] font-jet text-[11px] tracking-[0.05em] transition-opacity active:opacity-70 ${
                isActive
                  ? "border-term-fg bg-term-fg font-semibold text-term-bg"
                  : "border-term-fg/22 text-term-fg/60"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* ── Project cards ── */}
      <section className="flex flex-col gap-[30px] px-5 pb-2 pt-6">
        {visibleProjects.map((project) => (
          <MobileProjectCard
            key={project.title}
            project={project}
            showDetailsHint
            onSelect={() => setSelected(project)}
          />
        ))}
        {visibleProjects.length === 0 && (
          <p className="py-8 text-center font-jet text-xs text-term-fg/45">
            $ no projects match this filter
          </p>
        )}
      </section>

      {/* ── CTA ── */}
      <footer className="mt-10 flex flex-col gap-[18px] border-t border-term-fg/10 px-5 pb-8 pt-11">
        <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.01em]">
          Got a project in mind<span className="text-term-accent">?</span>
        </h2>
        <Link
          href="/contact"
          className="flex items-center justify-center rounded-full bg-term-accent py-4 font-jet text-[12.5px] font-semibold tracking-[0.12em] text-term-bg transition-opacity active:opacity-75"
        >
          LET&apos;S TALK →
        </Link>
      </footer>

      <AnimatePresence>
        {selected && (
          <MobileProjectSheet
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
