import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SITE_IMAGES } from "@/data/siteImages";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

const YALE_STORY_URL =
  "https://som.yale.edu/story/2024/case-success-consulting-club-members-tackle-recruiting-season-together";

export function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-ivory-100 py-16 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-900/12 to-transparent"
      />

      <Container>
        <SectionHeader
          eyebrow="On campus"
          title="Recruiting is intense. You don't go through it alone."
          description="Case teams, mock interviews, and auditorium programming bring hundreds of members together each fall. The culture is generous: second-years invest serious time so first-years can compete with confidence."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <figure className="overflow-hidden rounded-2xl shadow-elevated ring-1 ring-navy-900/[0.06]">
              <div className="relative aspect-[16/10] sm:aspect-[2/1]">
                <img
                  src={SITE_IMAGES.communityWhiteboard.src}
                  alt={SITE_IMAGES.communityWhiteboard.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="sr-only">
                  Yale SOM Consulting Club programming: whiteboard working session.
                </figcaption>
              </div>
            </figure>

            <div className="mt-6 grid grid-cols-2 gap-5 sm:gap-6">
              <figure className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-navy-900/[0.06]">
                <div className="relative aspect-[4/5]">
                  <img
                    src={SITE_IMAGES.communityAuditorium.src}
                    alt={SITE_IMAGES.communityAuditorium.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
              <figure className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-navy-900/[0.06]">
                <div className="relative aspect-[4/5]">
                  <img
                    src={SITE_IMAGES.communityStudyRoom.src}
                    alt={SITE_IMAGES.communityStudyRoom.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <p className="font-serif text-xl font-medium leading-snug text-navy-900 text-pretty sm:text-[1.65rem] sm:leading-snug">
              Weekly meetings in Zhang Auditorium, structured casing teams, and
              late-night prep in Evans Hall. That&apos;s the rhythm of
              consulting recruiting at SOM.
            </p>
            <p className="mt-6 text-base leading-relaxed text-navy-700/88 text-pretty">
              Yale SOM featured our club&apos;s fall recruiting season, from
              math refreshers to mock interview drills, as students tackle the
              internship roadmap together.
            </p>
            <a
              href={YALE_STORY_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 underline-offset-4 hover:underline"
            >
              Read the Yale SOM story
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <ul className="mt-10 space-y-4 border-t border-navy-900/10 pt-10">
              {[
                "Case teams that meet every week with a second-year lead.",
                "Office hours with senior casers when you need fast feedback.",
                "Programming that tracks the real recruiting calendar.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-navy-800"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold-500"
                    aria-hidden
                  />
                  <span className="text-pretty">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
