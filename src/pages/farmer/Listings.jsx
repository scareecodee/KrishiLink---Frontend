import React from 'react';

const Listings = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">My Listings</h1>
        <button className="bg-primary text-white px-4 py-2 rounded font-medium">+ New Listing</button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Crop</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expected Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Wheat (Grade A)</td>
              <td className="px-6 py-4">100 q</td>
              <td className="px-6 py-4">₹2200/q</td>
              <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span></td>
              <td className="px-6 py-4 text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Listings;
