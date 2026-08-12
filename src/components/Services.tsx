import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { textures } from '../data/textures';

type Filter = 'All' | 'Wall' | 'Floor';
const filters: Filter[] = ['All', 'Wall', 'Floor'];

export function Services() {
  const [active, setActive] = useState<Filter>('All');
  const visible = textures.filter((t) => active === 'All' || t.category === active);

  return (
    <section className="surface surface-marmorino w-full bg-sand px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 border-b border-ink/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Services</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Our texture <span className="italic text-clay">library</span>
            </h2>
          </div>
          <div
            role="tablist"
            aria-label="Filter textures"
            className="relative flex w-fit gap-1 rounded-full border border-ink/15 p-1">
            
            {filters.map((f) =>
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`relative rounded-full px-5 py-2 text-xs font-medium tracking-wide transition-colors ${
              active === f ? 'text-cream' : 'text-ink/60 hover:text-ink'}`
              }>
              
                {active === f &&
              <motion.span
                layoutId="texture-filter"
                transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                className="absolute inset-0 rounded-full bg-ink" />

              }
                <span className="relative">{f === 'All' ? 'All' : `${f}s`}</span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((texture, i) =>
          <motion.article
            key={texture.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i % 3 * 0.08 }}
            className="group overflow-hidden rounded-[1.75rem] bg-cream">
            
              <div className="relative overflow-hidden">
                <img
                src={texture.image}
                alt={`${texture.name} finish sample`}
                className="h-72 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" />
              
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur">
                  {texture.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl text-ink">{texture.name}</h3>
                  <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0 text-stone transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{texture.description}</p>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}