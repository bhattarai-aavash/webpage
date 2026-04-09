import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#projects" className="text-sm text-accent hover:underline">
          ← Back to Projects
        </Link>

        <article className="mt-6 rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-white">{project.title}</h1>
          <p className="mt-4 text-muted">{project.description}</p>

          <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={project.image ?? "/images/project-analytics.svg"}
              alt={project.title}
              width={1200}
              height={700}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <section className="rounded-xl border border-white/10 bg-bg p-4 lg:col-span-1">
              <h2 className="text-lg font-semibold text-white">Tech Stack</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-6 lg:col-span-2">
              <div>
                <h2 className="text-xl font-semibold text-white">Project Overview</h2>
                <p className="mt-2 text-muted">{project.details}</p>
              </div>
            </section>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={project.github || "#"}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              View GitHub
            </a>
            <a
              href={project.demo || "#"}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
            >
              View Live Demo
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
