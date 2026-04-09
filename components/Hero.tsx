"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.18 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={item} className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
            {personalInfo.name}
          </motion.p>
          <motion.h1 variants={item} className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {personalInfo.title}
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-base text-muted sm:text-lg">
            {personalInfo.tagline}
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              View Work
            </a>
            <a
              href={personalInfo.resumeUrl}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
