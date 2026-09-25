"use client";

import Image from "next/image";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, MapPin } from "lucide-react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { profile } from "@/data/site";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 150, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 22 });
  return (
    <section id="top" className="hero container" aria-label="Introduction">
      <div className="hero-grid">
        <div data-reveal>
          <div className="availability"><span className="status-dot" />Open to opportunities & collaborations</div>
          <h1>Rivaldy<br />Putra <span>Rivly.</span></h1>
          <p className="hero-role">Information Systems · AI · Product Development</p>
          <p className="hero-description">Turning complex problems into thoughtful digital solutions. I’m an Information Systems student at Universitas Indonesia, working across AI, data, and technology for learning.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={16} /></a>
            <a className="button" href="/downloads/CV-Rivaldy-Rivly.docx" download>Download CV <ArrowDownToLine size={15} /></a>
          </div>
          <div className="social-links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={11} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={11} /></a>
          </div>
        </div>
        <div className="portrait-wrap" data-reveal data-delay="120">
          <div className="portrait-outline" aria-hidden="true" />
          <motion.div className="portrait-card" style={{ rotateX: reducedMotion ? 0 : rotateX, rotateY: reducedMotion ? 0 : rotateY }}
            onPointerMove={(event) => {
              if (reducedMotion || event.pointerType !== "mouse") return;
              const rect = event.currentTarget.getBoundingClientRect();
              rotateX.set((.5 - (event.clientY - rect.top) / rect.height) * 5);
              rotateY.set(((event.clientX - rect.left) / rect.width - .5) * 5);
            }}
            onPointerLeave={() => { rotateX.set(0); rotateY.set(0); }}>
            <Image src="/images/rivaldy-photo.jpeg" alt="Rivaldy Putra Rivly standing by the Singapore River" fill sizes="(max-width: 760px) 90vw, 520px" preload className="portrait-photo" />
            <div className="portrait-shade" aria-hidden="true" />
            <div className="portrait-caption"><div><p>A curious mind. A global perspective.</p><span>JAKARTA, INDONESIA</span></div><MapPin size={20} /></div>
          </motion.div>
          <div className="portrait-note"><span>Always learning. Always building.</span><span>01 / Profile</span></div>
        </div>
      </div>
      <div className="hero-bottom" data-reveal>
        <div className="hero-stat"><strong>UI</strong><span>Information Systems<br />Universitas Indonesia</span></div>
        <div className="hero-stat"><strong>2nd</strong><span>Samsung Solve<br />for Tomorrow Indonesia</span></div>
        <div className="hero-stat"><strong>Top 30</strong><span>UI Hackathon 2026<br />FindR Team · rangkAI</span></div>
        <a className="scroll-cue" href="#about">Scroll to discover <ArrowDown size={16} /></a>
      </div>
    </section>
  );
}

