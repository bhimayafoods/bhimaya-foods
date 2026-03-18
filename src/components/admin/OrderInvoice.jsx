import React from 'react';
import logo from '../../assets/logo.png';

const OrderInvoice = ({ order }) => {
  if (!order) return null;

  const formatDate = (date) => {
    if (!date) return new Date().toLocaleDateString();
    if (date.seconds) return new Date(date.seconds * 1000).toLocaleDateString();
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="invoice-container p-8 bg-white text-black font-serif print:block" id="invoice-to-print">
      {/* Header Section */}
      <div className="flex justify-between items-start border-b border-gray-300 pb-4 mb-6">
        <div className="flex flex-col items-center">
             <img src={logo} alt="Bhimaya Foods" className="h-16 object-contain mb-2" />
        </div>
        <div className="text-right">
          <h1 className="text-3xl font-bold uppercase tracking-widest text-gray-700">Tax Invoice</h1>
        </div>
      </div>

      {/* Addresses Section */}
      <div className="grid grid-cols-3 gap-6 mb-8 text-sm">
        <div>
          <h2 className="font-bold border-b border-gray-400 mb-2 pb-1">SHIPPING ADDRESS:</h2>
          <p className="font-semibold">{order.customerName}</p>
          <p className="whitespace-pre-wrap">{order.customerAddress}</p>
          <p>{order.customerCity} {order.customerPincode}</p>
          <p>{order.customerState}</p>
          <p>India</p>
          <p className="mt-1 font-semibold">State Code: 37</p>
        </div>

        <div>
          <h2 className="font-bold border-b border-gray-400 mb-2 pb-1">SOLD BY:</h2>
          <p className="font-semibold text-base">Bhimaya Foods</p>
          <p>3-34 tippanagunta</p>
          <p>Near icm school</p>
          <p>Krishna 521106</p>
          <p>Andhra Pradesh</p>
          <p>India</p>
          <p className="mt-1 font-semibold">State Code: 37</p>
          <p>Ph: 9493023030</p>
          <p className="text-[10px]">Website: https://bhimayafoods.in/</p>
          <p className="text-[10px]">Email: bhimayafoods@gmail.com</p>
        </div>

        <div>
          <h2 className="font-bold border-b border-gray-400 mb-2 pb-1">INVOICE DETAILS:</h2>
          <div className="grid grid-cols-2 gap-x-2">
            <span className="font-bold">INVOICE NO.</span>
            <span>: Retail{String(order.id).slice(-5).toUpperCase()}</span>
            
            <span className="font-bold">INVOICE DATE</span>
            <span>: {formatDate(new Date())}</span>
            
            <span className="font-bold">ORDER NO.</span>
            <span>: {order.orderID || 'N/A'}</span>
            
            <span className="font-bold">ORDER DATE</span>
            <span>: {formatDate(order.createdAt)}</span>
            
            <span className="font-bold">CHANNEL</span>
            <span>: CUSTOM ({order.orderID})</span>
            
            <span className="font-bold">SHIPPED BY</span>
            <span>: {order.shipping_channel || ''}</span>
            
            <span className="font-bold">AWB NO.</span>
            <span>: {order.awbNumber || ''}</span>
            
            <span className="font-bold">PAYMENT</span>
            <span>: </span>
            
            <span className="font-bold">METHOD</span>
            <span className="capitalize">: {order.paymentMethod || 'online'}</span>
            
            <span className="font-bold">REMARK</span>
            <span>: {order.status === 'Processing' ? 'New Order' : 'Order processed'}</span>
          </div>
        </div>
      </div>

      {/* Product Table */}
      <table className="w-full border-collapse border border-gray-400 text-[11px] mb-8">
        <thead>
          <tr className="bg-gray-50 uppercase font-bold text-center border-b border-gray-400">
            <th className="border-r border-gray-400 p-1 w-10">S.No.</th>
            <th className="border-r border-gray-400 p-1 text-left">Product Name</th>
            <th className="border-r border-gray-400 p-1 w-14">HSN</th>
            <th className="border-r border-gray-400 p-1 w-12">QTY</th>
            <th className="border-r border-gray-400 p-1 w-20">Unit Price</th>
            <th className="border-r border-gray-400 p-1 w-20">Discount</th>
            <th className="border-r border-gray-400 p-1 w-20">Taxable</th>
            <th className="border-r border-gray-400 p-1 w-24">CGST</th>
            <th className="border-r border-gray-400 p-1 w-24">SGST</th>
            <th className="p-1 w-20">Total</th>
          </tr>
        </thead>
        <tbody>
          {order.items?.map((item, index) => (
            <tr key={index} className="border-b border-gray-300 text-center">
              <td className="border-r border-gray-400 p-1">{index + 1}</td>
              <td className="border-r border-gray-400 p-1 text-left font-bold">
                {item.name}
                <div className="text-[10px] font-normal text-gray-500">Weight: {item.weight}</div>
              </td>
              <td className="border-r border-gray-400 p-1"></td>
              <td className="border-r border-gray-400 p-1">{item.quantity}</td>
              <td className="border-r border-gray-400 p-1">Rs. {(item.price / item.quantity).toFixed(2)}</td>
              <td className="border-r border-gray-400 p-1">0.00</td>
              <td className="border-r border-gray-400 p-1">{(item.price).toFixed(2)}</td>
              <td className="border-r border-gray-400 p-1">0.00 | 0.00</td>
              <td className="border-r border-gray-400 p-1">0.00 | 0.00</td>
              <td className="p-1">{(item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals Section */}
      <div className="flex justify-end mb-8">
        <div className="w-1/2">
          <div className="flex justify-between items-center text-xl font-bold border-t-2 border-gray-800 pt-2">
            <span>NET TOTAL (In Value)</span>
            <span>Rs. {order.totalAmount || order.total}.00</span>
          </div>
          <div className="text-right text-xs mt-4 italic">
            Whether tax is payable under reverse charge - No
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <div className="mt-12">
        <div className="w-48 h-20 border border-gray-400 mb-2"></div>
        <p className="font-bold text-sm">Authorized Signature for</p>
        <p className="font-bold text-sm">Bhimaya Foods</p>
      </div>

      {/* Footer / Disclaimer */}
      <div className="mt-20 text-[10px] text-gray-500 text-center border-t pt-2">
        This is a computer-generated invoice and does not require a physical signature.
      </div>
    </div>
  );
};

export default OrderInvoice;
