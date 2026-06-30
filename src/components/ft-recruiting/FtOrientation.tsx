import { motion } from "framer-motion";
import { ArrowUpRight, ListChecks } from "lucide-react";
import {
  consultingOrientation,
  ftOverwhelmedBullets,
  recruitingPathSteps,
} from "@/data/fullTimeRecruiting";
import { cn } from "@/lib/utils";

export function FtOrientation() {
  const { eyebrow, title, whatIsConsulting } = consultingOrientation;

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mt-6 rounded-2xl border border-navy-900/[0.08] bg-white p-5 shadow-soft sm:mt-8 sm:p-6"
      aria-labelledby="ft-orientation-heading"
    >
      <span className="eyebrow">{eyebrow}</span>
      <h3
        id="ft-orientation-heading"
        className="mt-2 font-serif text-xl font-medium text-navy-900 sm:text-2xl"
      >
        {title}
      </h3>

      <div className="mt-3 space-y-3 text-sm leading-relaxed text-navy-700/90">
        {whatIsConsulting.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>

      <aside
        className="mt-5 rounded-2xl border border-gold-500/25 bg-gradient-to-br from-white to-ivory-50 p-4 sm:mt-6 sm:p-5"
        aria-labelledby="ft-overwhelmed-heading"
      >
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-900 text-ivory-50">
            <ListChecks size={20} strokeWidth={1.6} />
          </span>
          <div className="min-w-0">
            <h4
              id="ft-overwhelmed-heading"
              className="font-serif text-lg font-medium text-navy-900"
            >
              Start here if you&apos;re overwhelmed
            </h4>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-navy-700/90">
              {ftOverwhelmedBullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                    aria-hidden
                  />
                  <span className="text-pretty">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      <div className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-x-3 gap-y-1">
          <div>
            <h4 className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-navy-700/80">
              The process at a glance
            </h4>
            <p className="mt-1 text-sm text-navy-600/85">
              Click a step to jump to that section below.
            </p>
          </div>
          <span className="text-[0.7rem] tracking-[0.2em] text-navy-700/40">
            {recruitingPathSteps.length.toString().padStart(2, "0")} steps
          </span>
        </div>
        <ol
          role="list"
          className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5"
        >
          {recruitingPathSteps.map((step) => (
            <li key={step.id} className="min-h-0">
              <a
                href={`#step-${step.id}`}
                aria-label={`Go to step ${step.order}: ${step.title}`}
                className={cn(
                  "group flex h-[9.5rem] cursor-pointer flex-col gap-2 overflow-hidden rounded-xl border border-navy-900/10 bg-white p-3 shadow-sm md:h-40 md:p-4",
                  "transition-all hover:-translate-y-0.5 hover:border-navy-900/25 hover:bg-ivory-50 hover:shadow-md",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900/20 focus-visible:ring-offset-2",
                )}
              >
                <div className="flex items-start justify-between gap-1">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[0.6rem] font-semibold text-ivory-50 transition-colors group-hover:bg-gold-500">
                    {step.order}
                  </span>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2}
                    className="shrink-0 text-navy-400 transition-colors group-hover:text-navy-900"
                    aria-hidden
                  />
                </div>
                <span className="min-h-0 flex-1 overflow-hidden text-xs font-medium leading-snug text-navy-800 group-hover:text-navy-900">
                  {step.title}
                </span>
                <span className="text-[0.625rem] font-medium uppercase tracking-[0.12em] text-navy-500/75 transition-colors group-hover:text-navy-800">
                  View step
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
