"use client";
import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Link href="/" className="text-white font-bold text-md">
                OD
              </Link>
            </div>
            <h1 className="hidden md:inline-block font-bold text-gray-900">
              Omotosho David
            </h1>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/o-midey"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/meeedzy"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 relative w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger lines */}
            <motion.span
              className="block w-6 h-0.5 bg-black rounded"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-black rounded my-1"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-black rounded"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-16 bg-white md:hidden origin-top z-20 px-6 py-8"
          >
            {/* Nav Links */}
            <nav className="flex flex-col space-y-4 font-medium">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
              {/* <Link href="/experience" onClick={() => setIsOpen(false)}>
                Experience
              </Link> */}
              <Link href="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/o-midey"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/meeedzy"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
