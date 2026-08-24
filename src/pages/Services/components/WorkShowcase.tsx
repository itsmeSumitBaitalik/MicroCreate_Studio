import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon, XIcon } from "lucide-react";
import { videos } from "../../../data/navigation";

/* ─── Lightbox Modal ──────────────────────────────────────────────────── */

function VideoLightbox({
  video,
  onClose,
}: {
  video: (typeof videos)[number];
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Auto-play muted — no controls ever shown
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-charcoal/90 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-cream backdrop-blur-sm transition-all hover:border-cream/40 hover:bg-cream/20 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
        aria-label="Close video"
      >
        <XIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
      </button>

      {/* Label */}
      <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
        <p className="text-[9px] uppercase tracking-[0.3em] text-gold sm:text-[10px]">Now Playing</p>
        <p className="mt-1 font-display text-lg text-cream sm:text-xl">{video.label}</p>
      </div>

      {/* Video — no controls, always muted */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-4 max-h-[85vh] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl sm:mx-6 sm:max-w-lg sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-contain bg-black"
          style={{ maxHeight: "85vh" }}
        >
          <source src={video.srcWebm} type="video/webm" />
        </video>
      </motion.div>
    </motion.div>
  );
}

/* ─── Video Card ──────────────────────────────────────────────────────── */

interface VideoCardProps {
  video: (typeof videos)[number];
  index: number;
  onOpenLightbox: () => void;
}

function VideoCard({ video, index, onOpenLightbox }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [srcLoaded, setSrcLoaded] = useState(false); // only inject src on first hover

  // On hover-enter: inject src (once) and play
  const handleMouseEnter = () => {
    setIsHovered(true);
    const v = videoRef.current;
    if (!v) return;

    // Lazy-inject the src the very first time
    if (!srcLoaded) {
      const source = document.createElement("source");
      source.src = video.srcWebm;
      source.type = "video/webm";
      v.appendChild(source);
      v.load();
      setSrcLoaded(true);
    }

    v.muted = true;
    v.play().catch(() => {});
  };

  // On hover-leave: pause and reset to start so poster shows again
  const handleMouseLeave = () => {
    setIsHovered(false);
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  // Click: open lightbox (video on card pauses automatically via mouse-leave)
  const handleClick = () => {
    onOpenLightbox();
  };

  return (
    <div
      className="video-card group relative shrink-0 cursor-pointer overflow-hidden rounded-[1.25rem] border border-ink/10 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] sm:rounded-[1.75rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden">

        {/* Poster — always visible, fades out once video is playing */}
        {video.poster && (
          <img
            src={video.poster}
            alt={video.label}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {/* Video — src only injected on first hover, so idle cards cost 0 bandwidth */}
        <video
          ref={videoRef}
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/10" />

        {/* Play icon — visible when not hovered, hides when video plays */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/20 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12">
            <PlayIcon className="h-4 w-4 text-cream sm:h-5 sm:w-5" fill="currentColor" />
          </div>
        </div>

        {/* Label */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5">
          <p className="text-[9px] uppercase tracking-[0.25em] text-gold sm:text-[10px]">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-0.5 font-display text-base leading-tight text-cream sm:mt-1 sm:text-lg md:text-xl">
            {video.label}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Work Showcase Section ───────────────────────────────────────────── */

export function WorkShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full overflow-hidden bg-cream py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">*Our Work</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Craftsmanship in{" "}
            <span className="italic text-clay">every stroke</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink/60 sm:text-base">
            A glimpse into our recent projects — each surface hand-finished,
            custom-tinted, and sealed to last.
          </p>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div className="video-marquee group/marquee relative mt-14 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-cream to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-cream to-transparent sm:w-28" />

        <div className="video-marquee-track flex w-max gap-3 sm:gap-4 md:gap-5">
          {videos.map((video, i) => (
            <VideoCard
              key={`a-${video.srcWebm}`}
              video={video}
              index={i}
              onOpenLightbox={() => setOpenIndex(i)}
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {videos.map((video, i) => (
            <VideoCard
              key={`b-${video.srcWebm}`}
              video={video}
              index={i}
              onOpenLightbox={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && videos[openIndex] && (
          <VideoLightbox
            key={videos[openIndex].srcWebm}
            video={videos[openIndex]}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
