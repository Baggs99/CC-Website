import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE_IMAGES } from "@/data/siteImages";
import { Container } from "./ui/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-20 pt-32 text-ivory-50 sm:pb-28 sm:pt-36 lg:pb-36 lg:pt-44"
    >
      {/* Evans Hall — see public/images/IMAGE_SOURCES.md */}
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_IMAGES.heroEvansHall.src}
          alt={SITE_IMAGES.heroEvansHall.alt}
          width={2880}
          height={1920}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center sm:object-[center_45%]"
        />
      </div>

      {/* Readability scrims: heavy left column (headline), softer top/right (photo & sky) */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-r from-navy-950/[0.94] via-navy-950/72 to-navy-950/35 sm:from-navy-950/[0.92] sm:via-navy-950/60 sm:to-navy-950/30"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-b from-navy-950/75 via-navy-950/25 to-navy-950/[0.92]"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,_rgba(61,94,137,0.42),_transparent_55%)]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] bg-grid-faint bg-[size:64px_64px] opacity-[0.18] mask-fade-b"
      />

      {/* Noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-noise opacity-[0.22] mix-blend-soft-light"
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-white/15 bg-navy-950/55 px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ivory-50 shadow-[0_8px_40px_rgba(5,14,28,0.55)] backdrop-blur-md sm:gap-3 sm:px-5 sm:py-3 sm:text-[0.7rem] sm:tracking-[0.22em]"
          >
            <span className="hidden h-px w-8 shrink-0 bg-ivory-200/50 sm:block" />
            <span className="drop-shadow-[0_1px_6px_rgba(5,14,28,0.9)]">
              Yale School of Management
            </span>
            <span className="hidden h-1 w-1 shrink-0 rounded-full bg-gold-400 sm:inline-block" />
            <span className="hidden drop-shadow-[0_1px_6px_rgba(5,14,28,0.9)] sm:inline">
              Evans Hall
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="max-w-4xl font-serif text-display-xl font-medium text-balance text-ivory-50 [text-shadow:0_4px_48px_rgba(5,14,28,0.95),0_2px_12px_rgba(0,0,0,0.65)]"
          >
            Yale SOM{" "}
            <span className="relative inline-block">
              Consulting
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-gradient-to-r from-gold-500 via-gold-400 to-transparent"
              />
            </span>{" "}
            <span className="text-ivory-100/90">Club</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="max-w-2xl text-lg leading-relaxed text-ivory-50 text-pretty sm:text-xl [text-shadow:0_2px_24px_rgba(5,14,28,0.88)]"
          >
            We prepare students for consulting careers through structured
            mentorship, rigorous case practice, end-to-end recruiting support,
            and a community that learns — and wins — together.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3"
          >
            <a href="#recruiting" className="btn-primary-light group">
              Recruiting Resources
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#join"
              className="btn border border-ivory-50/40 bg-navy-950/45 px-6 py-3 text-sm font-medium text-ivory-50 shadow-[0_8px_32px_rgba(5,14,28,0.45)] backdrop-blur-md transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-ivory-50/55 hover:bg-navy-950/65 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 group"
            >
              Join the Club
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="https://som.yale.edu/programs/mba/admissions/mba-admissions-events"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-ivory-50/30 bg-white/10 px-6 py-3 text-sm font-medium text-ivory-50 shadow-[0_4px_24px_rgba(5,14,28,0.35)] backdrop-blur-md transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-ivory-50/50 hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 group"
            >
              Admissions events
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ivory-50/15 bg-ivory-50/5 shadow-glow backdrop-blur-md sm:mt-16 sm:grid-cols-4"
          >
            {[
              { k: "Mentorship", v: "1:1 with senior casers" },
              { k: "Casing", v: "Frameworks → MBB-ready" },
              { k: "Recruiting", v: "Real timelines, real prep" },
              { k: "Community", v: "Cohort-led, alumni-backed" },
            ].map((item) => (
              <div
                key={item.k}
                className="bg-navy-950/40 px-5 py-5 sm:px-6 sm:py-6"
              >
                <div className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold-400">
                  {item.k}
                </div>
                <div className="mt-2 text-sm text-ivory-100/90 sm:text-base">
                  {item.v}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-ivory-200/55 lg:flex"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ivory-200/50 to-transparent" />
      </motion.div>
    </section>
  );
}
