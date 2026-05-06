import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui/Container";

export function JoinCTA() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-navy-950 py-24 text-ivory-50 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(61,94,137,0.4),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(181,142,95,0.18),_transparent_60%)] bg-[length:200%_200%] animate-gradient-pan"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-faint bg-[size:64px_64px] opacity-25 mask-fade-b"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-navy-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl"
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="eyebrow-light">Membership</span>
          <h2 className="mt-6 font-serif text-display-lg font-medium text-balance">
            Join a community that takes consulting recruiting{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              seriously
            </span>
            .
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-200/75 text-pretty sm:text-lg">
            Membership is open to all Yale SOM students. Add your name to the
            roster and we&apos;ll loop you into Bootcamp, office hours, and case
            team matching.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="btn-primary-light group">
              Join the club
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a href="#contact" className="btn-ghost-light">
              Contact the board
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
