// src/components/projects.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { projects } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 18 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Featured work"
          title="Project cards that look good on small screens too."
          description="Each card keeps hierarchy, spacing, and readability clean, so it feels polished both on mobile and on a wide laptop screen."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-card transition hover:-translate-y-1 hover:border-cyan-300/20"
            >
              <div className={`bg-gradient-to-br ${project.accent} p-6`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-3 text-white/80">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/30 p-4">
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-7 h-2 rounded-full bg-cyan-300/80" />
                    <div className="col-span-5 h-2 rounded-full bg-sky-300/70" />
                    <div className="col-span-4 h-2 rounded-full bg-cyan-200/70" />
                    <div className="col-span-8 h-2 rounded-full bg-sky-200/70" />
                    <div className="col-span-9 h-2 rounded-full bg-cyan-300/50" />
                    <div className="col-span-3 h-2 rounded-full bg-sky-300/60" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-slate-300">{project.summary}</p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Highlight
                  </p>
                  <p className="mt-1 text-sm text-white">{project.highlight}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}