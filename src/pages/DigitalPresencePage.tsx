import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  digitalPresenceDescription,
  digitalPresenceDoneChecklist,
  digitalPresenceEyebrow,
  digitalPresenceHeadshotExamples,
  digitalPresenceSections,
  digitalPresenceSignature,
  digitalPresenceTitle,
} from "@/data/digitalPresence";
import { SITE_IMAGES } from "@/data/siteImages";

export function DigitalPresencePage() {
  return (
    <div className="relative overflow-hidden bg-ivory-100 pt-[calc(4.75rem+env(safe-area-inset-top))] md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.07] mix-blend-multiply"
        style={{ backgroundImage: `url('${SITE_IMAGES.recruitingBackdrop.src}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-gradient-to-b from-ivory-100 via-ivory-100/95 to-ivory-100"
      />

      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        <Link
          to="/full-time-recruiting#step-digital-presence"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-900"
        >
          <ArrowLeft size={16} />
          Back to recruiting path
        </Link>

        <SectionHeader
          as="h1"
          eyebrow={digitalPresenceEyebrow}
          title={digitalPresenceTitle}
          description={digitalPresenceDescription}
        />

        <div className="mt-12 max-w-3xl space-y-10">
          {digitalPresenceSections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`digital-presence-${section.id}`}
              className="rounded-2xl border border-navy-900/[0.07] bg-white/90 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-900 text-sm font-medium text-ivory-50">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h2
                    id={`digital-presence-${section.id}`}
                    className="font-serif text-xl font-medium text-navy-900 sm:text-2xl"
                  >
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/88 text-pretty sm:text-base">
                    {section.summary}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {section.actions.map((action) => (
                      <li
                        key={action}
                        className="flex gap-2.5 text-sm leading-relaxed text-navy-800/90"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-gold-600"
                          aria-hidden
                        />
                        <span className="text-pretty">{action}</span>
                      </li>
                    ))}
                  </ul>

                  {section.showHeadshotExamples &&
                  digitalPresenceHeadshotExamples.length > 0 ? (
                    <div className="mt-6">
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-navy-600/80">
                        Leadership examples
                      </p>
                      <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {digitalPresenceHeadshotExamples.map((example) => (
                          <li key={example.name} className="text-center">
                            <div className="mx-auto aspect-square w-full max-w-[7.5rem] overflow-hidden rounded-xl bg-navy-900/5 ring-1 ring-navy-900/10">
                              <img
                                src={example.src}
                                alt={`${example.name} headshot`}
                                className="h-full w-full object-cover object-top"
                                loading="lazy"
                              />
                            </div>
                            <p className="mt-2 text-xs font-medium text-navy-900">
                              {example.name}
                            </p>
                            <p className="text-[0.7rem] text-navy-600/85">
                              {example.employer}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {section.showSignatureExample ? (
                    <div className="mt-6">
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-navy-600/80">
                        Signature template
                      </p>
                      <div className="mt-3 rounded-xl border border-navy-900/[0.08] bg-ivory-50 px-5 py-5 font-sans text-[15px] leading-[1.45] text-[#333]">
                        <p className="font-bold text-[#222]">
                          {digitalPresenceSignature.name}
                        </p>
                        <p className="mt-0.5">
                          {digitalPresenceSignature.line2}
                        </p>
                        <p className="mt-3">
                          {digitalPresenceSignature.line3}
                        </p>
                        <p className="mt-3">
                          <a
                            href={digitalPresenceSignature.emailHref}
                            className="text-[#0563c1] underline"
                          >
                            {digitalPresenceSignature.email}
                          </a>
                        </p>
                        <p className="mt-3">
                          <a
                            href={digitalPresenceSignature.websiteHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0563c1] underline"
                          >
                            {digitalPresenceSignature.websiteLabel}
                          </a>
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {section.links && section.links.length > 0 ? (
                    <ul className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 underline-offset-4 hover:underline"
                          >
                            {link.label}
                            <ArrowUpRight size={14} aria-hidden />
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.images && section.images.length > 0 ? (
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                      {section.images.map((image) => (
                        <li key={image.src}>
                          <figure className="overflow-hidden rounded-xl border border-navy-900/[0.08] bg-white">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full"
                              loading="lazy"
                            />
                            {image.caption ? (
                              <figcaption className="border-t border-navy-900/[0.06] px-3 py-2 text-xs text-navy-600/90">
                                {image.caption}
                              </figcaption>
                            ) : null}
                          </figure>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </section>
          ))}

          <section
            aria-labelledby="digital-presence-done"
            className="rounded-2xl border border-navy-900/[0.07] bg-white/90 p-6 sm:p-8"
          >
            <h2
              id="digital-presence-done"
              className="font-serif text-xl font-medium text-navy-900 sm:text-2xl"
            >
              Done checklist
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-700/88">
              Quick self-audit before you start coffee chats and firm outreach.
            </p>
            <ul className="mt-5 space-y-2.5">
              {digitalPresenceDoneChecklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-navy-800/90"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-gold-600"
                    aria-hidden
                  />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </div>
  );
}
