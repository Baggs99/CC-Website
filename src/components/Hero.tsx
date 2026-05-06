import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
      className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-32 text-ivory-50 sm:pb-28 sm:pt-36 lg:pb-36 lg:pt-44"
    >
      {/* Animated radial gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(61,94,137,0.55),_transparent_60%),radial-gradient(ellipse_at_bottom_right,_rgba(181,142,95,0.18),_transparent_55%),linear-gradient(180deg,#050e1c,#0a1a2f_55%,#10223d)] bg-[length:200%_200%] animate-gradient-pan"
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-faint bg-[size:64px_64px] opacity-[0.35] mask-fade-b"
      />

      {/* Floating soft glow orbs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-navy-500/20 blur-3xl animate-pulse-slow"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-[24rem] w-[24rem] rounded-full bg-gold-500/10 blur-3xl animate-pulse-slow"
      />

      {/* Noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.5] mix-blend-soft-light"
      />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ivory-200/75"
          >
            <span className="h-px w-10 bg-ivory-200/40" />
            <span>Yale School of Management</span>
            <span className="hidden h-1 w-1 rounded-full bg-gold-500 sm:inline-block" />
            <span className="hidden sm:inline">Est. on campus</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-serif text-display-xl font-medium text-balance"
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
            <span className="text-ivory-200/85">Club</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="max-w-2xl text-lg leading-relaxed text-ivory-200/80 text-pretty sm:text-xl"
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
            <a href="#join" className="btn-ghost-light group">
              Join the Club
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Hero meta strip */}
          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ivory-50/10 bg-ivory-50/5 backdrop-blur sm:mt-16 sm:grid-cols-4"
          >
            {[
              { k: "Mentorship", v: "1:1 with senior casers" },
              { k: "Casing", v: "Frameworks → MBB-ready" },
              { k: "Recruiting", v: "Real timelines, real prep" },
              { k: "Community", v: "Cohort-led, alumni-backed" },
            ].map((item) => (
              <div
                key={item.k}
                className="bg-navy-950/30 px-5 py-5 sm:px-6 sm:py-6"
              >
                <div className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold-400">
                  {item.k}
                </div>
                <div className="mt-2 text-sm text-ivory-100/85 sm:text-base">
                  {item.v}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-ivory-200/50 lg:flex"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ivory-200/50 to-transparent" />
      </motion.div>
    </section>
  );
}
