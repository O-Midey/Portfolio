import { ExternalLinkIcon } from "lucide-react";
import AnimatedDiv from "../_components/AnimatedDiv";

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  liveLink: string;
  codeLink: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-900">{project.title}</h3>
        <div
          className={`px-2 py-1 rounded-full text-xs ${
            project.status === "Completed"
              ? "bg-green-100 text-green-700"
              : project.status === "In Progress"
              ? "bg-yellow-200 text-yellow-900"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {project.status}
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs"
      >
        View Project <ExternalLinkIcon size={12} />
      </a>
      <a
        href={project.codeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs ml-5"
      >
        View Code <ExternalLinkIcon size={12} />
      </a>
    </AnimatedDiv>
  );
}
