export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6"> Established in 2005, Jai Balaji Enterprises is a trusted manufacturer and supplier of premium compressor parts and heat exchangers for air, gas and screw compressor systems. We specialise in producing OEM-equivalent components such as compressor valves, pistons, piston rods, piston rings, packing rings, gaskets, shims, filters, separators and Teflon products. Each item is engineered for durability, precision and complete interchangeability, ensuring seamless compatibility with OEM standards. For clients requiring imported spares, we also manufacture components strictly as per their drawings and specifications, supported by third-party inspection and Material Test Certificates from approved laboratories. Our products are known for their sturdy construction, powerful performance and ease of installation, making them suitable for demanding industrial applications. </p> <p className="text-lg mb-6"> Our manufacturing facility is equipped with advanced machinery and a large-scale production setup that enables high-accuracy machining and efficient bulk manufacturing. Every component is subjected to rigorous, multi-stage quality checks to ensure flawless performance and consistency. Guided by the expertise and vision of our founder, Mr. Mahesh Mour, we have steadily built a strong presence across multiple industries by combining engineering expertise, disciplined processes and a coordinated supply chain. Today, Jai Balaji Enterprises continues to focus on quality, innovation and timely delivery, supplying reliable components that support the critical operations of industries across the country. </p>
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