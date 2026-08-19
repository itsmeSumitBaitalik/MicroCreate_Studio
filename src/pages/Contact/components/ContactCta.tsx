import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, PhoneIcon, MailIcon } from 'lucide-react';

export function ContactCta() {
  return (
    <section className="surface surface-limewash w-full bg-cream px-4 py-20 sm:px-6 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-ink/10 bg-sand px-6 py-16 text-center sm:px-12 sm:py-24">
        
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Contact Us</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-ink sm:text-6xl">
            Send us the room. We&apos;ll send back
            <span className="italic text-clay"> a finish.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink/65 sm:text-base">
            Share a photo and rough measurements and we&apos;ll come back within 24 hours with a
            texture recommendation and a fixed quote.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-cream transition-colors hover:bg-gold">
              
              Get Quote
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="tel:+918690670529"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream">
              
              <PhoneIcon className="h-4 w-4" strokeWidth={1.5} />
              +91 86906 70529
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-xs tracking-wide text-ink/50">
            <MailIcon className="h-3.5 w-3.5" strokeWidth={1.5} />
            hello@microcretestudio.com
          </p>
        </div>
      </motion.div>
    </section>);

}
