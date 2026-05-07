import { BookOpenText, Calendar, type LucideIcon } from "lucide-react";

export type RecruitingResource = {
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
  href: string;
};

export const recruitingResources: RecruitingResource[] = [
  {
    title: "Case Repository",
    description:
      "A library of all our cases searchable by Industry Type, Difficulty, and Case Type!\n@yale.edu email sign in required.",
    icon: BookOpenText,
    cta: "Open repository",
    href: "https://cases.baglini.co",
  },
  {
    title: "Upcoming Events",
    description:
      "The club’s live calendar on Yale Groups: workshops, firm sessions, and socials throughout the year. Sign in with your Yale credentials to RSVP and stay ahead of the recruiting cycle.",
    icon: Calendar,
    cta: "View calendar",
    href: "https://groups.som.yale.edu/events?group_ids=1116",
  },
];
