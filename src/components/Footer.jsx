import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* LEFT */}
        <div className="md:justify-self-start">
          <h4 className="font-semibold mb-4">Reach Us</h4>
          <p>Email: <a href="mailto:bhimayafoods@gmail.com" className="hover:text-secondary transition">bhimayafoods@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/919493023030" className="hover:text-secondary transition">+91 9493023030</a></p>
          <p>Address: Tippanagunta Krishna(dist) Andhra Pradesh</p>
          <p>FSSAI No : 20126121000164</p>
        </div>

        {/* CENTER */}
        <div className="md:justify-self-center">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <Link to="/" className="block hover:text-secondary">Home</Link>
          <a href="/#products" className="block hover:text-secondary">Products</a>
          <Link to="/about-us" className="block hover:text-secondary">About Us</Link>
        </div>

        {/* RIGHT */}
        <div className="md:justify-self-end">
          <h4 className="font-semibold mb-4">Legal Policies</h4>
          <Link to="/about-us" className="block hover:text-secondary">About Us</Link> 
          <Link to="/contact-us" className="block hover:text-secondary">Contact Us</Link> 
          <Link to="/privacy-policy" className="block hover:text-secondary">Privacy Policy</Link>
          <Link to="/terms-conditions" className="block hover:text-secondary">Terms & Conditions</Link>
          <Link to="/shipping-policy" className="block hover:text-secondary">Shipping Policy</Link>
          <Link to="/refund-policy" className="block hover:text-secondary">Refund & Return</Link>
        </div>

      </div>

      <div className="text-center mt-10 text-sm opacity-70 space-y-2">
        <p>© 2026 Bhimaya Foods. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;