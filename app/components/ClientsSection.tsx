"use client";

import { useRef } from 'react';
import useAutoScroll from '../hooks/useAutoScroll';

const clients = [
  { name: 'ONGC', logo: '1' },
  { name: 'BVFCL', logo: '2' },
  { name: 'Cement Corporation of India', logo: '3' },
  { name: 'NEEPCO', logo: '4' },
  { name: 'Indian Railway', logo: '5' },
  { name: 'Indian Air Force', logo: '6' },
  { name: 'Oil India', logo: '7' },
  { name: 'Bongaigaon Refinery', logo: '8' },
  { name: 'Assam Petrochemical', logo: '9' },
  { name: 'Dalmia Cement', logo: '10' },
  { name: 'NTPC', logo: '11' },
  { name: 'Assam Power Generation', logo: '12' },
  { name: 'NHPC', logo: '13' },
  { name: 'NHAI', logo: '14' }
];

export default function ClientsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  // use centralized autoscroll hook (40 px/s)
  useAutoScroll(trackRef, 40);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Clients</h2>
        <div ref={trackRef} className="overflow-x-auto touch-pan-x hide-scrollbar">
          <div className="flex gap-6 items-center" aria-hidden={false}>
            {[0, 1].map((rep) =>
              clients.map((c, idx) => (
                <div
                  key={`${rep}-${c.logo}-${idx}`}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm flex-shrink-0 flex flex-col items-center"
                  style={{ minWidth: 240 }}
                >
                  <div className="w-36 h-28 mb-3 flex items-center justify-center p-2">
                    <picture>
                      <source srcSet={`/clients/${c.logo}.png`} type="image/png" />
                      <source srcSet={`/clients/${c.logo}.jpg`} type="image/jpeg" />
                      <img src={`/clients/${c.logo}.svg`} alt={`${c.name} logo`} className="h-full w-auto max-w-full object-contain block" />
                    </picture>
                  </div>
                  {/* <div className="text-sm font-semibold text-center">{c.name}</div> */}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
