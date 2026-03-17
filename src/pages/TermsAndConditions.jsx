import React, { useEffect } from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 md:pt-30 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Terms & Conditions</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 animate-fadeIn">
          <section className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Bhimaya Foods! By accessing or using our website <a href="https://bhimayafoods.in/" className="text-secondary font-bold">https://bhimayafoods.in/</a>, you agree to comply with and be bound by the following Terms & Conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">✅ 1. Acceptance of Terms</h2>
            <p className="text-gray-700">By using our Platform, you confirm that you are at least 18 years old, or using the site under supervision. We may update these Terms at any time.</p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-secondary">🛒 3. Product Information</h2>
              <p className="text-gray-700 text-sm">We strive for accuracy but errors may occur. We reserve the right to cancel orders due to pricing or product errors.</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-secondary">💳 4. Orders & Payment</h2>
              <p className="text-gray-700 text-sm">Your order is an offer. We accept UPI, Cards, and Online gateways. Confirmation will be sent via email or SMS.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">🚚 5. Shipping & Delivery</h2>
            <p className="text-gray-700">Orders are processed quickly. Charges are calculated at checkout. We are not responsible for delays caused by couriers or natural events.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">🧠 7. Intellectual Property</h2>
            <p className="text-gray-700">All content on this website (logo, text, images, designs) belongs to Bhimaya Foods. You may not copy or use any content without permission.</p>
          </section>

          <section className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h2 className="text-xl font-bold text-red-900 mb-2">🚫 8. User Conduct</h2>
            <p className="text-red-800 text-sm">You agree NOT to violate laws, provide false info, upload harmful software, or misuse the website.</p>
          </section>

          <section className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <h2 className="text-xl font-bold text-secondary text-gray-800">⚖️ 11. Governing Law</h2>
            <p>These Terms are governed by the laws of Andhra Pradesh, India. Any disputes will be handled in courts located in Bhimavaram.</p>
          </section>

          <section className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center">
            <p className="font-bold text-primary">Need Clarification?</p>
            <p className="text-gray-600">📧 Email: <a href="mailto:bhimayafoods@gmail.com" className="text-secondary font-bold">bhimayafoods@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
