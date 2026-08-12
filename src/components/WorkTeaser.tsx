import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { projects } from '../data/projects';

export function WorkTeaser() {
  const featured = projects.slice(0, 4);

  return (
    <section className="surface surface-ombre w-full bg-sand px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Work</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
              Recent surfaces, <span className="italic text-clay">start to seal</span>
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream">
            
            See the portfolio
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) =>
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-[1.5rem]">
            
              <img
              src={project.image}
              alt={`${project.title} — ${project.finish} in ${project.location}`}
              className="h-72 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl text-cream">{project.title}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/70">
                  {project.finish} · {project.location}
                </p>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}