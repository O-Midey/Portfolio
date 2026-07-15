"use client";
import { useState } from "react";
import { libraryResources } from "../data/library";
import { LibraryCategory, LibraryResource } from "../types/types";
import MobileLibrary from "../components/mobile/MobileLibrary";
import { ArrowUpRight } from "lucide-react";

type Filter = "ALL" | LibraryCategory;

const FILTERS: Filter[] = ["ALL", "WEB-DEV", "WEB3", "AI", "BACKEND", "GENERAL"];

function ResourceCard({ resource }: { resource: LibraryResource }) {
  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] p-5 transition-all duration-200 hover:border-gray-300 dark:hover:border-[#3a3a3a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight">
            {resource.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-[#888] font-mono mt-1">
            {resource.provider}
          </p>
        </div>
        <ArrowUpRight
          size={16}
          className="shrink-0 text-gray-300 dark:text-[#555] transition-all duration-200 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {resource.concepts.map((concept) => (
          <span
            key={concept}
            className="rounded border border-emerald-200 bg-emerald-100 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
          >
            {concept}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function LibraryPage() {
  const [filter, setFilter] = useState<Filter>("ALL");

  const visibleResources =
    filter === "ALL"
      ? libraryResources
      : libraryResources.filter((r) => r.category === filter);

  return (
    <>
      <div className="md:hidden">
        <MobileLibrary />
      </div>

      <section className="hidden md:block relative min-h-screen bg-white dark:bg-[#111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <p className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase mb-3">
              what i learned from 📚
            </p>
            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
              Library
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-600 font-light max-w-lg leading-relaxed">
              Courses, docs, and channels that shaped how I build — kept here
              as a running reference.
            </p>
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-1.5 font-mono text-[11px] tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-black"
                      : "border-gray-200 dark:border-[#2a2a2a] text-gray-500 dark:text-[#888] hover:border-gray-400 dark:hover:border-[#555]"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Resource grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleResources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>

          {visibleResources.length === 0 && (
            <p className="py-16 text-center text-sm text-gray-400 font-mono">
              No resources in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
