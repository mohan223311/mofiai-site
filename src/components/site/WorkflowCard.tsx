import { motion } from "framer-motion";
import { Star, Maximize2, MoreHorizontal, Workflow } from "lucide-react";

type Variant = "trigger" | "action" | "followup";

const labels: Record<Variant, string> = {
  trigger: "When this happens",
  action: "Then do this",
  followup: "Followed-Up",
};

export function WorkflowCard({
  variant,
  title,
  subtitle,
  className = "",
  dark = false,
  delay = 0,
}: {
  variant: Variant;
  title: string;
  subtitle: string;
  className?: string;
  dark?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`rounded-xl p-5 shadow-2xl border w-[300px] ${
        dark
          ? "bg-dark/80 backdrop-blur border-white/10 text-dark-foreground"
          : "bg-card border-border"
      } ${className}`}
    >
      <div className="inline-flex items-center gap-1.5 rounded-full border border-current/20 px-3 py-1 text-xs mb-3 opacity-90">
        <Workflow className="h-3 w-3" />
        <span>{labels[variant]}</span>
      </div>
      <h4 className="font-semibold leading-snug">{title}</h4>
      <p className={`mt-1 text-sm ${dark ? "text-white/60" : "text-muted-foreground"}`}>{subtitle}</p>
      <div className="mt-4 flex items-center justify-between text-xs opacity-60">
        <div className="flex gap-3">
          <Star className="h-4 w-4" />
          <Maximize2 className="h-4 w-4" />
        </div>
        <MoreHorizontal className="h-4 w-4" />
      </div>
    </motion.div>
  );
}
