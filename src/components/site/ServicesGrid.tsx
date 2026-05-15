import { motion } from "framer-motion";
import { Bot, Mic, Workflow, MessageCircle, Map, Link as LinkIcon, ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    desc: "Build intelligent conversational AI for customer support, sales, and engagement with natural language and context awareness.",
    cases: ["24/7 customer support", "Lead qualification", "FAQ + knowledge base", "Multi-language support"],
    tech: "OpenAI · Claude · n8n · Custom APIs",
  },
  {
    icon: Mic,
    title: "Voice Agents & Call Automation",
    desc: "Automated phone systems with Retell AI for inbound calls, outbound campaigns, bookings, and customer support.",
    cases: ["Restaurant reservations", "Appointment scheduling", "Service hotlines", "Lead follow-up"],
    tech: "Retell AI · n8n · Twilio · Voice Models",
  },
  {
    icon: Workflow,
    title: "N8N Workflow Automation",
    desc: "Custom automation systems connecting your tools, databases, and processes. Eliminate manual data entry and repetitive tasks.",
    cases: ["CRM data sync", "Email marketing", "Invoice processing", "Report generation"],
    tech: "n8n · Webhooks · REST APIs · DBs",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Automation",
    desc: "End-to-end WhatsApp automation for customer communication at scale—handle inquiries, send notifications, process orders.",
    cases: ["Order tracking", "Support on WhatsApp", "Appointment reminders", "Marketing campaigns"],
    tech: "WA Business API · Cloud API · Meta",
  },
  {
    icon: Map,
    title: "Data Scraping & Lead Generation",
    desc: "Automated data extraction from Google Maps, websites, and directories. Export to CRM or spreadsheets seamlessly.",
    cases: ["Local lead generation", "Competitor analysis", "Price tracking", "Contact extraction"],
    tech: "Python · Selenium · Scrapy · Proxies",
  },
  {
    icon: LinkIcon,
    title: "Custom API Integrations",
    desc: "Connect disparate systems and build custom automation infrastructure—REST APIs, webhooks, and middleware development.",
    cases: ["ERP + CRM", "Payment gateways", "Third-party services", "Custom middleware"],
    tech: "REST · GraphQL · Webhooks · OAuth",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-dark text-dark-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel light>What We Build</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-5xl md:text-6xl font-display max-w-3xl"
        >
          Professional AI<br />Automation Services
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-xl">
          From concept to deployment, we create automation solutions that transform how you work.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-80px" }}
                transition={{ delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8, borderColor: "var(--lime)" }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 overflow-hidden"
              >
                <motion.div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: "radial-gradient(400px circle at 50% 0%, rgba(190,242,100,0.15), transparent 60%)" }}
                />
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity, delay: i * 0.25 }}
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-lime/15 border border-lime/30 text-lime"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h4 className="font-semibold text-lg">{s.title}</h4>
                <p className="mt-2 text-sm text-white/65">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.cases.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-xs text-white/70">
                      <span className="h-1 w-1 rounded-full bg-lime" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-dashed border-white/15 text-[11px] text-white/50">
                  {s.tech}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-md bg-lime text-lime-foreground px-6 py-3 text-sm font-medium"
          >
            Get Custom Quote for Your Project <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
