"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiCodeblocks } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const filteredLinks = links.filter((link) => link.href !== pathname);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div className="mt-6 p-2 md:my-15 md:px-30 w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white hover:text-[#06eecb] transition-all duration-1000"
        >
          <SiCodeblocks size={32} />
        </Link>

        {/* Desktop links */}
        <motion.div className="hidden md:flex space-x-8 text-md font-medium text-white transition-all">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#06eecb] transition-all duration-1000"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Hamburger menu */}
        <motion.div className="md:hidden text-white text-2xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile dropdown */}
      {isOpen && (
        <motion.div className="md:hidden mt-4 flex flex-col space-y-4 px-2 transition-all duration-300">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors text-md"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
