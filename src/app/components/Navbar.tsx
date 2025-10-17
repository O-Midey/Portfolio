"use client";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  Home,
  User,
  Code,
  Mail,
} from "lucide-react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Improved scroll thresholds for smoother fade
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.5, 0]);
  const scale = useTransform(scrollY, [0, 150, 300], [1, 0.96, 0.92]);
  const blur = useTransform(scrollY, [0, 150, 300], [0, 2, 4]);

  // Auto-close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen && window.scrollY > 50) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Disable pointer events when nearly invisible
  const pointerEvents = useTransform(
    scrollY,
    [0, 250, 300],
    ["auto", "auto", "none"]
  );

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Code, label: "Projects", href: "/projects" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/o-midey",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/omotosho-david",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/meeedzy",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <motion.div
      className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[200px]"
      style={{
        opacity: isOpen ? 1 : opacity,
        scale: isOpen ? 1 : scale,
        filter: useTransform(blur, (value) => `blur(${value}px)`),
        pointerEvents,
      }}
    >
      <div className="relative">
        {/* Single Expanding Pill */}
        <motion.div
          className="bg-white border border-gray-200 shadow-lg backdrop-blur-sm bg-opacity-95 overflow-hidden"
          animate={{
            borderRadius: isOpen ? "12px" : "30px",
          }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* Header Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center gap-3 px-5 py-2.5 hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Logo */}
            <motion.div
              className="w-7 h-7 bg-black rounded-lg flex items-center justify-center"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white font-bold text-sm">OD</span>
            </motion.div>

            {/* Chevron */}
            <motion.div
              className="ml-auto"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <ChevronDown size={16} className="text-gray-600" />
            </motion.div>
          </motion.button>

          {/* Expanded Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-4">
                  {/* Nav Links */}
                  <nav className="flex flex-col gap-1 mb-3 mt-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -30, opacity: 0 }}
                        transition={{
                          delay: index * 0.08,
                          duration: 0.4,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex gap-3 items-center py-2 px-2 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <item.icon
                              size={13}
                              className="text-gray-600 group-hover:text-black transition-colors"
                            />
                          </motion.div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Horizontal Divider */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ scaleX: 0, opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="h-px bg-gray-200 my-3 origin-left"
                  />

                  {/* Social Icons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.4,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="flex items-center justify-start gap-2"
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${social.color}`}
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.85 }}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        <social.icon size={14} className="text-black" />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
