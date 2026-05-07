import {
  BookOpenText,
  MessagesSquare,
  CalendarRange,
  FileText,
  Trophy,
  Coffee,
  Building2,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export type RecruitingResource = {
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
  href: string;
};

export const recruitingResources: RecruitingResource[] = [
  {
    title: "Case Prep",
    description:
      "Structured frameworks, drill libraries, and partner-led case workshops that take members from first case to offer-ready.",
    icon: BookOpenText,
    cta: "Open case library",
    href: "#",
  },
  {
    title: "Behavioral Prep",
    description:
      "Story banks, fit interview rubrics, and one-on-one coaching to craft authentic, compelling narratives for every firm.",
    icon: MessagesSquare,
    cta: "View prep guide",
    href: "#",
  },
  {
    title: "Real Timeline",
    description:
      "An honest, week-by-week recruiting calendar with deadlines, networking windows, and prep checkpoints used by past classes.",
    icon: CalendarRange,
    cta: "See the timeline",
    href: "#",
  },
  {
    title: "White Paper",
    description:
      "Our internally written guide to MBB and tier-two recruiting at Yale SOM, written by alumni now at top firms.",
    icon: FileText,
    cta: "Read the paper",
    href: "#",
  },
  {
    title: "Mock Madness",
    description:
      "A bracket-style mock interview tournament pairing members with senior casers and visiting consultants from partner firms.",
    icon: Trophy,
    cta: "Sign up",
    href: "#",
  },
  {
    title: "Coffee Chats",
    description:
      "Curated networking guides, outreach templates, and tracker tools to make every coffee chat genuinely useful.",
    icon: Coffee,
    cta: "Get the toolkit",
    href: "#",
  },
  {
    title: "Firm Research",
    description:
      "Deep-dive briefs on practice areas, geographies, and culture across MBB, Big Four, boutiques, and specialty consulting.",
    icon: Building2,
    cta: "Browse firms",
    href: "#",
  },
  {
    title: "Bootcamp",
    description:
      "Our flagship summer-to-fall program: case foundations, behavioral fundamentals, and live mocks before peak recruiting.",
    icon: GraduationCap,
    cta: "Learn more",
    href: "#",
  },
];
