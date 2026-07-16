"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../../types/types";
import { withProtocol, sameHost } from "../../lib/url";
import StatusPill from "./StatusPill";

// Bottom-sheet project detail for the mobile terminal view.
// Rendered inside an <AnimatePresence> by the caller.
export default function MobileProjectSheet({
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
  const slug = project.title.toLowerCase().replace(/\s+/g, "-");

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-term-bg/88 backdrop-blur-[4px] md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        className="w-full max-w-[430px] overflow-hidden rounded-t-2xl border border-term-fg/15 bg-term-panel"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 34 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-term-fg/10 px-4.5 py-3.5">
          <span className="font-jet text-[11px] text-term-fg">
            omotosho@portfolio ~ {slug}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="relative h-8 w-8 rounded-full border border-term-fg transition-opacity active:opacity-60"
          >
            <span className="absolute left-[9px] top-[15px] h-[1.5px] w-3.5 rotate-45 bg-term-fg" />
            <span className="absolute left-[9px] top-[15px] h-[1.5px] w-3.5 -rotate-45 bg-term-fg" />
          </button>
        </div>

        <div className="max-h-[70dvh] overflow-y-auto">
          {project.image && (
            <div className="relative aspect-video w-full">
              <Image
                src={project.image.trim()}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
          )}
          <div className="flex flex-col gap-3 px-5 pb-6 pt-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-term-fg">
                {project.title}
              </h2>
              <StatusPill status={project.status} />
            </div>
            <p className="text-[15px] leading-relaxed text-term-fg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-term-accent/25 bg-term-accent/10 px-2.5 py-1 font-jet text-[11px] font-medium text-term-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2.5 pt-1.5">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center rounded-full bg-term-fg py-3.5 font-jet text-[12.5px] font-semibold tracking-[0.1em] text-term-bg transition-opacity active:opacity-75"
                >
                  LIVE SITE ↗
                </a>
              )}
              {showCode && (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center rounded-full border border-term-fg py-3.5 font-jet text-[12.5px] font-semibold tracking-[0.1em] text-term-fg transition-opacity active:opacity-60"
                >
                  GITHUB ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
