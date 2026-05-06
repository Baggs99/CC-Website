import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { leadership } from "@/data/leadership";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="relative bg-ivory-50 py-24 sm:py-32"
    >
      <Container>
        <SectionHeader
          eyebrow="Leadership"
          title="Led by students who recently sat where you are."
          description="Our board is elected each year from second-year SOM students currently recruiting and working at top consulting firms."
        />

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {leadership.map((leader, i) => (
            <motion.li
              key={`${leader.role}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <article className="card card-hover overflow-hidden">
                {/* Portrait placeholder */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-900">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,94,137,0.55),_transparent_60%),linear-gradient(180deg,#0a1a2f,#10223d)]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-grid-faint bg-[size:36px_36px] opacity-[0.25] mask-fade-b"
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-serif text-5xl font-medium text-ivory-50/85 transition-transform duration-700 ease-out-expo group-hover:scale-105">
                      {leader.initials}
                    </span>
                  </div>
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ivory-50/10 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-ivory-100 ring-1 ring-inset ring-ivory-50/15 backdrop-blur">
                    <span className="h-1 w-1 rounded-full bg-gold-500" />
                    Board
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-lg font-medium text-navy-900">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm text-navy-700/80">
                    {leader.role}
                  </p>

                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${leader.name} on LinkedIn`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-3 py-1.5 text-xs font-medium text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/40 hover:bg-navy-900 hover:text-ivory-50"
                  >
                    <Linkedin size={13} strokeWidth={1.8} />
                    LinkedIn
                  </a>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-sm text-navy-700/75">
          Headshots and full bios are kept up-to-date by the incoming board each
          fall. Image placeholders make it easy for future leadership to swap
          portraits without touching code.
        </p>
      </Container>
    </section>
  );
}
