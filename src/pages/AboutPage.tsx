import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { About } from '../components/About';
import { Team } from '../components/Team';
import { Process } from '../components/Process';
import { ContactCta } from '../components/ContactCta';

const ABOUT_HERO = "/9299936d-b0a7-46f4-94e6-52c681be2d56.webp";


const milestones = [
{
  value: '+450',
  label: 'Surfaces finished',
  text: 'Homes, cafés, retail and hospitality interiors delivered end to end.',
  image: "/eadc15e6-9082-41a2-a5ba-afd088866219.webp"

},
{
  value: '18',
  label: 'Cities covered',
  text: 'A travelling crew that carries its own mixers, tools and sample kit.',
  image: "/0a5a5bd6-c7ad-461d-84a2-c8c0bc66d5e8.webp"

},
{
  value: '10 yrs',
  label: 'Written warranty',
  text: 'Cracking, delamination and seal performance — covered in writing.',
  image: "/1997d847-c509-4643-9c8a-2b0f75f3bf1f.webp"

}];


export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Ten years of"
        accent="mineral craft."
        description="A small studio of applicators working across walls, floors and facades — mixing on site, sampling on your wall, finishing in your light."
        image={ABOUT_HERO}
        imageAlt="Plaster studio workshop with sample boards, trowels and buckets of lime"
        badge={{
          value: '2015',
          label: 'Established',
          text: 'Started with one trowel and a single limewash wall in Velachery, Chennai.'
        }} />
      

      <section className="surface surface-travertine w-full bg-sand px-4 py-20 sm:px-6 sm:py-28">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">*Our Belief</p>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl leading-[1.25] text-ink sm:text-4xl lg:text-[2.75rem]">
              
              “A wall is not a product you order. It is mixed, laid and burnished in front of you —
              <span className="italic text-clay"> so the room, the light and the hand</span> all end
              up in the finish.”
            </motion.blockquote>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {milestones.map((item, i) =>
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[1.75rem] border border-ink/10 bg-cream p-6">
              
                <div className="flex items-start justify-between gap-4">
                  <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="h-16 w-16 rounded-xl object-cover" />
                
                  <div className="text-right">
                    <p className="font-display text-4xl leading-none text-ink">{item.value}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-gold">
                      {item.label}
                    </p>
                  </div>
                </div>
                <p className="mt-8 border-t border-ink/10 pt-5 text-sm leading-relaxed text-ink/60">
                  {item.text}
                </p>
              </motion.article>
            )}
          </div>
        </div>
      </section>

      <About />
      <Team />
      <Process />
      <ContactCta />
    </>);

}