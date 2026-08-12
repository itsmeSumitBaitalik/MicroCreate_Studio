import React from 'react';
import {
  ShieldCheckIcon,
  HardHatIcon,
  GlobeIcon,
  PaintbrushIcon,
  AwardIcon,
  LeafIcon,
  DropletsIcon,
  LayersIcon,
  SparklesIcon,
  ClipboardCheckIcon,
  TruckIcon,
  HeartHandshakeIcon } from
'lucide-react';

const highlights = [
{ icon: ShieldCheckIcon, line1: 'Premium', line2: 'Materials' },
{ icon: HardHatIcon, line1: 'Expert', line2: 'Applicators' },
{ icon: GlobeIcon, line1: 'Pan India', line2: 'Projects' },
{ icon: PaintbrushIcon, line1: 'Custom', line2: 'Texture Designs' },
{ icon: AwardIcon, line1: '10 Year', line2: 'Warranty' },
{ icon: LeafIcon, line1: 'Eco Friendly', line2: 'Products' },
{ icon: LayersIcon, line1: 'Seamless', line2: 'Joint-Free Floors' },
{ icon: DropletsIcon, line1: 'Waterproof', line2: 'Wet Area Systems' },
{ icon: ClipboardCheckIcon, line1: 'Free On-Site', line2: 'Sampling' },
{ icon: SparklesIcon, line1: 'Crack-Free', line2: 'Guarantee' },
{ icon: TruckIcon, line1: 'No Demolition', line2: 'Over Old Tile' },
{ icon: HeartHandshakeIcon, line1: '450+ Surfaces', line2: 'Delivered' }];


export function WhyUs() {
  return (
    <section
      aria-label="Studio credentials"
      className="surface surface-mandana marquee w-full overflow-hidden bg-charcoal py-6">
      
      <div className="relative z-10 flex w-max marquee-track">
        {[0, 1].map((copy) =>
        <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {highlights.map((item) =>
          <li
            key={`${copy}-${item.line2}`}
            className="group flex items-center gap-3 border-r border-cream/15 px-8 py-3">
            
                <item.icon
              className="h-7 w-7 shrink-0 text-gold transition-transform duration-500 group-hover:-translate-y-0.5"
              strokeWidth={1} />
            
                <span className="whitespace-nowrap text-[10px] uppercase leading-[1.5] tracking-[0.18em] text-gold/85 sm:text-[11px]">
                  {item.line1}
                  <br />
                  {item.line2}
                </span>
              </li>
          )}
          </ul>
        )}
      </div>
    </section>);

}