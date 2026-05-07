export type ProgramEvent = {
  title: string;
  window: string;
  description: string;
  tag: "Flagship" | "Recurring" | "Networking" | "Practice" | "Community";
  /** Public path under /images (official Yale SOM photography) */
  photo: string;
  photoAlt: string;
};

export const programEvents: ProgramEvent[] = [
  {
    title: "Full-Time Bootcamp",
    window: "August  ·  Pre-recruiting",
    description:
      "Five-day intensive that grounds first-years in case structure, math drilling, and behavioral storytelling before firms hit campus.",
    tag: "Flagship",
    photo: "/images/consulting-club-whiteboard-session.jpg",
    photoAlt:
      "Consulting Club session with a member at the whiteboard and peers at a table.",
  },
  {
    title: "Office Hours",
    window: "Weekly  ·  Sept to Feb",
    description:
      "Drop-in time with senior casers and second-year leadership for live feedback on cases, resumes, and recruiting strategy.",
    tag: "Recurring",
    photo: "/images/students-studying-evans.jpg",
    photoAlt: "Students studying and working together in Evans Hall.",
  },
  {
    title: "Mock Interviews",
    window: "Fall & Spring  ·  Recruiting cycle",
    description:
      "Realistic, partner-style mocks delivered by alumni at MBB, Big Four, and boutique firms, with structured written feedback.",
    tag: "Practice",
    photo: "/images/consulting-club-study-room.jpg",
    photoAlt: "Students gathered around a table for collaborative preparation.",
  },
  {
    title: "Coffee Chats",
    window: "Year-round  ·  Member-led",
    description:
      "Curated 1:1 introductions with consultants and SOM alumni across firms, geographies, and practice areas.",
    tag: "Networking",
    photo: "/images/students-evans-hall.jpg",
    photoAlt: "Students conversing in the bright atrium of Evans Hall.",
  },
  {
    title: "Firm Presentations",
    window: "September to November",
    description:
      "On-campus and virtual presentations with hiring teams from partner firms, followed by member-only networking receptions.",
    tag: "Networking",
    photo: "/images/consulting-club-auditorium-listening.jpg",
    photoAlt: "Members seated in the auditorium for a club or firm program.",
  },
  {
    title: "Case Team Matching",
    window: "Rolling",
    description:
      "We pair every member with a small case team based on fit, target firms, and schedule, so no one preps alone.",
    tag: "Community",
    photo: "/images/consulting-club-study-room.jpg",
    photoAlt: "Small group working together in a Yale SOM study room.",
  },
];
