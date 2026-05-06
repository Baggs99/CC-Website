export type ProgramEvent = {
  title: string;
  window: string;
  description: string;
  tag: "Flagship" | "Recurring" | "Networking" | "Practice" | "Community";
};

export const programEvents: ProgramEvent[] = [
  {
    title: "Full-Time Bootcamp",
    window: "August  ·  Pre-recruiting",
    description:
      "Five-day intensive that grounds first-years in case structure, math drilling, and behavioral storytelling before firms hit campus.",
    tag: "Flagship",
  },
  {
    title: "Office Hours",
    window: "Weekly  ·  Sept – Feb",
    description:
      "Drop-in time with senior casers and second-year leadership for live feedback on cases, resumes, and recruiting strategy.",
    tag: "Recurring",
  },
  {
    title: "Mock Interviews",
    window: "Fall & Spring  ·  Recruiting cycle",
    description:
      "Realistic, partner-style mocks delivered by alumni at MBB, Big Four, and boutique firms — with structured written feedback.",
    tag: "Practice",
  },
  {
    title: "Coffee Chats",
    window: "Year-round  ·  Member-led",
    description:
      "Curated 1:1 introductions with consultants and SOM alumni across firms, geographies, and practice areas.",
    tag: "Networking",
  },
  {
    title: "Firm Presentations",
    window: "September – November",
    description:
      "On-campus and virtual presentations with hiring teams from partner firms, followed by member-only networking receptions.",
    tag: "Networking",
  },
  {
    title: "Case Team Matching",
    window: "Rolling",
    description:
      "We pair every member with a small case team based on fit, target firms, and schedule — so no one preps alone.",
    tag: "Community",
  },
];
