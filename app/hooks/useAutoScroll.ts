"use client";

import { RefObject, useEffect } from 'react';

export default function useAutoScroll(containerRef: RefObject<HTMLElement | null>, speed = 40) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let lastTimestamp = performance.now();
    // assert a stable non-null reference for inner callbacks
    const c = container as HTMLElement;

    function step(ts: number) {
      const delta = (ts - lastTimestamp) / 1000;
      lastTimestamp = ts;
      // advance scroll
      c.scrollLeft += speed * delta;
      // seamless loop when duplicated content is used
      if (c.scrollLeft >= c.scrollWidth / 2) {
        c.scrollLeft = c.scrollLeft - c.scrollWidth / 2;
      }
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    function pause() {
      cancelAnimationFrame(rafId);
    }
    function resume() {
      lastTimestamp = performance.now();
      rafId = requestAnimationFrame(step);
    }

    // pause on hover and touch, resume afterwards
    c.addEventListener('mouseenter', pause);
    c.addEventListener('mouseleave', resume);
    c.addEventListener('touchstart', pause, { passive: true });
    c.addEventListener('touchend', resume);

    return () => {
      cancelAnimationFrame(rafId);
      c.removeEventListener('mouseenter', pause);
      c.removeEventListener('mouseleave', resume);
      c.removeEventListener('touchstart', pause as EventListener);
      c.removeEventListener('touchend', resume as EventListener);
    };
  }, [containerRef, speed]);
}
