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
}
