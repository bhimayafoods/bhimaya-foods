import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ cartCount, hideLinks }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full z-[100] bg-background shadow-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16 md:h-20">
        
        {/* Mobile Menu Button (Left) */}
        {!hideLinks && (
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-primary focus:outline-none p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        )}

        {/* Logo */}
        <div className={`flex items-center h-full ${hideLinks ? 'justify-start' : 'justify-center'} flex-1 lg:flex-none`}>
          <Link to="/" className="h-full flex items-center">
            <img
              src={logo}
              alt="Bhimaya Foods Logo"
              className="h-[100%] md:h-16 lg:h-20 object-contain transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!hideLinks && (
          <nav className="hidden lg:flex space-x-8 font-medium text-gray-800 flex-1 justify-center">
            <Link to="/" className="hover:text-secondary transition">Home</Link>
            <a href="/#products" className="hover:text-secondary transition">Our Products</a>
            <a href="/#about" className="hover:text-secondary transition">Our Story</a>
            <Link to="/contact-us" className="hover:text-secondary transition">Contact Us</Link>
            <Link to="/track-order" className="hover:text-secondary transition font-semibold text-orange-600">Track Order</Link>
          </nav>
        )}

        {/* Cart Button */}
        <div className="flex items-center">
          <Link
            to="/cart"
            className="relative cursor-pointer p-2 sm:p-3 rounded-full hover:scale-105 transition flex items-center justify-center bg-primary text-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {!hideLinks && isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-inner absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-orange-50 transition">Home</Link>
            <a href="/#products" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-orange-50 transition">Our Products</a>
            <a href="/#about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-orange-50 transition">Our Story</a>
            <Link to="/contact-us" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-orange-50 transition">Contact Us</Link>
            <Link to="/track-order" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-bold text-orange-600 hover:bg-orange-50 transition">Track Order</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
