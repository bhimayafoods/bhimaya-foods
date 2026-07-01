import React, { useEffect } from 'react';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 md:pt-30 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center text-balance leading-tight">Return, Cancellation & Refund Policy</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 animate-fadeIn">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary flex items-center gap-2">🟢 Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              At Bhimaya Foods, we are committed to delivering fresh, high-quality, and natural food products. Due to the nature of food items, we follow strict quality checks. However, if you receive a damaged, defective, or incorrect product, please contact our support team.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 space-y-3">
              <h2 className="text-xl font-bold text-red-900">❌ Cancellation</h2>
              <p className="text-red-800 text-sm">Orders can be cancelled <strong>before they are shipped</strong>. Once cancellation is confirmed, the refund will be initiated within 2–3 business days.</p>
              <p className="text-xs text-red-600 font-bold">⚠️ Orders cannot be cancelled once shipped.</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 space-y-3">
              <h2 className="text-xl font-bold text-orange-900">🔄 Returns</h2>
              <p className="text-orange-800 text-sm">Due to hygiene reasons, we only accept returns for <strong>wrong products</strong> or <strong>damaged/defective</strong> items within 7 days of delivery.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">📌 Return Conditions</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li className="bg-gray-50 p-4 rounded border border-gray-100">✅ Must be within 7 days</li>
              <li className="bg-gray-50 p-4 rounded border border-gray-100">✅ Unused & original packaging</li>
              <li className="bg-gray-50 p-4 rounded border border-gray-100">✅ Provide invoice & product images</li>
              <li className="bg-gray-50 p-4 rounded border border-gray-100">✅ Verification by our team required</li>
            </ul>
          </section>

          <section className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h2 className="text-xl font-bold text-green-900 mb-2">💰 Refund Process</h2>
            <p className="text-green-800 text-sm leading-relaxed">
              Approved refunds are processed within <strong>5–7 business days</strong> to your original payment method. In some cases, it may take up to 10 days depending on your bank.
            </p>
          </section>

          <section className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center">
            <p className="font-bold text-primary">Need Help with Returns?</p>
            <p className="text-gray-600">📧 Email: <a href="mailto:bhimayafoods@gmail.com" className="text-secondary font-bold">bhimayafoods@gmail.com</a></p>
            <p className="text-xs text-gray-500 mt-4 italic">Bhimaya Foods reserves the right to update this policy at any time without prior notice.</p>
          </section>

          <section className="text-center pt-8 border-t border-gray-100">
            <p className="font-bold text-secondary text-xl font-handwriting italic">Thank You for trusting Bhimaya Foods 💛</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
