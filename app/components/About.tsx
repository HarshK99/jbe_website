export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6">
            Founded in 2005, we have grown from a small engineering unit to a trusted manufacturer of compressor parts, heat exchangers and precision spares.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">19+ years experience</h3>
              <p>Proven expertise in industrial component manufacturing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Trusted by leading industries</h3>
              <p>Preferred partner for oil and gas, petrochemicals, cement, railways and power</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Presence across India</h3>
              <p>Branches in Assam, Delhi and Ahmedabad for faster service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}