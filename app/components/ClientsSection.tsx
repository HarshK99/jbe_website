"use client";

import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const container = el;

    let rafId: number;
    let lastTimestamp = performance.now();
    const speed = 40; // px per second

    function step(ts: number) {
      const delta = (ts - lastTimestamp) / 1000;
      lastTimestamp = ts;
      container.scrollLeft += speed * delta;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = container.scrollLeft - container.scrollWidth / 2;
      }
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    function onEnter() {
      cancelAnimationFrame(rafId);
    }
    function onLeave() {
      lastTimestamp = performance.now();
      rafId = requestAnimationFrame(step);
    }

    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Clients</h2>
        <div ref={trackRef} className="overflow-hidden">
          <div className="flex gap-6 items-center" aria-hidden={false}>
            {[0, 1].map((rep) =>
              clients.map((c, idx) => (
                <div
                  key={`${rep}-${c.logo}-${idx}`}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm flex-shrink-0 flex flex-col items-center"
                  style={{ minWidth: 220 }}
                >
                  <div className="w-32 h-20 mb-3 flex items-center justify-center">
                    <picture>
                      <source srcSet={`/clients/${c.logo}.jpg`} type="image/jpeg" />
                      <img src={`/clients/${c.logo}.svg`} alt={`${c.name} logo`} className="w-full h-full object-contain" />
                    </picture>
                  </div>
                  <div className="text-sm font-semibold text-center">{c.name}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
