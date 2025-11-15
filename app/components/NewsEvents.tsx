const newsItems = [
  { title: 'Quality Mark Award 2014', desc: 'Recognized for excellence in quality.' },
  { title: 'PLASTINDIA 2023', desc: 'Participating in upcoming exhibition.' },
  { title: 'Safety Initiatives', desc: 'New safety protocols implemented.' },
];

export default function NewsEvents() {
  return (
    <section id="news" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">News & Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}