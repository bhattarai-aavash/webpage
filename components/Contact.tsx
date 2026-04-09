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
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Contact</h2>
            <p className="mt-3 text-muted">
              Open to full-time opportunities, contract work, and product collaborations.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted">
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <FiMail />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <FiLinkedin />
                LinkedIn
              </a>
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

          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-4 rounded-2xl border border-white/10 bg-surface p-6"
          >
            <p className="text-xs text-muted">TODO: Replace Formspree action URL with your form endpoint.</p>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-white">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-white/15 bg-bg px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-white/15 bg-bg px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-white/15 bg-bg px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
                placeholder="Tell me about your project or role..."
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
