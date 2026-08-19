import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { PageHero } from '../../components/PageHero';
import { WorkCarousel } from './components/WorkCarousel';
import { Process } from '../About/components/Process';
import { ContactCta } from '../Contact/components/ContactCta';
import { projects } from '../../data/projects';

const WORK_HERO = "/1321823a-7a7b-4317-95ea-ce7b65a6583c.webp";


export function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Projects across"
        accent="eighteen cities."
        description="Homes, cafés, retail and hospitality interiors — every surface prepped, layered and sealed by our own applicators."
        image={WORK_HERO}
        imageAlt="Hotel lobby with a polished marmorino wall and seamless microcement floor"
        badge={{
          value: '+450',
          label: 'Surfaces delivered',
          text: 'From a single accent wall to 6,000 sq ft of seamless flooring.'
        }} />


      <WorkCarousel />

      <section className="surface surface-ombre w-full bg-sand px-4 py-20 sm:px-6 sm:py-28">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
              The full <span className="italic text-clay">portfolio</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-ink/60">
              Each project lists the finish applied and where it lives. Ask us for the site photos
              of any one of them.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) =>
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i % 3 * 0.08 }}
                className="group relative overflow-hidden rounded-[1.75rem]">

                <img
                  src={project.image}
                  alt={`${project.title} — ${project.finish} in ${project.location}`}
                  className="h-80 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                  <div>
                    <h3 className="font-display text-3xl text-cream">{project.title}</h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/70">
                      {project.finish} · {project.location}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="mb-1 h-4 w-4 shrink-0 text-cream/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </section>

      <Process />
      <ContactCta />
    </>);

}