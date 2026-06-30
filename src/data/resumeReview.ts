/**
 * Club resume review dropbox (Google Form).
 *
 * After creating the form, paste the responder link below, e.g.
 * https://docs.google.com/forms/d/e/1FAIpQLS…/viewform
 *
 * Suggested Google Form fields:
 * - Yale email (short answer; description: must end in @yale.edu)
 * - Full name
 * - Class year (dropdown: 2026, 2027, 2028)
 * - Target firms / offices (short answer, optional)
 * - Resume (file upload, PDF only)
 * - Anything else we should know (paragraph, optional)
 *
 * Form settings: collect email addresses, limit to 1 response if you want
 * one submission per person, store uploads in the linked Google Drive folder.
 */
export const resumeReviewFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeJgnHeaJ2XIKGz_tH59Cy3BeabqPQsCWrMiUvGN9jcdP8C8w/viewform";

export const resumeReviewContactEmail = "club-consulting@som.yale.edu";

export const resumeReviewEyebrow = "Club resume review";
export const resumeReviewTitle = "Submit your resume for club feedback.";
export const resumeReviewDescription =
  "Student reviewers help with tangible impact, action verbs, and Yale SOM resume formatting. Submit in early July for 1–2 rounds before firm deadlines.";

export const resumeReviewSteps = [
  {
    title: "Submit once",
    body: "Make sure to include your @yale.edu email address in your submission, and upload a one-page PDF. One submission per review cycle keeps the queue manageable.",
  },
  {
    title: "We review",
    body: "Volunteers read for consulting resume norms: tangible impact, strong action verbs, and Yale SOM one-page formatting. Turnaround depends on volume, usually a few days in July.",
  },
  {
    title: "Iterate",
    body: "Incorporate feedback and resubmit if you need a second pass. Submit early enough to iterate before August firm deadlines.",
  },
] as const;

export const resumeReviewChecklist = [
  "One page, PDF format, Yale SOM template layout.",
  "Education at top; experience in reverse chronological order.",
  "Bullets lead with action verbs and end with a clear \"so what?\" / tangible impact.",
  "Focus on what you did; own your contributions in each bullet.",
] as const;

export const resumeReviewFormCta = "Open resume submission form";
