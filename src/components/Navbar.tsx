import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ease-out-expo",
        scrolled
          ? "border-b border-navy-900/[0.07] bg-ivory-50/90 backdrop-blur-xl"
          : "border-b border-white/10 bg-gradient-to-b from-navy-950/90 via-navy-950/55 to-transparent backdrop-blur-md",
      )}
    >
      <Container className="flex min-h-[3.25rem] items-center justify-between py-1 sm:h-16 sm:min-h-0 sm:py-0 md:h-20">
        <a
          href="#top"
          className="group flex min-h-[44px] min-w-0 items-center gap-2.5 sm:gap-3"
          aria-label="Yale SOM Consulting Club home"
        >
          <span className="relative shrink-0">
            <img
              src="/ycc_owlbook.png"
              alt=""
              width={80}
              height={80}
              decoding="async"
              className="h-9 w-auto max-h-9 object-contain drop-shadow-[0_2px_12px_rgba(5,14,28,0.35)] sm:h-10 sm:max-h-10"
            />
          </span>
          <span className="flex min-w-0 flex-col leading-tight sm:flex">
            <span
              className={cn(
                "text-[0.58rem] font-medium uppercase tracking-[0.2em] sm:text-[0.65rem] sm:tracking-[0.22em]",
                scrolled ? "text-navy-700/75" : "text-ivory-200/85",
              )}
            >
              Yale SOM
            </span>
            <span
              className={cn(
                "truncate font-serif text-[0.85rem] font-medium sm:text-[0.95rem]",
                scrolled ? "text-navy-900" : "text-ivory-50",
              )}
            >
              <span className="hidden lg:inline">Consulting Club</span>
              <span className="inline lg:hidden">Consulting</span>
            </span>
          </span>
        </a>

        <nav className="ml-6 hidden flex-1 items-center justify-center gap-1 md:flex lg:ml-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-navy-800/85 hover:bg-navy-900/[0.06] hover:text-navy-900"
                  : "text-ivory-100 drop-shadow-[0_1px_8px_rgba(5,14,28,0.85)] hover:bg-white/10 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-full border backdrop-blur md:hidden",
            scrolled
              ? "border-navy-900/10 bg-white/60 text-navy-900"
              : "border-white/25 bg-navy-950/45 text-ivory-50 shadow-[0_2px_16px_rgba(5,14,28,0.5)]",
          )}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden"
          >
            <div className="border-t border-navy-900/[0.07] bg-ivory-50/95 backdrop-blur-xl">
              <Container className="flex flex-col pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex min-h-[48px] items-center py-2 font-serif text-xl font-medium leading-snug text-navy-900 sm:text-2xl"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
