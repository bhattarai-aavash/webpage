"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { HiBars3, HiXMark } from "react-icons/hi2";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const linkClass =
    "relative text-sm font-medium text-white/80 transition hover:text-white dark:text-white/80";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="text-lg font-semibold tracking-wide text-white">
          Portfolio
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className={linkClass}>
              {section.label}
              <motion.span
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                animate={{ scaleX: activeSection === section.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-accent"
              />
            </a>
          ))}
          {mounted && (
            <button
              type="button"
              className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 transition hover:bg-white/10"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          )}
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-surface/90 px-4 py-4 md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 sm:px-6 lg:px-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-white/90"
                onClick={() => setIsOpen(false)}
              >
                {section.label}
              </a>
            ))}
            {mounted && (
              <button
                type="button"
                className="w-fit rounded-full border border-white/20 px-3 py-1 text-xs text-white/80"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                Switch to {theme === "dark" ? "Light" : "Dark"} mode
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
