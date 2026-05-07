import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import type { Leader } from "@/data/leadership";
import { leadership } from "@/data/leadership";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

function portraitSrc(photoFile?: string) {
  if (!photoFile) return undefined;
  return `/leadership/${photoFile}`;
}

const presidents = leadership.filter((l) => l.title === "President");
const executiveCommittee = leadership.filter(
  (l) => l.title === "Executive committee",
);

export function Leadership() {
  return (
    <section
      id="leadership"
      className="relative bg-ivory-50 py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeader
          eyebrow="Leadership"
          title="Led by students who recently sat where you are."
          description="Our board is elected each year from second-year SOM students currently recruiting and working at top consulting firms."
        />

        {/* Presidents: dedicated row */}
        <ul
          role="list"
          className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
        >
          {presidents.map((leader, i) => (
            <motion.li
              key={leader.name}
              className="h-full"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <LeaderCard leader={leader} />
            </motion.li>
          ))}
        </ul>

        {/* Executive committee: two rows of four on sm+ */}
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-5 sm:items-stretch"
        >
          {executiveCommittee.map((leader, i) => (
            <motion.li
              key={leader.name}
              className="h-full"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <LeaderCard leader={leader} />
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function LeaderCard({ leader }: { leader: Leader }) {
  const src = portraitSrc(leader.photoFile);

  return (
    <article className="group card card-hover flex h-full flex-col overflow-hidden">
      {/* Fixed portrait frame so every card aligns; crop is centered on faces */}
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-navy-900">
        {src ? (
          <img
            src={src}
            alt={leader.name}
            className="h-full w-full object-cover object-[center_22%] transition duration-500 ease-out-expo group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <>
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(61,94,137,0.55),_transparent_60%),linear-gradient(180deg,#0a1a2f,#10223d)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-grid-faint bg-[size:36px_36px] opacity-[0.25] mask-fade-b"
            />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-serif text-3xl font-medium text-ivory-50/85 transition-transform duration-700 ease-out-expo group-hover:scale-105 sm:text-4xl">
                {leader.initials}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 px-4 pb-5 pt-4 sm:gap-5 sm:px-5 sm:pb-6 sm:pt-5">
        <div className="min-w-0">
          <h3 className="text-pretty font-serif text-[1.05rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-lg">
            {leader.name}
          </h3>
          <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-navy-600 sm:text-xs">
            {leader.title}
          </p>
          <p className="mt-2 text-sm leading-snug text-navy-800 text-pretty">
            {leader.employer}
          </p>
          <p className="mt-1 text-xs leading-snug text-navy-600/95 text-pretty">
            {leader.city}
          </p>
        </div>

        <a
          href={leader.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${leader.name} on LinkedIn`}
          className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-navy-900/18 bg-navy-900/[0.03] px-3 py-2 text-xs font-medium text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/35 hover:bg-navy-900 hover:text-ivory-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500 active:scale-[0.99] sm:w-fit sm:justify-start sm:px-3.5 sm:py-2"
        >
          <Linkedin size={15} strokeWidth={1.85} className="shrink-0" />
          LinkedIn
        </a>
      </div>
    </article>
  );
}
