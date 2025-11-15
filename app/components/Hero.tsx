import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Best Industrial Air Compressor Manufacturers in Ahmedabad, India
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Enhancing performance... Enhancing Business
        </p>
        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
          Get Free Quote
        </Button>
      </div>
    </section>
  );
}