import React from 'react';
import StatsCard from '../../components/StatsCard';

const BuyerDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Buyer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard title="Active Requirements" value="2" />
        <StatsCard title="Pending Orders" value="4" />
        <StatsCard title="Total Spend" value="₹12.5L" />
        <StatsCard title="Connected Farmers" value="15" />
      </div>
    </div>
  );
};
export default BuyerDashboard;
