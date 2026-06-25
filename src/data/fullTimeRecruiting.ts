export type FirmDeadline = {
  firm: string;
  year?: number;
  portalOpens: string;
  applicationDeadline: string;
  interviewWindow: string;
  notes: string;
  href?: string;
};

export type RecruitingStepLink = {
  label: string;
  href: string;
};

export type StepDetailSection = {
  id: string;
  title: string;
  body: string[];
  comingSoon?: boolean;
};

export type RecruitingPathStep = {
  id: string;
  order: number;
  phase: string;
  title: string;
  summary: string;
  timing: string;
  actions: string[];
  detailSections: StepDetailSection[];
  clubResource?: RecruitingStepLink;
  externalLink?: RecruitingStepLink;
};

/** @deprecated Use RecruitingPathStep */
export type RecruitingStep = Omit<RecruitingPathStep, "id" | "order" | "detailSections">;

export const ftRecruitingEyebrow = "Full-Time Recruiting Hub";
export const ftRecruitingTitle =
  "Deadlines hit before fall semester. Start in July.";
export const ftRecruitingDescription =
  "Follow the path below—from understanding the process to submitting your application and prepping for interviews. Built for second-year MBAs targeting McKinsey, Bain, BCG, and similar firms.";

export const consultingOrientation = {
  eyebrow: "Start here",
  title: "What is consulting recruiting?",
  whatIsConsulting: [
    "Management consulting firms hire MBAs into generalist roles—often called Associate or Consultant—where you solve business problems for clients across industries. McKinsey, Bain, and BCG (MBB) are the most competitive targets, but the same playbook applies to tier-two and boutique firms.",
    "Full-time MBA recruiting runs on a compressed summer timeline. Portals open in July, applications are due in August, and interviews can start in September—before fall semester feels fully underway. You apply to specific offices (e.g. Boston, New York, Chicago), not just the firm as a whole.",
    "Your office choice matters. It's where you'll live, build your network, and spend your career if you accept an offer. Firms expect you to have a thoughtful reason for each office on your application.",
  ],
  processAtAGlance: [
    {
      label: "Orient",
      description: "Understand the process and pick target offices",
    },
    {
      label: "Network",
      description: "Events, coffee chats, and office research",
    },
    {
      label: "Apply",
      description: "Resume, club review, and portal submission",
    },
    {
      label: "Prep",
      description: "Cases and behavioral stories in parallel",
    },
    {
      label: "Interview",
      description: "First rounds, finals, and office visits",
    },
    {
      label: "Offer",
      description: "Decisions and timeline management",
    },
  ],
} as const;

export const ftOverwhelmedBullets = [
  "Pick 2–3 target offices where you'd actually live and build ties.",
  "Get your resume in for club review in early July—not the week of the deadline.",
  "Start casing in July. Early apps mean September interviews.",
] as const;

export const firmDeadlines: FirmDeadline[] = [
  {
    firm: "McKinsey & Company",
    year: 2026,
    portalOpens: "July 1, 2026",
    applicationDeadline:
      "August 11, 2026 (MBA Associate; Dec 2026–Fall 2027 grads)",
    interviewWindow:
      "First rounds: September 2026 · Finals: late Sep–early Oct · Offers: October",
    notes:
      "APD and MBA deadlines are aligned this year. Choose offices where you want to live and build long-term networks—not just where you interned.",
    href: "https://www.mckinsey.com/careers",
  },
  {
    firm: "Bain & Company",
    portalOpens: "Check firm portal",
    applicationDeadline: "MBA full-time dates TBD",
    interviewWindow: "TBD — confirm on Bain careers site",
    notes:
      "Undergrad and Silver Scholars timelines are not MBA full-time. Watch the firm portal and #consulting-fulltime-recruiting for updates.",
    href: "https://www.bain.com/careers/",
  },
  {
    firm: "Boston Consulting Group",
    portalOpens: "Check firm portal",
    applicationDeadline: "MBA full-time dates TBD",
    interviewWindow: "TBD — confirm on BCG careers site",
    notes:
      "Mid-July UG dates you've seen elsewhere do not apply to MBA FT. We'll update when BCG posts MBA timelines.",
    href: "https://careers.bcg.com/",
  },
];

export const recruitingPathSteps: RecruitingPathStep[] = [
  {
    id: "choose-offices",
    order: 1,
    phase: "Summer",
    title: "Choose your target offices",
    summary:
      "Decide where you'd live, build a network, and see yourself long term. Office choice drives events, chats, and your application.",
    timing: "June–July, before you submit",
    actions: [
      "Shortlist 2–3 offices (e.g. Boston, New York, Darien, Chicago).",
      "Note personal ties, partner locations, and lifestyle fit.",
      "Align with firm guidance: pick where you want to be, not just where you interned.",
    ],
    detailSections: [
      {
        id: "office-rule",
        title: "The 2–3 office rule",
        body: [
          "Most candidates apply to two or three offices. More than that dilutes your story; fewer limits your options if one office passes.",
          "Each office should pass a simple test: Would you be excited to live there for 3–5 years? Can you articulate why this office—not just this firm?",
        ],
      },
      {
        id: "office-fit",
        title: "How to evaluate office fit",
        body: [
          "Lifestyle: cost of living, commute, partner job market, distance from family.",
          "Network: SOM alumni, pre-MBA contacts, people you've met at events or GTKO sessions.",
          "Staffing & culture: office size, industry mix, travel norms—learn this from events and coffee chats, not firm marketing alone.",
          "Don't default to where you interned unless you'd genuinely choose to return there full-time.",
        ],
      },
      {
        id: "office-ranking",
        title: "Office ranking on applications",
        body: [
          "Firms ask you to rank offices. Your #1 should be defensible in an interview—\"I ranked Boston first because…\"",
          "Be honest in ranking; gaming the system (ranking a small office hoping for less competition) often backfires.",
        ],
      },
    ],
  },
  {
    id: "firm-portals",
    order: 2,
    phase: "Summer",
    title: "Sign up on firm portals & calendar deadlines",
    summary:
      "Create accounts on McKinsey, Bain, and BCG career sites and put every date in your calendar the day portals open.",
    timing: "As soon as portals open (McKinsey: July 1, 2026)",
    actions: [
      "Set reminders one week and one day before each deadline.",
      "Confirm which role track you're applying to (MBA Associate vs. other).",
      "Screenshot or save confirmation emails after each submission.",
    ],
    externalLink: {
      label: "McKinsey careers",
      href: "https://www.mckinsey.com/careers",
    },
    detailSections: [
      {
        id: "portal-setup",
        title: "Portal setup checklist",
        body: [],
        comingSoon: true,
      },
    ],
  },
  {
    id: "office-events",
    order: 3,
    phase: "Summer",
    title: "Get familiar with offices (events / GTKO)",
    summary:
      "Firm webinars, SOM sessions, and get-to-know-office visits help you sanity-check office fit before you apply.",
    timing: "July–August, parallel with resume work",
    actions: [
      "RSVP via Yale Groups and firm portals.",
      "Prepare 2–3 questions about office culture, staffing, and lifestyle.",
      "Take notes on people you'd want to follow up with.",
    ],
    clubResource: {
      label: "Club calendar on Yale Groups",
      href: "https://groups.som.yale.edu/events?group_ids=1116",
    },
    detailSections: [
      {
        id: "event-prep",
        title: "How to prep for recruiting events",
        body: [],
        comingSoon: true,
      },
    ],
  },
  {
    id: "coffee-chats",
    order: 4,
    phase: "Summer",
    title: "Coffee chats & firm research",
    summary:
      "Informal conversations build context; weight varies by firm. McKinsey full-time is more resume-driven than chat-driven, but office intel still matters.",
    timing: "July–August",
    actions: [
      "Reach out to SOM alumni and consultants in target offices.",
      "Keep chats focused: role, office, what they wish they'd known.",
      "Do not treat chats as a substitute for a strong resume where the firm weights apps heavily.",
    ],
    detailSections: [
      {
        id: "chat-outreach",
        title: "How to request a coffee chat",
        body: [
          "Use SOM alumni directory, LinkedIn, or warm intros from club members or professors.",
          "Keep outreach short: who you are, which office you're exploring, and one specific ask (15–20 minutes).",
          "Suggest 2–3 time windows; make it easy to say yes.",
        ],
      },
      {
        id: "chat-questions",
        title: "Questions worth asking",
        body: [
          "What does a typical week look like for an associate in this office?",
          "How does staffing work—industry teams, generalist pools, travel?",
          "What do you wish you'd known before joining this office?",
          "How does full-time recruiting differ from internship recruiting here?",
        ],
      },
      {
        id: "chat-followup",
        title: "After the chat",
        body: [
          "Send a brief thank-you within 24 hours.",
          "Note takeaways that inform your office ranking and application essays.",
          "Don't ask for a referral unless the relationship warrants it—most FT processes are resume-driven.",
        ],
      },
    ],
  },
  {
    id: "resume-refinement",
    order: 5,
    phase: "Applications",
    title: "Build & refine your resume",
    summary:
      "One page, impact bullets, leadership and quantified outcomes. Club review helps—but only if you submit early enough to iterate.",
    timing: "Early July submit · 1–2 review passes · end of July cutoff",
    actions: [
      "Submit to the club in early July, not the week of the firm deadline.",
      "Limit to 1–2 review rounds so reviewers can turn work around.",
      "Use feedback to tighten bullets; avoid endless rewrites the night before you apply.",
    ],
    clubResource: {
      label: "Email for resume questions",
      href: "mailto:club-consulting@som.yale.edu",
    },
    detailSections: [
      {
        id: "club-review",
        title: "How club resume review works",
        body: [
          "Email club-consulting@som.yale.edu with your draft in early July.",
          "Expect 1–2 review rounds—submit early enough to incorporate feedback before firm deadlines.",
          "Reviewers focus on impact bullets, quantification, leadership framing, and one-page formatting.",
          "Club review is high-volume in July; late submissions may not get a full pass before August 11.",
        ],
      },
      {
        id: "strong-resume",
        title: "What a strong consulting resume looks like",
        body: [
          "One page. No exceptions for full-time MBA recruiting.",
          "Each bullet: action verb + what you did + quantified outcome where possible.",
          "Show leadership, problem-solving, and impact—not job descriptions.",
          "Education at top; experience in reverse chronological order; skills section optional and brief.",
        ],
      },
      {
        id: "resume-mistakes",
        title: "Common mistakes",
        body: [
          "Submitting for review the week of the deadline with no time to iterate.",
          "Bullets that describe responsibilities instead of outcomes.",
          "Formatting that doesn't match firm portal requirements (PDF, file size, fonts).",
          "Listing every internship—prioritize relevance and impact over completeness.",
        ],
      },
    ],
  },
  {
    id: "submit-application",
    order: 6,
    phase: "Applications",
    title: "Submit before the deadline",
    summary:
      "Treat the deadline as immovable. Technical issues, timezone confusion, and last-minute edits have sunk strong candidates.",
    timing: "At least several days before the firm deadline",
    actions: [
      "Upload final resume and complete all portal fields early.",
      "Double-check office ranking and role selection.",
      "Have a peer sanity-check your application before you hit submit.",
    ],
    detailSections: [
      {
        id: "submit-checklist",
        title: "Pre-submit checklist",
        body: [],
        comingSoon: true,
      },
    ],
  },
  {
    id: "case-prep",
    order: 7,
    phase: "Interview prep",
    title: "Case prep",
    summary:
      "With August application drops, September interviews are realistic. Casing is not a September problem—it starts in July.",
    timing: "July onward; intensify after you submit",
    actions: [
      "Drill mental math, structuring, charts, and synthesis.",
      "Run live cases with peers weekly.",
      "Use club resources and peer casing channels—not just fall bootcamp.",
    ],
    clubResource: {
      label: "Case Repository",
      href: "https://cases.baglini.co",
    },
    detailSections: [
      {
        id: "when-to-start",
        title: "When to start",
        body: [
          "Start in July, even while you're still working on your resume. Early applicants can interview in September.",
          "Don't wait for fall bootcamp—use summer to build fundamentals so bootcamp sharpens rather than teaches from zero.",
        ],
      },
      {
        id: "weekly-cadence",
        title: "Suggested weekly cadence",
        body: [
          "2–3 live cases per week with peers once you've done initial self-study.",
          "Daily mental math drills (15–20 minutes)—market sizing, percentages, break-evens.",
          "1–2 solo structure practices per week: read a prompt, outline approach, speak it out loud.",
          "Review each case afterward: what framework fit, where you got stuck, what you'd do differently.",
        ],
      },
      {
        id: "case-resources",
        title: "Resources to use",
        body: [
          "Case Repository (cases.baglini.co) for practice prompts and peer matching.",
          "Club casing channels and second-year peers who've been through the process.",
          "Case in Point or equivalent for frameworks—then move quickly to live practice.",
        ],
      },
    ],
  },
  {
    id: "behavioral-prep",
    order: 8,
    phase: "Interview prep",
    title: "Behavioral / PEI prep",
    summary:
      "McKinsey Personal Experience Interview, Bain/BCG fit—same story bank. Four to six polished STAR stories cover most prompts.",
    timing: "July–August, alongside cases",
    actions: [
      "Draft stories for leadership, conflict, failure, impact, and \"why consulting.\"",
      "Practice out loud until answers are crisp, not memorized.",
      "Tie each story to the office and firm you're targeting.",
    ],
    detailSections: [
      {
        id: "story-bank",
        title: "Building your story bank",
        body: [],
        comingSoon: true,
      },
    ],
  },
  {
    id: "interviews",
    order: 9,
    phase: "Interviews",
    title: "First-round & final interviews",
    summary:
      "First rounds mix case and fit; finals go deeper on cases and partner conversations, often in-person at your target office.",
    timing: "September–early October (McKinsey 2026 cycle)",
    actions: [
      "Confirm logistics, time zone, and interview format 48 hours ahead.",
      "Run one full mock the day before each round.",
      "Research partners and office leadership if names are shared for finals.",
      "Plan travel early if the office requires an in-person visit.",
    ],
    detailSections: [
      {
        id: "first-round",
        title: "First-round interviews",
        body: [
          "Usually two interviews, each mixing case and fit/PEI components. Often virtual.",
          "Treat them like finals, not warm-ups—firms eliminate aggressively at this stage.",
          "Confirm platform (Zoom, Teams), time zone, and backup contact 48 hours ahead.",
          "Run one full mock the day before; send brief thank-you notes where appropriate.",
        ],
      },
      {
        id: "final-round",
        title: "Final-round interviews & office visits",
        body: [
          "Deeper cases and partner-level conversations. Often in-person at your target office.",
          "This is where office fit gets tested—partners want to see you'd thrive in their office specifically.",
          "Prepare thoughtful questions about staffing, development, and culture.",
          "Plan travel and lodging early; finals can cluster in a short window.",
        ],
      },
    ],
  },
  {
    id: "offers",
    order: 10,
    phase: "Offers",
    title: "Offers & decisions",
    summary:
      "Decisions can come quickly after finals. Know your deadlines, backup processes, and how to communicate with firms if you need time.",
    timing: "October (McKinsey 2026 cycle); varies by firm",
    actions: [
      "Track offer deadlines in writing.",
      "Keep other firm pipelines warm until you have a signed offer.",
      "Ask the club or trusted second-years if you need help thinking through timing.",
    ],
    detailSections: [
      {
        id: "offer-timeline",
        title: "Managing offer timelines",
        body: [],
        comingSoon: true,
      },
    ],
  },
];

/** @deprecated Use recruitingPathSteps */
export const recruitingSteps = recruitingPathSteps;
