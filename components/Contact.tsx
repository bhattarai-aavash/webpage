"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Contact</h2>
          <p className="mt-3 text-muted">
            Open to full-time opportunities, contract work, and product collaborations.
          </p>
          <div className="mt-6 space-y-3 text-sm text-muted">
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <FiMail />
              {personalInfo.email}
            </a>
            {personalInfo.linkedin ? (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <FiLinkedin />
                LinkedIn
              </a>
            ) : null}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <FiGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
