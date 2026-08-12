import React from 'react';
import { motion } from 'framer-motion';

type Badge = {
  value: string;
  label: string;
  text: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: Badge;
};

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt,
  badge
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <motion.img
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/25" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-32 sm:px-6 sm:pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 text-[11px] uppercase tracking-[0.35em] text-cream/70"
        >
          {eyebrow}
        </motion.p>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-[13vw] leading-[0.92] text-cream sm:text-7xl lg:text-8xl">
              {title}
              {accent && <span className="block italic text-clay">{accent}</span>}
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-cream/80 sm:text-base">
              {description}
            </p>
          </motion.div>

          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="w-full max-w-xs rounded-2xl border border-cream/20 bg-ink/70 p-5 backdrop-blur-md"
            >
              <p className="font-display text-4xl text-cream">{badge.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gold">
                {badge.label}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-cream/70">{badge.text}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}