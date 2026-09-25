import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rivaldy Putra Rivly | AI, Data & Product",
  description: "Information Systems student at Universitas Indonesia. Explore Rivaldy's work in AI product development, computational research, and education technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

