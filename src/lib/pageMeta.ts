export type PageMeta = {
  title: string;
  description: string;
};

const homeMeta: PageMeta = {
  title: "Yale SOM Consulting Club | MBA Consulting at Yale",
  description:
    "Yale SOM's MBA consulting club for casing, mentorship, and full-time recruiting. Deadlines, prep, and community for students targeting McKinsey, BCG, Bain, and other firms.",
};

const pageMetaByPath: Record<string, PageMeta> = {
  "/": homeMeta,
  "/full-time-recruiting": {
    title:
      "Yale SOM Full-Time Consulting Recruiting | Deadlines & MBB Prep",
    description:
      "Full-time MBA consulting recruiting for Yale SOM: McKinsey, BCG, and Bain deadlines, application links, office map, and a step-by-step path from July prep through interviews.",
  },
  "/full-time-recruiting/office-map": {
    title: "MBB Office Map for Yale SOM Recruiting | McKinsey, BCG, Bain",
    description:
      "Map of McKinsey, BCG, and Bain offices worldwide for Yale SOM full-time recruiting. Filter by firm or region and pick one office per firm.",
  },
  "/resume-review": {
    title: "Yale SOM Consulting Resume Review | Consulting Club",
    description:
      "Club resume review for Yale SOM MBAs applying to full-time consulting roles at McKinsey, BCG, Bain, and other firms.",
  },
};

export function getPageMeta(pathname: string): PageMeta {
  return pageMetaByPath[pathname] ?? homeMeta;
}

export function applyPageMeta({ title, description }: PageMeta) {
  document.title = title;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", description);
  }
}
