import { Home, User, Code, Mail } from "lucide-react";

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
  { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
];

export default sections;
