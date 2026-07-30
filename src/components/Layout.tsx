import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { applyPageMeta, getPageMeta } from "@/lib/pageMeta";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

function DocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    applyPageMeta(getPageMeta(pathname));
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scrollToSection = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      if (scrollToSection()) return;

      const timer = window.setTimeout(scrollToSection, 100);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  return (
    <div className="relative min-h-screen bg-ivory-50 text-navy-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <DocumentMeta />
      <ScrollToTop />
    </div>
  );
}
