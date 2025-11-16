"use client";

import { ReactNode, useEffect, useRef } from 'react';

const industries = [
  'Oil and Gas',
  'Petrochemical',
  'Fertilizers',
  'Railways',
  'Cement',
  'Power Plants',
  'Construction Companies'
];

const icons: Record<string, ReactNode> = {
  'Oil and Gas': (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2s4 3 4 6a4 4 0 1 1-8 0c0-3 4-6 4-6z" fill="currentColor" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6v1H4v-1z" fill="currentColor" opacity="0.9" />
    </svg>
  ),
  Petrochemical: (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 2v6l6 3 6-3V2H6z" fill="currentColor" />
      <path d="M4 18h16v2H4z" fill="currentColor" opacity="0.9" />
    </svg>
  ),
  Fertilizers: (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2C8 8 4 9 4 13a8 8 0 0 0 16 0c0-4-4-5-8-11z" fill="currentColor" />
      <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#fff" opacity="0.9" />
    </svg>
  ),
  Railways: (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="2" fill="currentColor" />
      <path d="M7 18l-1 3h3l1-3M17 18l1 3h-3l-1-3" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Cement: (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 3h10v6l4 2v8H4V3z" fill="currentColor" />
      <path d="M8 21v-8" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Power Plants': (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2L8 12h8l-4-10z" fill="currentColor" />
      <path d="M6 18h12v4H6z" fill="currentColor" opacity="0.9" />
    </svg>
  ),
  'Construction Companies': (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 13h18v6H3z" fill="currentColor" />
      <path d="M7 13V6l5-3 5 3v7" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};



export default function IndustriesServed() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const container = el;

    // Duplicate width threshold (we will duplicate children for seamless scroll)
    let rafId: number;
    let lastTimestamp = performance.now();
    const speed = 30; // pixels per second

    function step(ts: number) {
      const delta = (ts - lastTimestamp) / 1000;
      lastTimestamp = ts;
      // advance scroll
      container.scrollLeft += speed * delta;
      // when we've scrolled past half (the duplicated set), reset
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = container.scrollLeft - container.scrollWidth / 2;
      }
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    // pause on hover
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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>

        {/* Horizontal autoscroll track */}
        <div
          ref={trackRef}
          className="overflow-hidden"
          style={{
            // hide native scrollbar in some browsers but keep functionality
          }}
        >
          <div className="flex gap-6 items-stretch" aria-hidden={false}>
            {/* render two copies for seamless looping */}
            {[0, 1].map((rep) =>
              industries.map((industry, idx) => (
                <div
                  key={`${rep}-${industry}-${idx}`}
                  className="bg-white p-4 rounded-lg shadow text-center flex-shrink-0"
                  style={{ minWidth: 220 }}
                >
                  <div className="mb-2">{icons[industry] ?? <div className="text-4xl">🏭</div>}</div>
                  <p className="font-semibold text-sm">{industry}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}