export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Address: G-10, PB Complex, AT Road, Opp. Rupasree Cinema Hall, Guwahati – 781001, Assam</p>
            <p>Phone: +91-99540-51247</p>
            <p>Email: jaibalajient@gmail.com</p>
            <p>WhatsApp: +91-99540-51247</p>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Departments</h3>
            <p>Sales</p>
            <p>Service</p>
            <p>Purchase</p>
            <p>HR</p>
          </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <a href="#" className="block hover:underline">Privacy Policy</a>
            <a href="#" className="block hover:underline">Terms & Conditions</a>
            {/* <a href="#" className="block hover:underline">Sitemap</a> */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p>Social Media Links</p>
          </div>
        </div>
      </div>
    </footer>
  );
}