import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { textures } from '../../../data/textures';

export function ServicesTeaser() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max > 0 ? track.scrollLeft / max : 0);

    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let smallest = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(elCenter - center);
      if (distance < smallest) {
        smallest = distance;
        closest = i;
      }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    measure();
    track.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      track.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(textures.length - 1, index));
    const el = track.children[clamped] as HTMLElement | undefined;
    if (!el) return;
    track.scrollTo({
      left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2,
      behavior: 'smooth'
    });
  };

  return (
    <section className="surface surface-mandana w-full overflow-hidden bg-charcoal py-20 text-cream sm:py-28">
      <div className="relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Services</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] sm:text-5xl">
              Twelve finishes for <span className="italic text-clay">walls and floors</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-gold hover:bg-gold hover:text-charcoal">
            
            View all textures
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative mt-14">
          <ul
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory items-center gap-5 overflow-x-auto scroll-smooth px-[calc(50vw-9rem)] pb-4 sm:px-[calc(50vw-11rem)]">
            
            {textures.map((texture, i) => {
              const isActive = i === active;
              return (
                <motion.li
                  key={texture.id}
                  animate={{ scale: isActive ? 1 : 0.92, opacity: isActive ? 1 : 0.55 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-72 shrink-0 snap-center sm:w-[22rem]">
                  
                  <button
                    type="button"
                    onClick={() => scrollToIndex(i)}
                    aria-label={`View ${texture.name}`}
                    className="group block w-full text-left">
                    
                    <div
                      className={`relative overflow-hidden rounded-[1.75rem] transition-all duration-500 ${
                      isActive ?
                      'h-[26rem] ring-1 ring-gold/60 sm:h-[30rem]' :
                      'h-[22rem] ring-1 ring-cream/10 sm:h-[25rem]'}`
                      }>
                      
                      <img
                        src={texture.image}
                        alt={`${texture.name} finish sample`}
                        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />
                      <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-charcoal">
                        {texture.category}
                      </span>
                      <span className="absolute right-5 top-5 font-display text-lg text-cream/50">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <h3 className="font-display text-3xl leading-tight">{texture.name}</h3>
                        <motion.p
                          animate={{
                            opacity: isActive ? 1 : 0,
                            height: isActive ? 'auto' : 0
                          }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden text-sm leading-relaxed text-cream/75">
                          
                          <span className="mt-3 block">{texture.description}</span>
                        </motion.p>
                      </div>
                    </div>
                  </button>
                </motion.li>);

            })}
          </ul>

          <button
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            aria-label="Previous texture"
            className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-charcoal/70 text-cream backdrop-blur transition-colors hover:border-gold hover:bg-gold hover:text-charcoal disabled:pointer-events-none disabled:opacity-30 sm:flex lg:left-10">
            
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === textures.length - 1}
            aria-label="Next texture"
            className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-charcoal/70 text-cream backdrop-blur transition-colors hover:border-gold hover:bg-gold hover:text-charcoal disabled:pointer-events-none disabled:opacity-30 sm:flex lg:right-10">
            
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl items-center gap-6 px-4 sm:px-6">
          <div className="h-px flex-1 bg-cream/15">
            <div
              className="h-px bg-gold transition-[width] duration-200"
              style={{ width: `${Math.max(progress * 100, 6)}%` }} />
            
          </div>
          <p className="shrink-0 text-[11px] uppercase tracking-[0.25em] text-cream/50">
            {String(active + 1).padStart(2, '0')} / {String(textures.length).padStart(2, '0')}
          </p>
        </div>
      </div>
    </section>);

}
