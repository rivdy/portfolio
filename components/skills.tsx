// src/components/skills.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 18 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Skills"
          title="Grouped for fast scanning."
          description="Skill chips are arranged into categories, which keeps the page tidy on mobile while still giving depth on larger screens."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.name}
                className="glass rounded-[1.75rem] p-6 sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{group.name}</h3>
                    <p className="text-sm text-slate-400">
                      Core capabilities and tools
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
