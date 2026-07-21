import { Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "./ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-navy-950 text-ivory-100"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ivory-50/15 to-transparent" />

      <Container className="py-12 sm:py-20">
        <div className="max-w-xl">
          <Link to="/" className="flex items-center gap-3">
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
          </Link>

          <p className="mt-6 text-sm leading-relaxed text-ivory-200/70 text-pretty">
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

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory-50/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory-200/55">
            © {year} Yale SOM Consulting Club. All rights reserved. Not
            affiliated with the firms shown.
          </p>

          <SocialLink href="mailto:club-consulting@som.yale.edu" label="Email">
            <Mail size={15} strokeWidth={1.8} />
          </SocialLink>
        </div>

        <p className="mt-8 max-w-3xl text-[0.7rem] leading-relaxed text-ivory-200/45 text-pretty">
          &ldquo;Yale&rdquo; and &ldquo;Yale University&rdquo; are registered
          trademarks of Yale University. This website is a student run website
          and is maintained, hosted, and operated independently of Yale
          University. The activities on this website are not supervised or
          endorsed by Yale and information contained on this website does not
          necessarily reflect the opinions or official positions of the
          University.
        </p>
      </Container>
    </footer>
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
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-ivory-100 transition-colors duration-300 hover:text-ivory-50"
    >
      {children}
    </a>
  );
}
