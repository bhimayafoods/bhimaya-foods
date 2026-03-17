import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({
  cart,
  products,
  total,
  delivery,
  finalTotal,
  freeDeliveryLimit,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  checkout
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isItemOutOfStock = (item) => {
    const liveProduct = products?.find(p => p.id === item.id);
    return (
      liveProduct?.quantity?.toLowerCase().includes('out of stock') ||
      liveProduct?.description?.toLowerCase().includes('out of stock') ||
      liveProduct?.quantity === '0'
    );
  };

  if (cart.length === 0) {
    return (
      <div className="pt-28 md:pt-36 pb-16 min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full border border-gray-200">
          <img 
            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/empty-cart_ee6141.png" 
            alt="Empty Cart" 
            className="w-48 mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty!</h2>
          <p className="text-gray-500 mb-6">Add items to it now.</p>
          <Link 
            to="/#products" 
            className="inline-block bg-primary text-white font-bold px-8 py-3 rounded shadow-md hover:bg-orange-700 transition active:scale-95"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-16 min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          
          {/* LEFT COLUMN: Cart Items */}
          <div className="w-full lg:w-[68%] space-y-4">
            
            {/* Items List */}
            <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-200">
              {cart.map((item) => {
                const outOfStock = isItemOutOfStock(item);
                const itemTotal = item.price * item.quantity;

                return (
                  <div key={item.cartItemId} className={`p-4 md:p-6 border-b last:border-b-0 flex flex-row gap-4 md:gap-6 ${outOfStock ? 'opacity-70 bg-gray-50' : ''}`}>
                    
                    {/* Item Image & Qty Control */}
                    <div className="flex flex-col items-center gap-4 min-w-[110px] md:min-w-[120px]">
                      <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center p-2 border border-gray-100 rounded bg-white">
                         <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      
                      {/* Qty Selector */}
                      <div className="flex items-center">
                        <button 
                          onClick={() => decreaseQuantity(item.cartItemId)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition text-lg"
                        >
                          -
                        </button>
                        <div className="w-10 text-center font-bold px-2 py-1 mx-1 border border-gray-200 bg-white">
                          {item.quantity}
                        </div>
                        <button 
                          onClick={() => !outOfStock && increaseQuantity(item.cartItemId)}
                          disabled={outOfStock}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition text-lg ${outOfStock ? 'border-gray-200 text-gray-300' : 'border-gray-300 hover:bg-gray-100'}`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                           <h3 className="text-lg font-medium text-gray-900 leading-tight">
                             {item.name} ({item.weight})
                           </h3>
                           <p className="text-sm text-gray-500 mt-1">{item.category || "Sweets & Snacks"}</p>
                        </div>
                      </div>

                      {/* Pricing Info */}
                      <div className="mt-2">
                        <span className="text-xl font-bold text-gray-900">₹{itemTotal}</span>
                      </div>
                      
                      {outOfStock && <p className="text-red-600 font-bold text-sm mt-1">⚠️ Item currently out of stock</p>}
                      
                      {/* Action Buttons */}
                      <div className="flex gap-6 mt-6">
                        {/* <button className="text-gray-800 font-bold text-sm uppercase hover:text-primary transition">Save for later</button> */}
                        <button 
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-gray-800 font-bold text-sm uppercase hover:text-red-600 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              

              
            </div>
          </div>

          {/* RIGHT COLUMN: Price Details Sidebar */}
          <div className="w-full lg:w-[32%] space-y-4">
             <div className="bg-white rounded shadow-sm border border-gray-200">
                <div className="p-4 border-b">
                   <h3 className="text-gray-500 font-bold uppercase text-sm tracking-wide">Price Details</h3>
                </div>
                
                <div className="p-4 space-y-4 text-gray-800">
                  <div className="flex justify-between">
                    <span>Price ({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
                    <span>₹{total}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Delivery Charges</span>
                    <span className={delivery === 0 ? "text-green-600 font-medium" : ""}>
                      {delivery === 0 ? "FREE" : `₹${delivery}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-dashed pt-4 font-bold text-lg text-gray-900 mt-2">
                    <span>Total Amount</span>
                    <span>₹{finalTotal}</span>
                  </div>
                </div>
             </div>

             {/* Desktop Place Order Button Area */}
             <div className="hidden md:block bg-white p-4 rounded shadow-sm border border-gray-200">
                <button 
                   onClick={checkout}
                   className="w-full bg-[#fb641b] text-white py-3 rounded font-bold uppercase shadow-lg hover:shadow-xl transition active:scale-95"
                >
                   Place Order
                </button>
             </div>
             {/* Bottom Sticky CTA (Mobile Only) */}
              <div className="md:hidden sticky bottom-0 bg-white border-t p-4 flex justify-between items-center z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
                  <div>
                    <p className="text-lg font-bold">₹{finalTotal}</p>
                  </div>
                  <button 
                    onClick={checkout}
                    className="bg-[#fb641b] text-white px-8 py-3 rounded font-bold uppercase shadow-lg active:scale-95"
                  >
                    Place Order
                  </button>
              </div>
             <div className="flex items-start gap-3 text-gray-500 text-xs font-bold uppercase mt-2 px-1">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14.5l-3.5-3.5 1.41-1.41L11 13.09l4.59-4.59L17 9.91l-6 6z" />
                </svg>
                <p className="leading-tight">Safe and Secure Payments. 100% Authentic products.</p>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CartPage;
