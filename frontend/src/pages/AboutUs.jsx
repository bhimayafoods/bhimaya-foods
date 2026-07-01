import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 md:pt-30 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">About Us</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 animate-fadeIn">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">🌿 Welcome to Bhimaya Foods!</h2>
            <p className="text-gray-700 leading-relaxed">
              At Bhimaya Foods, we are passionate about bringing you fresh, homemade, and natural food products made with care and tradition. From wholesome flours to everyday essentials, we ensure every product is crafted with 100% natural ingredients, with no chemicals, additives, or preservatives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're looking for healthy alternatives or authentic homemade taste, we are here to serve you the best.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">🎯 Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is simple: To provide pure, high-quality, and affordable food products while maintaining the trust of our customers through honesty and consistency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in promoting healthy living by delivering products that are fresh, nutritious, and safe for your family.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <h3 className="font-bold text-lg text-primary mb-2">💚 Why Choose Bhimaya Foods?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✔ 100% Natural Products</li>
                <li>✔ Homemade Quality</li>
                <li>✔ Trusted Ingredients</li>
                <li>✔ Customer First Approach</li>
                <li>✔ Safe & Secure Payments</li>
                <li>✔ Reliable Delivery</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="font-bold text-lg text-secondary mb-2">📖 Our Story</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Founded with a vision to bring authentic homemade food products to every household, Bhimaya Foods started as a small initiative with big dreams. What began as a passion for quality and health has now grown into a trusted brand that customers rely on for pure and traditional food products.
              </p>
            </div>
          </section>

          <section className="text-center pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-4">🤝 Join Our Community</h2>
            <p className="text-gray-700 mb-6">
              Be a part of the Bhimaya Foods family! Follow us for updates, offers, and new product launches.
            </p>
            <p className="font-bold text-secondary">Your support means everything to us 💛</p>
            <p className="font-bold text-primary mt-2">Thank you for choosing Bhimaya Foods!</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
