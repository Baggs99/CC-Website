export type FirmDeadline = {
  firm: string;
  year?: number;
  portalOpens: string;
  applicationDeadline: string;
  interviewWindow: string;
  notes?: string;
  cmsReminder?: boolean;
  href?: string;
  hrefLabel?: string;
};

export type RecruitingStepLink = {
  label: string;
  href: string;
  preview?: {
    kind?: "image" | "office-map";
    src?: string;
    alt: string;
    caption?: string;
    legend?: { label: string; color: string }[];
  };
};

export type StepDetailSection = {
  id: string;
  title: string;
  body: string[];
  comingSoon?: boolean;
  image?: { src: string; alt: string };
};

export type RecruitingStepLinkGroup = {
  title: string;
  links: RecruitingStepLink[];
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
  resourceLinks?: RecruitingStepLink[];
  resourceLinkGroups?: RecruitingStepLinkGroup[];
};

/** @deprecated Use RecruitingPathStep */
export type RecruitingStep = Omit<RecruitingPathStep, "id" | "order" | "detailSections">;

export const ftRecruitingEyebrow = "Full-Time Recruiting Hub";
export const ftRecruitingTitle =
  "Deadlines hit before fall semester. Start in July.";
export const ftRecruitingDescription =
  "Follow the path below, from understanding the process to submitting your application and prepping for interviews. Built for second-year MBAs targeting McKinsey, BCG, Bain, and similar firms.";

export const consultingOrientation = {
  eyebrow: "Start here",
  title: "What is consulting recruiting?",
  whatIsConsulting: [
    "Management consulting firms hire MBAs into generalist roles, often called Associate or Consultant, where you solve business problems for clients across industries. McKinsey, BCG, and Bain (MBB) are the largest targets, but the same playbook applies to other strategy firms and boutiques.",
    "Full-time MBA recruiting runs on a compressed summer timeline. MBB dates tend to come first: portals open in July, applications can be due as early as August, and interviews may start in September, before fall semester feels fully underway. You apply to specific offices (e.g. Boston, New York, Chicago, Darien), not just the firm as a whole.",
    "Your office choice matters. It's where you'll live, build your network, and spend your weekends. You'll likely work across the U.S. and the world over your career, but your home office shapes day-to-day life. Firms expect you to have a thoughtful reason for each office on your application.",
  ],
} as const;

export const ftOverwhelmedBullets = [
  "Pick one target office per firm, where you'd actually live and build ties.",
  "Get your resume in for club review in early July.",
  "Start casing in July. Early apps mean September interviews.",
  "Prep behavioral stories (PEI/fit) in July, alongside casing.",
] as const;

export const somCmsJobPortal: RecruitingStepLink = {
  label: "SOM CMS / Job Hunting Portal (12Twenty)",
  href: "https://som-yale.12twenty.com/jobPostings#/jobPostings/home",
};

export const somCmsEvents: RecruitingStepLink = {
  label: "SOM CMS Events (12Twenty)",
  href: "https://som-yale.12twenty.com/events#/events/home",
};

export const firmDeadlinesNote =
  "Remember, this is a student-maintained guide. Confirm firm deadlines regularly on CMS:";

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
      "APD and MBA deadlines are aligned this year. Choose offices where you want to live and build long-term networks, not just where you interned.",
    href: "https://www.mckinsey.com/careers/search-jobs/jobs/associate-15178",
    hrefLabel: "McKinsey Associate application",
  },
  {
    firm: "Boston Consulting Group",
    portalOpens: "Check firm portal",
    applicationDeadline: "MBA full-time dates TBD",
    interviewWindow: "TBD, confirm on BCG careers site",
    cmsReminder: true,
    href: "https://studenttalent.bcg.com/candidate/login",
    hrefLabel: "BCG job portal",
  },
  {
    firm: "Bain & Company",
    portalOpens: "Check firm portal",
    applicationDeadline: "MBA full-time dates TBD",
    interviewWindow: "TBD, confirm on Bain careers site",
    cmsReminder: true,
    href: "https://www.bain.com/careers/find-a-role/position/?jobid=10409",
    hrefLabel: "Bain Consultant application",
  },
];

export const recruitingPathSteps: RecruitingPathStep[] = [
  {
    id: "choose-offices",
    order: 1,
    phase: "Summer",
    title: "Choose your target offices",
    summary:
      "Decide where you'd live, spend your weekends, and build ties. For most people that's one office per firm, but full-time hiring varies by office, so gather intel before you commit.",
    timing: "June–July, before you submit",
    actions: [
      "Start with an honest question: where do you want to spend your weekends?",
      "For most people: one office per firm. If you want a region, pick one city per firm across MBB (see deep dive).",
      "Before you apply, figure out which offices are actively hiring for full-time; coffee chats are the best place to ask.",
      "Prepare a unique why-firm and why-location story for each app: specific to you, the city, and that firm.",
    ],
    clubResource: {
      label: "MBB global office map",
      href: "/full-time-recruiting/office-map",
      preview: {
        kind: "image",
        src: "/images/mbb-office-map-preview.png",
        alt: "Map preview showing MBB office locations worldwide.",
        caption: "294 offices · filter by firm or region",
        legend: [
          { label: "McKinsey", color: "#1B6EC2" },
          { label: "BCG", color: "#006838" },
          { label: "Bain", color: "#C8102E" },
        ],
      },
    },
    detailSections: [
      {
        id: "office-rule",
        title: "One office per firm",
        body: [
          "For most people, the right call is one office per firm. That keeps networking focused, gives each firm a clear signal, and makes your story easier to tell in apps and interviews.",
          "You can still cover a region across MBB with a one-firm-one-city approach. If you want the Northeast, for example: BCG Boston, McKinsey Darien, and Bain New York. Three firms, three cities, one office each.",
          "Each pick should pass a simple test: Where do you want to spend your weekends? Would you be excited to live there for 3–5 years? Can you explain why this office, not just this firm?",
          "Factor in the practical stuff too: partner job market, cost of living, commute, and distance from family.",
        ],
      },
      {
        id: "office-hiring",
        title: "Full-time hiring & pre-app intelligence",
        body: [
          "For full-time MBA recruiting, some offices hire larger classes than others, and volume can shift year to year.",
          "Figure out which offices are actively hiring for your cycle. Don't assume the biggest brand-name city is the best fit or the one with the most spots.",
          "A smaller or secondary office isn't automatically easier or harder to break into. It depends on that cycle's headcount and pipeline.",
          "Use coffee chats and CMS to learn which offices are actually staffing up, not just which cities have the most name recognition.",
          "In coffee chats, ask about day-to-day life and the work itself: how staffing works, what a typical week looks like, travel expectations, industry mix, strongest capabilities or practices, and the types of projects associates actually work on.",
          "Combine chat takeaways with SOM alumni, office info sessions, and the MBB office map to narrow your list before you submit.",
        ],
      },
      {
        id: "office-ranking",
        title: "Why firm, why location",
        body: [
          "Your why-firm and why-location answers must be unique: specific to you, the city or area, and that firm. Generic lines about culture or brand won't hold up in interviews.",
          "Tie in personal connections, prior work in relevant industries, partner or family location, or lifestyle fit. Each reason should sound like it could only apply to that office.",
          "If you can't articulate a distinct story for a pick, keep researching before you rank or submit. Recruiters can tell when an office choice is strategic but not sincere.",
          "When a portal asks you to rank offices, put your true first choice first and be ready to defend it.",
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
      "Make accounts on McKinsey, BCG, Bain, and other consulting firms' career sites. Put every deadline in your calendar as soon as portals open.",
    timing: "As soon as portals open (McKinsey: July 1, 2026)",
    actions: [
      "Create your profile on each firm's career portal before deadlines sneak up on you.",
      "Set reminders one week and one day before each deadline.",
      "Confirm which role track you're applying to (MBA Associate vs. other).",
      "Cross-check deadlines on SOM CMS (CDO Job Hunting Portal) when firm dates are TBD.",
      "Screenshot or save confirmation emails after each submission.",
    ],
    resourceLinks: [
      {
        label: "McKinsey Associate application",
        href: "https://www.mckinsey.com/careers/search-jobs/jobs/associate-15178",
      },
      {
        label: "BCG job portal",
        href: "https://studenttalent.bcg.com/candidate/login",
      },
      {
        label: "Bain Consultant application",
        href: "https://www.bain.com/careers/find-a-role/position/?jobid=10409",
      },
    ],
    detailSections: [],
  },
  {
    id: "office-events",
    order: 3,
    phase: "Summer",
    title: "Get familiar with offices (firm events & info sessions)",
    summary:
      "Firms run virtual Zoom sessions to help you learn about offices. The CDO also sets up official coffee chats between firms and SOMers, so check CMS Events regularly.",
    timing: "June–July, before you submit",
    actions: [
      "Check SOM CMS Events regularly for CDO-hosted firm coffee chats and recruiting events.",
      "RSVP on firm career sites for virtual office sessions in cities you're considering.",
      "Check McKinsey, BCG, and Bain portals regularly for new office info sessions.",
      "Prepare 2–3 questions about office culture, staffing, and day-to-day life.",
      "Follow up with people you meet; these sessions are a natural lead-in to coffee chats.",
    ],
    clubResource: {
      label: "SOM CMS Events (12Twenty)",
      href: "https://som-yale.12twenty.com/events#/events/home",
    },
    resourceLinks: [
      {
        label: "McKinsey office sessions & listings",
        href: "https://www.mckinsey.com/careers/connect-with-mckinsey#:~:text=Connect%20with%20Our,receive%20more%20info.",
      },
      {
        label: "BCG job portal",
        href: "https://studenttalent.bcg.com/candidate/login",
      },
      {
        label: "Bain careers portal",
        href: "https://www.bain.com/careers/",
      },
    ],
    detailSections: [
      {
        id: "event-context",
        title: "Firm sessions & CDO coffee chats",
        body: [
          "McKinsey, BCG, and Bain host virtual get-to-know-the-office calls on their career sites. Treat these like office research, not a substitute for one-on-one coffee chats.",
          "The CDO will often set up official coffee chats between firms and SOM students. Check CMS Events regularly so you don't miss them.",
          "Schedules and RSVP links change. Check each firm's portal and CMS Events for new office info sessions, and confirm details before you plan around one.",
        ],
      },
      {
        id: "event-prep",
        title: "How to prep for virtual office sessions",
        body: [
          "Know which office you're there to learn about, and have one or two specific questions ready.",
          "Take notes on staffing, travel, industry mix, and who you'd want to follow up with.",
          "Send a short thank-you or coffee chat request within a day or two while the event is still fresh.",
        ],
      },
    ],
  },
  {
    id: "coffee-chats",
    order: 4,
    phase: "Summer",
    title: "Coffee chats & firm research",
    summary:
      "Coffee chats help you learn whether a firm, office, and industry are a fit, and they're practice for telling your story. You don't need a recruiter intro; reach out after firm events or office info sessions, or cold message on LinkedIn or email.",
    timing: "July–August",
    actions: [
      "Treat chats as two-way learning: is this vibe right for you, and can you refine how you tell your story?",
      "Before each chat, look up your contact on LinkedIn (office, practice area, background) so you can ask questions you couldn't google.",
      "After a firm event or office call, email consultants directly to request a 15–20 minute chat.",
      "Offer three 90-minute availability blocks so they can pick a short slot, don't send a laundry list of times.",
      "Consultants are often very busy, so no reply isn't a problem. Keep sending requests; considerate persistence is a virtue.",
    ],
    clubResource: {
      label: "Example coffee chat request email",
      href: "/images/coffee-chat-example-email.png",
    },
    externalLink: {
      label: "Example thank-you follow-up",
      href: "/images/coffee-chat-thank-you-example.png",
    },
    detailSections: [
      {
        id: "chat-why",
        title: "Why coffee chat?",
        body: [
          "Coffee chats are for you. Use them to refine your storytelling (it's behavioral practice), pressure-test whether a firm, office, or industry is actually a fit, and get a read on culture. There's no magic number that earns an interview; stop when a chat stops helping you learn.",
          "They're a two-way conversation. Consultants are often bored of transactional recruiting calls, so be curious and interesting, not just efficient. Ask whether you'd want to work with these people and whether the day-to-day vibe fits you.",
          "Relationships matter later. Strong chats can turn into firm case practice partners after you get an interview invite, and they help you build ties that matter for staffing over time. Referrals exist, but a real relationship is better than a one-off ask.",
          "For the firm, it's a chance to meet a potential colleague. McKinsey and BCG generally don't track coffee chats formally in recruiting systems; they're non-evaluative. That said, don't be memorable for the wrong reasons. You don't need to be perfect, just not bad enough that someone flags HR.",
        ],
      },
      {
        id: "chat-outreach",
        title: "How to request a coffee chat",
        body: [
          "You don't have to wait for a recruiter to connect you. Reach out after a virtual office event or info session, or cold message on LinkedIn or email with a short ask for 15–20 minutes.",
          "Introduce yourself (SOM class year), say which office or firm you're exploring, and keep the ask specific: culture, day-to-day, what strong candidates look like.",
          "Offer three 90-minute windows when you're free (e.g. Wed 11:30–1:00, Fri 1:00–4:30, Tue 9:00–11:30). They pick a 15-minute slot inside one block, much easier than coordinating exact times back and forth.",
          "Use SOM alumni directory, LinkedIn, or warm intros when you don't have a recent event touchpoint.",
          "Consultants are often very busy. A no-reply usually isn't personal, so keep reaching out with thoughtful, concise asks.",
        ],
        image: {
          src: "/images/coffee-chat-example-email.png",
          alt: "Example email requesting a 20-minute coffee chat with three 90-minute availability blocks.",
        },
      },
      {
        id: "chat-research",
        title: "Research before you chat",
        body: [
          "Look up whoever you're meeting on LinkedIn. Note their office, practice area, and anything that might connect to your own background.",
          "That research feeds better conversations. You can ask about their path, their work, or how your interests might fit, instead of generic firm FAQ questions.",
          "Don't be creepy. You don't need to recite their resume. A little context is enough; being too good at research can feel unsettling.",
        ],
      },
      {
        id: "chat-questions",
        title: "Tailor your questions",
        body: [
          "Ask things that are specific to you. Consultants hear the same scripts all season; what makes a chat memorable is curiosity that's actually yours.",
          "Skip what you could answer with Google: firm overview, office headcount, basic recruiting timelines.",
          "Don't run the same question list with every consultant. Adapt based on who you're talking to and what you still need to learn.",
          "If you're stuck, starting points: what does a typical week look like in this office? How does staffing work (industry teams, generalist pools, travel)? What do you wish you'd known before joining? How does full-time recruiting differ from internship recruiting here?",
        ],
      },
      {
        id: "chat-followup",
        title: "After the chat",
        body: [
          "Send a brief thank-you within 24 hours. Reference something specific from the conversation so it doesn't read like a template.",
          "Note takeaways that inform your office ranking and application essays.",
          "Don't ask for a referral unless the relationship warrants it, most FT processes are resume-driven.",
        ],
        image: {
          src: "/images/coffee-chat-thank-you-example.png",
          alt: "Example thank-you email after a coffee chat, referencing specific conversation takeaways.",
        },
      },
    ],
  },
  {
    id: "resume-refinement",
    order: 5,
    phase: "Applications",
    title: "Build & refine your resume",
    summary:
      "One page, tangible impact, leadership, and what you personally drove. Club review helps if you submit in early July with time to iterate.",
    timing: "Early July submit · 1–2 review passes",
    actions: [
      "Start from the Yale SOM template and CDO resume guide (linked below).",
      "Study the successful example resumes, then draft your own.",
      "Submit for club review in early July; limit to 1–2 rounds so reviewers can turn work around.",
      "Use feedback to tighten bullets before you upload to firm portals.",
    ],
    clubResource: {
      label: "Submit for club resume review",
      href: "/resume-review",
    },
    resourceLinkGroups: [
      {
        title: "Templates & guides",
        links: [
          {
            label: "Yale SOM resume template",
            href: "/documents/resume/yale-som-resume-template-mba.docx",
          },
          {
            label: "CDO resume guide",
            href: "/documents/resume/cdo-resume-guide.pdf",
          },
        ],
      },
      {
        title: "Successful example resumes",
        links: [
          {
            label: "Public Sector",
            href: "/documents/resume/baglini-resume-yale-format.docx",
          },
          {
            label: "Private Sector",
            href: "/documents/resume/yale-som-example-resume.docx",
          },
        ],
      },
    ],
    detailSections: [
      {
        id: "club-review",
        title: "How club resume review works",
        body: [
          "Use the club resume review form (linked above) with your @yale.edu address and a one-page PDF.",
          "Expect 1–2 review rounds. Submit in early July so you have time to incorporate feedback before firm deadlines.",
          "Reviewers focus on tangible impact, strong action verbs, leadership framing, and Yale SOM one-page formatting.",
        ],
      },
      {
        id: "strong-resume",
        title: "What a strong consulting resume looks like",
        body: [
          "Start from the Yale SOM resume template and CDO resume guide (linked above).",
          "One page. No exceptions for full-time MBA recruiting.",
          "Each bullet: strong action verb + what you did + tangible impact. Give the reader a clear \"so what?\"",
          "Focus on what you did. There is no \"I\" in team on a resume: own your contributions and be the star of each bullet.",
          "Show leadership and problem-solving, not job descriptions.",
          "Education at top; experience in reverse chronological order; skills section optional and brief.",
          "Compare your draft to the successful example resumes before you submit for club review.",
        ],
      },
      {
        id: "resume-mistakes",
        title: "Common mistakes",
        body: [
          "Bullets that describe responsibilities instead of what you personally accomplished.",
          "No clear \"so what?\" or tangible impact at the end of a bullet.",
          "Formatting that doesn't match the Yale SOM resume template (layout, fonts, margins).",
          "Listing every role you've ever had; prioritize relevance and impact over completeness.",
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
      "Portals fail, time zones confuse, and last-minute edits have cost people offers. The deadline is not negotiable.",
    timing: "At least one day before the firm deadline",
    actions: [
      "Submit at least one day early. Your application should be finished, not started, on deadline day.",
      "Expect technical friction and leave time to retry if uploads stall or sessions time out.",
      "Double-check office and role selection before you hit submit.",
    ],
    detailSections: [],
  },
  {
    id: "case-prep",
    order: 7,
    phase: "Interview prep",
    title: "Case prep",
    summary:
      "With August application drops, September interviews are realistic. Casing is not a September problem, it starts in July.",
    timing: "July onward; intensify after you submit",
    actions: [
      "Drill mental math, structuring, charts, and synthesis.",
      "Run live cases with peers weekly.",
      "Use club resources and peer casing channels, not just fall bootcamp.",
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
          "Don't wait for fall bootcamp, use summer to build fundamentals so bootcamp sharpens rather than teaches from zero.",
        ],
      },
      {
        id: "weekly-cadence",
        title: "Suggested weekly cadence",
        body: [
          "2–3 live cases per week with peers once you've done initial self-study.",
          "Daily mental math drills (15–20 minutes), market sizing, percentages, break-evens.",
          "1–2 solo structure practices per week: read a prompt, outline approach, speak it out loud.",
          "Review each case afterward: what framework fit, where you got stuck, what you'd do differently.",
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
      "McKinsey Personal Experience Interview, Bain/BCG fit, same story bank. Four to six polished STAR stories cover most prompts.",
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
          "Treat them like finals, not warm-ups, firms eliminate aggressively at this stage.",
          "Confirm platform (Zoom, Teams), time zone, and backup contact 48 hours ahead.",
          "Run one full mock the day before; send brief thank-you notes where appropriate.",
        ],
      },
      {
        id: "final-round",
        title: "Final-round interviews & office visits",
        body: [
          "Deeper cases and partner-level conversations. Often in-person at your target office.",
          "This is where office fit gets tested, partners want to see you'd thrive in their office specifically.",
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
