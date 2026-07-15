"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, Github, ArrowUpRight } from "lucide-react";
import { Project } from "../types/types";
import { withProtocol, sameHost } from "../lib/url";

export default function ProjectDetailPanel({
  project,
  index,
  onClose,
}: {
  project: Project;
  index: number;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Esc to close + lock background scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!mounted) return null;

  const live = withProtocol(project.liveLink);
  const code = withProtocol(project.codeLink);
  const showCode = !!code && !sameHost(code, live);
  const isCompleted = project.status === "Completed";
  const num = String(index + 1).padStart(2, "0");

  return createPortal(
    <>
      {/* Backdrop — no backdrop-filter: a full-screen blur re-rasterizes every
          frame against the custom cursor's rAF loop and tanks the framerate. */}
      <motion.div
        className="fixed inset-0 z-[60] bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.aside
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        className="fixed top-0 right-0 z-[70] flex h-screen w-full flex-col border-l border-gray-200 bg-white shadow-[-8px_0_40px_rgba(0,0,0,0.12)] sm:w-[440px] lg:w-[500px] dark:border-[#262626] dark:bg-[#141414]"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 36 }}
      >
        {/* Animated emerald accent edge — echoes the sidebar */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[1.5px] bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />

        {/* Header */}
        <div className="flex shrink-0 items-center justify-between px-6 pb-4 pt-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400">
            <span className="text-emerald-400">{num}</span> — Project
          </span>
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="grid h-8 w-8 place-items-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 hover:rotate-90 hover:border-emerald-400/60 hover:text-gray-900 dark:border-[#2a2a2a] dark:text-[#999] dark:hover:text-white"
          >
            <X size={15} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 pb-8">
          {project.image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 dark:border-[#262626] dark:bg-[#1a1a1a]">
              <Image
                src={project.image.trim()}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 500px"
              />
            </div>
          )}

          {/* Title + status */}
          <div className="mt-6 flex items-start justify-between gap-3">
            <h2 className="text-2xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <span
              className={`mt-1 shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium ${
                isCompleted
                  ? "bg-green-100 text-green-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Full description — no clamping */}
          <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-[#bbb]">
            {project.description}
          </p>

          {/* Tech */}
          <div className="mt-7">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Built with
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-emerald-200 bg-emerald-100 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex shrink-0 items-center gap-3 border-t border-gray-100 px-6 py-5 dark:border-[#1f1f1f]">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2.5 text-xs font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Visit Live Site <ArrowUpRight size={14} />
            </a>
          )}
          {showCode && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-xs font-medium text-gray-700 transition-colors hover:border-emerald-400/60 hover:text-gray-900 dark:border-[#2a2a2a] dark:text-[#bbb] dark:hover:text-white"
            >
              <Github size={14} /> Code
            </a>
          )}
        </div>
      </motion.aside>
    </>,
    document.body,
  );
}
