import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { Container } from "./ui/Container";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-14 text-ivory-50 sm:py-20 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(61,94,137,0.35),_transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-faint bg-[size:48px_48px] opacity-25"
      />

      <Container>
        <div className="mb-12 flex flex-col gap-3 sm:mb-14">
          <span className="eyebrow-light">By the numbers</span>
          <h2 className="max-w-2xl font-serif text-display-md font-medium text-balance">
            A track record built one cohort, and one offer, at a time.
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ivory-50/10 bg-ivory-50/[0.04] sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.05 + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-navy-950/60 p-5 sm:p-8"
            >
              <div className="font-serif text-4xl font-medium tracking-tight text-ivory-50 sm:text-5xl md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm font-medium text-gold-400">
                {s.label}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-ivory-200/70">
                {s.detail}
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
