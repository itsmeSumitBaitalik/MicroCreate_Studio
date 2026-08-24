import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { team } from '../../../data/team';

export function Team() {
  return (
    <section className="w-full bg-[#111110] px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#c9a96e]">The Studio</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-[#f5f0e8] sm:text-5xl">
            Meet the team
            <span className="italic text-[#b87941]"> behind the finish</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#f5f0e8]/50">
            A passionate team dedicated to crafting premium surface finishes — from the first
            consultation to the final sealed coat.
          </p>
        </motion.div>

        {/* Team cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-[#1a1a18]"
            >
              {/* Photo area */}
              <div className="relative overflow-hidden" style={{ paddingBottom: '110%' }}>
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: member.objectPosition ?? 'top center' }}
                />
                {/* Subtle gradient at bottom of photo only */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-transparent to-transparent" style={{ background: 'linear-gradient(to top, #1a1a18 0%, rgba(26,26,24,0.3) 35%, transparent 60%)' }} />

                {/* Founder badge */}
                {member.featured && (
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-[#c9a96e]/40 bg-[#111110]/80 px-3 py-1.5 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c9a96e]" />
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#c9a96e]">Founder</span>
                  </div>
                )}
              </div>

              {/* Info area */}
              <div className="flex flex-col gap-2 px-6 pb-7 pt-5">
                <div>
                  <p className="font-display text-xl leading-tight text-[#f5f0e8] sm:text-2xl">
                    {member.name}
                  </p>
                  <p className="mt-1.5 text-[9px] uppercase tracking-[0.22em] text-[#c9a96e]">
                    {member.role}
                  </p>
                </div>
                <div className="mt-1 h-px w-full bg-white/8" />
                <p className="mt-1 text-xs leading-relaxed text-[#f5f0e8]/50">
                  {member.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#f5f0e8]/20 px-7 py-3.5 text-sm font-medium text-[#f5f0e8] transition-all duration-300 hover:border-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#111110]"
          >
            Work with us
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
