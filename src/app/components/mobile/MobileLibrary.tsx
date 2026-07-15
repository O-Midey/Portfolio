"use client";
import { useState } from "react";
import { libraryResources } from "../../data/library";
import { LibraryCategory } from "../../types/types";
import { ArrowUpRight } from "lucide-react";

type Filter = "ALL" | LibraryCategory;

const FILTERS: Filter[] = ["ALL", "WEB-DEV", "WEB3", "AI", "BACKEND", "GENERAL"];

export default function MobileLibrary() {
  const [filter, setFilter] = useState<Filter>("ALL");

  const visibleResources =
    filter === "ALL"
      ? libraryResources
      : libraryResources.filter((r) => r.category === filter);

  return (
    <div className="term-dot-grid flex min-h-dvh animate-fade-up flex-col bg-term-bg text-term-fg">
      {/* ── Heading ── */}
      <section className="flex flex-col gap-3.5 px-5 pt-12">
        <p className="font-jet text-[11px] tracking-[0.3em] text-term-fg/50">
          WHAT I LEARNED FROM 📚
        </p>
        <h1 className="text-[44px] font-bold leading-none tracking-[-0.02em]">
          Library<span className="text-term-accent">.</span>
        </h1>
        <p className="mt-0.5 text-base leading-[1.55] text-term-fg/60">
          Courses, docs, and channels that shaped how I build — kept here as a
          running reference.
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

      {/* ── Resource list ── */}
      <section className="flex flex-col gap-3 px-5 pb-8 pt-6">
        {visibleResources.map((resource) => (
          <a
            key={resource.title}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2.5 rounded-xl border border-term-fg/12 bg-term-panel px-4 py-4 transition-opacity active:opacity-70"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[15px] font-bold leading-tight">
                  {resource.title}
                </h3>
                <p className="mt-1 font-jet text-[10.5px] text-term-fg/50">
                  {resource.provider}
                </p>
              </div>
              <ArrowUpRight
                size={15}
                className="mt-0.5 shrink-0 text-term-fg/40"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {resource.concepts.map((concept) => (
                <span
                  key={concept}
                  className="rounded border border-term-accent/25 bg-term-accent/10 px-2 py-0.5 font-jet text-[10px] font-medium text-term-accent"
                >
                  {concept}
                </span>
              ))}
            </div>
          </a>
        ))}
        {visibleResources.length === 0 && (
          <p className="py-8 text-center font-jet text-xs text-term-fg/45">
            $ no resources match this filter
          </p>
        )}
      </section>
    </div>
  );
}
