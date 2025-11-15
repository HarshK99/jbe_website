import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Company Logo" width={40} height={40} />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-gray-700 hover:text-primary">About Us</Link>
          <Link href="#products" className="text-gray-700 hover:text-primary">Products</Link>
          <Link href="#facilities" className="text-gray-700 hover:text-primary">Facilities</Link>
          <Link href="#news" className="text-gray-700 hover:text-primary">News & Events</Link>
          <Link href="#downloads" className="text-gray-700 hover:text-primary">Downloads</Link>
          <Link href="#enquiry" className="text-gray-700 hover:text-primary">Enquiry</Link>
          <Link href="#join" className="text-gray-700 hover:text-primary">Join Us</Link>
        </nav>
        <Button>Request Free Quote</Button>
      </div>
    </header>
  );
}