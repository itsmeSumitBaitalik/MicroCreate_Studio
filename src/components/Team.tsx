import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { team } from '../data/team';

export function Team() {
  return (
    <section className="surface surface-mandana w-full bg-charcoal px-4 py-20 text-cream sm:px-6 sm:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="grid grid-cols-3 gap-4">
          {team.map((member, i) =>
          <motion.figure
            key={member.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-t-[8rem] rounded-b-2xl border border-cream/10 ${
            i === 1 ? 'lg:-translate-y-6' : ''}`
            }>
            
              <img
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              className="h-56 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 sm:h-80" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-lg leading-tight sm:text-2xl">{member.name}</p>
                <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-gold sm:text-[10px]">
                  {member.role}
                </p>
                <p className="mt-2 hidden text-xs leading-relaxed text-cream/60 lg:block">
                  {member.note}
                </p>
              </figcaption>
            </motion.figure>
          )}
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">The Studio</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            Meet the hands
            <span className="italic text-clay"> behind the finish</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
            Nine applicators, one designer, no subcontractors. The team that samples your wall is
            the team that finishes it — which is why our textures look the same in year five as
            they did on day one.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-gold hover:bg-gold hover:text-charcoal">
            
            Work with us
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>);

}