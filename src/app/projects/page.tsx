"use client";
import { JSX, useState } from "react";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "../data/projects";
import { Code2, Sparkles, Rocket, Eye, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "../types/types";
import AnimatedDiv from "../components/AnimatedDiv";

function ProjectImage({ project }: { project: Project }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
      <div className="aspect-video sm:aspect-[16/10] relative bg-gray-50">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}
        <Image
          src={project.image!.trim()}
          alt={`${project.title} preview`}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-3">
            {project.demoUrl && (
              <button
                onClick={() => window.open(project.demoUrl, "_blank")}
                className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium text-gray-900 hover:bg-white transition-all duration-200 transform hover:scale-105"
              >
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Live Demo</span>
              </button>
            )}
            {project.githubUrl && (
              <button
                onClick={() => window.open(project.githubUrl, "_blank")}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/90 backdrop-blur-sm border border-gray-700/20 rounded-lg text-sm font-medium text-white hover:bg-gray-900 transition-all duration-200 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Code</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection(): JSX.Element {
  return (
    <AnimatedDiv>
      <section className="relative overflow-hidden ">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gray-900/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-black/3 rounded-full blur-2xl sm:blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900/5 border border-gray-200 rounded-full mb-6 sm:mb-8">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-gray-700" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wide uppercase">
                Portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 sm:mb-8 tracking-tighter leading-none px-2">
              Projects
            </h1>

            <p className="text-xl sm:text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed px-4">
              Crafting digital experiences that blend{" "}
              <span className="text-gray-900 font-semibold">innovation</span>{" "}
              with{" "}
              <span className="text-gray-900 font-semibold">functionality</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-800 font-medium mt-10 px-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Code2 className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>Full-Stack</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Rocket className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>Blockchain</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>Web3</span>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project: Project, index: number) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative transform transition-all duration-500 hover:translate-y-[-6px]">
                  <div className="absolute -inset-2 bg-black/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-white border border-gray-200 rounded-2xl shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 overflow-hidden flex flex-col">
                    {project.image && <ProjectImage project={project} />}
                    <div className="flex-1">
                      <ProjectCard project={project} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedDiv>
  );
}

export default function Projects(): JSX.Element {
  return (
    <main className="min-h-screen bg-white">
      <ProjectsSection />
    </main>
  );
}
