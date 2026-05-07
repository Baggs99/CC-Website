import { motion } from "framer-motion";
import { SITE_IMAGES } from "@/data/siteImages";
import { Container } from "./ui/Container";

const missionPhrases = [
  { text: "an inclusive, collaborative, and fun environment", highlight: true },
  { text: " that " },
  { text: "educates students about diverse opportunities within consulting" },
  { text: ", " },
  { text: "prepares members for consulting careers", highlight: true },
  { text: ", and " },
  {
    text: "champions the SOM community to the consulting industry",
  },
  { text: "." },
];

export function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden bg-ivory-50 py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-navy-900/15 to-transparent"
      />

      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <figure className="group relative overflow-hidden rounded-2xl shadow-elevated ring-1 ring-navy-900/[0.08]">
              <div className="relative aspect-[4/5] min-h-[22rem] sm:min-h-[28rem]">
                <img
                  src={SITE_IMAGES.missionCampusLife.src}
                  alt={SITE_IMAGES.missionCampusLife.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent"
                />
              </div>
              <figcaption className="border-t border-navy-900/[0.08] bg-white px-5 py-4 text-xs leading-relaxed text-navy-700/80">
                Student life at Evans Hall: the daily backdrop for how we work,
                learn, and support one another.
              </figcaption>
            </figure>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Our Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-serif text-display-md font-medium text-navy-900 text-balance"
            >
              A community built on rigor, generosity, and shared ambition.
            </motion.h2>

            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-10"
            >
              <span
                aria-hidden
                className="absolute -left-3 -top-10 select-none font-serif text-[8rem] leading-none text-navy-900/[0.08] sm:-left-6 sm:text-[10rem]"
              >
                “
              </span>
              <blockquote className="relative font-serif text-xl font-medium leading-[1.38] text-navy-900 text-pretty sm:text-2xl sm:leading-[1.35] lg:text-[2.1rem] lg:leading-[1.3]">
                The mission of the Yale SOM Consulting Club is to create{" "}
                {missionPhrases.map((phrase, i) => (
                  <span
                    key={i}
                    className={
                      phrase.highlight
                        ? "relative inline bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent"
                        : "text-navy-800/85"
                    }
                  >
                    {phrase.text}
                  </span>
                ))}
              </blockquote>

              <figcaption className="mt-10 flex items-center gap-4">
                <span className="h-px w-10 bg-navy-900/30" />
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-navy-700/70">
                  Yale SOM Consulting Club
                </span>
              </figcaption>
            </motion.figure>

            <div className="mt-16 grid gap-6 border-t border-navy-900/10 pt-10 sm:grid-cols-3">
              {[
                {
                  k: "Inclusive",
                  v: "Built for every background, every recruiting goal.",
                },
                {
                  k: "Rigorous",
                  v: "Honest preparation, structured feedback, real outcomes.",
                },
                {
                  k: "Connected",
                  v: "An alumni network across firms, geographies, and practices.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.k}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-navy-700/70">
                    {p.k}
                  </div>
                  <div className="mt-3 text-base text-navy-800 text-pretty">
                    {p.v}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
