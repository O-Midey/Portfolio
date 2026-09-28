import { Home, User, Code, Library, Mail } from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "about", label: "About", icon: User, href: "/about" },
  // {
  //   id: "experience",
  //   label: "Experience",
  //   icon: Briefcase,
  //   href: "/experience",
  // },
  { id: "projects", label: "Projects", icon: Code, href: "/projects" },
  // Keep the page available while temporarily hiding it from both menus.
  { id: "library", label: "Library", icon: Library, href: "/library", hidden: true },
  { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
].filter((section) => !section.hidden);

export default sections;
