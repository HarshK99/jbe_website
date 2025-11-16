import Button from './ui/Button';

const products = [
  { name: 'Compressor Valves for Air/Gas Compressors', desc: 'OEM-equivalent valves with full interchangeability', imageBase: '1' },
  { name: 'Compressor Filters for Air/Gas/Screw Compressors', desc: 'Filtration solutions for cleaner system operation', imageBase: '2' },
  { name: 'Shell and Tube Heat Exchangers for Air/Gas Compressors', desc: 'Air/gas shell & tube exchangers', imageBase: '3' },
  { name: 'Compressor Piston Rod and Shafts for Air/Gas Compressors', desc: 'Durable piston rods and shafts', imageBase: '4' },
  { name: 'Compressor Packing Rings for Air/Gas Compressors', desc: 'High-performance packing rings', imageBase: '5' },
  { name: 'Compressor Piston Assembly for Air/Gas Compressors', desc: 'Complete piston assemblies', imageBase: '6' },
  { name: 'Compressor Valve Plate Metallic and Non-Metallic for Air/Gas Compressors', desc: 'Valve plates (metallic & non-metallic)', imageBase: '7' },
  { name: 'Compressor Piston Rings for Lubricated and Non-Lubricated Compressors', desc: 'Piston rings for all compressor types', imageBase: '8' },
  { name: 'Compressor PTFE Spares for Air/Gas Compressors', desc: 'PTFE spare parts and components', imageBase: '9' }
];


export default function ProductsShowcase() {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col">
              <div className="w-full h-44 bg-gray-100 rounded overflow-hidden mb-4">
                <picture>
                  <source srcSet={`/products/${product.imageBase}.jpg`} type="image/jpeg" />
                  <img
                    src={`/products/${product.imageBase}.svg`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.desc}</p>
              </div>
              <div className="mt-2">
                <Button href="#enquiry">Get Quote</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}