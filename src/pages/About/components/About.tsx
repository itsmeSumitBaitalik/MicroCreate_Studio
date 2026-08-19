import React from 'react';
import { motion } from 'framer-motion';
import { LeafIcon, HammerIcon, ShieldCheckIcon } from 'lucide-react';

const SHOWCASE = "/f6b54c8c-2a94-4af1-a3d1-bd14492b1aff.webp";

const pillars = [
{
  icon: LeafIcon,
  title: 'Mineral, breathable',
  text: 'Lime and marble-dust bases that regulate moisture instead of trapping it.'
},
{
  icon: HammerIcon,
  title: 'Applied on site',
  text: 'Every layer troweled by our own applicators — never subcontracted out.'
},
{
  icon: ShieldCheckIcon,
  title: 'Sealed to last',
  text: 'Wet-area and high-traffic systems finished with a 10-year performance seal.'
}];

export function About() {
  return (
    <section className="surface surface-limewash w-full bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">About Us</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            A studio built around
            <span className="italic text-clay"> the trowel</span>, not the catalogue.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
            Microcrete Studio is a small team of applicators working across walls, floors and
            facades. We mix on site, sample on your wall, and finish in the light your room
            actually gets — because a texture that looks right in a showroom rarely behaves the
            same at home.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
            From a single limewash accent wall to a full seamless microcement floor with matching
            bathroom, the work is handled end to end: surface prep, priming, layering, burnishing
            and sealing.
          </p>

          <ul className="mt-10 space-y-6">
            {pillars.map((pillar, i) =>
            <motion.li
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 border-t border-ink/10 pt-6">
              
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink">
                  <pillar.icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-sm font-medium tracking-wide text-ink">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{pillar.text}</p>
                </div>
              </motion.li>
            )}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative">
          
          <img
            src={SHOWCASE}
            alt="Bathroom finished in seamless sand-toned microcement walls and floor"
            className="h-full min-h-[420px] w-full rounded-[2rem] object-cover" />
          
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-cream/20 bg-ink/80 p-5 backdrop-blur-md">
            <p className="font-display text-2xl text-cream">Seamless, joint-free</p>
            <p className="mt-1 text-xs leading-relaxed text-cream/70">
              3mm systems laid straight over existing tile — no demolition, no grout lines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}
