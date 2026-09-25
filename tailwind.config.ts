// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#e2e8f0",
        card: {
          DEFAULT: "rgba(15, 23, 42, 0.72)",
          foreground: "#e2e8f0",
        },
        muted: {
          DEFAULT: "#0f172a",
          foreground: "#94a3b8",
        },
        border: "#1e293b",
        primary: {
          DEFAULT: "#22d3ee",
          foreground: "#020617",
        },
        accent: {
          DEFAULT: "#38bdf8",
          foreground: "#020617",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.22)",
        card: "0 10px 30px rgba(2, 6, 23, 0.35)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at top, rgba(34,211,238,0.18), transparent 32%), radial-gradient(circle at bottom right, rgba(56,189,248,0.12), transparent 28%)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
