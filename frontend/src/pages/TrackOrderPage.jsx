import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';

const TrackOrderPage = () => {
    const [phone, setPhone] = useState('');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!phone || phone.length < 10) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        setLoading(true);
        setSearched(true);
        try {
            // Add +91 prefix if user didn't enter it, since we save with +91 in Firebase
            let formattedPhone = phone.trim();
            if (!formattedPhone.startsWith('+91')) {
                formattedPhone = `+91${formattedPhone}`;
            }

            const ordersRef = collection(db, "orders");
            // Note: Cannot use orderBy with 'where' on a different field without a composite index. 
            // So we'll fetch them and sort in JavaScript.
            const q = query(ordersRef, where("customerPhone", "==", formattedPhone));
            
            const querySnapshot = await getDocs(q);
            const fetchedOrders = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // Sort by createdAt descending (newest first)
            fetchedOrders.sort((a, b) => {
                const dateA = a.createdAt?.toDate() || new Date(0);
                const dateB = b.createdAt?.toDate() || new Date(0);
                return dateB - dateA;
            });

            setOrders(fetchedOrders);
        } catch (error) {
            console.error("Error fetching orders:", error);
            alert("Could not fetch orders. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Processing': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Packed': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
            case 'Shipped': return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'Delivered': return 'bg-green-100 text-green-800 border-green-200';
            case 'Rejected': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8 border border-gray-100">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Track Your Orders</h1>
                    <p className="text-gray-600 mb-6">Enter the phone number you used during checkout to see your order history.</p>

                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/[^0-9+\s]/g, ''))}
                            placeholder="Enter mobile number (e.g., 9876543210)"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300 disabled:opacity-70 whitespace-nowrap"
                        >
                            {loading ? 'Searching...' : 'Find Orders'}
                        </button>
                    </form>
                </div>

                {searched && !loading && (
                    <div className="space-y-6">
                        {orders.length === 0 ? (
                            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
                                <p className="text-gray-500 text-lg">No orders found for this mobile number.</p>
                                <p className="text-gray-400 text-sm mt-2">Make sure you entered the exact number used during checkout.</p>
                            </div>
                        ) : (
                            orders.map(order => (
                                <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="border-b border-gray-100 bg-gray-50 p-4 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Order ID</p>
                                            <p className="font-bold text-gray-900">{order.orderID || order.id}</p>
                                        </div>
                                        <div className="text-left sm:text-right">
                                            <p className="text-sm text-gray-500">Order Date</p>
                                            <p className="font-semibold text-gray-700">
                                                {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleDateString('en-IN', {
                                                    day: 'numeric', month: 'short', year: 'numeric'
                                                }) : 'N/A'}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="p-4 sm:p-6">
                                        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                                            <div>
                                                <span className={`inline-flex px-3 py-1 text-sm font-bold rounded-full border ${getStatusColor(order.status)}`}>
                                                    {order.status || 'Pending'}
                                                </span>
                                            </div>
                                            <div className="text-left sm:text-right">
                                                <p className="text-sm text-gray-500">Total Amount</p>
                                                <p className="text-xl font-extrabold text-orange-600">₹{order.totalAmount}</p>
                                                <p className="text-xs text-gray-400 mt-1">Via {order.paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery'}</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-xl p-4 mb-4">
                                            <h4 className="text-sm font-bold text-gray-700 mb-3 border-b pb-2">Order Items</h4>
                                            <ul className="space-y-2">
                                                {order.items?.map((item, idx) => (
                                                    <li key={idx} className="flex justify-between text-sm">
                                                        <span className="text-gray-800">{item.quantity}x {item.name} {item.weight ? `(${item.weight})` : ''}</span>
                                                        <span className="text-gray-600 font-medium">₹{item.price * item.quantity}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {order.status === 'Shipped' && order.shiprocketOrderId && (
                                            <div className="mt-6 flex justify-end">
                                                <a 
                                                    href={`https://bhimayafoods.shiprocket.co/tracking/${order.shiprocketOrderId}`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                                                >
                                                    Track Shipment
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackOrderPage;
