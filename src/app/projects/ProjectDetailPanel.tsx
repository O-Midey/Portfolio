"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, Github, ArrowUpRight } from "lucide-react";
import { Project } from "../types/types";
import { withProtocol, sameHost } from "../lib/url";
import { ScribbledText, scribbleColorFor } from "../components/Scribble";
import { projectStatusStyles } from "../components/projectStatusStyles";

export default function ProjectDetailPanel({
  project,
  onClose,
}: {
  project: Project;
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
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-gray-900 dark:text-white">
            <ArrowUpRight size={11} className="text-emerald-400" /> Project
          </span>
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="grid h-8 w-8 place-items-center rounded-full border border-gray-900 text-gray-900 transition-all duration-300 hover:rotate-90 hover:border-emerald-400/60 dark:border-white dark:text-white"
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
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 500px"
              />
            </div>
          )}

          {/* Title + status */}
          <div className="mt-6 flex items-start justify-between gap-3">
            <h2 className="font-sans text-2xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
              <ScribbledText color={scribbleColorFor(project.title)}>{project.title}</ScribbledText>
            </h2>
            <span
              className={`mt-1 shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium ${projectStatusStyles(project.status)}`}
            >
              {project.status}
            </span>
          </div>

          {/* Full description — no clamping */}
          <p className="mt-4 font-sans text-sm leading-relaxed text-gray-900 dark:text-white">
            {project.description}
          </p>

          {/* Tech */}
          <div className="mt-7">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-900 dark:text-white">
              Built with
            </p>
            <p className="font-mono text-[11px] font-medium text-gray-500 dark:text-term-muted mt-2 leading-relaxed">
              {project.tech.join(' · ')}
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex shrink-0 items-center gap-3 border-t border-gray-100 px-6 py-5 dark:border-[#1f1f1f]">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#111] dark:bg-white dark:text-black text-white px-4 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#333] dark:hover:bg-gray-200 hover:scale-[1.02]"
            >
              Visit Live Site <ArrowUpRight size={14} />
            </a>
          )}
          {showCode && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-900 dark:border-white px-4 py-2.5 font-mono text-xs tracking-widest uppercase text-gray-900 dark:text-white transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[#1a1a1a]"
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
