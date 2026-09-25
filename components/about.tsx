// src/components/about.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 18 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="About"
          title="A portfolio that feels like a research profile."
          description="This website is designed to present your identity with a clean, premium, and scientific aesthetic. The structure stays professional on laptop and compact on mobile."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm leading-8 text-slate-300 sm:text-base">
              I am a University of Indonesia Information Systems student with a
              strong interest in AI, data science, education technology, and
              research-driven problem solving. My background includes product
              development, tutoring, leadership, and international exposure, and
              this site packages all of that into a modern, credible presence.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Research mindset",
                "Student impact",
                "Modern web presence",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">
              Profile summary
            </p>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                Focus on AI, data, and research communication.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                Strong portfolio direction for recruiters and communities.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                Clean visual identity with responsive layout and premium feel.
              </li>
            </ul>

            <div className="mt-6 rounded-3xl border border-cyan-400/15 bg-cyan-400/10 p-5">
              <p className="text-sm font-medium text-white">Positioning line</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                AI and data-oriented student building a bioinformatics-inspired
                digital identity that looks equally strong on mobile and desktop.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}