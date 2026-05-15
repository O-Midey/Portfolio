"use client";
import { useRef } from "react";
import { ExternalLinkIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  liveLink: string;
  codeLink: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };

  const onLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)", willChange: "transform" }}
      className="w-full border-t-2 border-gray-200 dark:border-[#2a2a2a] p-6 bg-white dark:bg-[#111] hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-shadow duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <div className={`px-2 py-1 rounded-full text-xs ${
          project.status === "Completed"
            ? "bg-green-100 text-green-700"
            : project.status === "In Progress"
            ? "bg-yellow-200 text-yellow-900"
            : "bg-yellow-100 text-yellow-700"
        }`}>
          {project.status}
        </div>
      </div>
      <p className="text-gray-600 dark:text-[#999] text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-[#aaa] text-xs font-mono rounded">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white dark:text-black text-white text-xs font-medium rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-200 hover:scale-105"
      >
        View Project <ExternalLinkIcon size={12} />
      </a>
    </div>
  );
}
