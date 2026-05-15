import { motion } from "framer-motion";
import { Sparkles, Mail, MessageCircle } from "lucide-react";

const quickLinks = ["Home", "Services", "N8N Course", "1:1 Mentorship", "Live Batches", "YouTube Resources", "Contact"];

const contacts = [
  { icon: MessageCircle, value: "WhatsApp: +91 93473 01449" },
  { icon: MessageCircle, value: "WhatsApp: +91 70759 79578" },
  { icon: Mail, value: "admin@profitgrowthai.xyz" },
];

const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@mofiAI123-f", path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" },
  { label: "Telegram", href: "https://t.me/ai_telugu_community", path: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" },
  { label: "Instagram", href: "https://instagram.com/mofi_ai", path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2a3.9 3.9 0 0 1-.9 1.4 3.9 3.9 0 0 1-1.4.9c-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.9-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.8a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4zm5.2-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" },
  { label: "Website", href: "https://profitgrowthai.in", path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8 8 0 0 1 18.9 8zM12 4c.83 1.18 1.5 2.6 1.95 4h-3.9C10.5 6.6 11.17 5.18 12 4zM4.26 14a8 8 0 0 1 0-4h3.38a17 17 0 0 0-.14 2c0 .68.05 1.35.14 2H4.26zm.83 2h2.95c.34 1.27.8 2.46 1.38 3.56A8 8 0 0 1 5.09 16zm2.95-8H5.09a8 8 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.04 8zM12 20c-.83-1.18-1.5-2.6-1.95-4h3.9c-.45 1.4-1.12 2.82-1.95 4zm2.34-6h-4.68a14 14 0 0 1-.16-2c0-.68.06-1.35.16-2h4.68c.1.65.16 1.32.16 2 0 .68-.06 1.35-.16 2zm.24 5.56A15.7 15.7 0 0 0 15.96 16h2.95a8 8 0 0 1-4.33 3.56zM16.36 14c.09-.65.14-1.32.14-2 0-.68-.05-1.35-.14-2h3.38a8 8 0 0 1 0 4h-3.38z" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground pt-32 pb-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute -top-10 left-0 right-0 flex items-center gap-6 px-6 pointer-events-none"
      >
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          <Sparkles className="h-40 w-40" strokeWidth={1} />
        </motion.div>
        <span className="font-display text-[12rem] leading-none">MOFI AI</span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 pt-40">
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
                <li key={q}>
                  <a href="#" className="hover:text-lime transition-colors">{q}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Get In Touch</h5>
            <ul className="space-y-2 text-sm text-white/60">
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.value} className="flex items-start gap-2 hover:text-lime transition-colors">
                    <Icon className="h-3.5 w-3.5 mt-1 shrink-0" />
                    <span>{c.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Address</h5>
            <p className="text-sm text-white/60">
              42 Beach Road, Dwaraka Nagar<br />
              Vizag, Andhra Pradesh 530016<br />
              India
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(({ label, href, path }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.15 }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-lime hover:text-lime transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-md">
          <p className="text-sm mb-2">Subscribe our newsletter</p>
          <div className="flex gap-2">
            <input placeholder="What's your email?" className="flex-1 bg-transparent border border-white/20 rounded-md px-4 py-2.5 text-sm placeholder:text-white/40" />
            <motion.button whileHover={{ scale: 1.05 }} className="rounded-md bg-lime text-lime-foreground px-5 text-sm font-medium">Contact Us</motion.button>
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
