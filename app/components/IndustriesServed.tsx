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
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C9 5.5 7 8 7 11a5 5 0 0010 0c0-3-2-5.5-5-9z" />
    </svg>
  ),
  Petrochemical: (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2v6l5 6v6h2v-6l5-6V2H7z" />
    </svg>
  ),
  Fertilizers: (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2s-5 4-7 8a7 7 0 0014 0c-2-4-7-8-7-8z" />
    </svg>
  ),
  Railways: (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="3" y="5" width="18" height="10" rx="2" />
      <circle cx="8.5" cy="17.5" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="17.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  Cement: (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 6h16v5l-8 4-8-4V6z" />
    </svg>
  ),
  'Power Plants': (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 2L3 14h7l-1 8 11-12h-7l1-8z" />
    </svg>
  ),
  'Construction Companies': (
    <svg className="w-12 h-12 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 13h18v6H3z" />
      <path d="M8 13V7l4-3 4 3v6" />
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

    // pause on hover / touch
    function onEnter() {
      cancelAnimationFrame(rafId);
    }
    function onLeave() {
      lastTimestamp = performance.now();
      rafId = requestAnimationFrame(step);
    }

    function onTouchStart() {
      cancelAnimationFrame(rafId);
    }
    function onTouchEnd() {
      lastTimestamp = performance.now();
      rafId = requestAnimationFrame(step);
    }

    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', onTouchEnd);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
      container.removeEventListener('touchstart', onTouchStart as EventListener);
      container.removeEventListener('touchend', onTouchEnd as EventListener);
    };
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>

        {/* Horizontal autoscroll track */}
        <div
          ref={trackRef}
          className="overflow-x-auto touch-pan-x hide-scrollbar"
          style={{
            // allow horizontal touch scrolling on mobile while autoscroll runs on desktop
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