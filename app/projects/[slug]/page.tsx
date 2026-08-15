import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/constants/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = PROJECTS.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-5">
        <div className="text-center">
          <h1 className="font-editorial text-3xl sm:text-4xl">
            Project not found
          </h1>

          <Link
            href="/#projects"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--accent)]"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">

      {/* =========================================================
          BACK TO PROJECTS
      ========================================================= */}

      <div
        className="
          mx-auto
          max-w-[1400px]
          px-5
          pt-6

          sm:px-6
          sm:pt-8

          md:px-10
          md:pt-10
        "
      >
        <Link
          href="/#projects"
          className="
            group
            inline-flex
            items-center
            gap-2
            text-xs
            text-[var(--foreground-secondary)]
            transition-colors
            duration-300
            hover:text-[var(--foreground)]

            sm:text-sm
          "
        >
          <ArrowLeft
            size={15}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          Back to Projects
        </Link>
      </div>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="
          mx-auto
          max-w-[1400px]
          px-5
          pb-16
          pt-12

          sm:px-6
          sm:pb-20
          sm:pt-14

          md:px-10
          md:pb-28
          md:pt-20
        "
      >
        <div
          className="
            grid
            items-center
            gap-10

            sm:gap-12

            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20
          "
        >

          {/* LEFT — PROJECT INFORMATION */}

          <div className="max-w-[650px]">

            {/* Eyebrow */}
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[var(--accent)]

                sm:text-xs
                sm:tracking-[0.28em]
              "
            >
              {project.eyebrow}
            </p>


            {/* Title */}
            <h1
              className="
                mt-4
                max-w-[700px]
                font-editorial
                text-[42px]
                leading-[0.95]
                tracking-[-0.04em]

                sm:mt-5
                sm:text-5xl

                md:text-6xl

                lg:mt-6
                lg:text-7xl
              "
            >
              {project.title}
            </h1>


            {/* Description */}
            <p
              className="
                mt-6
                max-w-[620px]
                text-sm
                leading-6
                text-[var(--foreground-secondary)]

                sm:mt-7
                sm:text-base
                sm:leading-7

                md:mt-8
                md:text-lg
                md:leading-8
              "
            >
              {project.description}
            </p>


            {/* Technologies */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-1.5

                sm:mt-8
                sm:gap-2
              "
            >
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-[var(--border)]
                    bg-white/[0.02]
                    px-2.5
                    py-1.5
                    text-[10px]
                    text-[var(--foreground-secondary)]
                    transition-all
                    duration-300
                    hover:border-[var(--accent)]
                    hover:text-[var(--foreground)]

                    sm:px-3
                    sm:text-xs
                  "
                >
                  {technology}
                </span>
              ))}
            </div>


            {/* GitHub / Demo */}
            {(project.github || project.demo) && (
              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-2.5

                  sm:mt-10
                  sm:gap-3
                "
              >

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[var(--accent)]
                      px-5
                      py-3
                      text-xs
                      font-medium
                      text-black
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_12px_30px_rgba(214,180,102,0.2)]

                      sm:px-7
                      sm:py-3.5
                      sm:text-sm
                    "
                  >
                    GitHub

                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>
                )}


                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[var(--border)]
                      bg-[var(--surface)]
                      px-5
                      py-3
                      text-xs
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[var(--accent)]

                      sm:px-7
                      sm:py-3.5
                      sm:text-sm
                    "
                  >
                    Live Demo

                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>
                )}

              </div>
            )}

          </div>


          {/* RIGHT — PROJECT IMAGE */}

          <div
            className="
              relative
              flex
              items-center
              justify-center

              lg:justify-end
            "
          >

            {/* Ambient glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                -z-10
                h-[220px]
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[var(--accent)]
                opacity-[0.035]
                blur-[80px]

                sm:h-[280px]
                sm:w-[280px]

                md:h-[300px]
                md:w-[300px]
                md:blur-[100px]
              "
            />

            <img
              src={project.image}
              alt={project.title}
              className="
                block
                h-auto
                max-h-[430px]
                w-auto
                max-w-full
                object-contain
                transition-transform
                duration-700
                hover:scale-[1.015]

                sm:max-h-[500px]

                md:max-h-[560px]

                lg:max-h-[600px]
              "
            />

          </div>

        </div>
      </section>


      {/* =========================================================
          CASE STUDY CONTENT
      ========================================================= */}

      <section
        className="
          border-t
          border-[var(--border)]
        "
      >
        <div
          className="
            mx-auto
            max-w-[1400px]
            px-5

            sm:px-6

            md:px-10
          "
        >

          <CaseStudySection
            number="01"
            title="Overview"
          >
            <p>{project.overview}</p>
          </CaseStudySection>


          <CaseStudySection
            number="02"
            title="The Problem"
          >
            <p>{project.problem}</p>
          </CaseStudySection>


          <CaseStudySection
            number="03"
            title="The Approach"
          >
            <p>{project.approach}</p>
          </CaseStudySection>


          <CaseStudySection
            number="04"
            title="Engineering"
          >
            <ul className="space-y-3">
              {project.engineering.map((item, index) => (
                <li
                  key={`${project.slug}-engineering-${index}`}
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  <span
                    className="
                      mt-[9px]
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[var(--accent)]
                    "
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>


          <CaseStudySection
            number="05"
            title="Result"
          >
            <p>{project.result}</p>
          </CaseStudySection>


          {/* =====================================================
              FINAL CTA
          ===================================================== */}

          <div
            className="
              py-12

              sm:py-16

              md:py-24
            "
          >
            <div
              className="
                flex
                flex-col
                gap-6
                rounded-[22px]
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-6

                sm:rounded-[24px]
                sm:p-8

                md:gap-8
                md:flex-row
                md:items-center
                md:justify-between
                md:p-10
              "
            >

              <div>
                <h2
                  className="
                    font-editorial
                    text-[28px]
                    leading-tight

                    sm:text-3xl

                    md:text-4xl
                  "
                >
                  Interested in more?
                </h2>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[var(--foreground-secondary)]

                    sm:mt-3
                    sm:text-base
                  "
                >
                  Explore more of my engineering projects.
                </p>
              </div>


              <Link
                href="/#projects"
                className="
                  group
                  inline-flex
                  w-full
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[var(--accent)]
                  px-6
                  py-3
                  text-xs
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(214,180,102,0.2)]

                  sm:w-auto
                  sm:px-7
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Back to Projects

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}


/* =============================================================
   CASE STUDY SECTION
============================================================= */

function CaseStudySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        grid
        gap-5
        border-b
        border-[var(--border)]
        py-10

        sm:gap-7
        sm:py-12

        md:grid-cols-[180px_1fr]
        md:gap-12
        md:py-16

        lg:grid-cols-[300px_1fr]
        lg:gap-16
      "
    >

      {/* Left */}
      <div>
        <p
          className="
            text-[10px]
            font-medium
            tracking-[0.2em]
            text-[var(--accent)]

            sm:text-xs
          "
        >
          {number}
        </p>

        <h2
          className="
            mt-2
            font-editorial
            text-[28px]
            leading-tight

            sm:text-3xl

            md:mt-3
            md:text-4xl
          "
        >
          {title}
        </h2>
      </div>


      {/* Right */}
      <div
        className="
          max-w-[800px]
          text-sm
          leading-7
          text-[var(--foreground-secondary)]

          sm:text-base
          sm:leading-7

          md:text-lg
          md:leading-8
        "
      >
        {children}
      </div>

    </div>
  );
}