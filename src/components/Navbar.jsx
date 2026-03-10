import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Navbar({ cartCount, openCart, hasBanner }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-background shadow-md"
          : "bg-background/90"
        } ${hasBanner ? "top-[40px] md:top-[44px]" : "top-0"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 md:h-20">

        {/* Logo */}
        <div className="flex items-center h-full">
          <img
            src={logo}
            alt="Bhimaya Foods Logo"
            className="h-[100%] md:h-16 lg:h-20 object-contain transition-all duration-300"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-8 font-medium">
          <a href="#home" className="hover:text-secondary transition">
            Home
          </a>
          <a href="#products" className="hover:text-secondary transition">
            Our Products
          </a>
          <a href="#about" className="hover:text-secondary transition">
            Our Story
          </a>
          <a href="#contact" className="hover:text-secondary transition">
            Contact
          </a>
        </nav>

        {/* Cart Button */}
        {/* <button
          onClick={openCart}
          className="relative bg-primary text-white p-3 rounded-full hover:scale-105 transition mt-[5px]"
        >
          🛒
          <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        </button> */}
        <div
          onClick={openCart}
          className="relative cursor-pointer bg-primary text-white p-3 rounded-full hover:scale-105 transition mt-[5px] flex items-center justify-center"
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
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>

          <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
            {cartCount}
          </span>
        </div>


      </div>
    </header>
  );
}

export default Navbar;
