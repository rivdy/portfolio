"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { stats } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl md:h-[32rem] md:w-[32rem]" />
      <div className="absolute right-0 top-1/3 -z-10 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl md:h-96 md:w-96" />

      <div className="mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
            Bioinformatics-inspired personal portfolio
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white text-glow sm:text-5xl md:text-6xl lg:text-7xl">
            Rivaldy Putra Rivly
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            AI, data science, and research-oriented problem solver with a visual
            identity shaped around bioinformatics, structured thinking, and modern
            web craftsmanship.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-300"
            >
              View featured work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <a
              href="https://www.linkedin.com/in/rivaldy-putra-r-80ba0b236/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rivdy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
          className="flex items-center"
        >
          <div className="glass-strong relative w-full overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_35%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Research Profile
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Bioinformatics / AI
                  </h2>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-right">
                  <p className="text-xs text-cyan-200">Status</p>
                  <p className="text-sm font-medium text-white">Open to build</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 h-24 rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.20),rgba(14,165,233,0.06),rgba(15,23,42,0.10))] p-3">
                    <div className="grid h-full grid-cols-3 gap-2">
                      <div className="rounded-2xl bg-cyan-400/25" />
                      <div className="rounded-2xl bg-sky-400/20" />
                      <div className="rounded-2xl bg-cyan-300/15" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">Biological data</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Structured, visual, pattern-driven
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 flex h-24 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.20),_rgba(2,6,23,0.0)_60%)]">
                    <div className="grid gap-2">
                      <div className="h-2 w-20 rounded-full bg-cyan-300/80" />
                      <div className="h-2 w-28 rounded-full bg-sky-300/60" />
                      <div className="h-2 w-16 rounded-full bg-cyan-200/70" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">AI research</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Predictive, adaptive, scalable
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}