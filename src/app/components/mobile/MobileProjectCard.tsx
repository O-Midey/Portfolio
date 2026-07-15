"use client";
import Image from "next/image";
import { Project } from "../../types/types";
import StatusPill from "./StatusPill";

export default function MobileProjectCard({
  project,
  showDetailsHint = false,
  onSelect,
}: {
  project: Project;
  showDetailsHint?: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`View details for ${project.title}`}
      className="relative w-full rounded-lg border border-term-fg/10 bg-term-card p-3 pb-4 text-left shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-opacity active:opacity-85"
    >
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden rounded">
          <Image
            src={project.image.trim()}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 px-1 pt-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[21px] font-bold text-term-fg">
            {project.title}
          </span>
          <StatusPill status={project.status} />
        </div>
        <p className="text-sm leading-relaxed text-term-fg/60 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-term-accent/25 bg-term-accent/10 px-2 py-0.5 font-jet text-[10px] font-medium text-term-accent"
            >
              {tech}
            </span>
          ))}
        </div>
        {showDetailsHint && (
          <span className="flex items-center gap-1.5 pt-0.5 text-sm font-semibold text-term-fg">
            View details <span className="text-term-accent">↗</span>
          </span>
        )}
      </div>
    </button>
  );
}
