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
      className="relative bg-ivory-100 py-24 sm:py-32"
    >
      <Container>
        <SectionHeader
          eyebrow="Sponsors & Partners"
          title="Built in partnership with the firms our members join."
          description="We work closely with sponsoring firms on programming, mocks, and recruiting events. Logos shown are illustrative."
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
          className="mt-16 flex flex-col items-start gap-6 rounded-2xl border border-navy-900/[0.08] bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div className="max-w-xl">
            <span className="eyebrow">Become a partner</span>
            <h3 className="mt-4 font-serif text-2xl font-medium text-navy-900 text-balance sm:text-3xl">
              Hire from a community that&apos;s been preparing all year.
            </h3>
            <p className="mt-3 text-sm text-navy-700/80 sm:text-base">
              Sponsorship tiers cover firm presentations, exclusive mocks,
              Mock Madness sponsorship, and direct introductions to members.
            </p>
          </div>
          <a href="#contact" className="btn-primary self-start">
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
            <SponsorLogoMark name={sponsor.name} tier={tier} />
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

/**
 * Stylized logo placeholder. Renders the firm name as a refined wordmark
 * that goes from grayscale to its branded look on hover, so future
 * leadership can drop in real logos without breaking the layout.
 */
function SponsorLogoMark({
  name,
  tier,
}: {
  name: string;
  tier: "Gold" | "Silver";
}) {
  const isGold = tier === "Gold";
  return (
    <span
      className={`relative font-serif text-base font-medium tracking-tight transition-all duration-500 ease-out-expo sm:text-lg ${
        isGold
          ? "text-navy-900/55 group-hover:text-navy-900"
          : "text-navy-900/45 group-hover:text-navy-900"
      }`}
      style={{ filter: "saturate(0.1)" }}
    >
      <span
        className="block transition-[filter] duration-500 ease-out-expo group-hover:[filter:saturate(1)]"
        style={{ filter: "inherit" }}
      >
        {name}
      </span>
      <span
        aria-hidden
        className={`absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-500 ease-out-expo group-hover:w-8 ${
          isGold ? "bg-gold-500" : "bg-navy-400"
        }`}
      />
    </span>
  );
}
