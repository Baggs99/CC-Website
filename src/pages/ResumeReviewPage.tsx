import { ArrowLeft, ArrowUpRight, CheckCircle2, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  resumeReviewChecklist,
  resumeReviewContactEmail,
  resumeReviewDescription,
  resumeReviewEyebrow,
  resumeReviewFormCta,
  resumeReviewFormUrl,
  resumeReviewSteps,
  resumeReviewTitle,
} from "@/data/resumeReview";
import { SITE_IMAGES } from "@/data/siteImages";

const formReady = resumeReviewFormUrl.length > 0;

export function ResumeReviewPage() {
  const submitHref = formReady
    ? resumeReviewFormUrl
    : `mailto:${resumeReviewContactEmail}?subject=${encodeURIComponent("Resume review request")}`;

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
          to="/full-time-recruiting#step-resume-refinement"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-900"
        >
          <ArrowLeft size={16} />
          Back to recruiting path
        </Link>

        <SectionHeader
          eyebrow={resumeReviewEyebrow}
          title={resumeReviewTitle}
          description={resumeReviewDescription}
        />

        <div className="mt-8 max-w-2xl rounded-2xl border border-navy-900/[0.08] bg-white p-6 shadow-sm sm:p-7">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-ivory-50">
            <FileText size={22} strokeWidth={1.6} aria-hidden />
          </span>
          <h2 className="mt-5 font-serif text-xl font-medium text-navy-900">
            Ready to submit?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-navy-700/88 text-pretty">
            {formReady
              ? "Opens our Google Form in a new tab. Upload a one-page PDF and make sure to include your @yale.edu email address in your submission."
              : "Form link coming soon. Email your PDF to the club inbox for now."}
          </p>
          <a
            href={submitHref}
            {...(formReady
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-3 text-sm font-medium text-ivory-50 transition-colors hover:bg-navy-800 sm:w-auto sm:min-w-[16rem]"
          >
            {formReady ? resumeReviewFormCta : "Email your resume"}
            <ArrowUpRight size={16} aria-hidden />
          </a>
          <p className="mt-4 text-xs leading-relaxed text-navy-600/85">
            Questions?{" "}
            <a
              href={`mailto:${resumeReviewContactEmail}`}
              className="font-medium text-navy-800 underline-offset-2 hover:underline"
            >
              {resumeReviewContactEmail}
            </a>
          </p>
        </div>

        <div className="mt-10 max-w-3xl space-y-8">
          <section aria-labelledby="resume-review-how">
            <h3
              id="resume-review-how"
              className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-navy-700/80"
            >
              How it works
            </h3>
            <ol className="mt-4 space-y-4">
              {resumeReviewSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-navy-900/[0.06] bg-white/80 p-4 sm:p-5"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-900 text-sm font-medium text-ivory-50">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-medium text-navy-900">{step.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-navy-700/88 text-pretty">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="resume-review-checklist">
            <h3
              id="resume-review-checklist"
              className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-navy-700/80"
            >
              Before you submit
            </h3>
            <ul className="mt-4 space-y-2 rounded-xl border border-navy-900/[0.06] bg-white/80 p-4 sm:p-5">
              {resumeReviewChecklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-navy-700/90"
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
