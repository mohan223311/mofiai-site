import { motion } from "framer-motion";
import { MessageCircle, Mail, Clock } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionLabel>
          <span className="mx-auto">Get In Touch</span>
        </SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl"
        >
          Ready to Automate or<br />Master AI Skills?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-xl mx-auto"
        >
          Join professionals, business owners, and students transforming their work with AI automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="https://wa.me/919347301449"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className="rounded-md bg-lime text-lime-foreground px-6 py-3 text-sm font-medium"
          >
            Request Custom Automation
          </motion.a>
          <motion.a
            href="#courses"
            whileHover={{ scale: 1.05 }}
            className="rounded-md border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            Enroll in N8N Course — ₹5,000
          </motion.a>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: "+91 93473 01449 / +91 70759 79578" },
            { icon: Mail, label: "Email", value: "admin@profitgrowthai.xyz" },
            { icon: Clock, label: "Response", value: "Within 24h · Instant on WhatsApp" },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-xl bg-card border border-border p-5 text-left"
              >
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime/15 border border-lime/30 text-lime mb-3"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="mt-1 text-sm font-medium break-words">{c.value}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
