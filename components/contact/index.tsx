"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 md:py-32"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-5
          sm:px-6
          md:px-12
          lg:px-20
        "
      >
        <SectionHeading
          eyebrow="Let's Connect"
          title="Have something worth building?"
          description="I'm always interested in discussing software, engineering problems, interesting ideas, and opportunities to build something meaningful."
        />

        <div
          className="
            mt-10
            grid
            gap-5

            sm:mt-12
            sm:gap-6

            md:mt-14

            lg:mt-16
            lg:grid-cols-[1.3fr_0.7fr]
          "
        >

          {/* Main contact card */}
          <div
            className="
              rounded-[24px]
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-6

              sm:rounded-[28px]
              sm:p-8

              md:p-10

              lg:rounded-[32px]
              lg:p-12
            "
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-[var(--accent)]

                sm:text-xs
                sm:tracking-[0.3em]
              "
            >
              Start a conversation
            </p>

            <h3
              className="
                mt-4
                max-w-2xl
                font-editorial
                text-[32px]
                leading-tight

                sm:mt-5
                sm:text-4xl

                md:text-5xl
              "
            >
              Let's talk about your next idea.
            </h3>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-[var(--foreground-secondary)]

                sm:mt-6
                sm:text-base
                sm:leading-8
              "
            >
              Whether it's a software project, engineering opportunity,
              collaboration, or simply a technical conversation, feel free
              to reach out.
            </p>

            <a
              href="mailto:nikhilbundela07@gmail.com"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[var(--accent)]
                px-5
                py-3
                text-xs
                font-medium
                text-black
                transition-transform
                duration-300
                hover:-translate-y-1

                sm:mt-10
                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              Send me an email

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>


          {/* Links */}
          <div className="grid gap-4 sm:gap-5 lg:gap-6">

            {/* Email */}
            <a
              href="mailto:nikhilbundela07@gmail.com"
              className="
                group
                flex
                items-center
                justify-between
                rounded-[22px]
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1

                sm:rounded-[24px]
                sm:p-6

                md:p-7

                lg:rounded-[28px]
              "
            >
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                <Mail
                  size={19}
                  className="shrink-0"
                />

                <div className="min-w-0">
                  <p
                    className="
                      text-xs
                      text-[var(--foreground-secondary)]

                      sm:text-sm
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-1
                      truncate
                      text-sm

                      sm:text-base
                    "
                  >
                    nikhilbundela07@gmail.com
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={17}
                className="
                  ml-3
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>


            {/* GitHub */}
            <a
              href="https://github.com/nikkb07"
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                items-center
                justify-between
                rounded-[22px]
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1

                sm:rounded-[24px]
                sm:p-6

                md:p-7

                lg:rounded-[28px]
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    text-xs
                    text-[var(--foreground-secondary)]

                    sm:text-sm
                  "
                >
                  GitHub
                </p>

                <p className="mt-1 text-sm sm:text-base">
                  View my repositories
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="
                  ml-3
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nikhil-bundela-b51283345?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                items-center
                justify-between
                rounded-[22px]
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1

                sm:rounded-[24px]
                sm:p-6

                md:p-7

                lg:rounded-[28px]
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    text-xs
                    text-[var(--foreground-secondary)]

                    sm:text-sm
                  "
                >
                  LinkedIn
                </p>

                <p className="mt-1 text-sm sm:text-base">
                  Let's connect
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="
                  ml-3
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}