import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { sponsors, type Sponsor } from "@/data/sponsors";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export function Sponsors() {
  const gold = sponsors.filter((s) => s.tier === "Gold");
  const silver = sponsors.filter((s) => s.tier === "Silver");

  return (
    <section
      id="sponsors"
      className="relative bg-ivory-100 py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeader
          eyebrow="Partners"
          title="Built in partnership with the firms our members join."
          description="We work closely with sponsoring firms on programming, mocks, and recruiting events. Firm names and logos are trademarks of their respective owners."
        />

        <div className="mt-14 space-y-14">
          <SponsorTier label="Gold partners" sponsors={gold} tier="Gold" />
          <SponsorTier label="Silver partners" sponsors={silver} tier="Silver" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-stretch gap-6 rounded-2xl border border-navy-900/[0.08] bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div className="max-w-xl">
            <span className="eyebrow">Become a partner</span>
            <h3 className="mt-4 font-serif text-2xl font-medium text-navy-900 text-balance sm:text-3xl">
              Hire from a community that&apos;s been preparing all year.
            </h3>
            <p className="mt-3 text-sm text-navy-700/80 sm:text-base">
              Partnership tiers cover firm presentations, exclusive mocks,
              Mock Madness partnership, and direct introductions to members.
            </p>
          </div>
          <a
            href="mailto:club-consulting@som.yale.edu?subject=Partnership%20inquiry"
            className="btn-primary flex min-h-[48px] w-full justify-center sm:w-auto sm:justify-center sm:self-start"
          >
            Partner with us
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

function SponsorTier({
  label,
  sponsors,
  tier,
}: {
  label: string;
  sponsors: Sponsor[];
  tier: "Gold" | "Silver";
}) {
  const isGold = tier === "Gold";
  return (
    <div>
      <div className="flex items-center gap-3 pb-5">
        <span
          className={`h-2 w-2 rounded-full ${isGold ? "bg-gold-500" : "bg-navy-400"}`}
        />
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-navy-700/80">
          {label}
        </span>
        <span className="ml-auto text-[0.7rem] tracking-[0.2em] text-navy-700/40">
          {sponsors.length.toString().padStart(2, "0")}
        </span>
      </div>

      <ul
        role="list"
        className={`grid gap-px overflow-hidden rounded-2xl border border-navy-900/[0.08] bg-navy-900/[0.06] ${
          isGold
            ? "grid-cols-1 sm:grid-cols-3"
            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {sponsors.map((sponsor, i) => (
          <motion.li
            key={sponsor.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: (i % 4) * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex h-28 items-center justify-center bg-white px-6 transition-colors duration-500 ease-out-expo hover:bg-ivory-50 sm:h-32"
          >
            <SponsorLogoMark sponsor={sponsor} tier={tier} />
            {isGold && (
              <span className="pointer-events-none absolute right-3 top-3 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-gold-500/80 opacity-0 transition-opacity group-hover:opacity-100">
                Gold
              </span>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function SponsorLogoMark({
  sponsor,
  tier,
}: {
  sponsor: Sponsor;
  tier: "Gold" | "Silver";
}) {
  const isGold = tier === "Gold";
  return (
    <img
      src={sponsor.logoSrc}
      alt={sponsor.name}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className={`mx-auto w-auto max-w-[min(100%,13rem)] object-contain object-center transition duration-500 ease-out-expo group-hover:scale-[1.03] ${
        isGold ? "max-h-12 sm:max-h-14" : "max-h-10 sm:max-h-12"
      }`}
    />
  );
}
