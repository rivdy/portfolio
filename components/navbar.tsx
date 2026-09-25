"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href)).filter((item): item is Element => !!item);
    let frame = 0;
    const updateActive = () => {
      frame = 0;
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * .35) current = `#${section.id}`;
      }
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateActive); };
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    };
    const resize = () => { if (window.innerWidth > 760) setOpen(false); };
    window.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("keydown", escape); window.removeEventListener("resize", resize); };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#top" className="wordmark" aria-label="Rivaldy, back to top"><span className="monogram">rr.</span>rivaldy<span style={{ color: "var(--accent)", marginLeft: -10 }}>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a className="nav-link" key={item.href} href={item.href} aria-current={active === item.href ? "location" : undefined}>{item.label}{active === item.href && <motion.span layoutId="active-section" className="nav-indicator" />}</a>)}
        </nav>
        <a href="#contact" className="nav-contact">Let’s connect <ArrowUpRight size={16} /></a>
        <button ref={toggle} type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={open ? "mobile-navigation" : undefined} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      <AnimatePresence initial={false}>
        {open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .15 }}>
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        </motion.nav>}
      </AnimatePresence>
      <motion.div className="progress-track" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
    </header>
  );
}

