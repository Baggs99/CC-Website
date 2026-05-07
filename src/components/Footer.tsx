import { Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Container";
import { navLinks } from "@/data/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-navy-950 text-ivory-100"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ivory-50/15 to-transparent" />

      <Container className="py-12 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <span className="relative shrink-0 rounded-md bg-ivory-50 p-1 ring-1 ring-ivory-50/10">
                <img
                  src="/ycc_owlbook.png"
                  alt=""
                  width={72}
                  height={72}
                  decoding="async"
                  className="h-9 w-auto max-h-9 object-contain sm:h-10 sm:max-h-10"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ivory-200/60">
                  Yale SOM
                </span>
                <span className="font-serif text-base font-medium">
                  Consulting Club
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory-200/70 text-pretty">
              A student-run organization at the Yale School of Management
              dedicated to mentorship, casing, recruiting support, and
              community across the consulting industry.
            </p>

            <a
              href="mailto:club-consulting@som.yale.edu"
              className="mt-6 inline-flex items-center gap-2 text-sm text-ivory-100 underline-offset-4 hover:underline"
            >
              <Mail size={14} strokeWidth={1.8} />
              club-consulting@som.yale.edu
              <ArrowUpRight size={13} className="opacity-60" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <FooterColumn
              title="Explore"
              links={navLinks.map((l) => ({ label: l.label, href: l.href }))}
            />
            <FooterColumn
              title="Members"
              links={[
                { label: "Member portal", href: "#" },
                { label: "Recruiting timeline", href: "#" },
                { label: "Case library", href: "#" },
                { label: "Office hours", href: "#" },
              ]}
            />
            <FooterColumn
              title="Partners"
              links={[
                { label: "Sponsorship tiers", href: "#sponsors" },
                { label: "Hire our members", href: "#contact" },
                { label: "Mock Madness", href: "#events" },
                { label: "Press & inquiries", href: "#contact" },
              ]}
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory-50/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory-200/55">
            © {year} Yale SOM Consulting Club. All rights reserved. Not
            affiliated with the firms shown.
          </p>

          <div className="flex items-center gap-2">
            <SocialLink href="#" label="LinkedIn">
              <Linkedin size={15} strokeWidth={1.8} />
            </SocialLink>
            <SocialLink href="#" label="Instagram">
              <Instagram size={15} strokeWidth={1.8} />
            </SocialLink>
            <SocialLink href="mailto:club-consulting@som.yale.edu" label="Email">
              <Mail size={15} strokeWidth={1.8} />
            </SocialLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ivory-200/55">
        {title}
      </div>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={`${title}-${l.label}`}>
            <a
              href={l.href}
              className="text-sm text-ivory-100/85 transition-colors hover:text-ivory-50"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-ivory-50/15 text-ivory-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-ivory-50/40 hover:bg-ivory-50/5 sm:h-10 sm:w-10"
    >
      {children}
    </a>
  );
}
