import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRightIcon,
  CheckCircle2Icon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon } from
'lucide-react';
import { textures } from '../data/textures';
import { useScreenInit } from '../useScreenInit.js';

const MAP_SRC =
'https://www.openstreetmap.org/export/embed.html?bbox=80.2050%2C12.9650%2C80.2450%2C12.9950&layer=mapnik&marker=12.98%2C80.225';

const studioPhotos = [
{
  src: "/1636ca06-e092-4e03-8d97-c6bda6699f62.jpg",
  alt: 'Studio street frontage with a sand-toned rendered facade'
},
{
  src: "/47522b40-9ed1-4028-8145-c761bc015399.jpg",
  alt: 'Showroom wall of graded plaster sample tiles above a consultation table'
},
{
  src: "/1eebc37f-8363-43e6-b601-32ca527e48e1.jpg",
  alt: 'Shelf of hand-made plaster sample boards in earth tones'
}];


export function ContactPage() {
  const screenInit = useScreenInit();
  const [sent, setSent] = useState(screenInit.sent ?? false);

  return (
    <>
      <section className="surface surface-limewash w-full bg-cream px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40">
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">*Contact Us</p>
            <h1 className="mt-5 font-display text-[17vw] uppercase leading-[0.85] tracking-tight text-ink sm:text-[8rem] lg:text-[10rem]">
              Contact
              <span className="block italic normal-case tracking-normal text-clay">us</span>
            </h1>
          </motion.div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="max-w-sm text-sm leading-relaxed text-ink/70">
                Microcrete Studio is based in Velachery, Chennai and travels across India. Reach us
                by email, phone, or simply walk in with a photo of your wall.
              </p>

              <ul className="mt-10 space-y-7">
                <li className="border-t border-ink/15 pt-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Studio</p>
                  <a
                    href="https://maps.google.com/?q=Velachery+Chennai"
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-2 flex items-start gap-2 font-display text-2xl leading-tight text-ink transition-colors hover:text-gold">
                    
                    #21, North Street, Velachery, Chennai — 600042
                    <ArrowUpRightIcon className="mt-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <p className="mt-2 inline-flex items-center gap-2 text-xs text-ink/55">
                    <ClockIcon className="h-3.5 w-3.5" strokeWidth={1.5} />
                    Monday – Saturday · 9:30 am – 6:30 pm
                  </p>
                </li>

                <li className="border-t border-ink/15 pt-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Phone</p>
                  <a
                    href="tel:+910123456789"
                    className="group mt-2 inline-flex items-center gap-2 font-display text-2xl text-ink transition-colors hover:text-gold">
                    
                    <PhoneIcon className="h-4 w-4" strokeWidth={1.5} />
                    +91 01234 56789
                  </a>
                </li>

                <li className="border-t border-ink/15 pt-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Email</p>
                  <a
                    href="mailto:hello@microcretestudio.com"
                    className="group mt-2 inline-flex items-center gap-2 font-display text-2xl text-ink transition-colors hover:text-gold">
                    
                    <MailIcon className="h-4 w-4" strokeWidth={1.5} />
                    hello@microcretestudio.com
                  </a>
                </li>
              </ul>

              <ul className="mt-10 flex gap-3">
                {[
                { label: 'Instagram', icon: InstagramIcon },
                { label: 'Facebook', icon: FacebookIcon },
                { label: 'LinkedIn', icon: LinkedinIcon }].
                map((social) =>
                <li key={social.label}>
                    <a
                    href="#"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/15 text-ink transition-colors hover:border-gold hover:bg-gold hover:text-cream">
                    
                      <social.icon className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-ink/10 bg-sand p-6 sm:p-10">
              
              {sent ?
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                  <CheckCircle2Icon className="h-10 w-10 text-gold" strokeWidth={1.25} />
                  <h2 className="mt-5 font-display text-3xl text-ink">Request received</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
                    Thank you — we&apos;ll be in touch within 24 hours with a texture
                    recommendation and a fixed quote.
                  </p>
                </div> :

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6">
                
                  <p className="font-display text-2xl text-ink">
                    Tell us about the surface, we&apos;ll quote it.
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Your name" />
                    <Field label="Phone" name="phone" type="tel" placeholder="+91" />
                  </div>
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" />

                  <label className="block">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-stone">
                      Finish of interest
                    </span>
                    <select
                    name="finish"
                    className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-sm text-ink outline-none transition-colors focus:border-gold">
                    
                      {textures.map((t) =>
                    <option key={t.id} value={t.name}>
                          {t.name}
                        </option>
                    )}
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-stone">
                      Describe your project
                    </span>
                    <textarea
                    name="message"
                    rows={3}
                    placeholder="Room, approximate area, timeline…"
                    className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-gold" />
                  
                  </label>

                  <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-cream transition-colors hover:bg-gold">
                  
                    Request a quote
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              }
            </motion.div>
          </div>
        </div>
      </section>

      <section className="surface surface-travertine w-full bg-sand px-4 py-20 sm:px-6 sm:py-24">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="font-display text-5xl uppercase leading-none tracking-tight text-ink sm:text-7xl">
            How to find us
          </h2>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-ink/10">
            <iframe
              title="Map showing Microcrete Studio in Velachery, Chennai"
              src={MAP_SRC}
              className="h-[320px] w-full sm:h-[420px]"
              loading="lazy" />
            
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="https://maps.google.com/?q=Velachery+Chennai"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold">
              
              <MapPinIcon className="h-4 w-4" strokeWidth={1.5} />
              Open in Google Maps
            </a>
            <p className="text-xs text-ink/55">Free visitor parking on North Street.</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {studioPhotos.map((photo, i) =>
            <motion.img
              key={photo.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              src={photo.src}
              alt={photo.alt}
              className="h-56 w-full rounded-2xl object-cover" />

            )}
          </div>
        </div>
      </section>
    </>);

}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

function Field({ label, name, type = 'text', placeholder }: FieldProps) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-stone">{label}</span>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-gold" />
      
    </label>);

}