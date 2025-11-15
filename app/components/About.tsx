export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6">
            Established in 1977, our company has evolved from manufacturing industrial equipment to becoming a leader in air compressors and vacuum pumps.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">40+ Years Experience</h3>
              <p>Decades of expertise in industrial manufacturing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Presence in 32 Countries</h3>
              <p>Global reach with international standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Distribution in 28 Cities</h3>
              <p>Widespread network for efficient service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}