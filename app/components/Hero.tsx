"use client";

import { useEffect, useState } from 'react';
import Button from './ui/Button';

const slides = [1, 2, 3];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <section className="relative overflow-hidden text-white">
      {/* Carousel images (prefer JPG, fall back to SVG) */}
      <div className="absolute inset-0 z-0">
        {slides.map((n, i) => (
          <div
            key={n}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-hidden={i === index ? 'false' : 'true'}
          >
            <picture>
              <source srcSet={`/hero/${n}.jpg`} type="image/jpeg" />
              <img src={`/hero/${n}.svg`} alt={`Hero ${n}`} className="w-full h-full object-cover block" />
            </picture>
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Best OEM-equivalent compressor parts and heat exchanger manufacturers in India
          </h1>
          <p className="text-lg md:text-xl mb-8">Enhancing precision. Enhancing performance</p>
          <Button href="#enquiry" variant="secondary" size="lg" className="bg-primary text-white">
            Get Quote
          </Button>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
        >
          ‹
        </button>
      </div>
      <div className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
        <button
          onClick={next}
          aria-label="Next slide"
          className="bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="absolute left-0 right-0 bottom-8 z-30 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}