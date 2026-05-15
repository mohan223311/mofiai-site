import { motion } from "framer-motion";
import { Sparkles, Mail } from "lucide-react";
import { YouTubeIcon, TelegramIcon, InstagramIcon, WhatsAppIcon } from "./BrandIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "N8N Course", href: "/course" },
  { label: "1:1 Mentorship", href: "/mentorship" },
  { label: "Live Batches", href: "/batches" },
  { label: "YouTube Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const contacts = [
  { Icon: WhatsAppIcon, value: "WhatsApp: +91 93473 01449", href: "https://wa.me/919347301449" },
  { Icon: WhatsAppIcon, value: "WhatsApp: +91 70759 79578", href: "https://wa.me/917075979578" },
  { Icon: Mail, value: "profitgrowthai223311@gmail.com", href: "mailto:profitgrowthai223311@gmail.com" },
];

const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@mofiai123-f", Icon: YouTubeIcon },
  { label: "Telegram", href: "https://t.me/ai_telugu_community", Icon: TelegramIcon },
  { label: "Instagram", href: "https://instagram.com/mofi_ai", Icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground pt-12 pb-8 relative overflow-hidden">
      {/* Giant MOFI AI text — fully visible inside container */}
      <div className="relative mx-auto max-w-7xl px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.12, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-4 md:gap-8 mb-12 select-none pointer-events-none"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
            <Sparkles className="h-12 w-12 md:h-20 md:w-20" strokeWidth={1} />
          </motion.div>
          <span
            className="font-display leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 16vw, 13rem)" }}
          >
            MOFI AI
          </span>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 border-t border-dashed border-white/15 pt-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-lime" />
              <span className="font-display text-xl">MOFI AI</span>
            </div>
            <p className="text-sm text-lime mb-2">Empowering Automation Experts</p>
            <p className="text-sm text-white/60 max-w-[260px]">
              We build AI automation solutions and train the next generation of automation experts in Telugu.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm text-white/60">
              {quickLinks.map((q) => (
                <li key={q.label}>
                  <a href={q.href} className="hover:text-lime transition-colors">{q.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Get In Touch</h5>
            <ul className="space-y-2 text-sm text-white/60">
              {contacts.map(({ Icon, value, href }) => (
                <li key={value}>
                  <a href={href} className="flex items-start gap-2 hover:text-lime transition-colors">
                    <Icon className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Address</h5>
            <p className="text-sm text-white/60">
              Vijayawada<br />
              Andhra Pradesh<br />
              India
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.15 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/15 hover:border-white/40 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-dashed border-white/15 pt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
          <div>© 2026 MOFI AI. All rights reserved.</div>
          <div>Built with ❤️ for the Telugu automation community</div>
        </div>
      </div>
    </footer>
  );
}
