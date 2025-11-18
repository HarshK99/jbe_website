import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const PHONE_NUMBERS = ['+91-8486417553','+91-99540-51267']; // update the second number as needed

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-center">
          <div className="space-y-2 text-center max-w-lg">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm flex items-start justify-center gap-3">
              <span className="flex-shrink-0 mt-1">
                <FaMapMarkerAlt className="w-5 h-5 text-gray-300" aria-hidden />
              </span>
              <span className="text-left max-w-[36ch]">501, PB Complex, AT Road, Opp. Rupasree Cinema Hall, Guwahati – 781001, Assam</span>
            </p>
            <div className="text-sm flex flex-col items-center justify-center gap-2">
              {PHONE_NUMBERS.map((p, i) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-2 hover:underline"
                  aria-label={`Call ${p}`}
                >
                  <FaPhone className="w-5 h-5 text-gray-300" aria-hidden />
                  <span>{p}</span>
                </a>
              ))}
            </div>
            <p className="text-sm flex items-center justify-center gap-2">
              <a href="mailto:jaibalajient@gmail.com" className="flex items-center gap-2 underline hover:text-gray-300" aria-label="Email jaibalajient@gmail.com">
                <FaEnvelope className="w-5 h-5 text-gray-300" aria-hidden />
                <span>jaibalajient@gmail.com</span>
              </a>
            </p>
            <p className="text-sm flex items-center justify-center gap-2">
              <a href="https://wa.me/919954051247" className="flex items-center gap-2 hover:underline" aria-label="WhatsApp chat">
                <FaWhatsapp className="w-5 h-5 text-gray-300" aria-hidden />
                <span>WhatsApp: +91-99540-51247</span>
              </a>
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