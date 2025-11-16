import CounterBox from './CounterBox';
import { ReactNode } from 'react';

const stats: { target: number; label: string; suffix?: string; header?: ReactNode }[] = [
  { target: 40, suffix: '+', label: 'Years', header: 'Years of Experience' },
  { target: 32, suffix: '+', label: 'Countries', header: 'Countries Presence' },
  { target: 20, suffix: '+', label: 'Large Clients', header: 'Satisfied Clients' },
];
export default function CountersSection() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">Delivering quality and performance across the globe — a few numbers that tell our story.</p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((s, idx) => (
              <CounterBox
                key={idx}
                target={s.target}
                suffix={s.suffix}
                label={s.label}
                header={s.header}
                duration={1200}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#enquiry" className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90">Join our growing community</a>
          </div>
        </div>
      </div>
    </section>
  );
}
