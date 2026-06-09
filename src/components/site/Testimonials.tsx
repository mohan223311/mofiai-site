import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Star, X } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { YouTubeIcon } from "./BrandIcons";

const items = [
  {
    quote: "Professional voice agent delivered for our retail business exceeded expectations. Saved us hours every week.",
    location: "Singapore",
    countryCode: "SG",
    client: "Retail Business Owner",
    tag: "Voice Agent",
    rating: 5,
    embedUrl: "https://www.youtube.com/embed/JHt5pk2D9g8?autoplay=1&rel=0",
    thumbUrl: "https://i.ytimg.com/vi/JHt5pk2D9g8/hqdefault.jpg",
  },
  {
    quote: "Complete website automation solution transformed our operations. The ROI was visible within days.",
    location: "India",
    countryCode: "IN",
    client: "E-commerce Business",
    tag: "Website Automation",
    rating: 5,
    embedUrl: "https://drive.google.com/file/d/1WwyoNmfT7B7vQyT022fOQR9vL6LeFZQn/preview",
    thumbUrl: null,
  },
  {
    quote: "Personalized training completely transformed my automation capabilities. Best investment I made.",
    location: "New Zealand",
    countryCode: "NZ",
    client: "Automation Professional",
    tag: "1:1 Consultation",
    rating: 5,
    embedUrl: "https://www.youtube.com/embed/iuy-gOCZJ_4?autoplay=1&rel=0",
    thumbUrl: "https://i.ytimg.com/vi/iuy-gOCZJ_4/hqdefault.jpg",
  },
];

const shortsItem = {
  quote: "Results speak for themselves. MOFI AI delivered exactly what was promised — fast, professional, and impactful.",
  location: "India",
  countryCode: "IN",
  client: "Happy Client",
  tag: "AI Automation",
  rating: 5,
  videoId: "AhKdIs_4FGY",
  embedUrl: "https://www.youtube.com/embed/AhKdIs_4FGY?autoplay=1&rel=0",
  thumbUrl: "https://i.ytimg.com/vi/AhKdIs_4FGY/hqdefault.jpg",
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

function VideoCard({ t, index }: { t: typeof items[number]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-80px", once: true }}
      transition={{ delay: index * 0.12 }}
      whileHover={playing ? {} : { y: -6 }}
      className="group rounded-2xl bg-card border border-border shadow-sm overflow-hidden transition-shadow hover:shadow-lg"
    >
      <div className="aspect-video relative overflow-hidden bg-dark">
        {playing ? (
          <>
            <iframe
              src={t.embedUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={`${t.client} testimonial`}
            />
            <button
              onClick={() => setPlaying(false)}
              aria-label="Close video"
              className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-dark/80 backdrop-blur-sm text-white flex items-center justify-center hover:bg-dark transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </>
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${t.client} testimonial`}
            className="w-full h-full relative flex items-center justify-center"
          >
            {t.thumbUrl ? (
              <img
                src={t.thumbUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 dotted-bg opacity-30" />
            )}
            <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/30 transition-colors" />
            <div className="relative z-10 h-14 w-14 rounded-full bg-lime text-lime-foreground flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110">
              <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
            </div>
            <span className="absolute top-3 right-3 text-[10px] text-white/70 bg-dark/60 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium">
              Watch ▶
            </span>
          </button>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <StarRating count={t.rating} />
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">"{t.quote}"</p>
        <div className="mt-5 pt-4 border-t border-dashed border-border flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">{t.client}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{t.tag} · {t.location}</div>
          </div>
          <div className="h-8 w-8 rounded-full bg-lime/15 border border-lime/30 flex items-center justify-center text-xs font-bold text-lime">
            {t.countryCode}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ShortsCard() {
  const [playing, setPlaying] = useState(false);
  const t = shortsItem;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-80px", once: true }}
      transition={{ delay: 0.1 }}
      className="flex flex-col md:flex-row gap-6 md:gap-8 items-start rounded-2xl bg-card border border-border shadow-sm overflow-hidden"
    >
      {/* Portrait video — fixed width on desktop */}
      <div className="relative w-full md:w-[260px] shrink-0" style={{ aspectRatio: "9/16" }}>
        {playing ? (
          <div className="absolute inset-0">
            <iframe
              src={t.embedUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Client testimonial short"
            />
            <button
              onClick={() => setPlaying(false)}
              aria-label="Close video"
              className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-dark/80 backdrop-blur-sm text-white flex items-center justify-center hover:bg-dark transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label="Play client testimonial"
            className="absolute inset-0 group flex items-center justify-center bg-dark"
          >
            <img
              src={t.thumbUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-dark/35 group-hover:bg-dark/25 transition-colors" />
            {/* YouTube Shorts badge */}
            <span className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#FF0000] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
              <YouTubeIcon className="h-3 w-3" />
              Shorts
            </span>
            <div className="relative z-10 h-16 w-16 rounded-full bg-lime text-lime-foreground flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110">
              <Play className="h-7 w-7 ml-0.5" fill="currentColor" />
            </div>
          </button>
        )}
      </div>

      {/* Text body */}
      <div className="flex flex-col justify-between flex-1 p-5 md:p-6 md:pl-0">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/30 text-[#FF0000] text-xs font-semibold px-3 py-1">
              <YouTubeIcon className="h-3.5 w-3.5" />
              YouTube Short
            </span>
          </div>
          <StarRating count={t.rating} />
          <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/85">"{t.quote}"</p>
        </div>
        <div className="mt-6 pt-4 border-t border-dashed border-border flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">{t.client}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{t.tag} · {t.location}</div>
          </div>
          <div className="h-8 w-8 rounded-full bg-lime/15 border border-lime/30 flex items-center justify-center text-xs font-bold text-lime">
            {t.countryCode}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionLabel>Trusted Globally</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display max-w-3xl"
        >
          Real Results<br />From Real Clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-muted-foreground"
        >
          Every testimonial backed by video proof. Click to watch.
        </motion.p>

        {/* 3 landscape cards */}
        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((t, i) => (
            <VideoCard key={t.client} t={t} index={i} />
          ))}
        </div>

        {/* Featured Shorts card */}
        <div className="mt-5 md:mt-6">
          <ShortsCard />
        </div>
      </div>
    </section>
  );
}
