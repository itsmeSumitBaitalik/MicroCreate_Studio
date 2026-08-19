import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon } from 'lucide-react';

const videos = [
  { src: '/video_7.mp4', label: 'Ombre Wall Finish' },
  { src: '/video_5.mp4', label: 'Marmorino Burnish' },
  { src: '/video_3.mp4', label: 'Travertine Texture' },
  { src: '/video_1.mp4', label: 'Limewash Application' },
  { src: '/video_2.mp4', label: 'Venetian Plaster' },
  { src: '/video_4.mp4', label: 'Concrete Effect' },
  { src: '/video_6.mp4', label: 'Mandana Stone' },
];

function VideoCard({ video, index }: { video: typeof videos[number]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const userPausedRef = useRef(false);

  // Force play — sets .muted on the DOM element (React's muted JSX attribute
  // doesn't always set the DOM property, which blocks autoplay in Chrome)
  const forcePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;

    const p = v.play();
    if (p !== undefined) {
      p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, []);

  // On mount: ensure playback starts
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onCanPlay = () => {
      setIsLoaded(true);
      if (!userPausedRef.current) forcePlay();
    };
    const onPlaying = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onError = () => setHasError(true);

    v.addEventListener('canplay', onCanPlay);
    v.addEventListener('playing', onPlaying);
    v.addEventListener('pause', onPause);
    v.addEventListener('error', onError);

    // If video is already ready (cached)
    if (v.readyState >= 3) {
      setIsLoaded(true);
      if (!userPausedRef.current) forcePlay();
    }

    return () => {
      v.removeEventListener('canplay', onCanPlay);
      v.removeEventListener('playing', onPlaying);
      v.removeEventListener('pause', onPause);
      v.removeEventListener('error', onError);
    };
  }, [forcePlay]);

  // Click handler — toggle play/pause
  const handleClick = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      userPausedRef.current = false;
      forcePlay();
    } else {
      userPausedRef.current = true;
      v.pause();
      setIsPlaying(false);
    }
  }, [forcePlay]);

  return (
    <div
      className="video-card group relative shrink-0 cursor-pointer overflow-hidden rounded-[1.25rem] border border-ink/10 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] sm:rounded-[1.75rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden">
        {/* Loading shimmer */}
        {!isLoaded && (
          <div className="absolute inset-0 z-[1] animate-pulse bg-gradient-to-br from-ink/5 via-ink/10 to-ink/5" />
        )}

        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 z-[2] flex items-center justify-center bg-charcoal/60">
            <p className="text-xs text-cream/60">Unable to load</p>
          </div>
        )}

        <video
          ref={videoRef}
          src={video.src}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20" />

        {/* Play/Pause control — visible when paused, or on hover when playing */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            !isPlaying ? 'opacity-100' : isHovered ? 'opacity-100 bg-charcoal/10' : 'opacity-0'
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/20 backdrop-blur-sm transition-transform duration-200 hover:scale-110 sm:h-12 sm:w-12">
            {isPlaying ? (
              <PauseIcon className="h-4 w-4 text-cream sm:h-5 sm:w-5" fill="currentColor" />
            ) : (
              <PlayIcon className="h-4 w-4 text-cream sm:h-5 sm:w-5" fill="currentColor" />
            )}
          </div>
        </div>

        {/* Label */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5">
          <p className="text-[9px] uppercase tracking-[0.25em] text-gold sm:text-[10px]">
            Project {String(index + 1).padStart(2, '0')}
          </p>
          <p className="mt-0.5 font-display text-base leading-tight text-cream sm:mt-1 sm:text-lg md:text-xl">
            {video.label}
          </p>
        </div>
      </div>
    </div>
  );
}

export function WorkShowcase() {
  return (
    <section className="w-full overflow-hidden bg-cream py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
            *Our Work
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Craftsmanship in{' '}
            <span className="italic text-clay">every stroke</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink/60 sm:text-base">
            A glimpse into our recent projects — each surface hand-finished,
            custom-tinted, and sealed to last.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll track */}
      <div className="video-marquee group/marquee relative mt-14 w-full overflow-hidden">
        {/* Gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-28" />

        <div className="video-marquee-track flex w-max gap-3 sm:gap-4 md:gap-5">
          {/* First set */}
          {videos.map((video, i) => (
            <VideoCard key={`a-${video.src}`} video={video} index={i} />
          ))}
          {/* Duplicate set for seamless loop */}
          {videos.map((video, i) => (
            <VideoCard key={`b-${video.src}`} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
