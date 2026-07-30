export type PageMeta = {
  title: string;
  description: string;
};

const homeMeta: PageMeta = {
  title: "Yale SOM Consulting Club",
  description:
    "The Yale SOM Consulting Club prepares students for consulting careers through mentorship, casing, recruiting support, and a strong community.",
};

const pageMetaByPath: Record<string, PageMeta> = {
  "/": homeMeta,
  "/full-time-recruiting": {
    title: "Full-Time Consulting Recruiting Hub | Yale SOM Consulting Club",
    description:
      "MBA full-time recruiting deadlines, MBB application links, and a step-by-step path for Yale SOM students targeting McKinsey, BCG, and Bain.",
  },
  "/full-time-recruiting/office-map": {
    title: "MBB Global Office Map | Yale SOM Consulting Club",
    description:
      "Explore McKinsey, BCG, and Bain offices worldwide. Filter by firm or region to choose one target office per firm for full-time recruiting.",
  },
  "/resume-review": {
    title: "Consulting Resume Review | Yale SOM Consulting Club",
    description:
      "Submit your resume for Yale SOM Consulting Club review before full-time MBA consulting applications.",
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
