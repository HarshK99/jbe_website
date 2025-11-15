export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Address: Ahmedabad, India</p>
            <p>Phone: +91-XXX-XXXXXXX</p>
            <p>Email: info@company.com</p>
            <p>WhatsApp: +91-XXX-XXXXXXX</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Departments</h3>
            <p>Sales</p>
            <p>Service</p>
            <p>Purchase</p>
            <p>HR</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <a href="#" className="block hover:underline">Privacy Policy</a>
            <a href="#" className="block hover:underline">Terms & Conditions</a>
            <a href="#" className="block hover:underline">Sitemap</a>
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