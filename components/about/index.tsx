"use client";

import Intro from "./intro";
import AboutGrid from "./about-grid";
import Stats from "./stats";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-12">

        {/* Intro */}
        <Intro />

        {/* Three feature cards */}
        <div className="mt-14">
          <AboutGrid />
        </div>

        {/* Statistics */}
        <div className="mt-10">
          <Stats />
        </div>

        {/* Section divider */}
        <div className="mt-20 h-px w-full bg-[var(--border)]" />

      </div>
    </section>
  );
}