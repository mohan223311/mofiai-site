import { motion } from "framer-motion";
import { YouTubeIcon } from "./BrandIcons";
import { Play } from "lucide-react";
import { AnimatedLines } from "./AnimatedHeading";

const videos = [
  { id: "_WIHtqoAmsE" },
  { id: "hfl5blRUjK8" },
  { id: "vd7NJad_lJg" },
  { id: "rxCGsXSFshY" },
  { id: "yHlW9QetRTs" },
];

export function YouTubeSection() {
  const track = [...videos, ...videos];
  return (
    <section
      id="youtube"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #fff5f5 45%, #ffe3e3 100%)",
      }}
    >
      {/* Red glow accents */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, #FF0000 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #FF0000 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-3 rounded-full bg-[#FF0000] text-white px-4 py-1.5 text-xs uppercase tracking-[0.18em] font-bold shadow-lg shadow-red-500/30"
        >
          <YouTubeIcon className="h-4 w-4" />
          Learn for Free
        </motion.div>

        <AnimatedLines
          lines={["Watch Our Content", "on YouTube"]}
          className="mt-5 font-display text-5xl md:text-6xl max-w-3xl text-slate-900"
          highlight={["YouTube"]}
          highlightClass="text-[#FF0000]"
        />

        <p className="mt-4 text-slate-600 max-w-xl text-lg">
          Get a taste of our teaching style before enrolling.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white border border-red-200 px-5 py-2 shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="absolute inset-0 rounded-full bg-[#FF0000] animate-ping opacity-60" />
            <span className="relative h-3 w-3 rounded-full bg-[#FF0000]" />
          </span>
          <span className="text-sm font-semibold text-slate-800">4K+ Subscribers</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-14 group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#ffe3e3] to-transparent" />

        <div className="overflow-hidden">
          <div className="marquee-track flex gap-6 w-max group-hover:[animation-play-state:paused]">
            {track.map((v, i) => (
              <a
                key={`${v.id}-${i}`}
                href={`https://youtu.be/${v.id}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Watch on YouTube"
                className="group/card block w-[340px] md:w-[420px] shrink-0 rounded-2xl overflow-hidden bg-white border border-red-100 shadow-lg shadow-red-200/40 hover:shadow-2xl hover:shadow-red-300/50 hover:-translate-y-1 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <motion.div
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl">
                      <Play className="h-7 w-7 ml-1" fill="currentColor" />
                    </div>
                  </motion.div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <motion.a
          href="https://www.youtube.com/@mofiai123-f"
          target="_blank"
          rel="noreferrer"
          aria-label="Subscribe to MOFI AI on YouTube"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-3 rounded-full bg-[#FF0000] text-white px-7 py-4 text-base font-bold shadow-xl shadow-red-500/40"
        >
          <YouTubeIcon className="h-6 w-6" />
          Subscribe on YouTube
        </motion.a>
      </div>
    </section>
  );
}
