import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { projects } from '../data/projects';

const OFFSETS = [-2, -1, 0, 1, 2];

export function WorkCarousel() {
  const [index, setIndex] = useState(0);
  const [spacing, setSpacing] = useState(220);
  const total = projects.length;

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      setSpacing(w < 640 ? 118 : w < 1024 ? 180 : 230);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Steps the deck by any number of cards, so clicking the second card to the
  // right scrolls two positions rather than one.
  const go = (steps: number) => {
    if (!steps) return;
    setIndex((i) => (i + steps % total + total) % total);
  };

  return (
    <section className="surface surface-mandana w-full overflow-hidden bg-charcoal px-4 py-20 text-cream sm:px-6 sm:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xs text-sm italic leading-relaxed text-cream/60">
            A rotating look at the surfaces we&apos;ve laid — each one mixed, troweled and sealed
            on site.
          </p>
          <h2 className="font-display text-6xl uppercase leading-none tracking-tight sm:text-8xl">
            Our Works
          </h2>
        </div>

        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Recent projects"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              go(-1);
            }
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              go(1);
            }
          }}
          className="relative mt-16 flex h-[26rem] items-center justify-center outline-none sm:h-[32rem]">
          
          {OFFSETS.map((offset) => {
            const projectIndex = (index + offset + total * 2) % total;
            const project = projects[projectIndex];
            const isActive = offset === 0;
            const abs = Math.abs(offset);

            return (
              <motion.button
                key={offset}
                type="button"
                onClick={() => go(offset)}
                aria-label={isActive ? project.title : `Scroll to ${project.title}`}
                aria-current={isActive}
                initial={false}
                animate={{
                  x: offset * spacing,
                  y: abs * 26,
                  rotate: offset * 7,
                  scale: isActive ? 1 : 0.85 - (abs - 1) * 0.06,
                  opacity: isActive ? 1 : 0.62 - (abs - 1) * 0.2,
                  filter: isActive ? 'blur(0px)' : `blur(${abs * 1.2}px)`
                }}
                whileHover={isActive ? undefined : { scale: 0.9 - (abs - 1) * 0.06, opacity: 0.85 }}
                transition={{ type: 'spring', stiffness: 180, damping: 26, mass: 0.9 }}
                style={{ zIndex: 10 - abs, cursor: isActive ? 'default' : 'pointer' }}
                className="absolute h-[20rem] w-52 overflow-hidden rounded-[1.5rem] border border-cream/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] sm:h-[26rem] sm:w-64">
                
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={project.id}
                    src={project.image}
                    alt={`${project.title} — ${project.finish} in ${project.location}`}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 h-full w-full object-cover" />
                  
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

                <AnimatePresence>
                  {isActive &&
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-charcoal">
                    
                      {project.finish}
                    </motion.span>
                  }
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                      
                      <p className="font-display text-2xl leading-tight">{project.title}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/60">
                        {project.location}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.button>);

          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:bg-gold hover:text-charcoal">
            
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next project"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:bg-gold hover:text-charcoal">
            
            <ArrowRightIcon className="h-4 w-4" />
          </button>
          <p className="ml-2 font-display text-2xl text-cream/60">
            {String(index + 1).padStart(2, '0')}
            <span className="text-sm text-cream/30"> / {String(total).padStart(2, '0')}</span>
          </p>
        </div>
      </div>
    </section>);

}