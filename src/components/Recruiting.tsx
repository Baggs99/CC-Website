import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { recruitingResources } from "@/data/recruiting";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export function Recruiting() {
  return (
    <section
      id="recruiting"
      className="relative bg-ivory-100 py-24 sm:py-32"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Recruiting Resources"
            title="Everything you need, in one place."
            description="Eight focused resources that mirror the real recruiting cycle — from your first framework drill to your final round."
          />
          <a href="#" className="btn-secondary self-start sm:self-end">
            Member portal
            <ArrowUpRight size={16} />
          </a>
        </div>

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {recruitingResources.map((res, i) => {
            const Icon = res.icon;
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
                  className="card card-hover relative flex h-full flex-col overflow-hidden p-6 sm:p-7"
                >
                  {/* Numbered marker */}
                  <span className="absolute right-5 top-5 text-[0.65rem] font-medium tracking-[0.2em] text-navy-900/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-ivory-50 ring-1 ring-inset ring-white/10 transition-all duration-500 ease-out-expo group-hover:bg-navy-800 group-hover:ring-gold-500/40"
                  >
                    <Icon size={20} strokeWidth={1.6} />
                  </span>

                  <h3 className="mt-6 font-serif text-xl font-medium text-navy-900">
                    {res.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/85 text-pretty">
                    {res.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900">
                    {res.cta}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>

                  {/* Hover accent line */}
                  <span
                    aria-hidden
                    className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 via-gold-400/60 to-transparent transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
                  />
                </a>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
