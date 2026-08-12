import React from 'react';
import { motion } from 'framer-motion';

const PROCESS_IMAGE = "/55447d57-6b6f-42c5-b121-ff316cca753b.jpg";


const steps = [
{
  no: '01',
  title: 'Site visit & sampling',
  text: 'We read the light, measure the surface and leave physical samples on your wall for 48 hours.'
},
{
  no: '02',
  title: 'Prep & priming',
  text: 'Cracks bridged, substrate levelled, mesh and quartz primer laid so nothing telegraphs later.'
},
{
  no: '03',
  title: 'Hand application',
  text: 'Two to four mineral layers troweled by hand, then burnished to the agreed depth and sheen.'
},
{
  no: '04',
  title: 'Seal & handover',
  text: 'Breathable or waterproof sealing to suit the room, plus a written care and warranty sheet.'
}];


export function Process() {
  return (
    <section className="surface surface-travertine w-full bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1">
            
            <img
              src={PROCESS_IMAGE}
              alt="Applicator hand-troweling fresh microcement plaster onto a wall"
              className="h-[420px] w-full rounded-[2rem] object-cover sm:h-[520px]" />
            
          </motion.div>

          <div className="order-1 lg:order-2">
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">The Work</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Four steps from bare wall to <span className="italic text-clay">finished skin</span>
            </h2>

            <ol className="mt-10">
              {steps.map((step, i) =>
              <motion.li
                key={step.no}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6 border-t border-ink/10 py-6 last:border-b">
                
                  <span className="font-display text-2xl text-gold">{step.no}</span>
                  <div>
                    <h3 className="text-base font-medium text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{step.text}</p>
                  </div>
                </motion.li>
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>);

}