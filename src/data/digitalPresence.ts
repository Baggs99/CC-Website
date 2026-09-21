import { leadership } from "@/data/leadership";

export const digitalPresenceEyebrow = "Before coffee chats";
export const digitalPresenceTitle = "Set up your digital presence.";
export const digitalPresenceDescription =
  "Recruiters, consultants, and classmates will look you up. Use the same professional headshot and a clean profile across LinkedIn, Outlook, Zoom, and CMS before you start outreach.";

/** Example headshots from club leadership (same style to aim for). */
export const digitalPresenceHeadshotExamples = leadership
  .filter((leader) => leader.photoFile)
  .slice(0, 4)
  .map((leader) => ({
    name: leader.name,
    src: `/leadership/${leader.photoFile}`,
  }));

export const digitalPresenceSignature = {
  name: "Daniel Baglini",
  line2: "MBA Class of 2027",
  line3: "Yale School of Management",
  email: "dan.baglini@yale.edu",
  emailHref: "mailto:dan.baglini@yale.edu",
  websiteLabel: "som.yale.edu",
  websiteHref: "https://som.yale.edu",
} as const;

export type DigitalPresenceSection = {
  id: string;
  title: string;
  summary: string;
  actions: string[];
  links?: { label: string; href: string }[];
  /** Optional screenshots under public/images/ once provided */
  images?: { src: string; alt: string; caption?: string }[];
  showSignatureExample?: boolean;
  showHeadshotExamples?: boolean;
};

export const digitalPresenceSections: DigitalPresenceSection[] = [
  {
    id: "headshot",
    title: "Headshot",
    summary:
      "Get a clean, professional headshot. Use the same photo everywhere so LinkedIn, Outlook, Zoom, and CMS all match.",
    actions: [
      "Use a simple background, good lighting, and business-casual attire.",
      "Crop tight enough that your face is clearly visible in small profile circles.",
      "Match the style of club leadership headshots below.",
    ],
    showHeadshotExamples: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    summary:
      "Your LinkedIn is what consultants open before a coffee chat. Keep it current and easy to find.",
    actions: [
      "Upload your headshot as your profile photo.",
      "Add Yale School of Management under Education (MBA, class year).",
      "Update your headline and About section so they reflect where you are now.",
      "Use a clean custom URL (linkedin.com/in/your-name).",
    ],
  },
  {
    id: "outlook",
    title: "Outlook",
    summary:
      "Put a face and a signature on every recruiting email you send.",
    actions: [
      "Add your headshot as your Outlook profile photo.",
      "Set an email signature using the template below (swap in your name, class year, and email).",
    ],
    showSignatureExample: true,
  },
  {
    id: "zoom",
    title: "Zoom",
    summary:
      "Firm info sessions and coffee chats often happen on Zoom. Look intentional on camera.",
    actions: [
      "Create an SOM-approved virtual background with the generator linked below.",
      "Sign into Zoom and upload your headshot as your profile picture.",
      "Update your Zoom Display Name to your first and last name (Profile → Display Name).",
    ],
    links: [
      {
        label: "SOM Zoom background generator",
        href: "https://apps.som.yale.edu/zoombackgroundgenerator/",
      },
    ],
  },
  {
    id: "cms",
    title: "CMS & notifications",
    summary:
      "CMS is how you hear about jobs, coffee chats, and events. Fill out your profile and turn on the right alerts.",
    actions: [
      "Completely fill out your CMS student profile.",
      "Log into the CDO site and open Customize your notifications.",
      "Turn on alerts for job postings, coffee chats, and events you care about.",
    ],
    links: [
      {
        label: "CMS student profile",
        href: "https://som-yale.12twenty.com/students/profile?tab=profile",
      },
      {
        label: "CDO site (customize notifications)",
        href: "https://cdo.som.yale.edu/",
      },
    ],
    // Add screenshot files under public/images/ when ready, then uncomment:
    // images: [
    //   {
    //     src: "/images/cms-cdo-login.png",
    //     alt: "CDO site homepage with Log in highlighted.",
    //     caption: "Log in on cdo.som.yale.edu",
    //   },
    //   {
    //     src: "/images/cms-customize-notifications.png",
    //     alt: "CDO site with Customize your notifications highlighted.",
    //     caption: "Customize your notifications",
    //   },
    // ],
  },
];

export const digitalPresenceDoneChecklist = [
  "Same professional headshot on LinkedIn, Outlook, Zoom, and CMS.",
  "LinkedIn has Yale SOM under Education, plus an updated headline and About.",
  "Outlook profile photo set; signature matches the template.",
  "Zoom has an SOM background, your headshot, and your first and last name as Display Name.",
  "CMS profile complete; job / coffee chat / event notifications on.",
] as const;
