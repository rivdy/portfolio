// src/app/page.tsx
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Focus from "@/components/focus";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Focus />
      <Projects />
      <Experience />
      <Skills />
      <Gallery />
      <Contact />
    </main>
  );
}