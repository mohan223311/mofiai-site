import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import {
  Pencil, User, Mail, Phone, ChevronDown, Send, Info, MessageCircle,
  Clock, Headphones, Calendar, MapPin, Globe, Laptop, Play, Camera,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SectionLabel } from "@/components/site/SectionLabel";
import { postFormWebhook } from "@/lib/webhook";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MOFI AI" },
      { name: "description", content: "Get in touch with MOFI AI for automation services, courses, and 1:1 mentorship. WhatsApp, Email, and YouTube available." },
      { property: "og:title", content: "Contact — MOFI AI" },
      { property: "og:description", content: "Let's build something together. Reach us on WhatsApp, Email, or submit the contact form." },
    ],
  }),
  component: ContactPage,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.55 } }),
};

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <Hero />
      <FormAndDirect />
      <OfficeHours />
      <FAQ />
      <InfoBand />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-dark text-dark-foreground pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-40" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-lime/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel light>Contact</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 font-display text-5xl md:text-7xl font-black leading-[1.05]"
          >
            Let's Build<br />Something <span className="text-shimmer-dark">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-white/70 max-w-md"
          >
            Whether you need automation for your business or want to learn AI skills, we're here to help.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[380px] hidden md:flex items-center justify-center"
        >
          {/* Pulsing rings */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-lime/40"
          />
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.05, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-lime/30"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute h-[280px] w-[280px] rounded-full border border-lime/10"
          />

          {/* Envelope card */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [4, 8, 4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06, rotate: 0 }}
            className="relative h-[190px] w-[230px] rounded-xl bg-gradient-to-br from-lime/40 to-lime/10 border border-lime/50 shadow-2xl shadow-lime/30 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-14 left-4 right-4 h-[120px] rounded-lg bg-white/95 text-slate-800 p-4 shadow-xl"
            >
              <p className="italic font-bold text-slate-900">Let's Connect!</p>
              <div className="mt-2 space-y-1">
                <div className="h-0.5 w-4/5 bg-slate-200 rounded" />
                <div className="h-0.5 w-3/5 bg-slate-200 rounded" />
                <div className="h-0.5 w-2/3 bg-slate-200 rounded" />
              </div>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-3 h-2 w-2 rounded-full bg-lime"
              />
            </motion.div>
          </motion.div>

          {/* Floating chat icon */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
            className="absolute left-2 top-4 h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl shadow-blue-500/40"
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </motion.div>

          {/* WhatsApp icon */}
          <motion.div
            animate={{ y: [0, -12, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
            whileHover={{ scale: 1.25, rotate: 12 }}
            className="absolute right-0 top-0 h-14 w-14 rounded-full bg-gradient-to-br from-lime/80 to-lime flex items-center justify-center shadow-xl shadow-lime/40"
          >
            <Phone className="h-6 w-6 text-lime-foreground" />
          </motion.div>

          {/* @ icon */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.3 }}
            whileHover={{ scale: 1.25 }}
            className="absolute left-8 bottom-2 h-12 w-12 rounded-full bg-gradient-to-br from-lime/40 to-lime/20 border border-lime/40 flex items-center justify-center shadow-xl text-lime font-black text-xl"
          >
            @
          </motion.div>

          {/* Sparkle dots */}
          {[
            { x: "10%", y: "20%", d: 0 },
            { x: "85%", y: "30%", d: 0.4 },
            { x: "75%", y: "80%", d: 0.8 },
            { x: "15%", y: "75%", d: 1.2 },
          ].map((s, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: s.d }}
              className="absolute h-1.5 w-1.5 rounded-full bg-lime"
              style={{ left: s.x, top: s.y }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FormAndDirect() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postFormWebhook("contact_form", form);
    const text = `Hello MOFI AI!%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0AInterested in: ${encodeURIComponent(form.interest)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919347301449?text=${text}`, "_blank");
  };

  return (
    <section className="bg-dark text-dark-foreground py-20 relative">
      <div className="absolute inset-0 dotted-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-start">
        {/* Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl p-8 text-slate-900 overflow-hidden"
        >
          {/* Soft animated accent */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-lime/30 via-emerald-300/20 to-transparent blur-2xl"
          />
          <div className="relative flex items-center gap-3 mb-8">
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-12 w-12 rounded-xl bg-lime flex items-center justify-center shadow-lg shadow-lime/30"
            >
              <Pencil className="h-6 w-6 text-lime-foreground" />
            </motion.div>
            <h2 className="font-display text-2xl font-black text-slate-900">Send Us a Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-5">
            <Field label="Full Name" required>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  required maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full rounded-lg bg-slate-50 border border-slate-200 text-slate-900 pl-10 pr-3 py-3 text-sm focus:border-lime focus:bg-white focus:ring-2 focus:ring-lime/30 focus:outline-none placeholder:text-slate-300 transition"
                />
              </div>
            </Field>

            <Field label="Email Address" required>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  required type="email" maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full rounded-lg bg-slate-50 border border-slate-200 text-slate-900 pl-10 pr-3 py-3 text-sm focus:border-lime focus:bg-white focus:ring-2 focus:ring-lime/30 focus:outline-none placeholder:text-slate-300 transition"
                />
              </div>
            </Field>

            <Field label="Phone Number (WhatsApp)" required>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  required maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91"
                  className="w-full rounded-lg bg-slate-50 border border-slate-200 text-slate-900 pl-10 pr-3 py-3 text-sm focus:border-lime focus:bg-white focus:ring-2 focus:ring-lime/30 focus:outline-none placeholder:text-slate-300 transition"
                />
              </div>
            </Field>

            <Field label="I'm Interested In" required>
              <div className="relative">
                <select
                  required
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className={`w-full appearance-none rounded-lg bg-slate-50 border border-slate-200 px-3 py-3 text-sm focus:border-lime focus:bg-white focus:ring-2 focus:ring-lime/30 focus:outline-none transition ${form.interest ? "text-slate-900" : "text-slate-300"}`}
                >
                  <option value="" className="text-slate-300">Select an option</option>
                  <option value="N8N Course" className="text-slate-900">N8N Course</option>
                  <option value="1:1 Mentorship" className="text-slate-900">1:1 Mentorship</option>
                  <option value="Live Batches" className="text-slate-900">Live Batches</option>
                  <option value="Automation Services" className="text-slate-900">Automation Services</option>
                  <option value="Other" className="text-slate-900">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </Field>

            <Field label="Message" required>
              <textarea
                required maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your requirements, questions, or goals..."
                className="w-full min-h-[120px] rounded-lg bg-slate-50 border border-slate-200 text-slate-900 px-3 py-3 text-sm focus:border-lime focus:bg-white focus:ring-2 focus:ring-lime/30 focus:outline-none placeholder:text-slate-300 resize-y transition"
              />
            </Field>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgb(160 220 80 / 0.6)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-lime to-emerald-400 text-lime-foreground font-bold py-4 flex items-center justify-center gap-2 shadow-lg shadow-lime/30"
            >
              <Send className="h-4 w-4" /> Send Message
            </motion.button>

            <div className="flex items-start gap-2 text-sm text-slate-500">
              <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>
                We typically respond within 24 hours. For urgent queries, contact us directly on{" "}
                <a href="https://wa.me/919347301449" target="_blank" rel="noreferrer" className="text-emerald-600 font-semibold hover:underline">
                  WhatsApp.
                </a>
              </p>
            </div>
          </form>
        </motion.div>

        {/* Direct Contact + Follow */}
        <div className="space-y-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={1}
            className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur p-6"
          >
            <h3 className="font-display text-xl font-black">Prefer Direct Contact?</h3>
            <div className="h-1 w-12 bg-lime rounded mt-2 mb-5" />

            <div className="space-y-3">
              <ContactMethod
                color="bg-lime"
                iconColor="text-lime-foreground"
                Icon={Phone}
                platform="WhatsApp"
                platformColor="text-lime"
                tag="(Recommended for quick response)"
                values={["+91 93473 01449", "+91 70759 79578"]}
                sub="Usually instant response during working hours"
                href="https://wa.me/919347301449"
              />
              <ContactMethod
                color="bg-indigo-500"
                iconColor="text-white"
                Icon={Mail}
                platform="Email"
                platformColor="text-indigo-300"
                values={["profitgrowthai223311@gmail.com"]}
                sub="Response within 24 hours"
                href="mailto:profitgrowthai223311@gmail.com"
              />
              <ContactMethod
                color="bg-red-500"
                iconColor="text-white"
                Icon={Play}
                platform="YouTube"
                platformColor="text-red-400"
                values={["www.youtube.com/@mofiai123-f"]}
                sub="For free tutorials and content"
                href="https://www.youtube.com/@mofiai123-f"
              />
              <ContactMethod
                color="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                iconColor="text-white"
                Icon={Camera}
                platform="Instagram"
                platformColor="text-pink-400"
                values={["instagram.com/mofi_ai"]}
                sub="Updates, reels and behind-the-scenes"
                href="https://instagram.com/mofi_ai"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={2}
            className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur p-6"
          >
            <h3 className="font-display text-lg font-black mb-4">Follow Us</h3>
            <div className="space-y-3">
              <FollowRow color="bg-red-500" Icon={Play} platform="YouTube" platformColor="text-red-400" url="www.youtube.com/@mofiai123-f" href="https://www.youtube.com/@mofiai123-f" />
              <FollowRow color="bg-sky-500" Icon={Send} platform="Telegram Community" platformColor="text-sky-400" url="t.me/ai_telugu_community" href="https://t.me/ai_telugu_community" />
              <FollowRow color="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" Icon={Camera} platform="Instagram" platformColor="text-pink-400" url="instagram.com/mofi_ai" href="https://instagram.com/mofi_ai" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1 uppercase tracking-wider">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function ContactMethod({ color, iconColor, Icon, platform, platformColor, tag, values, sub, href }: any) {
  return (
    <motion.a
      whileHover={{ x: 4 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-start gap-3 p-4 rounded-xl border border-white/10 hover:border-lime/40 transition-colors block"
    >
      <div className={`h-10 w-10 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div>
        <div className={`text-sm font-bold ${platformColor}`}>{platform}</div>
        {tag && <div className="text-[11px] text-white/50">{tag}</div>}
        {values.map((v: string) => (
          <div key={v} className="text-sm font-semibold text-white">{v}</div>
        ))}
        <div className="text-xs text-white/50 mt-0.5">{sub}</div>
      </div>
    </motion.a>
  );
}

function FollowRow({ color, Icon, platform, platformColor, url, href }: any) {
  return (
    <motion.a
      whileHover={{ x: 4 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3"
    >
      <div className={`h-8 w-8 rounded-full ${color} flex items-center justify-center`}>
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div>
        <div className={`text-sm font-bold ${platformColor}`}>{platform}</div>
        <div className="text-xs text-white/50">{url}</div>
      </div>
    </motion.a>
  );
}

function OfficeHours() {
  return (
    <section className="bg-secondary/40 py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center font-display text-3xl font-black mb-12"
        >
          Office Hours & Response Time
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          <OHColumn
            Icon={Clock}
            color="bg-lime"
            iconColor="text-lime-foreground"
            labelColor="text-lime-foreground/0 [&_*]:text-foreground"
            label="Availability"
          >
            <div className="space-y-3">
              <div>
                <div className="font-bold text-foreground text-sm">Monday – Saturday</div>
                <div className="text-sm text-muted-foreground">10:00 AM – 7:00 PM IST</div>
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">Sunday</div>
                <div className="text-sm text-muted-foreground">Limited availability for urgent queries</div>
              </div>
            </div>
          </OHColumn>

          <OHColumn Icon={Headphones} color="bg-emerald-500" iconColor="text-white" label="Response Time">
            <div className="space-y-2 text-sm">
              <div className="flex gap-2"><span className="h-2 w-2 mt-1.5 rounded-full bg-emerald-500" /><div><span className="font-semibold">WhatsApp:</span> <span className="text-muted-foreground">Usually instant during office hours</span></div></div>
              <div className="flex gap-2"><span className="h-2 w-2 mt-1.5 rounded-full bg-indigo-500" /><div><span className="font-semibold">Email:</span> <span className="text-muted-foreground">Within 24 hours</span></div></div>
              <div className="flex gap-2"><span className="h-2 w-2 mt-1.5 rounded-full bg-sky-500" /><div><span className="font-semibold">Form submissions:</span> <span className="text-muted-foreground">Within 24 hours</span></div></div>
            </div>
          </OHColumn>

          <OHColumn Icon={Calendar} color="bg-amber-500" iconColor="text-white" label="Note">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are closed on major public holidays. For urgent matters, WhatsApp is the best way to reach us.
            </p>
          </OHColumn>
        </div>
      </div>
    </section>
  );
}

function OHColumn({ Icon, color, iconColor, label, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`h-11 w-11 rounded-full ${color} flex items-center justify-center`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <span className="font-bold text-foreground">{label}</span>
      </div>
      {children}
    </motion.div>
  );
}

function FAQ() {
  const faqs = [
    { q: "What's the fastest way to reach you?", a: "WhatsApp (+91 93473 01449) for immediate response during office hours." },
    { q: "Do you offer free consultations?", a: "Yes, 30-minute free consultation calls for professional automation services. Contact us to schedule." },
    { q: "Can I visit your office?", a: "We operate remotely. All consultations and training conducted online via video calls." },
    { q: "Do you provide support in Telugu?", a: "Yes, all our courses are in Telugu and we provide support in Telugu as well." },
    { q: "How do I enroll in courses?", a: "Contact us via WhatsApp or use the enrollment links on course pages. We'll guide you through the payment process." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center font-display text-4xl md:text-5xl font-black mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl bg-card border border-border hover:border-lime/40 px-5 py-4 open:border-lime/60 open:shadow-lg open:shadow-lime/10 transition-all [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center gap-3 cursor-pointer list-none">
                <div className="h-7 w-7 rounded-full bg-lime text-lime-foreground flex items-center justify-center font-black text-xs flex-shrink-0">Q</div>
                <p className="flex-1 text-sm font-semibold text-foreground leading-snug">{f.q}</p>
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 shrink-0" />
              </summary>
              <p className="mt-3 ml-10 text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">A:</span> {f.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBand() {
  return (
    <section className="bg-dark text-dark-foreground py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-white/10">
        <BandItem Icon={MapPin} color="bg-lime" iconColor="text-lime-foreground" title="Based in" lines={["Vijayawada, Andhra Pradesh, India", "Amaravati's capital region"]} />
        <BandItem Icon={Globe} color="bg-emerald-500" iconColor="text-white" overline="Serving" title="Global clients" lines={["India, USA, Singapore, New Zealand"]} />
        <BandItem Icon={Laptop} color="bg-sky-500" iconColor="text-white" title="100% Remote" lines={["All services and training delivered online", "Connect with us from anywhere!"]} />
      </div>
    </section>
  );
}

function BandItem({ Icon, color, iconColor, overline, title, lines }: any) {
  return (
    <div className="flex items-center gap-4 md:px-8">
      <div className={`h-12 w-12 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <div>
        {overline && <div className="text-xs text-white/60">{overline}</div>}
        <div className="font-display text-lg font-black">{title}</div>
        {lines.map((l: string) => (
          <div key={l} className="text-sm text-white/60">{l}</div>
        ))}
      </div>
    </div>
  );
}
