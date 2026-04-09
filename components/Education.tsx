"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Education</h2>
        <div className="mt-8 grid gap-4">
          {education.map((item) => (
            <article key={`${item.school}-${item.degree}`} className="rounded-xl border border-white/10 bg-surface p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted">{item.school}</p>
              <p className="mt-2 text-sm text-muted">{item.dates}</p>
              {item.gpa ? <p className="mt-2 text-sm text-muted">GPA: {item.gpa}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
