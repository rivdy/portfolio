// src/components/focus.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { focusAreas } from "@/data/site";

export default function Focus() {
  return (
    <section id="focus" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 18 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Research focus"
          title="Bioinformatics aesthetics, but with your actual strengths."
          description="The visual language is scientific and premium, while the content stays aligned with your real background in AI, data, leadership, and product work."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass group rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-glow">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}