"use client";

import React from 'react';

interface CounterBoxProps {
  header?: React.ReactNode;
  target: number;
  suffix?: string;
  label: string;
  duration?: number; // in ms
  startOnView?: boolean;
}

export default function CounterBox({
  header,
  target,
  suffix = '',
  label,
  duration = 1500,
  startOnView = true,
}: CounterBoxProps) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const startedRef = React.useRef(false);

  React.useEffect(() => {
    if (!startOnView) {
      // Start immediately
      startCount();
      return;
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            startCount();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startCount() {
    const start = performance.now();
    const from = 0;
    const to = target;
    const ms = Math.max(500, duration);

    function step(now: number) {
      const t = Math.min(1, (now - start) / ms);
      // easeOutQuad
      const eased = 1 - (1 - t) * (1 - t);
      const current = Math.floor(from + (to - from) * eased);
      setValue(current);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(to);
      }
    }

    requestAnimationFrame(step);
  }

  return (
    <div
      ref={ref}
      tabIndex={0}
      className="bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm transform transition hover:scale-[1.02] focus:scale-[1.02]"
      aria-label={`${label}: ${target}${suffix}`}
    >
      {header && (
        <div className="mb-2 text-lg font-large text-gray-600 dark:text-gray-300">{header}</div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-primary">{value.toLocaleString()}{suffix}</div>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
}
