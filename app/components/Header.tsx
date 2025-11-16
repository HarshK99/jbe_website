import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Company Logo" width={80} height={80} />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-gray-700 hover:text-primary">About Us</Link>
          <Link href="#products" className="text-gray-700 hover:text-primary">Products</Link>
          <Link href="#enquiry" className="text-gray-700 hover:text-primary">Enquiry</Link>
          <Link href="#join" className="text-gray-700 hover:text-primary">Join Us</Link>
        </nav>
        <Button href="#enquiry">Request Free Quote</Button>
      </div>
    </header>
  );
}