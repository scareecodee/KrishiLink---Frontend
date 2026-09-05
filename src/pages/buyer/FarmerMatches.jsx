import React from 'react';
import FarmerCard from '../../components/FarmerCard';

const FarmerMatchesBuyer = () => {
  const matches = [
    { id: 1, farmerName: 'Ramesh Kumar', score: 88, location: 'Sonipat', distance: 30, crop: 'Wheat', quantity: 50, price: 2150 },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Farmer Matches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map(m => <FarmerCard key={m.id} match={m} onCreateOrder={() => alert('Order init')} />)}
      </div>
    </div>
  );
};
export default FarmerMatchesBuyer;
