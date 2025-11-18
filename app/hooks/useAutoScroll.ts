"use client";

import { RefObject, useEffect } from 'react';

export default function useAutoScroll(containerRef: RefObject<HTMLElement | null>, speed = 40) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId: number;
    let lastTimestamp = performance.now();

    function step(ts: number) {
      const delta = (ts - lastTimestamp) / 1000;
      lastTimestamp = ts;
      // advance scroll
      el.scrollLeft += speed * delta;
      // seamless loop when duplicated content is used
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = el.scrollLeft - el.scrollWidth / 2;
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
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause as EventListener);
      el.removeEventListener('touchend', resume as EventListener);
    };
  }, [containerRef, speed]);
}
