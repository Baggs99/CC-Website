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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
        scrolled
          ? "border-b border-navy-900/[0.07] bg-ivory-50/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Yale SOM Consulting Club home"
        >
          <span
            className={cn(
              "relative grid h-9 w-9 place-items-center rounded-md font-serif text-base font-semibold transition-colors duration-300",
              "bg-navy-900 text-ivory-50",
            )}
          >
            Y
            <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-gold-500" />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-navy-700/70">
              Yale SOM
            </span>
            <span className="font-serif text-[0.95rem] font-medium text-navy-900">
              Consulting Club
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy-800/80 transition-colors hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#join" className="btn-primary">
            Join the club
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-navy-900/10 bg-white/60 text-navy-900 backdrop-blur md:hidden"
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
              <Container className="flex flex-col py-6">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block py-3 font-serif text-2xl font-medium text-navy-900"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#join"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-6 w-full"
                >
                  Join the club
                </a>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
