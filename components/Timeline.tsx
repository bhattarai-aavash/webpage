"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Timeline() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Experience</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="mt-10 border-l border-white/10 pl-6"
        >
          {experience.map((item) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="relative mb-10"
            >
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-accent" />
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-sm text-muted">
                {item.company} | {item.dates}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {item.bullets.map((point) => (
                  <li key={point} className="list-disc">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
