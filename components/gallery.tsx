// src/components/gallery.tsx
"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

const panels = [
  {
    title: "DNA field",
    desc: "Cyan glow, layered depth, and scientific mood.",
    className:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.32),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(2,6,23,0.9))]",
  },
  {
    title: "Data lattice",
    desc: "Structure that feels analytical and premium.",
    className:
      "bg-[linear-gradient(135deg,rgba(2,6,23,0.98),rgba(8,47,73,0.65)),radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_30%)]",
  },
  {
    title: "Research monitor",
    desc: "Interface styling that stays readable on mobile.",
    className:
      "bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(8,15,38,0.92)),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.20),transparent_28%)]",
  },
  {
    title: "Molecule trace",
    desc: "A visual block you can later replace with real imagery.",
    className:
      "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_24%),linear-gradient(135deg,rgba(2,6,23,1),rgba(30,41,59,0.55))]",
  },
];

export default function Gallery() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 18 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Visual lab"
          title="Abstract visuals that make the page feel alive."
          description="These panels give the site a visual rhythm even before you add real project screenshots or photographs."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {panels.map((panel) => (
            <div
              key={panel.title}
              className={`group relative min-h-64 overflow-hidden rounded-[2rem] border border-white/10 p-5 shadow-card ${panel.className}`}
            >
              <div className="absolute inset-0 bg-grid opacity-25" />
              <div className="relative flex h-full flex-col justify-end">
                <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-4 backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-white">{panel.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {panel.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}