import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type {
  RecruitingPathStep,
  RecruitingStepLink,
} from "@/data/fullTimeRecruiting";
import { cn } from "@/lib/utils";

function StepLink({ link }: { link: RecruitingStepLink }) {
  const external =
    link.href.startsWith("http") || link.href.startsWith("mailto:");
  const internal = link.href.startsWith("/");
  const className =
    "inline-flex items-center gap-1 text-sm font-medium text-navy-900 underline-offset-4 hover:underline";

  if (internal) {
    return (
      <Link to={link.href} className={className}>
        {link.label}
        <ArrowUpRight size={14} className="shrink-0 opacity-70" />
      </Link>
    );
  }

  return (
    <a
      href={link.href}
      {...(external && !link.href.startsWith("mailto:")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={className}
    >
      {link.label}
      <ArrowUpRight size={14} className="shrink-0 opacity-70" />
    </a>
  );
}

type FtPathStepProps = {
  step: RecruitingPathStep;
  index: number;
  total: number;
  defaultOpenDetail?: boolean;
};

export function FtPathStep({
  step,
  index,
  total,
  defaultOpenDetail = false,
}: FtPathStepProps) {
  const isLast = index === total - 1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.03,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-4 pb-8 sm:gap-6 sm:pb-10"
    >
      {!isLast ? (
        <span
          aria-hidden
          className="absolute left-[0.6875rem] top-8 bottom-0 w-px bg-navy-900/10 sm:left-3"
        />
      ) : null}

      <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[0.65rem] font-semibold text-ivory-50 sm:h-7 sm:w-7 sm:text-xs">
        {step.order}
      </span>

      <article
        id={`step-${step.id}`}
        className="min-w-0 flex-1 scroll-mt-28 rounded-2xl border border-navy-900/[0.06] bg-white/90 p-5 shadow-soft sm:scroll-mt-32 sm:p-6"
      >
        <div className="flex flex-wrap items-center gap-2 gap-y-1">
          <span className="rounded-full bg-navy-900/[0.06] px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-navy-700">
            {step.phase}
          </span>
          <span className="text-xs text-navy-600/80">{step.timing}</span>
        </div>

        <h4 className="mt-3 font-serif text-lg font-medium text-navy-900 sm:text-xl">
          {step.title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-navy-700/88 text-pretty">
          {step.summary}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-navy-800/90">
          {step.actions.map((action) => (
            <li key={action} className="flex gap-2">
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy-400"
                aria-hidden
              />
              <span className="text-pretty">{action}</span>
            </li>
          ))}
        </ul>

        {(step.clubResource || step.externalLink) && (
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-navy-900/[0.06] pt-4">
            {step.clubResource ? <StepLink link={step.clubResource} /> : null}
            {step.externalLink ? <StepLink link={step.externalLink} /> : null}
          </div>
        )}

        {step.detailSections.length > 0 && (
          <div className="mt-5 space-y-2 border-t border-navy-900/[0.06] pt-4">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-navy-600/75">
              Deep dive
            </p>
            {step.detailSections.map((section, sectionIndex) => (
              <details
                key={section.id}
                className="group ft-details rounded-xl border border-navy-900/[0.06] bg-ivory-50/50"
                {...(defaultOpenDetail && sectionIndex === 0
                  ? { open: true }
                  : {})}
              >
                <summary
                  className={cn(
                    "cursor-pointer list-none px-4 py-3 text-sm font-medium text-navy-900",
                    "flex items-center justify-between gap-2",
                    "[&::-webkit-details-marker]:hidden",
                  )}
                >
                  <span>{section.title}</span>
                  <span
                    aria-hidden
                    className="shrink-0 text-navy-500 transition-transform duration-200 group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <div className="border-t border-navy-900/[0.06] px-4 py-3">
                  {section.comingSoon || section.body.length === 0 ? (
                    <p className="text-sm italic text-navy-600/75">
                      More detail coming soon.
                    </p>
                  ) : (
                    <ul className="space-y-2 text-sm leading-relaxed text-navy-700/90">
                      {section.body.map((line) => (
                        <li key={line.slice(0, 48)} className="flex gap-2">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500"
                            aria-hidden
                          />
                          <span className="text-pretty">{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        )}
      </article>
    </motion.li>
  );
}
