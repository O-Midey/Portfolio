"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import sections from "../_data/sections";
import NavItem from "./NavItem";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-30% hidden md:flex md:px-4 flex-shrink-0 sticky top-24 py-12">
      <nav className="space-y-1">
        {sections.map((section) => (
          <Link key={section.id} href={section.href}>
            <NavItem section={section} isActive={pathname === section.href} />
          </Link>
        ))}
      </nav>
    </div>
  );
}
