import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Company Logo" width={64} height={64} />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-gray-900">Jai Balaji Enterprises</span>
              {/* <div className="text-xs text-gray-600">Compressors · Heat Exchangers · Spares</div> */}
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-gray-700 hover:text-primary">About Us</Link>
          <Link href="#products" className="text-gray-700 hover:text-primary">Products</Link>
          <Link href="#enquiry" className="text-gray-700 hover:text-primary">Enquiry</Link>
        </nav>
        <Button href="#enquiry">Request Quote</Button>
      </div>
    </header>
  );
}