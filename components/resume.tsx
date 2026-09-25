import { ArrowDownToLine, ArrowUpRight, ArrowUp, Atom, Award, BrainCircuit, GraduationCap, Mail, Microscope, Sparkles } from "lucide-react";
import { achievements, education, experience, focusAreas, leadership, profile, projects, skillGroups } from "@/data/site";

function Heading({ number, label, title, description }: { number: string; label: string; title: string; description: string }) {
  return <div className="section-head" data-reveal><div><p className="eyebrow">{number} / {label}</p><h2 className="section-title">{title}</h2></div><p className="section-intro">{description}</p></div>;
}

export default function Resume() {
  const projectIcons = [BrainCircuit, Atom, Microscope, Sparkles];
  return <div className="container">
    <section id="about" className="section">
      <Heading number="02" label="A little about me" title="Curiosity meets purpose." description="From learning platforms to computational research, I enjoy bringing structure to complex ideas and turning them into useful work." />
      <div className="about-grid">
        <div data-reveal><p className="body-copy">I’m <strong>Rivaldy Putra Rivly</strong>, an Information Systems student at <strong>Universitas Indonesia</strong> with an interest in AI product development, data analytics, and education technology.</p><p className="body-copy">My experience connects hands-on development with product thinking: building an award-winning learning companion, exploring molecular docking, and coordinating teams and partnerships at BEM Fasilkom UI.</p><a className="text-link" href="#experience">Follow my journey <ArrowUpRight size={15} /></a></div>
        {education.map((item) => <article key={item.school} id="education" className="education-card" data-reveal data-delay="100"><div className="education-meta"><span className="meta">{item.period}</span><GraduationCap size={23} /></div><h3>{item.school}</h3><p>{item.degree}</p><p className="education-detail">{item.detail}</p></article>)}
      </div>
      <div id="focus" style={{ paddingTop: 42 }} data-reveal>
        <p className="subheading">Areas I work in</p>
        <div className="skills-grid">{focusAreas.map((item) => <article key={item.title} className="skill-group"><item.icon size={21} /><h3>{item.title}</h3><p className="timeline-desc">{item.desc}</p></article>)}</div>
      </div>
    </section>
    <section id="projects" className="section">
      <Heading number="03" label="Selected work" title="Ideas put into practice." description="A selection of projects across applied AI, computational research, and education. Built through experimentation, collaboration, and a lot of curiosity." />
      <div className="project-grid">
        {projects.map((project, index) => {
          const Icon = projectIcons[index % projectIcons.length];
          return <article className="project-card" key={project.title} data-reveal data-delay={(index % 2) * 80}>
            <div className="project-top"><span className="project-symbol"><Icon size={21} /></span><span className="meta">Project / 0{index + 1}</span></div>
            <h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-summary">{project.summary}</p>
            <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            <p className="project-highlight"><Award size={14} />{project.highlight}</p>
            {project.details && <details className="project-details"><summary>Contributions & outcomes<span className="sr-only"> for {project.title}</span></summary><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></details>}
          </article>;
        })}
      </div>
    </section>
    <section id="experience" className="section">
      <Heading number="04" label="Experience & leadership" title="Learning through doing." description="Building products, collaborating across disciplines, and taking responsibility for work that connects technology with people." />
      <p className="subheading" data-reveal>Professional experience</p>
      {experience.map((item) => <article key={item.role} className="timeline-row" data-reveal><p className="meta">{item.period}</p><div><h3>{item.role}</h3><p className="timeline-org">{item.org}</p></div><p className="timeline-desc">{item.desc}</p></article>)}
      <p className="subheading" data-reveal>Leadership & community</p>
      {leadership.map((item) => <article key={item.role} className="timeline-row" data-reveal><p className="meta">{item.period}</p><div><h3>{item.role}</h3><p className="timeline-org">{item.org}</p></div><p className="timeline-desc">{item.desc}</p></article>)}
    </section>
    <section id="skills" className="section">
      <Heading number="05" label="Skills & recognition" title="The tools behind the work." description="A foundation in programming and data, supported by product development, research, and communication." />
      <div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-group" key={group.name} data-reveal data-delay={index * 60}><group.icon size={23} /><h3>{group.name}</h3><div className="tags">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></article>)}</div>
      <div className="awards-list">{achievements.map((item) => <article className="award" key={item.title} data-reveal><Award size={20} /><div><h3>{item.title}{item.year ? ` · ${item.year}` : ""}</h3><p>{item.detail}</p></div></article>)}</div>
    </section>
    <section id="contact" className="contact-section" data-reveal>
      <p className="eyebrow">06 / What’s next?</p>
      <div className="contact-grid"><div><h2>Good work starts<br />with a <span>conversation.</span></h2><p className="body-copy">Have an opportunity, a research idea, or a project in mind? I’d love to hear about it.</p></div>
        <div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={16} />Let’s talk <ArrowUpRight size={17} /></a><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={14} /></a><a className="text-link" href="/downloads/CV-Rivaldy-Rivly.docx" download>Download full CV <ArrowDownToLine size={14} /></a></div>
      </div>
    </section>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Rivaldy Putra Rivly</span><span>{profile.location}</span><a href="#top">Back to top <ArrowUp size={13} /></a></footer>
  </div>;
}

