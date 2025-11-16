import Button from './ui/Button';

const products = [
  { name: 'Compressor Parts', desc: 'Precision rings, pistons, valves and seals.' },
  { name: 'Heat Exchangers', desc: 'Air and water-cooled cooling solutions.' },
  { name: 'PTFE Components', desc: 'Custom seals, gaskets and guide rings.' },
  { name: 'Pneumatic Fittings', desc: 'Connectors, elbows, FRLs and tubes.' },
  { name: 'Hydraulic Spares', desc: 'Engineered rollers, pumps and spares.' },
  { name: 'CNG Compressor Spares', desc: 'Parts for booster and dispenser units.' },
];


export default function ProductsShowcase() {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.desc}</p>
              <Button>Get Free Quote</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}