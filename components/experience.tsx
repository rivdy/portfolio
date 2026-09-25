// src/components/experience.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 18 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Experience"
          title="A timeline that reads cleanly on phone and desktop."
          description="This section is structured like a professional profile timeline so your leadership, internship, and research signals are easy to scan."
        />

        <div className="mt-10 space-y-4">
          {experience.map((item, index) => (
            <div
              key={`${item.period}-${index}`}
              className="glass rounded-[1.75rem] p-5 sm:p-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{item.org}</p>
                </div>
                <div className="max-w-2xl text-sm leading-7 text-slate-300">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}