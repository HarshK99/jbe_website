export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6">
            Established in 2005, we manufacture OEM-equivalent compressor parts and heat exchangers built for precision, durability and complete interchangeability.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">19+ years experience</h3>
              <p>Proven expertise in high-quality compressor components</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">OEM-grade precision</h3>
              <p>All products meet OEM standards with MTC and TPI support</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Advanced manufacturing</h3>
              <p>State-of-the-art machinery with strict multi-stage quality checks</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}