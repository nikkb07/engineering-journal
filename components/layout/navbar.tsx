"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/constants/navigation";
import ThemeToggle from "./theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-50
        mx-3
        h-16
        w-auto
        rounded-full
        border
        border-[var(--border)]
        bg-[var(--surface)]/90
        backdrop-blur-xl

        sm:mx-4
        sm:h-18

        lg:mx-8
        lg:h-20
      "
    >
      <div
        className="
          flex
          h-full
          items-center
          justify-between
          px-4

          sm:px-5

          lg:px-8
        "
      >

        {/* =====================================================
            BRAND
        ====================================================== */}

        <div className="flex min-w-0 items-center gap-3 sm:gap-4">

          {/* N LOGO */}
          <a
            href="#home"
            aria-label="Go to home"
            className="
              group
              relative
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              border-[var(--border)]
              font-editorial
              text-lg
              font-semibold
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[var(--accent)]
              hover:bg-[var(--accent)]
              hover:text-black
              hover:shadow-[0_10px_35px_rgba(214,180,102,0.18)]

              sm:h-11
              sm:w-11
              sm:text-xl

              lg:h-12
              lg:w-12
            "
          >
            {/* N */}
            <span
              className="
                relative
                z-10
                font-editorial
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              N
            </span>

            {/* Shine sweep */}
            <span
              className="
                pointer-events-none
                absolute
                bottom-0
                left-[-80%]
                top-0
                w-[45%]
                -skew-x-[20deg]
                bg-gradient-to-r
                from-transparent
                via-white/70
                to-transparent
                opacity-0
                transition-all
                duration-700
                group-hover:left-[140%]
                group-hover:opacity-100
              "
            />
          </a>

          {/* BRAND TEXT */}
          <div className="group flex min-w-0 flex-col">

            {/* Website name */}
            <div className="relative inline-block">

              <p
                className="
                  relative
                  z-10
                  whitespace-nowrap
                  font-editorial
                  text-[12px] sm:text-[15px]
                  leading-none
                  tracking-[-0.02em]
                  text-[var(--foreground)]
                  transition-colors
                  duration-300
                  group-hover:text-[var(--accent)]

                  sm:text-[17px]

                  lg:text-[18px]
                "
              >
                The Engineering Journal
              </p>

              {/* Gold shine */}
              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-[-100%]
                  top-0
                  w-[45%]
                  -skew-x-[20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:left-[160%]
                  group-hover:opacity-100
                "
              />
            </div>

            {/* Byline */}
            <div className="mt-1.5 flex items-center gap-2 sm:mt-2 sm:gap-3">

              {/* Left line */}
              <span
                className="
                  h-px
                  w-6
                  bg-[var(--accent)]
                  opacity-70
                  transition-all
                  duration-300
                  group-hover:w-8
                  group-hover:opacity-100

                  sm:w-8
                  sm:group-hover:w-10
                "
              />

              <span
                className="
                  text-[7px] sm:text-[10px]
                  uppercase
                  tracking-[0.32em]
                  text-[var(--foreground-secondary)]
                  transition-colors
                  duration-300
                  group-hover:text-[var(--accent)]

                  sm:text-[10px]
                  sm:tracking-[0.38em]
                "
              >
                by Nikhil
              </span>

              {/* Right line */}
              <span
                className="
                  h-px
                  w-6
                  bg-[var(--accent)]
                  opacity-70
                  transition-all
                  duration-300
                  group-hover:w-8
                  group-hover:opacity-100

                  sm:w-8
                  sm:group-hover:w-10
                "
              />

            </div>
          </div>
        </div>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                text-sm
                text-[var(--foreground)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:text-[var(--accent)]
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">

          {/* Theme */}
          <ThemeToggle />

          {/* Desktop Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              items-center
              justify-center
              rounded-full
              bg-[var(--accent)]
              px-5
              py-2.5
              text-sm
              font-medium
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_10px_30px_rgba(214,180,102,0.2)]

              lg:inline-flex
              lg:px-6
              lg:py-3
            "
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              text-[var(--foreground)]
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]

              lg:hidden
            "
          >
            {mobileMenuOpen ? (
              <X size={18} strokeWidth={1.6} />
            ) : (
              <Menu size={18} strokeWidth={1.6} />
            )}
          </button>

        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-0
              right-0
              top-[calc(100%+8px)]
              overflow-hidden
              rounded-[24px]
              border
              border-[var(--border)]
              bg-[var(--surface)]/95
              p-3
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              backdrop-blur-xl

              lg:hidden
            "
          >
            <nav className="flex flex-col">

              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="
                    flex
                    items-center
                    rounded-xl
                    px-4
                    py-3.5
                    text-sm
                    text-[var(--foreground-secondary)]
                    transition-all
                    duration-300
                    hover:bg-white/[0.03]
                    hover:text-[var(--accent)]
                  "
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Mobile Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--accent)]
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                Resume
              </a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}