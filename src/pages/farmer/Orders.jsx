import React from 'react';
import OrderStatusBadge from '../../components/OrderStatusBadge';

const FarmerOrders = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Buyer</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Crop</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">#ORD-1029</td>
              <td className="px-4 py-3">AgriCorp Ltd</td>
              <td className="px-4 py-3">Wheat</td>
              <td className="px-4 py-3">₹2,25,000</td>
              <td className="px-4 py-3"><OrderStatusBadge status="confirmed" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default FarmerOrders;
