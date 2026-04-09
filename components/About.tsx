"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/data";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">About Me</h2>
            <p className="mt-5 text-muted">{about.bio}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-surface p-4">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface">
              <Image
                src="/images/profile-placeholder.svg"
                alt="Profile placeholder"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
