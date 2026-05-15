import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";
import { Check, AlertTriangle, ExternalLink, Globe, Users, Star, Lock } from "lucide-react";

const included = [
  "20+ hours comprehensive video content in Telugu",
  "6 complete end-to-end real-world projects",
  "22 detailed sections from beginner to advanced",
  "1 year full course access with all materials",
  "Private WhatsApp community with instructors",
  "Weekly live doubt clearing every Saturday",
  "24-hour support response guarantee",
  "Free access to all new modules and updates",
  "All session recordings during enrollment",
  "No technical background or coding required",
];

const badges = [
  { i: Globe, t: "Clients in 4 Countries" },
  { i: Users, t: "Successful Students" },
  { i: Star, t: "Real Client Testimonials" },
  { i: Lock, t: "100% Secure Payment" },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Pricing & Enrollment</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl"
        >
          Start Your<br />Automation Journey Today
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ margin: "-80px" }}
          className="mt-12 rounded-3xl bg-dark text-dark-foreground p-8 md:p-12 relative overflow-hidden border border-lime/30"
        >
          <div className="absolute inset-0 dotted-bg opacity-30" />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-lime/20 blur-3xl"
          />

          <div className="relative grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-xs uppercase tracking-widest text-lime">N8N Mastery Course</div>
              <div className="mt-3 flex items-end gap-2">
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring" }}
                  className="font-display text-7xl text-lime"
                >
                  ₹5,000
                </motion.span>
              </div>
              <div className="mt-2 text-sm text-white/60">One-time payment · 1 year full access · 100% Telugu</div>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.superprofile.bio/course/mofiai"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-lime text-lime-foreground px-7 py-3.5 text-sm font-semibold shadow-2xl shadow-lime/30"
              >
                Enroll Now @ ₹5,000 →
              </motion.a>
              <div className="mt-3 text-xs text-white/60">Have questions? WhatsApp <a className="text-lime" href="https://wa.me/919347301449">+91 93473 01449</a></div>

              <motion.a
                whileHover={{ x: 4 }}
                href="https://docs.google.com/document/d/1lIqPOvcxXIAIDQ9vYnmTJv0vJvF4QxdZt9cHrDDulIM/edit?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs text-lime hover:underline"
              >
                Detailed syllabus <ExternalLink className="h-3 w-3" />
              </motion.a>

              <div className="mt-8 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-xs flex gap-3 items-start">
                <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-amber-100/90">
                  No Refund Policy — Please review the full syllabus and reach out with questions before enrolling.
                </span>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-lime mb-3">What's Included</div>
              <ul className="space-y-2.5">
                {included.map((it, i) => (
                  <motion.li
                    key={it}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-start gap-2 text-sm text-white/85"
                  >
                    <span className="h-5 w-5 rounded-full bg-lime/20 text-lime flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    {it}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {badges.map((b, i) => {
            const Icon = b.i;
            return (
              <motion.div
                key={b.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-xl bg-card border border-border px-4 py-3 flex items-center gap-3 text-sm"
              >
                <motion.span
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                  className="h-9 w-9 rounded-lg bg-lime/15 border border-lime/30 text-lime flex items-center justify-center"
                >
                  <Icon className="h-4 w-4" />
                </motion.span>
                {b.t}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
