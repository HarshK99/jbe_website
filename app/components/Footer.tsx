import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-center">
          <div className="space-y-2 text-center max-w-lg">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm flex items-start justify-center gap-3">
              <span className="flex-shrink-0 mt-1">
                <FaMapMarkerAlt className="w-5 h-5 text-gray-300" aria-hidden />
              </span>
              <span className="text-left max-w-[36ch]">G-10, PB Complex, AT Road, Opp. Rupasree Cinema Hall, Guwahati – 781001, Assam</span>
            </p>
            <p className="text-sm flex items-center justify-center gap-2">
              <FaPhone className="w-5 h-5 text-gray-300" aria-hidden />
              <a href="tel:+919954051247" className="hover:underline">+91-99540-51247</a>
            </p>
            <p className="text-sm flex items-center justify-center gap-2">
              <FaEnvelope className="w-5 h-5 text-gray-300" aria-hidden />
              <a href="mailto:jaibalajient@gmail.com" className="underline hover:text-gray-300">jaibalajient@gmail.com</a>
            </p>
            <p className="text-sm flex items-center justify-center gap-2">
              <FaWhatsapp className="w-5 h-5 text-gray-300" aria-hidden />
              <a href="https://wa.me/919954051247" className="hover:underline">WhatsApp: +91-99540-51247</a>
            </p>
          </div>

          
          

        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div>© {new Date().getFullYear()} JBE Manufacturing. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}