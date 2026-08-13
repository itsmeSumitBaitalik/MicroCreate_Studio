import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon, ArrowUpRightIcon } from 'lucide-react';
import { navLinks } from '../data/navigation';

const socials = [
{ label: 'Instagram', icon: InstagramIcon, href: '#' },
{ label: 'Facebook', icon: FacebookIcon, href: '#' },
{ label: 'LinkedIn', icon: LinkedinIcon, href: '#' },
{ label: 'YouTube', icon: YoutubeIcon, href: '#' }];


export function Footer() {
  return (
    <footer className="w-full bg-charcoal">
      <div className="grain relative w-full overflow-hidden bg-charcoal pt-16 text-cream sm:pt-24">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <nav aria-label="Footer">
              <p className="text-[10px] uppercase tracking-[0.35em] text-cream/40">Menu</p>
              <ul className="mt-5 space-y-2.5">
                {navLinks.map((link) =>
                <li key={link.to}>
                    <Link
                    to={link.to}
                    className="text-sm text-cream/75 transition-colors hover:text-gold">
                    
                      {link.label}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            <div className="md:text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-cream/40">Follow Us</p>
              <div className="mt-5 space-y-1.5 text-sm text-cream/75">
                <p>hello@microcretestudio.com</p>
                <p>+91 01234 56789</p>
              </div>
              <ul className="mt-6 flex gap-3 md:justify-center">
                {socials.map((social) =>
                <li key={social.label}>
                    <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-cream/15 bg-cream/[0.06] text-cream/80 transition-colors hover:border-gold hover:bg-gold hover:text-charcoal">
                    
                      <social.icon className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="md:text-right">
              <p className="text-[10px] uppercase tracking-[0.35em] text-cream/40">Studio</p>
              <address className="mt-5 text-sm not-italic leading-relaxed text-cream/75">
                #21, North Street,
                <br />
                Velachery,
                <br />
                Chennai — 600042
              </address>
              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-xs font-medium tracking-wide text-cream transition-colors hover:border-gold hover:bg-gold hover:text-charcoal">
                
                Get Quote
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 py-6 text-[11px] tracking-wide text-cream/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Microcrete Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-cream">
                Terms &amp; Conditions
              </a>
              <a href="#" className="transition-colors hover:text-cream">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-4 select-none overflow-visible pb-3" aria-hidden="true">
          <p className="whitespace-nowrap text-center font-wordmark text-[22.5vw] leading-[0.83] tracking-[0.005em] text-cream/95">
            MICROCRETE
          </p>
          <p className="-mt-[1.6vw] pb-[1.2vw] text-center font-display text-[3.6vw] italic leading-none text-gold">
            texture & paints
          </p>
        </div>
      </div>
    </footer>);

}