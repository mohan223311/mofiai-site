import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { IndiaFlagIcon, MofiLogoIcon } from "./BrandIcons";

const links: { label: string; to: string; hash?: string }[] = [
  { label: "Home", to: "/" },
  { label: "N8N Course", to: "/course" },
  { label: "1:1 Mentorship", to: "/mentorship" },
  { label: "Live Batches", to: "/batches" },
  { label: "YouTube", to: "/resources" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "backdrop-blur-md bg-dark/90 border-b border-white/8 py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-dark-foreground">
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 focus-ring rounded-md p-1 cursor-pointer">
            <MofiLogoIcon className="h-10 w-16" />
            <div className="flex items-baseline gap-1 -ml-1">
              <span className="font-display text-xl tracking-tight font-bold text-white">MOFI</span>
              <span className="font-display text-xl tracking-tight font-bold text-lime">AI</span>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l, i) => {
              const active = l.to === pathname && !l.hash;
              return (
                <motion.div
                  key={l.label}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={l.to}
                    hash={l.hash}
                    className={`hover:text-lime transition-colors focus-ring rounded-md px-2 py-1 cursor-pointer ${active ? "text-lime font-medium" : ""}`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <span className="text-xs hidden sm:flex items-center gap-1.5 text-white/60" aria-label="Available in Telugu">
              <IndiaFlagIcon className="h-4 w-4" /> Telugu
            </span>
            <motion.a
              href="https://www.superprofile.bio/course/mofiai"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex rounded-md border border-lime/60 bg-transparent px-4 py-2 text-sm text-lime hover:bg-lime hover:text-lime-foreground transition-colors focus-ring cursor-pointer clickable-element"
            >
              Enroll Now
            </motion.a>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-dark-foreground hover:bg-white/10 transition-colors focus-ring"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-md md:hidden flex flex-col"
            style={{ paddingTop: "72px" }}
          >
            <nav aria-label="Mobile navigation links" className="flex flex-col px-6 pt-6 pb-4 gap-1 overflow-y-auto flex-1">
              {links.map((l, i) => {
                const active = l.to === pathname && !l.hash;
                return (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={l.to}
                      hash={l.hash}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between py-4 text-base border-b border-white/8 hover:text-lime transition-colors focus-ring rounded-sm ${active ? "text-lime font-medium" : "text-dark-foreground/90"}`}
                    >
                      {l.label}
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-lime" />}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a
                href="https://www.superprofile.bio/course/mofiai"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.04 + 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-md bg-lime text-lime-foreground px-5 py-3.5 text-base font-medium text-center shadow-lg shadow-lime/25 focus-ring"
              >
                Enroll Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
