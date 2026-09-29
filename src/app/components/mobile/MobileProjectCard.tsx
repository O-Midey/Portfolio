"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../../types/types";
import StatusPill from "./StatusPill";
import { ScribbledText, scribbleColorFor, scribbleVariantFor } from "../Scribble";

export default function MobileProjectCard({
  project,
  variant = "default",
  showDetailsHint = false,
  onSelect,
}: {
  project: Project;
  variant?: "default" | "compact";
  showDetailsHint?: boolean;
  onSelect: () => void;
}) {
  const compact = variant === "compact";

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`View details for ${project.title}`}
      className={`relative w-full rounded-lg border bg-term-card p-3 text-left transition-opacity active:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-term-accent ${
        compact
          ? "border-term-fg/15 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          : "border-term-fg pb-4 shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
      }`}
    >
      {project.image && (
        <div
          className={`relative w-full overflow-hidden rounded ${compact ? "aspect-[12/5]" : "aspect-video"}`}
        >
          <Image
            src={project.image.trim()}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes={compact ? "(max-width: 360px) 82vw, 320px" : "100vw"}
          />
        </div>
      )}
      <div
        className={`flex flex-col gap-2 px-1 ${compact ? "pt-3" : "pt-3.5"}`}
      >
        <div className="flex items-center justify-between gap-2">
          <span
            className={`min-w-0 font-sans font-bold text-term-fg ${compact ? "text-lg" : "text-[21px]"}`}
          >
            <ScribbledText
              color={scribbleColorFor(project.title)}
              variant={scribbleVariantFor(project.title)}
            >
              {project.title}
            </ScribbledText>
          </span>
          <StatusPill status={project.status} />
        </div>
        <p
          className={`text-sm leading-relaxed text-term-fg ${compact ? "line-clamp-2" : "line-clamp-3"}`}
        >
          {project.description}
        </p>
        <p
          className={`mt-1 font-mono text-[10px] font-medium leading-relaxed text-term-muted ${compact ? "line-clamp-1" : ""}`}
        >
          {project.tech.join(' · ')}
        </p>
        {showDetailsHint && (
          <span className="flex items-center gap-1 pt-0.5 font-mono text-[10px] tracking-[0.1em] uppercase text-term-fg">
            View details <ArrowUpRight size={10} />
          </span>
        )}
      </div>
    </button>
  );
}
