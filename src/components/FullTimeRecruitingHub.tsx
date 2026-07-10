import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
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
        eyebrow={ftRecruitingEyebrow}
        title={ftRecruitingTitle}
        description={ftRecruitingDescription}
        headingId="full-time-recruiting-heading"
      />

      <FtOrientation />

      <div className="mt-14">
        <div className="flex items-center gap-3 pb-5">
          <span className="h-2 w-2 rounded-full bg-gold-500" />
          <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-navy-700/80">
            Firm deadlines
          </h3>
        </div>

        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-navy-700/90 text-pretty">
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

        <ul
          role="list"
          className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {firmDeadlines.map((firm, i) => (
            <motion.li
              key={firm.firm}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card flex h-full flex-col p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-serif text-lg font-medium text-navy-900">
                  {firm.firm}
                  {firm.year ? (
                    <span className="ml-2 text-sm font-sans font-normal text-navy-600/80">
                      {firm.year}
                    </span>
                  ) : null}
                </h4>
                <Calendar
                  size={18}
                  className="shrink-0 text-navy-400"
                  strokeWidth={1.6}
                  aria-hidden
                />
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-navy-600/75">
                    Application deadline
                  </dt>
                  <dd className="mt-1 text-navy-800 text-pretty">
                    {firm.applicationDeadline}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-navy-600/75">
                    Interviews
                  </dt>
                  <dd className="mt-1 text-navy-800 text-pretty">
                    {firm.interviewWindow}
                  </dd>
                </div>
              </dl>

              {(firm.cmsReminder || firm.notes) && (
                <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-700/85 text-pretty">
                  {firm.cmsReminder ? (
                    <>
                      Confirm due dates in{" "}
                      <a
                        href={somCmsJobPortal.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-navy-900 underline-offset-4 hover:underline"
                      >
                        SOM CMS
                      </a>
                      , the source of truth.
                    </>
                  ) : (
                    firm.notes
                  )}
                </p>
              )}

              {firm.href ? (
                <a
                  href={firm.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900"
                >
                  {firm.hrefLabel ?? "Firm careers site"}
                  <ArrowUpRight size={14} />
                </a>
              ) : null}
            </motion.li>
          ))}
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
