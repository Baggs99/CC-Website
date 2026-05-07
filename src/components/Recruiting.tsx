import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { recruitingResources } from "@/data/recruiting";
import { SITE_IMAGES } from "@/data/siteImages";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export function Recruiting() {
  return (
    <section
      id="recruiting"
      className="relative overflow-hidden bg-ivory-100 py-16 sm:py-24 lg:py-32"
    >
      {/* Tasteful photo wash; keeps the section from feeling like a flat SaaS grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.09] mix-blend-multiply"
        style={{ backgroundImage: `url('${SITE_IMAGES.recruitingBackdrop.src}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-gradient-to-b from-ivory-100 via-ivory-100/95 to-ivory-100"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(10,26,47,0.05),_transparent_55%)]"
      />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="flex flex-col gap-10 lg:col-span-7">
            <SectionHeader
              className="!max-w-none"
              eyebrow="Recruiting Resources"
              title="Everything you need, in one place."
              description="Case library plus the club calendar on Yale Groups: two anchors for prep and programming through the recruiting cycle. Built by students who just finished the process."
            />

            <ul
              role="list"
              className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8"
            >
          {recruitingResources.map((res, i) => {
            const Icon = res.icon;
            const external = res.href.startsWith("http");
            return (
              <motion.li
                key={res.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 4) * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative"
              >
                <a
                  href={res.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="card card-hover relative flex h-full flex-col overflow-hidden border-navy-900/[0.07] bg-white/90 p-7 backdrop-blur-sm sm:p-8"
                >
                  <span className="absolute right-6 top-6 text-[0.65rem] font-medium tracking-[0.2em] text-navy-900/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-ivory-50 ring-1 ring-inset ring-white/10 transition-all duration-500 ease-out-expo group-hover:bg-navy-800 group-hover:ring-gold-500/40">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>

                  <h3 className="mt-7 font-serif text-xl font-medium text-navy-900">
                    {res.title}
                  </h3>

                  <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-navy-700/88 text-pretty">
                    {res.description}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900">
                    {res.cta}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>

                  <span
                    aria-hidden
                    className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 via-gold-400/60 to-transparent transition-transform duration-700 ease-out-expo group-hover:scale-x-100 sm:inset-x-8"
                  />
                </a>
              </motion.li>
            );
          })}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:pt-1">
            <div className="overflow-hidden rounded-2xl ring-1 ring-navy-900/[0.1] shadow-soft">
              <div className="relative aspect-[16/10] sm:aspect-[2/1]">
                <img
                  src={SITE_IMAGES.communityWhiteboard.src}
                  alt={SITE_IMAGES.communityWhiteboard.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"
                />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-ivory-100 drop-shadow sm:bottom-5 sm:left-5">
                  From Zhang Auditorium to team rooms: prep that matches how
                  recruiting actually feels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
