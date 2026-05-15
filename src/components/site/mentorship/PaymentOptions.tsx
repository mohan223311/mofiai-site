import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";
import { Wallet, CalendarClock, Check } from "lucide-react";

const fullBenefits = [
  "Immediate full access to everything",
  "Single hassle-free transaction",
  "No payment tracking needed",
  "Start learning immediately",
];

const installments = [
  { n: 1, amt: "₹15,000" },
  { n: 2, amt: "₹8,000" },
  { n: 3, amt: "₹7,000" },
];

export function PaymentOptions() {
  return (
    <section id="payment" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Payment Options</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-5xl md:text-6xl"
        >
          Flexible Payment<br />Options
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* Full payment */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl bg-dark text-dark-foreground p-8 border border-lime/40 overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="absolute top-5 right-5 rounded-full bg-lime text-lime-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1"
            >
              Recommended
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="h-14 w-14 rounded-2xl bg-lime/15 border border-lime/30 text-lime flex items-center justify-center"
            >
              <Wallet className="h-6 w-6" />
            </motion.div>
            <h3 className="mt-5 font-display text-3xl">Full Payment</h3>
            <div className="mt-2 font-display text-5xl text-lime">₹30,000</div>
            <div className="text-xs text-white/60 mt-1">Upfront · one transaction</div>
            <ul className="mt-6 space-y-2.5">
              {fullBenefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2 text-sm text-white/85"
                >
                  <span className="h-5 w-5 rounded-full bg-lime/20 text-lime flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/919347301449?text=I%20want%20to%20pay%20full%20for%20the%201:1%20Mentorship%20Program"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-md bg-lime text-lime-foreground px-7 py-3.5 text-sm font-semibold shadow-2xl shadow-lime/30"
            >
              Pay Full Amount →
            </motion.a>
          </motion.div>

          {/* Installments */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl bg-card border border-border p-8 overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="h-14 w-14 rounded-2xl bg-amber-400/15 border border-amber-400/30 text-amber-500 flex items-center justify-center"
            >
              <CalendarClock className="h-6 w-6" />
            </motion.div>
            <h3 className="mt-5 font-display text-3xl">3 Instalments</h3>
            <div className="text-xs text-muted-foreground mt-1">All within the same month</div>

            <div className="mt-6 space-y-3">
              {installments.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between rounded-xl bg-secondary/60 border border-border px-4 py-3"
                >
                  <div className="flex items-center gap-3 text-sm">
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="h-7 w-7 rounded-full bg-lime/20 text-lime font-bold flex items-center justify-center"
                    >
                      {p.n}
                    </motion.span>
                    Payment {p.n}
                  </div>
                  <span className="font-mono font-semibold">{p.amt}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/919347301449?text=I%20want%20the%20instalment%20plan%20for%20the%201:1%20Mentorship%20Program"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-md border border-foreground bg-foreground text-background px-7 py-3.5 text-sm font-semibold"
            >
              Choose Instalment Plan →
            </motion.a>
          </motion.div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground text-center">
          Both options redirect to WhatsApp for personalized assistance and payment processing.
        </p>
      </div>
    </section>
  );
}
