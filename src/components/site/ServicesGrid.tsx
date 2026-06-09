import { motion } from "framer-motion";
import { Bot, Mic, Workflow, MessageCircle, Map, Link as LinkIcon, ArrowRight, Cpu, Database, Lock, Sparkles, Settings } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import {
  OpenAIIcon,
  ClaudeIcon,
  N8nIcon,
  TwilioIcon,
  PythonIcon,
  MetaIcon,
  WhatsAppIcon,
  VoiceAgentIcon,
  SeleniumIcon,
} from "./BrandIcons";

import serviceChatbot from "@/assets/service-chatbot.png";
import serviceVoice from "@/assets/service-voice.png";
import serviceWorkflow from "@/assets/service-workflow.png";
import serviceWhatsapp from "@/assets/service-whatsapp.png";
import serviceScraping from "@/assets/service-scraping.png";
import serviceApi from "@/assets/service-api.png";

const techMap: Record<string, { icon: React.ComponentType<any>; color: string; label: string }> = {
  "OpenAI": { icon: OpenAIIcon, color: "text-[#10A37F]", label: "OpenAI" },
  "Claude": { icon: ClaudeIcon, color: "text-[#cc6b49]", label: "Claude" },
  "n8n": { icon: N8nIcon, color: "text-[#FF6C37]", label: "n8n" },
  "Retell AI": { icon: VoiceAgentIcon, color: "text-[#a78bfa]", label: "Retell AI" },
  "Twilio": { icon: TwilioIcon, color: "text-[#F22F46]", label: "Twilio" },
  "Meta": { icon: MetaIcon, color: "text-[#0668E1]", label: "Meta" },
  "WhatsApp": { icon: WhatsAppIcon, color: "text-[#25D366]", label: "WhatsApp" },
  "WA Business API": { icon: WhatsAppIcon, color: "text-[#25D366]", label: "WhatsApp API" },
  "Cloud API": { icon: Cpu, color: "text-sky-400", label: "Cloud API" },
  "Python": { icon: PythonIcon, color: "text-[#3776AB]", label: "Python" },
  "Selenium": { icon: SeleniumIcon, color: "text-[#43B02A]", label: "Selenium" },
  "Scrapy": { icon: Cpu, color: "text-amber-500", label: "Scrapy" },
  "REST": { icon: Cpu, color: "text-indigo-400", label: "REST API" },
  "GraphQL": { icon: Cpu, color: "text-pink-500", label: "GraphQL" },
  "Webhooks": { icon: LinkIcon, color: "text-emerald-400", label: "Webhooks" },
  "OAuth": { icon: Lock, color: "text-yellow-400", label: "OAuth" },
  "DBs": { icon: Database, color: "text-teal-400", label: "Databases" },
  "REST APIs": { icon: Cpu, color: "text-indigo-400", label: "REST APIs" },
  "Voice Models": { icon: Sparkles, color: "text-purple-400", label: "Voice Models" },
  "Custom APIs": { icon: LinkIcon, color: "text-blue-400", label: "Custom APIs" },
  "Proxies": { icon: Settings, color: "text-slate-400", label: "Proxies" }
};

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    desc: "Build intelligent conversational AI for customer support, sales, and engagement with natural language and context awareness.",
    cases: ["24/7 customer support", "Lead qualification", "FAQ + knowledge base", "Multi-language support"],
    tech: ["OpenAI", "Claude", "n8n", "Custom APIs"],
    image: serviceChatbot,
    accent: "#10A37F",
  },
  {
    icon: Mic,
    title: "Voice Agents & Call Automation",
    desc: "Automated phone systems with Retell AI for inbound calls, outbound campaigns, bookings, and customer support.",
    cases: ["Restaurant reservations", "Appointment scheduling", "Service hotlines", "Lead follow-up"],
    tech: ["Retell AI", "n8n", "Twilio", "Voice Models"],
    image: serviceVoice,
    accent: "#a78bfa",
  },
  {
    icon: Workflow,
    title: "N8N Workflow Automation",
    desc: "Custom automation systems connecting your tools, databases, and processes. Eliminate manual data entry and repetitive tasks.",
    cases: ["CRM data sync", "Email marketing", "Invoice processing", "Report generation"],
    tech: ["n8n", "Webhooks", "REST APIs", "DBs"],
    image: serviceWorkflow,
    accent: "#FF6C37",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Automation",
    desc: "End-to-end WhatsApp automation for customer communication at scale—handle inquiries, send notifications, process orders.",
    cases: ["Order tracking", "Support on WhatsApp", "Appointment reminders", "Marketing campaigns"],
    tech: ["WA Business API", "Cloud API", "Meta"],
    image: serviceWhatsapp,
    accent: "#25D366",
  },
  {
    icon: Map,
    title: "Data Scraping & Lead Generation",
    desc: "Automated data extraction from Google Maps, websites, and directories. Export to CRM or spreadsheets seamlessly.",
    cases: ["Local lead generation", "Competitor analysis", "Price tracking", "Contact extraction"],
    tech: ["Python", "Selenium", "Scrapy", "Proxies"],
    image: serviceScraping,
    accent: "#3b82f6",
  },
  {
    icon: LinkIcon,
    title: "Custom API Integrations",
    desc: "Connect disparate systems and build custom automation infrastructure—REST APIs, webhooks, and middleware development.",
    cases: ["ERP + CRM", "Payment gateways", "Third-party services", "Custom middleware"],
    tech: ["REST", "GraphQL", "Webhooks", "OAuth"],
    image: serviceApi,
    accent: "#8b5cf6",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-dark text-dark-foreground py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-30" />
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full blur-[120px] opacity-15"
        style={{ background: "radial-gradient(circle, oklch(0.88 0.16 125), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel light>What We Build</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display"
          >
            Professional AI{" "}
            <span className="text-lime">Automation</span>{" "}
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-white/70 text-base md:text-lg leading-relaxed mx-auto"
          >
            From concept to deployment, we create automation solutions that transform how you work and scale your operations.
          </motion.p>
        </div>

        <div className="mt-16 md:mt-20 relative w-full overflow-hidden flex flex-col group -mx-6 px-6 sm:mx-0 sm:px-0">
          {/* Edge gradients for smooth fade out */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-dark to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-dark to-transparent" />
          
          <div className="flex gap-5 md:gap-6 w-max marquee-track hover:[animation-play-state:paused] py-4 pr-6">
            {[...services, ...services].map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={`${s.title}-${i}`}
                  className="group/card relative w-[300px] md:w-[360px] shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur overflow-hidden flex flex-col transition-transform hover:-translate-y-2 hover:border-white/[0.15]"
                >
                  {/* Service image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.025_180)] via-transparent to-transparent opacity-90" />
                    {/* Icon badge on image */}
                    <div
                      className="absolute bottom-4 left-5 h-12 w-12 rounded-xl flex items-center justify-center shadow-2xl border border-white/20 backdrop-blur-xl"
                      style={{ backgroundColor: s.accent + "40" }}
                    >
                      <Icon className="h-6 w-6" style={{ color: s.accent }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 pt-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-semibold text-lg leading-tight text-white">{s.title}</h4>
                      <p className="mt-3 text-[14px] text-white/60 leading-relaxed min-h-[60px]">{s.desc}</p>

                      <ul className="mt-5 space-y-2">
                        {s.cases.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-[13px] text-white/65">
                            <span className="h-1.5 w-1.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: s.accent }} />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech badges */}
                    <div className="mt-6 pt-5 border-t border-white/[0.06]">
                      <div className="text-[10px] text-white/40 uppercase tracking-wider mb-3 font-semibold">Technologies Used</div>
                      <div className="flex flex-wrap gap-2">
                        {s.tech.map((t) => {
                          const item = techMap[t] || { icon: Cpu, color: "text-white/70", label: t };
                          const IconComponent = item.icon;
                          return (
                            <div
                              key={t}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-[11px] text-white/75 shadow-sm transition-colors group-hover/card:bg-white/[0.06]"
                            >
                              <IconComponent className={`h-3.5 w-3.5 ${item.color} shrink-0`} />
                              <span className="font-medium">{item.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-14 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl bg-lime text-lime-foreground px-8 py-3.5 text-sm font-semibold shadow-lg shadow-lime/25 focus-ring min-h-[48px]"
          >
            Get Custom Quote for Your Project <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
