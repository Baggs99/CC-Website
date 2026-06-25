import { motion } from "framer-motion";
import { consultingOrientation } from "@/data/fullTimeRecruiting";

export function FtOrientation() {
  const { eyebrow, title, whatIsConsulting, processAtAGlance } =
    consultingOrientation;

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mt-12 rounded-2xl border border-navy-900/[0.08] bg-white p-6 shadow-soft sm:p-8 lg:p-10"
      aria-labelledby="ft-orientation-heading"
    >
      <span className="eyebrow">{eyebrow}</span>
      <h3
        id="ft-orientation-heading"
        className="mt-3 font-serif text-xl font-medium text-navy-900 sm:text-2xl"
      >
        {title}
      </h3>

      <div className="mt-5 space-y-4 text-sm leading-relaxed text-navy-700/90 sm:text-base">
        {whatIsConsulting.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-navy-700/80">
          The process at a glance
        </h4>
        <ol
          role="list"
          className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {processAtAGlance.map((phase, i) => (
            <li
              key={phase.label}
              className="relative rounded-xl border border-navy-900/[0.06] bg-ivory-50/80 p-3 sm:p-4"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-[0.65rem] font-semibold text-ivory-50">
                {i + 1}
              </span>
              <p className="mt-2 font-medium text-navy-900">{phase.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-navy-700/85 text-pretty">
                {phase.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
