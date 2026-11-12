import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FtOrientation } from "@/components/ft-recruiting/FtOrientation";
import { FtPathNav } from "@/components/ft-recruiting/FtPathNav";
import { FtPathStep } from "@/components/ft-recruiting/FtPathStep";
import {
  firmDeadlines,
  firmDeadlinesNote,
  ftRecruitingDescription,
  ftRecruitingEyebrow,
  ftRecruitingTitle,
  recruitingPathSteps,
  somCmsJobPortal,
} from "@/data/fullTimeRecruiting";
import { SectionHeader } from "./ui/SectionHeader";

export function FullTimeRecruitingHub() {
  return (
    <div id="full-time-recruiting">
      <SectionHeader
        className="!max-w-none"
        compact
        as="h1"
        eyebrow={ftRecruitingEyebrow}
        title={ftRecruitingTitle}
        description={ftRecruitingDescription}
        headingId="full-time-recruiting-heading"
      />

      <FtOrientation />

      <div className="mt-14">
        <div className="flex items-center gap-3 pb-4">
          <span className="h-2 w-2 rounded-full bg-gold-500" />
          <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-navy-700/80">
            Firm deadlines
          </h3>
        </div>

        <p className="mb-4 max-w-3xl text-sm leading-relaxed text-navy-700/90 text-pretty">
          {firmDeadlinesNote}{" "}
          <a
            href={somCmsJobPortal.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-navy-900 underline-offset-4 hover:underline"
          >
            {somCmsJobPortal.label}
            <ArrowUpRight size={14} className="shrink-0 opacity-70" />
          </a>
        </p>

        <ul role="list" className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {firmDeadlines.map((firm, i) => {
            const rowClass =
              "card flex items-center justify-between gap-3 px-4 py-2.5";
            const content = (
              <>
                <h4 className="min-w-0 font-serif text-sm font-medium text-navy-900">
                  {firm.firm}
                </h4>
                <span className="flex shrink-0 items-center gap-1.5 text-sm tabular-nums text-navy-700">
                  <span className="sr-only">Application deadline </span>
                  {firm.applicationDeadline}
                  {firm.href ? (
                    <ArrowUpRight
                      size={13}
                      className="opacity-70"
                      aria-hidden
                    />
                  ) : null}
                </span>
              </>
            );

            return (
              <motion.li
                key={firm.firm}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {firm.href ? (
                  <a
                    href={firm.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${firm.firm}, deadline ${firm.applicationDeadline}. Open careers page.`}
                    className={`${rowClass} card-hover no-underline`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={rowClass}>{content}</div>
                )}
                {firm.interviewWindow ? (
                  <p className="px-4 pb-2 text-xs text-navy-700/85">
                    Interviews: {firm.interviewWindow}
                  </p>
                ) : null}
              </motion.li>
            );
          })}
        </ul>
      </div>

      <div className="mt-14 sm:mt-16">
        <div className="flex items-center gap-3 pb-5">
          <span className="h-2 w-2 rounded-full bg-navy-400" />
          <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-navy-700/80">
            The path
          </h3>
          <span className="ml-auto text-[0.7rem] tracking-[0.2em] text-navy-700/40">
            {recruitingPathSteps.length.toString().padStart(2, "0")} steps
          </span>
        </div>

        <div className="lg:grid lg:grid-cols-[minmax(0,13rem)_1fr] lg:gap-10 xl:grid-cols-[minmax(0,15rem)_1fr] xl:gap-12">
          <FtPathNav steps={recruitingPathSteps} />

          <ol className="relative mt-6 space-y-0 lg:mt-0">
            {recruitingPathSteps.map((step, i) => (
              <FtPathStep
                key={step.id}
                step={step}
                index={i}
                total={recruitingPathSteps.length}
                defaultOpenDetail={i === 0}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
