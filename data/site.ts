import type { LucideIcon } from "lucide-react";
import {
  Atom,
  BarChart3,
  BrainCircuit,
  GraduationCap,
  LineChart,
  Microscope,
  Sparkles,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "UI", label: "Information Systems Student" },
  { value: "AI", label: "Data + Research Mindset" },
  { value: "Bio", label: "Bioinformatics-inspired Brand" },
  { value: "🌍", label: "Global Exposure" },
];

export const focusAreas: {
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Computational Biology",
    desc: "Turning biological signals into readable, structured insights.",
    icon: Atom,
  },
  {
    title: "Sequence & Pattern Analysis",
    desc: "Using logic, statistics, and ML to detect patterns in complex data.",
    icon: Microscope,
  },
  {
    title: "AI for Learning Systems",
    desc: "Building smarter tools that improve how students learn and retain.",
    icon: BrainCircuit,
  },
  {
    title: "Research Communication",
    desc: "Presenting work with clarity, visuals, and measurable outcomes.",
    icon: Workflow,
  },
];

export const projects = [
  {
    title: "Keyword RGB",
    subtitle: "AI Learning Companion",
    summary:
      "Award-winning platform with structured note-taking, gamification, and GPT-assisted learning workflows.",
    tags: ["JavaScript", "Python", "OpenAI API", "UX Research"],
    highlight: "Samsung Solve for Tomorrow — 2nd Place",
    accent: "from-cyan-500/25 to-sky-500/10",
  },
  {
    title: "AI Contact Prediction",
    subtitle: "Research Prototype",
    summary:
      "Deep learning exploration for predicting spatiotemporal contact points in video sequences.",
    tags: ["PyTorch", "Temporal Modeling", "Research", "Vision"],
    highlight: "ETH Zurich-inspired research theme",
    accent: "from-sky-500/20 to-cyan-500/10",
  },
  {
    title: "Education Data Tools",
    subtitle: "Student Analytics",
    summary:
      "A portfolio direction focused on data-informed education, dashboards, and personalized support.",
    tags: ["Data Science", "Dashboard", "Analytics", "Next.js"],
    highlight: "Personalized learning angle",
    accent: "from-teal-500/20 to-cyan-500/10",
  },
];

export const experience = [
  {
    period: "2026 — Present",
    role: "SAT Tutor",
    org: "Kobi Education",
    desc: "Mentoring students and translating complex exam material into clear learning plans.",
  },
  {
    period: "2025 — 2026",
    role: "Product Development Intern",
    org: "IEG, California, USA",
    desc: "Maintaining responsive web features and helping shape a better digital product experience.",
  },
  {
    period: "2024 — 2024",
    role: "Project Manager Trainee",
    org: "BEM Fasilkom UI",
    desc: "Managing digital project goals, scope, timelines, and cross-functional coordination.",
  },
  {
    period: "2024 — 2025",
    role: "Leadership & Research Track",
    org: "ILiAS / STEM / Global Programs",
    desc: "Combining international leadership, education impact, and structured research thinking.",
  },
];

export const skillGroups = [
  {
    name: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "C", "C++", "Java"],
    icon: LineChart,
  },
  {
    name: "AI & Data",
    items: ["Machine Learning", "Deep Learning", "Data Analysis", "Visualization", "Research"],
    icon: BarChart3,
  },
  {
    name: "Design & Product",
    items: ["Figma", "Canva", "UI/UX", "Product Thinking", "Presentation"],
    icon: Sparkles,
  },
  {
    name: "Tools",
    items: ["Next.js", "Tailwind", "Django", "Flutter", "Git", "GitHub"],
    icon: GraduationCap,
  },
];