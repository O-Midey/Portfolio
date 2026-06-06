"use client";
import { JSX, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { Project } from "../types/types";
import AnimatedDiv from "../components/AnimatedDiv";
import ProjectDetailPanel from "./ProjectDetailPanel";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Slight rotations to give each card a pinned/tossed feel
const rotations = [
  "-rotate-1",
  "rotate-1",
  "-rotate-2",
  "rotate-2",
  "-rotate-1",
  "rotate-1",
  "rotate-0",
];

// Tape colors
const tapeColors = [
  "bg-yellow-200/70",
  "bg-gray-200/70",
  "bg-pink-200/70",
  "bg-green-200/70",
  "bg-purple-200/70",
  "bg-orange-200/70",
  "bg-yellow-200/70",
];

function ScrapbookCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const rotation = rotations[index % rotations.length];
  const tape = tapeColors[index % tapeColors.length];

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`group relative ${rotation} rounded-sm outline-none transition-all duration-300 hover:z-10 hover:rotate-0 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-emerald-400/60`}
    >
      {/* Tape strip at top */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 ${tape} rounded-sm z-10 opacity-80`}
      />

      {/* Card */}
      <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] shadow-[4px_4px_14px_rgba(0,0,0,0.08)] p-3 pb-5 flex flex-col gap-3">
        {/* Polaroid image */}
        {project.image && (
          <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )}
            <Image
              src={project.image.trim()}
              alt={project.title}
              fill
              className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
              sizes="(max-width: 768px) 100vw, 50vw"
              onLoad={() => setLoaded(true)}
            />
          </div>
        )}

        {/* Content */}
        <div className="px-1 pt-1 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight">
              {project.title}
            </h3>
            <span
              className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full font-medium ${
                project.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {project.status}
            </span>
          </div>

          <p className="text-gray-600 dark:text-[#bbb] text-xs leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech tags — look like stickers */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded border border-emerald-200 bg-emerald-100 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-700 shadow-sm dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-gray-700 underline decoration-dotted underline-offset-2 transition-colors group-hover:text-gray-900 mt-1 dark:text-[#bbb] dark:group-hover:text-white">
            View details
            <ArrowUpRight
              size={11}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>

      {/* Drop shadow layer */}
      <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-gray-300/40 rounded-sm" />
    </div>
  );
}

function ProjectsSection({
  onSelect,
}: {
  onSelect: (index: number) => void;
}): JSX.Element {
  return (
    <AnimatedDiv>
      <section className="relative min-h-screen bg-white dark:bg-[#111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          {/* Header */}
          <div className="mb-14 sm:mb-20">
            <p className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase mb-3">
              my work 🛠️
            </p>
            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
              Projects
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-600 font-light max-w-lg leading-relaxed">
              Full-stack apps, Web3 tools, and everything in between 👷🏽‍♂️
            </p>
          </div>

          {/* Scrapbook grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
            {projects.map((project: Project, index: number) => (
              <ScrapbookCard
                key={index}
                project={project}
                index={index}
                onSelect={() => onSelect(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatedDiv>
  );
}

export default function Projects(): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <ProjectsSection onSelect={setSelectedIndex} />

      <AnimatePresence>
        {selectedIndex !== null && (
          <ProjectDetailPanel
            project={projects[selectedIndex]}
            index={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
