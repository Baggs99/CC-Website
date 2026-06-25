import type { RecruitingPathStep } from "@/data/fullTimeRecruiting";
import { cn } from "@/lib/utils";

type FtPathNavProps = {
  steps: RecruitingPathStep[];
};

export function FtPathNav({ steps }: FtPathNavProps) {
  return (
    <nav
      aria-label="Recruiting path steps"
      className="lg:sticky lg:top-28 lg:self-start"
    >
      <p className="mb-3 hidden text-[0.7rem] font-medium uppercase tracking-[0.22em] text-navy-700/80 lg:block">
        Jump to step
      </p>

      {/* Mobile: horizontal scroll chips */}
      <ul
        role="list"
        className="flex gap-2 overflow-x-auto pb-2 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((step) => (
          <li key={step.id} className="shrink-0">
            <a
              href={`#step-${step.id}`}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 bg-white px-3 py-1.5 text-xs font-medium text-navy-800 shadow-sm",
                "transition-colors hover:border-navy-900/20 hover:bg-ivory-50",
              )}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-900 text-[0.6rem] font-semibold text-ivory-50">
                {step.order}
              </span>
              <span className="max-w-[9rem] truncate">{step.title}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop: vertical link list */}
      <ol role="list" className="hidden space-y-1 lg:block">
        {steps.map((step) => (
          <li key={step.id}>
            <a
              href={`#step-${step.id}`}
              className={cn(
                "flex items-start gap-2.5 rounded-lg px-2 py-2 text-sm text-navy-800/90",
                "transition-colors hover:bg-navy-900/[0.04] hover:text-navy-900",
              )}
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-900/10 text-[0.6rem] font-semibold text-navy-800">
                {step.order}
              </span>
              <span className="leading-snug">{step.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
