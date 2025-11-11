'use client'

import HeroSection from "./components/hero.js";
import AboutMe from "./about/page.js";
import Projects from "./projects/page.js";
import AppShell from "./layout/AppShell/page.js";
import Contact from "./contact/page.js";

export default function Home() {
  return (
    <AppShell hideFooter>
      <div className="font-sans">
        <HeroSection/>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </div>
    </AppShell>
  );
}
