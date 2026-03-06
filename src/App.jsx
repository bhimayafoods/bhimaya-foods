import { useState, useEffect } from "react";
import { PRODUCTS } from "./data/products";
import TopRibbon from "./components/TopRibbon";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Ribbon from "./components/Ribbon";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Loader from "./components/Loader";
import Offline from "./components/Offline";

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const WHATSAPP_NUMBER = "919290676791";

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setIsCartOpen(true);
  };

  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decreaseQuantity = (id) => {
    const item = cart.find(i => i.id === id);

    if (item.quantity === 1) {
      setCart(cart.filter(i => i.id !== id));
    } else {
      setCart(cart.map(i =>
        i.id === id
          ? { ...i, quantity: i.quantity - 1 }
          : i
      ));
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const DELIVERY_CHARGE = 50;
  const FREE_LIMIT = 499;

  const delivery = total >= FREE_LIMIT ? 0 : DELIVERY_CHARGE;
  const finalTotal = total + delivery;
  const checkout = () => {
    if (cart.length === 0) return alert("Cart is empty!");

    let message = `*Order from Bhimaya Foods*%0A%0A`;

    cart.forEach(item => {
      message += `• ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}%0A`;
    });

    message += `%0A*Total: ₹${total}*`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 0.8 second smooth loading

    return () => clearTimeout(timer);
  }, []);
  if (!isOnline) {
    return <Offline />;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <Hero />
      <TopRibbon/>
      <Products
        products={PRODUCTS}
        cart={cart}
        addToCart={addToCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <Ribbon />
      <About />
      <Footer />
      <Cart
        cart={cart}
        total={total}
        delivery={delivery}
        finalTotal={finalTotal}
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        checkout={checkout}
      />
    </>
  );
}

export default App;