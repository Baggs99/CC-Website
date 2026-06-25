export type NavLinkItem = {
  label: string;
  /** Shorter label for narrow nav on small screens */
  shortLabel?: string;
  href: string;
  kind: "route" | "hash";
};

export const navLinks: NavLinkItem[] = [
  {
    label: "Full-Time Recruiting Resources",
    shortLabel: "FT Recruiting",
    href: "/full-time-recruiting",
    kind: "route",
  },
  { label: "Mission", href: "#mission", kind: "hash" },
  { label: "Community", href: "#community", kind: "hash" },
  { label: "Recruiting", href: "#recruiting", kind: "hash" },
  { label: "Programming", href: "#events", kind: "hash" },
  { label: "Leadership", href: "#leadership", kind: "hash" },
  { label: "Partners", href: "#sponsors", kind: "hash" },
];

export function navHref(link: NavLinkItem, _pathname: string): string {
  if (link.kind === "route") return link.href;
  return `/${link.href}`;
}
