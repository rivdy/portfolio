"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import SectionHeading from "@/components/section-heading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-4 py-16 pb-24 sm:px-6 lg:px-8"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 18 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionHeading
          eyebrow="Contact"
          title="A clean ending that makes it easy to reach you."
          description="The contact block keeps the visual language consistent while giving recruiters and collaborators a simple next step."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
              Available channels
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Let’s build something polished.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              If someone opens this site on a phone, they should instantly understand
              who you are. If they open it on a laptop, it should feel premium and
              credible. This final section closes the loop cleanly.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:rivaldy.rivly@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <Mail size={16} />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/rivaldy-putra-r-80ba0b236/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/rivdy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="glass rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
              Current positioning
            </p>

            <div className="mt-4 rounded-[1.75rem] border border-cyan-400/15 bg-cyan-400/10 p-5">
              <p className="text-sm font-medium text-white">
                Rivaldy Putra Rivly
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                AI • Data Science • Bioinformatics-inspired Portfolio
              </p>
            </div>

            <a
              href="#"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Back to top
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}