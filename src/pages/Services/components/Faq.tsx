import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from 'lucide-react';

const faqs = [
{
  q: 'Can microcement go over my existing tiles?',
  a: 'Yes. For floors and wet areas we bond a mesh-reinforced base coat straight over sound tile, so there is no demolition, no debris and no lost floor height beyond about 3mm.'
},
{
  q: 'How long does a room take?',
  a: 'A single feature wall is usually two days including curing. A full bathroom in walls and floor runs four to five days, and a large floor is quoted per square foot with drying time built into the schedule.'
},
{
  q: 'Do you provide samples before we commit?',
  a: 'Always. We prepare hand-made sample boards in your chosen shades and leave them on your wall for 48 hours so you can judge them in morning, evening and artificial light.'
},
{
  q: 'How do I clean and maintain the finish?',
  a: 'A damp cloth and pH-neutral soap is all it needs. Wet-area surfaces are sealed with a water-based polyurethane; we recommend a re-seal on floors every five to seven years.'
},
{
  q: 'Do you work outside Surat?',
  a: 'Yes — we execute projects across eighteen cities. The crew travels with its own mixers, tools and sample kit, and travel is quoted transparently as a line item.'
}];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="surface surface-limewash w-full bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="text-[11px] uppercase tracking-[0.35em] text-gold">*Good to know</p>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
          Questions we get <span className="italic text-clay">before every quote</span>
        </h2>

        <ul className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-ink/12 bg-sand/60">
                
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7">
                  
                  <span className="font-display text-xl text-ink sm:text-2xl">{faq.q}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    isOpen ? 'border-gold bg-gold text-cream' : 'border-ink/20 text-ink'}`
                    }>
                    
                    <PlusIcon
                      className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''}`
                      } />
                    
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                    
                      <p className="px-5 pb-6 text-sm leading-relaxed text-ink/65 sm:px-7">
                        {faq.a}
                      </p>
                    </motion.div>
                  }
                </AnimatePresence>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}
