import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

const sections = [
  { t: "Introduction to N8N", items: ["How to start learning the course", "Understanding the roadmap and structure", "Right mindset for learning", "How to watch, practice, and execute lessons"] },
  { t: "Fundamentals of AI & Different Branches", items: ["What is Artificial Intelligence", "Different branches of AI and applications", "Present role of AI in the modern world", "Future trends and opportunities"] },
  { t: "Prompt Engineering in n8n", items: ["What are prompts and why they matter", "How to give effective prompts to AI models", "Prompting techniques specifically for n8n", "Types of prompts: System, User, Assistant"] },
  { t: "The 14 Important Terms to Start", items: ["14 key terms related to AI agents and automation", "Detailed explanations with examples", "Context for each term in real-world scenarios"] },
  { t: "No-Code & n8n Overview", items: ["What is No-Code and why it matters", "What is n8n and its capabilities", "Make.com, Zapier, Lindy comparisons", "Why we specifically teach n8n", "How No-Code works in the backend"] },
  { t: "n8n Installation Methods", items: ["Different installation techniques", "Hostinger VPS setup walkthrough", "Self-hosting options & requirements", "Cloud hosting comparison", "Local hosting for development", "What to use when and why"] },
  { t: "n8n Introduction & Node Types", items: ["Complete introduction to the platform", "Seven types of nodes in n8n", "Detailed explanation of each", "When to use which node", "Node best practices"] },
  { t: "n8n Working Concept + Building Our 1st AI Agent", items: ["Understanding n8n workflow concepts", "Building your first AI agent from scratch", "Converting it to a Telegram agent", "Adding tools and capabilities"] },
  { t: "Problem + Email Classifier Agent Workflow", items: ["Real business problem: email management", "Building an email classifier agent", "AI nodes, code nodes, email nodes", "Complete agent flow breakdown"] },
  { t: "AI Nodes & HITL Nodes in Detail", items: ["All AI nodes in n8n in depth", "Human-in-the-Loop (HITL) nodes", "Features and capabilities", "Pricing considerations"] },
  { t: "Data Handling in n8n", items: ["Data formats: JSON, XML, CSV", "Parsing & converting between formats", "Set & Function nodes for transformation", "Validating and cleaning data"] },
  { t: "Problem + Agent Assignment", items: ["Practical problem-solving with agents", "Assignment-based learning approach", "Real-world scenario practice"] },
  { t: "Assignment Project Breakdown", items: ["Telegram agent for restaurants", "Text, voice, file, image, video flows", "Complex integrations & scenarios", "Error handling techniques"] },
  { t: "Top 15 Most Important Nodes + Workflow Examples", items: ["Webhook, HTTP Request, Code", "Set / Edit Field, Sheets / Airtable", "SplitInBatches / Merge / Aggregator", "IF / Switch / Filter, Loop", "HITL, Cron, Slack, File / Binary", "Duplicate, Notion"] },
  { t: "Credentials, HTTP & APIs", items: ["Credentials management deep dive", "HTTP protocols and methods", "API integration & authentication", "Security best practices"] },
  { t: "RAG, Vector Databases & Embeddings, Projects", items: ["What is RAG explained simply", "Vector databases and their purpose", "Embeddings with practical examples", "Two practical RAG projects"] },
  { t: "Vibe Coding Introduction", items: ["What is Vibe Coding", "Lovable, Bolt, V0, Cursor platforms", "How web coding works in no-code/low-code", "Project: integrating n8n with Lovable"] },
  { t: "n8n AI Workflow Builder", items: ["Intro to AI Workflow Builder", "Connecting OpenAI, Gemini, Claude", "Designing prompts and context flows", "Automating decisions with AI nodes"] },
  { t: "Self Learning Agent", items: ["Self-learning AI agents", "Long-term memory & feedback loops", "Training with real-time data", "Autonomous decision-making"] },
  { t: "Scraping in n8n", items: ["What is web scraping", "Legal & ethical considerations", "Multiple scraping projects", "Anti-scraping handling"] },
  { t: "MCP (Model Context Protocol)", items: ["What is MCP and its purpose", "Building MCP clients and servers", "Examples and projects", "MCP add-ons explained"] },
  { t: "Error Handling & Backup Systems", items: ["Common errors in workflows", "Error trigger workflows", "Continue on fail option", "Debugging techniques", "Reliable backup systems"] },
];

export function Syllabus() {
  const mid = Math.ceil(sections.length / 2);
  const cols = [sections.slice(0, mid), sections.slice(mid)];

  return (
    <section id="syllabus" className="bg-dark text-dark-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-20 pointer-events-none" />
      {/* Premium gold glow accents */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-20 h-[460px] w-[460px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="mx-auto max-w-7xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.22em] font-bold"
          style={{
            background: "linear-gradient(90deg,#fde68a,#D4AF37)",
            color: "#2a1f0a",
            boxShadow: "0 10px 30px -10px rgba(212,175,55,0.7)",
          }}
        >
          ★ Complete Curriculum
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-5 font-display text-5xl md:text-7xl leading-[1.05]"
        >
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg,#FFE9A0,#D4AF37,#FFE9A0)" }}
          >
            22 Sections
          </span>{" "}
          + 6
          <br />
          Real-World <span className="text-lime">Projects</span>
        </motion.h2>
        <p className="mt-4 text-dark-foreground/70">Click any section to expand and explore detailed topics covered.</p>

        <motion.a
          whileHover={{ x: 4 }}
          href="https://docs.google.com/document/d/1lIqPOvcxXIAIDQ9vYnmTJv0vJvF4QxdZt9cHrDDulIM/edit?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-2 border border-amber-300/40 bg-amber-400/10 text-amber-200 hover:bg-amber-400/20 transition-colors"
        >
          View Complete Detailed Syllabus <ExternalLink className="h-4 w-4" />
        </motion.a>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
          {cols.map((col, ci) => (
            <Accordion key={ci} type="multiple" className="space-y-3">
              {col.map((s, i) => {
                const idx = ci * mid + i;
                return (
                  <motion.div
                    key={s.t}
                    initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ delay: Math.min(i * 0.03, 0.4) }}
                  >
                    <AccordionItem
                      value={`s${idx}`}
                      className="rounded-xl border border-amber-300/20 bg-gradient-to-br from-white/[0.07] to-amber-400/[0.04] backdrop-blur px-5 hover:border-amber-300/50 transition-colors"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <span className="flex items-center gap-3 text-left">
                          <span
                            className="font-display text-lg w-8 bg-clip-text text-transparent"
                            style={{ backgroundImage: "linear-gradient(90deg,#FFE9A0,#D4AF37)" }}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="font-medium">{s.t}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-11 space-y-2 pb-2">
                          {s.items.map((it) => (
                            <li key={it} className="flex items-start gap-2 text-sm text-dark-foreground/70">
                              <span className="h-1.5 w-1.5 rounded-full bg-lime mt-2 shrink-0" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
