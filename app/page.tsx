"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Assistant from "@/components/assistant";
import Contact from "@/components/contact";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-[100] px-4 md:px-8 transition-all duration-300 ${
          scrolled ? "pt-0" : "pt-3"
        }`}
      >
        <Navbar />
      </div>

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Assistant />

      <Contact />
    </>
  );
}