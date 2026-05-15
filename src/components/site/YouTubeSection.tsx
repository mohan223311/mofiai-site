import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { YouTubeIcon } from "./BrandIcons";
import { Play } from "lucide-react";

const videos = [
  { id: "_WIHtqoAmsE", title: "AI Agents Walkthrough" },
  { id: "hfl5blRUjK8", title: "n8n Tutorial" },
  { id: "vd7NJad_lJg", title: "Build Your First Workflow" },
  { id: "rxCGsXSFshY", title: "Automation Tips" },
  { id: "yHlW9QetRTs", title: "AI Voice Agent" },
];

export function YouTubeSection() {
  // duplicate for seamless marquee
  const track = [...videos, ...videos];
  return (
    <section id="youtube" className="bg-dark text-dark-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel light>Learn for Free</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-5xl md:text-6xl font-display max-w-3xl"
        >
          Watch Our Content<br />on YouTube
        </motion.h2>
        <p className="mt-4 text-white/70 max-w-xl">
          Get a taste of our teaching style before enrolling.
        </p>
      </div>

      {/* Edge fade mask */}
      <div className="relative mt-14 group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-dark to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-dark to-transparent" />

        <div className="overflow-hidden">
          <div className="marquee-track flex gap-6 w-max group-hover:[animation-play-state:paused]">
            {track.map((v, i) => (
              <a
                key={`${v.id}-${i}`}
                href={`https://youtu.be/${v.id}`}
                target="_blank"
                rel="noreferrer"
                className="group/card block w-[340px] md:w-[420px] shrink-0 rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] backdrop-blur hover:border-lime/60 transition-colors"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-lime text-lime-foreground flex items-center justify-center shadow-2xl">
                      <Play className="h-7 w-7 ml-1" fill="currentColor" />
                    </div>
                  </motion.div>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold">{v.title}</h4>
                  <p className="text-xs text-white/60 mt-1">youtu.be/{v.id}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <motion.a
          href="https://www.youtube.com/@mofiai123-f"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 rounded-md bg-lime text-lime-foreground px-6 py-3 text-sm font-medium"
        >
          <YouTubeIcon className="h-5 w-5" /> Subscribe to MOFI AI on YouTube
        </motion.a>
      </div>
    </section>
  );
}
