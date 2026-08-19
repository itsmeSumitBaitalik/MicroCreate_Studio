import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

const SHOWCASE = "/f6b54c8c-2a94-4af1-a3d1-bd14492b1aff.webp";

export function AboutTeaser() {
  return (
    <section className="surface surface-marmorino w-full bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">About Us</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            A studio built around
            <span className="italic text-clay"> the trowel</span>, not the catalogue.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/70 sm:text-base">
            We mix on site, sample on your wall, and finish in the light your room actually gets.
            Ten years of applied craft across homes, cafés and hotel interiors.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream">
            
            Read our story
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src={SHOWCASE}
          alt="Bathroom finished in seamless sand-toned microcement walls and floor"
          className="h-[420px] w-full rounded-[2rem] object-cover sm:h-[520px]" />
        
      </div>
    </section>);

}
