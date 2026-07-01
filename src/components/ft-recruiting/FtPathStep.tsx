import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MbbOfficeMapPreview } from "@/components/ft-recruiting/MbbOfficeMapPreview";
import type {
  RecruitingPathStep,
  RecruitingStepLink,
  RecruitingStepLinkGroup,
} from "@/data/fullTimeRecruiting";
import { cn } from "@/lib/utils";

function PreviewVisual({
  link,
  compact = false,
}: {
  link: RecruitingStepLink;
  compact?: boolean;
}) {
  const preview = link.preview;
  if (!preview) return null;

  if (preview.kind === "office-map") {
    return (
      <div className="aspect-[32/15] w-full overflow-hidden rounded-lg bg-[#eef3f8]">
        <MbbOfficeMapPreview />
      </div>
    );
  }

  if (preview.src) {
    return (
      <img
        src={preview.src}
        alt={preview.alt}
        className={cn(
          "w-full rounded-lg bg-[#eef3f8]",
          compact
            ? "h-full object-cover object-center"
            : "aspect-[32/15] object-cover object-center",
        )}
        loading="lazy"
      />
    );
  }

  return null;
}

function PreviewLinkCard({
  link,
  href,
  external,
  compact = false,
}: {
  link: RecruitingStepLink;
  href: string;
  external?: boolean;
  compact?: boolean;
}) {
  const preview = link.preview;
  if (!preview) return null;

  const cardClassName = cn(
    "group block overflow-hidden rounded-xl border border-navy-900/10 bg-white shadow-sm",
    "transition-all hover:-translate-y-0.5 hover:border-navy-900/20 hover:shadow-md",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900/20 focus-visible:ring-offset-2",
    compact ? "w-full" : "w-full max-w-lg",
  );

  if (compact) {
    const body = (
      <>
        <div className="h-24 overflow-hidden bg-[#eef3f8]">
          <PreviewVisual link={link} compact />
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-navy-900/[0.06] bg-white px-3 py-2.5">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-navy-900 group-hover:underline">
              {link.label}
            </p>
            {preview.caption ? (
              <p className="mt-0.5 truncate text-[0.6875rem] text-navy-600/85">
                {preview.caption}
              </p>
            ) : null}
          </div>
          <ArrowUpRight
            size={14}
            className="shrink-0 text-navy-500 transition-colors group-hover:text-navy-900"
          />
        </div>
      </>
    );

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClassName}
          aria-label={`${link.label}. ${preview.alt}`}
        >
          {body}
        </a>
      );
    }

    return (
      <Link
        to={href}
        className={cardClassName}
        aria-label={`${link.label}. ${preview.alt}`}
      >
        {body}
      </Link>
    );
  }

  const body = (
    <>
      <div className={cn("bg-[#eef3f8]", compact ? "p-3" : "px-5 py-5 sm:px-6 sm:py-6")}>
        <PreviewVisual link={link} />
      </div>
      <div
        className={cn(
          "border-t border-navy-900/[0.06] bg-ivory-50/80",
          compact ? "space-y-2 px-3 py-3" : "space-y-3 px-5 py-4 sm:px-6 sm:py-5",
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p
              className={cn(
                "font-medium text-navy-900 group-hover:underline",
                compact ? "text-sm leading-snug" : "",
              )}
            >
              {link.label}
            </p>
            {preview.caption ? (
              <p className="mt-1 text-[0.6875rem] leading-relaxed text-navy-600/90">
                {preview.caption}
              </p>
            ) : null}
          </div>
          <ArrowUpRight
            size={compact ? 14 : 16}
            className="mt-0.5 shrink-0 text-navy-500 transition-colors group-hover:text-navy-900"
          />
        </div>
        {preview.legend && preview.legend.length > 0 ? (
          <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
            {preview.legend.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-1 text-[0.6875rem] text-navy-700/90"
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full ring-1 ring-white"
                  style={{ backgroundColor: item.color }}
                  aria-hidden
                />
                {item.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        aria-label={`${link.label}. ${preview.alt}`}
      >
        {body}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={cardClassName}
      aria-label={`${link.label}. ${preview.alt}`}
    >
      {body}
    </Link>
  );
}

function StepLink({
  link,
  compact,
}: {
  link: RecruitingStepLink;
  compact?: boolean;
}) {
  const external =
    link.href.startsWith("http") || link.href.startsWith("mailto:");
  const internal =
    link.href.startsWith("/") && !/\.[a-z0-9]+(\?|$)/i.test(link.href);
  const textClassName =
    "inline-flex items-center gap-1 text-sm font-medium text-navy-900 underline-offset-4 hover:underline";

  if (link.preview) {
    return (
      <PreviewLinkCard
        link={link}
        href={link.href}
        external={!internal && external}
        compact={compact}
      />
    );
  }
  if (internal) {
    return (
      <Link to={link.href} className={textClassName}>
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
        : link.href.startsWith("/images/") ||
            link.href.startsWith("/documents/")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      className={textClassName}
    >
      {link.label}
      <ArrowUpRight size={14} className="shrink-0 opacity-70" />
    </a>
  );
}

function StepResourceGroups({ groups }: { groups: RecruitingStepLinkGroup[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {groups.map((group) => (
        <div
          key={group.title}
          className="rounded-xl border border-navy-900/[0.06] bg-ivory-50/60 px-4 py-3.5"
        >
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-navy-600/75">
            {group.title}
          </p>
          <ul className="mt-2.5 space-y-2">
            {group.links.map((link) => (
              <li key={link.href}>
                <StepLink link={link} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function FeaturedStepLink({ link }: { link: RecruitingStepLink }) {
  const external =
    link.href.startsWith("http") || link.href.startsWith("mailto:");
  const internal =
    link.href.startsWith("/") && !/\.[a-z0-9]+(\?|$)/i.test(link.href);
  const className =
    "group flex items-center justify-between gap-3 rounded-xl border border-navy-900/10 bg-white px-4 py-3.5 text-sm font-medium text-navy-900 shadow-sm transition-all hover:border-navy-900/20 hover:shadow-md";

  const label = (
    <>
      <span>{link.label}</span>
      <ArrowUpRight
        size={16}
        className="shrink-0 text-navy-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-900"
      />
    </>
  );

  if (internal) {
    return (
      <Link to={link.href} className={className}>
        {label}
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
      {label}
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
  const previewLink =
    step.clubResource?.preview != null
      ? step.clubResource
      : step.externalLink?.preview != null
        ? step.externalLink
        : null;
  const footerClubResource =
    step.clubResource && !step.clubResource.preview ? step.clubResource : null;
  const footerExternalLink =
    step.externalLink && !step.externalLink.preview
      ? step.externalLink
      : null;

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
        className="relative min-w-0 flex-1 scroll-mt-28 rounded-2xl border border-navy-900/[0.06] bg-white/90 p-5 shadow-soft sm:scroll-mt-32 sm:p-6"
      >
        {previewLink ? (
          <div className="mb-5 sm:absolute sm:right-5 sm:top-5 sm:z-10 sm:mb-0 sm:w-56 md:right-6 md:top-6 md:w-60">
            <StepLink link={previewLink} compact />
          </div>
        ) : null}

        <div
          className={cn(
            previewLink && "sm:min-h-[9.25rem] sm:pr-64 md:pr-72",
          )}
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
        </div>

        {(step.resourceLinkGroups?.length ||
          step.resourceLinks?.length ||
          footerClubResource ||
          footerExternalLink) && (
          <div className="mt-5 space-y-4 border-t border-navy-900/[0.06] pt-4">
            {step.resourceLinkGroups?.length ? (
              <>
                {footerClubResource ? (
                  <FeaturedStepLink link={footerClubResource} />
                ) : null}
                <StepResourceGroups groups={step.resourceLinkGroups} />
              </>
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
                {step.resourceLinks?.map((link) => (
                  <StepLink key={link.href} link={link} />
                ))}
                {footerClubResource ? (
                  <StepLink link={footerClubResource} />
                ) : null}
                {footerExternalLink ? (
                  <StepLink link={footerExternalLink} />
                ) : null}
              </div>
            )}
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
                      {section.body.map((line, lineIndex) => {
                        const text = typeof line === "string" ? line : line.text;
                        const indent =
                          typeof line === "string" ? false : line.indent;
                        return (
                          <li
                            key={`${section.id}-${lineIndex}`}
                            className={cn("flex gap-2", indent && "ml-5")}
                          >
                            <span
                              className={cn(
                                "mt-2 shrink-0 rounded-full bg-gold-500",
                                indent ? "h-1 w-1" : "h-1 w-1",
                              )}
                              aria-hidden
                            />
                            <span className="text-pretty">{text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {section.links?.length ? (
                    <ul className="mt-4 space-y-2 border-t border-navy-900/[0.06] pt-4">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <StepLink link={link} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.image ? (
                    <a
                      href={section.image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block overflow-hidden rounded-lg border border-navy-900/10 bg-white"
                    >
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        className="w-full"
                        loading="lazy"
                      />
                    </a>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        )}
      </article>
    </motion.li>
  );
}
