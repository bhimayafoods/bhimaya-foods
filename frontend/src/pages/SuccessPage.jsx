import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SuccessPage = () => {
    const { orderId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whatsappNumber = "+919441207547";
    const whatsappMessage = `Hi Bhimaya Foods, I need support regarding my order ${orderId}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="min-h-screen bg-orange-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Thank you for your order!</h1>
                <p className="text-gray-600 mb-6">Your delicious traditional snacks are being prepared.</p>
                
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-8">
                    <p className="text-sm text-gray-500 mb-1">Your Order ID</p>
                    <p className="text-2xl font-bold text-orange-600 tracking-wide">{orderId}</p>
                </div>

                <div className="space-y-3">
                    <Link to="/track-order" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300">
                        Track My Order
                    </Link>
                    
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition duration-300 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                        </svg>
                        Message us on WhatsApp
                    </a>

                    <Link to="/" className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl transition duration-300 mt-2">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
