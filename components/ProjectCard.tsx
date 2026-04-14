"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";
import { publicAssetUrl } from "@/lib/basePath";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group rounded-2xl border border-white/10 bg-surface p-4 shadow-sm"
    >
      {project.image ? (
        <div className="overflow-hidden rounded-xl border border-white/10">
          <img
            src={publicAssetUrl(project.image)}
            alt={project.title}
            width={800}
            height={500}
            className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
      <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full bg-bg px-3 py-1 text-xs text-muted">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
        <Link href={`/projects/${project.slug}`} className="font-semibold text-accent hover:underline">
          Case Study
        </Link>
        <a
          href={project.github || "#"}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-muted hover:text-white"
        >
          <FiGithub />
          GitHub
        </a>
        <a
          href={project.demo || "#"}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-muted hover:text-white"
        >
          <FiExternalLink />
          Live Demo
        </a>
      </div>
    </motion.article>
  );
}
