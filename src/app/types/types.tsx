import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type section = {
  id: string;
  label: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
};

export type ProjectCategory = "AI" | "FULL-STACK" | "WEB3";

export interface Project {
  title: string;
  description: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  tech: string[];
  status: string;
  liveLink: string;
  codeLink: string;
  categories: ProjectCategory[];
}

export type LibraryCategory =
  | "WEB-DEV"
  | "WEB3"
  | "AI"
  | "BACKEND"
  | "GENERAL";

export interface LibraryResource {
  title: string;
  provider: string;
  concepts: string[];
  link: string;
  category: LibraryCategory;
}
