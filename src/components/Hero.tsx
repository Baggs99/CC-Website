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
      className="relative isolate overflow-hidden pb-16 pt-[calc(7.5rem+env(safe-area-inset-top))] text-ivory-50 sm:pb-28 sm:pt-[calc(8.5rem+env(safe-area-inset-top))] lg:pb-36 lg:pt-[calc(10rem+env(safe-area-inset-top))]"
    >
      {/* Evans Hall: see public/images/IMAGE_SOURCES.md */}
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
        className="absolute inset-0 z-[1] bg-gradient-to-r from-navy-950/[0.96] via-navy-950/78 to-navy-950/42 sm:from-navy-950/[0.92] sm:via-navy-950/60 sm:to-navy-950/30"
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
          <motion.h1
            custom={0}
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
            custom={1}
            variants={fadeUp}
            className="max-w-2xl text-base leading-relaxed text-ivory-50 text-pretty sm:text-lg sm:leading-relaxed md:text-xl [text-shadow:0_2px_24px_rgba(5,14,28,0.88)]"
          >
            We prepare students for consulting careers through structured
            mentorship, rigorous case practice, end-to-end recruiting support,
            and a community that learns and wins together.
          </motion.p>

          <motion.div
            custom={2}
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#recruiting"
              className="btn-primary-light group flex min-h-[48px] w-full justify-center sm:w-auto"
            >
              Recruiting Resources
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://som.yale.edu/programs/mba/admissions/mba-admissions-events"
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex min-h-[48px] w-full justify-center border border-ivory-50/30 bg-white/10 px-6 py-3 text-sm font-medium text-ivory-50 shadow-[0_4px_24px_rgba(5,14,28,0.35)] backdrop-blur-md transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-ivory-50/50 hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 sm:w-auto group"
            >
              Admissions events
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
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
