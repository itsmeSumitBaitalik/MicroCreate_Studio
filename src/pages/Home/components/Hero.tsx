import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';

const HERO_IMAGE = "/0d478af7-c767-4f97-8030-2d6197cd7d84.webp";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <motion.img
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        src={HERO_IMAGE}
        alt="Minimal living room with a hand-applied microcement feature wall and seamless polished floor"
        className="absolute inset-0 h-full w-full object-cover" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/25" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-32 sm:px-6 sm:pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 text-[11px] uppercase tracking-[0.35em] text-cream/70">
          
          Texture &amp; Paints — Since 2015
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-[15vw] leading-[0.9] text-cream sm:text-8xl lg:text-9xl">
          
          Surfaces made
          <span className="block italic text-clay">by hand.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 max-w-lg text-sm leading-relaxed text-cream/80 sm:text-base">
          
          Limewash, marmorino, travertine and seamless microcement floors — mineral finishes
          troweled on site, with no two walls ever alike.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-3">
          
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold hover:text-cream">
            
            Get a Quote
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10">
            
            Explore Textures
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>);

}
