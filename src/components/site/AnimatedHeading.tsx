import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Word-by-word "firming" reveal heading.
 * Pass children as a string. Use <br/> by splitting into multiple <AnimatedHeading> blocks.
 */
export function AnimatedHeading({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
  highlight,
  highlightClass = "text-lime",
}: {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
  highlight?: string | string[];
  highlightClass?: string;
}) {
  const words = children.split(" ");
  const high = Array.isArray(highlight) ? highlight : highlight ? [highlight] : [];
  const MotionTag = motion[Tag] as typeof motion.h2;
  return (
    <MotionTag className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
      {words.map((w, i) => {
        const isHigh = high.includes(w.replace(/[^\w]/g, ""));
        return (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55, delay: delay + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-block mr-[0.25em] ${isHigh ? highlightClass : ""}`}
          >
            {w}
          </motion.span>
        );
      })}
    </MotionTag>
  );
}

export function AnimatedLines({
  lines,
  className = "",
  delay = 0,
  highlight,
  highlightClass = "text-lime",
}: {
  lines: string[];
  className?: string;
  delay?: number;
  highlight?: string | string[];
  highlightClass?: string;
}) {
  let cumulative = delay;
  return (
    <h2 className={className}>
      {lines.map((line, li) => {
        const words = line.split(" ");
        const high = Array.isArray(highlight) ? highlight : highlight ? [highlight] : [];
        const startDelay = cumulative;
        cumulative += words.length * 0.09 + 0.1;
        return (
          <span key={li} className="block">
            {words.map((w, i) => {
              const isHigh = high.includes(w.replace(/[^\w]/g, ""));
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: startDelay + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block mr-[0.25em] ${isHigh ? highlightClass : ""}`}
                >
                  {w}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </h2>
  );
}
