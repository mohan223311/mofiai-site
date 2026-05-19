import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

const links: { label: string; to: string; hash?: string }[] = [
  { label: "Home", to: "/" },
  { label: "N8N Course", to: "/course" },
  { label: "1:1 Mentorship", to: "/mentorship" },
  { label: "Live Batches", to: "/batches" },
  { label: "YouTube", to: "/resources" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const { pathname } = useLocation();
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-dark-foreground">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
            transition={{ rotate: { duration: 12, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          >
            <Sparkles className="h-5 w-5 text-lime" />
          </motion.div>
          <span className="font-display text-xl tracking-tight">MOFI AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l, i) => {
            const active = (l.to === pathname && !l.hash) || (l.to === "/course" && pathname === "/course");
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
                  className={`hover:text-lime transition-colors ${active ? "underline underline-offset-8 decoration-lime" : ""}`}
                >
                  {l.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-xs hidden sm:flex items-center gap-1 text-white/70">🇮🇳 Telugu</span>
          <motion.a
            href="https://www.superprofile.bio/course/mofiai"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md border border-lime/60 bg-transparent px-4 py-2 text-sm text-lime hover:bg-lime hover:text-lime-foreground transition-colors"
          >
            Enroll Now
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
