const industries = [
  'Construction', 'Manufacturing', 'Agriculture', 'Energy', 'HVAC', 'Pharmaceuticals',
  'Food & Beverage', 'Aerospace', 'Automotive', 'Hospitals', 'Mining', 'Transportation'
];

export default function IndustriesServed() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition">
              <div className="text-4xl mb-2">🏭</div>
              <p className="font-semibold">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}