import type { LucideIcon } from "lucide-react";
import {
  Atom,
  BarChart3,
  BrainCircuit,
  GraduationCap,
  LineChart,
  Sparkles,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Rivaldy Putra Rivly",
  email: "rivaldy.rivly@gmail.com",
  linkedin: "https://www.linkedin.com/in/rivaldy-putra-r-80ba0b236/",
  github: "https://github.com/rivdy",
  location: "East Jakarta, Indonesia",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "Top 30", label: "UI Hackathon 2026" },
  { value: "2nd", label: "Samsung Solve for Tomorrow" },
  { value: "6.5×", label: "Faster docking pipeline" },
  { value: "3.51", label: "GPA · Universitas Indonesia" },
];

export const focusAreas: {
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Applied AI",
    desc: "Predictive models and language-based tools for practical research and product challenges.",
    icon: BrainCircuit,
  },
  {
    title: "Computational Research",
    desc: "Reproducible workflows for molecular docking and human–object contact prediction.",
    icon: Atom,
  },
  {
    title: "Education Technology",
    desc: "Learning companions and digital experiences that support students and teachers.",
    icon: GraduationCap,
  },
  {
    title: "Product & Partnerships",
    desc: "Connecting product, design, engineering, and business teams to deliver useful digital products.",
    icon: Workflow,
  },
];

type Project = {
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  highlight: string;
  accent: string;
  details?: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "rangkAI",
    subtitle: "AI Formulation Co-Pilot · Sep 2026",
    summary:
      "Co-developed an AI copilot for cosmetics R&D in a 24-hour hackathon, combining formulation prediction with root-cause analysis.",
    tags: ["Random Forest", "LLM", "NLP", "Workflow Automation"],
    highlight: "Top 30 · UI Hackathon 2026 · FindR Team",
    accent: "from-cyan-500/25 to-sky-500/10",
    details: [
      "Built a Random Forest model to predict formulas from historical formulation data, alongside an LLM copilot for root-cause analysis and NLP-driven CAPA text analysis.",
      "Contributed to database structuring, workflow automation, predictive modeling, and the business pitch deck.",
    ],
  },
  {
    title: "TropicDock",
    subtitle: "Computational Docking Pipeline · 2026",
    summary:
      "Built an end-to-end molecular docking pipeline with AutoDock Vina and AlphaFold to investigate phytochemical–protein binding affinity.",
    tags: ["AutoDock Vina", "AlphaFold", "WSL2", "Research"],
    highlight: "6.5× faster runtime · 76% lower RAM usage",
    accent: "from-teal-500/20 to-cyan-500/10",
    details: [
      "Studied carpaine binding to DENV-2 protease and charantin binding to DPP-4, with the full pipeline running on WSL2 Ubuntu.",
      "Measured runtime and memory improvements against GUI-based docking tools.",
      "Co-authored an IEEE-formatted research paper using the IMRAD structure for the Fasilkom UI GEMASTIK XVIII 2026 submission.",
    ],
  },
  {
    title: "AI Contact Prediction",
    subtitle: "ETH Zurich · Oct 2025–Jan 2026",
    summary:
      "Developed a deep learning model to predict spatiotemporal contact points across 20 video sequences in a remote research project.",
    tags: ["Deep Learning", "TCN", "Transformers", "Computer Vision"],
    highlight: "Human–object interaction · 20 video sequences",
    accent: "from-sky-500/20 to-cyan-500/10",
    details: [
      "Explored Temporal Convolutional Networks and Transformer-based approaches to analyze motion patterns and forecast human–object contact events.",
      "Processed visual data and evaluated model behavior to support contact prediction research.",
    ],
  },
  {
    title: "Keyword RGB",
    subtitle: "AI Learning Companion · Mar 2023–May 2024",
    summary:
      "Co-founded and developed an AI learning companion for classroom feedback, automated note-taking, and educational assistance.",
    tags: ["Python", "JavaScript", "OpenAI API", "EdTech"],
    highlight: "2nd place · Samsung Solve for Tomorrow · 309 teams",
    accent: "from-cyan-500/25 to-sky-500/10",
    details: [
      "Built a web-based learning platform using HTML, CSS, JavaScript, Python, and the OpenAI API.",
      "Designed features to address literacy challenges and support responsible AI adoption in Indonesian classrooms.",
      "Secured second place in Samsung Solve for Tomorrow Indonesia among 309 national teams.",
    ],
  },
];

export const experience = [
  {
    period: "Dec 2025–Feb 2026",
    role: "Product Development Intern",
    org: "IEG Global Association · San Francisco / Remote",
    desc: "Developed digital learning features, organized program and learning content into clear workflows, and improved website accessibility and navigation using HTML, CSS, and JavaScript.",
  },
  {
    period: "Mar 2023–May 2024",
    role: "Co-Founder / Product Developer",
    org: "Keyword RGB · Jakarta",
    desc: "Co-developed an AI learning chatbot and web platform to improve teacher–student interaction, classroom feedback, and automated note-taking. Earned second place in Samsung Solve for Tomorrow Indonesia.",
  },
];

export const leadership = [
  {
    period: "Jan 2026–Present",
    role: "Head of Business & Partnership Bureau",
    org: "BEM Fasilkom UI · BISMIT",
    desc: "Lead business development, partnerships, marketing, merchandise, and IT project initiatives. Coordinate product, design, engineering, and marketing teams to deliver digital products and client projects.",
  },
  {
    period: "May–Sep 2024",
    role: "Participant / Project Lead",
    org: "International Leadership in Action Summit",
    desc: "Led a Health & Nutrition project addressing stunting in Indonesia and collaborated on social startup ideas aligned with the UN Sustainable Development Goals. Participated in field learning at NUS and IIUM in Singapore and Malaysia.",
  },
];

export const education = [
  {
    school: "Universitas Indonesia",
    degree: "Bachelor’s Degree in Information Systems",
    period: "Jun 2024–Present",
    detail:
      "GPA 3.51 · BSI Unggulan Scholarship, first-batch fully funded awardee. Coursework includes Programming, Database Systems, Statistics, Business Process, and Project Management.",
  },
];

export const achievements = [
  {
    title: "Top 30 · UI Hackathon",
    detail: "FindR Team · rangkAI AI Formulation Co-Pilot, developed in 24 hours.",
    year: "2026",
  },
  {
    title: "2nd Place · Samsung Solve for Tomorrow",
    detail: "Keyword RGB · Selected among 309 national teams in Indonesia.",
    year: "",
  },
  {
    title: "BSI Unggulan Scholarship",
    detail: "First-batch awardee · Fully funded undergraduate scholarship.",
    year: "",
  },
];

export const skillGroups = [
  {
    name: "Programming & Web",
    items: ["Python", "SQL", "JavaScript", "HTML/CSS", "Django", "Flutter"],
    icon: LineChart,
  },
  {
    name: "AI & Research",
    items: ["Machine Learning", "Deep Learning", "Random Forest", "NLP", "AutoDock Vina", "AlphaFold"],
    icon: BarChart3,
  },
  {
    name: "Product & Tools",
    items: ["Figma", "Canva", "Excel", "PowerPoint", "Git/GitHub", "Project Management"],
    icon: Sparkles,
  },
  {
    name: "Languages",
    items: ["Indonesian · Native", "English · Professional working proficiency"],
    icon: GraduationCap,
  },
];
