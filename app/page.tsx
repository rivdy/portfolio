import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Resume from "@/components/resume";
import MotionProvider from "@/components/motion-provider";

export default function Home() {
  return <MotionProvider>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <main id="main-content"><Hero /><Resume /></main>
  </MotionProvider>;
}

