"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            {/* smaller logo on mobile, larger on md+ */}
            <Image src="/logo.png" alt="Company Logo" width={64} height={64} className="md:hidden" />
            <Image src="/logo.png" alt="Company Logo" width={96} height={96} className="hidden md:block" />
            <div className="block">
              <span className="text-base md:text-2xl font-bold text-gray-900">Jai Balaji <span className="block md:inline">Enterprises</span></span>
              {/* <div className="text-xs text-gray-600">Compressors · Heat Exchangers · Spares</div> */}
            </div>
          </Link>
        </div>
        <HeaderNav />
      </div>
    </header>
  );
}

function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <nav className="hidden md:flex space-x-6">
        <Link href="#about" className="text-gray-700 hover:text-primary">About Us</Link>
        <Link href="#products" className="text-gray-700 hover:text-primary">Products</Link>
        <Link href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">Brochure</Link>
      </nav>

      {/* Desktop CTA: visible on md+ only */}
      <div className="hidden md:flex md:items-center">
        <Button href="#enquiry" size="md" className="md:inline-flex">Request Quote</Button>
      </div>

      {/* Mobile: hamburger (moved to far right) */}
      <div className="flex items-center md:hidden ml-auto">
        <button
          onClick={() => setOpen(s => !s)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="p-2 rounded hover:bg-gray-100"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`absolute left-0 right-0 top-full bg-white shadow-md md:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="p-4 border-t">
          <nav className="flex flex-col space-y-2">
            <Link href="#about" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-gray-50">About Us</Link>
            <Link href="#products" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-gray-50">Products</Link>
            <Link href="/brochure.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-gray-50">Brochure</Link>
            <Link href="#enquiry" onClick={() => setOpen(false)} className="px-2 py-2 rounded bg-primary text-white text-center">Request Quote</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}