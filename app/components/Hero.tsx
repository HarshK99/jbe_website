import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background video (if available) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-sample.svg"
      >
        <source src="/hero-sample.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Leading compressor parts and heat exchanger manufacturers in India
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Powering industries with precision engineering and reliable performance
          </p>
          <Button href="#enquiry" variant="secondary" size="lg" className="bg-primary text-white hover:bg-gray-100">
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}