import React from 'react';
import BuyerCard from '../../components/BuyerCard';

const BuyerMatches = () => {
  const matches = [
    { id: 1, buyerName: 'AgriCorp Ltd', score: 95, location: 'Delhi', distance: 45, crop: 'Wheat', quantity: 100, price: 2250 },
    { id: 2, buyerName: 'FreshFoods', score: 82, location: 'Gurgaon', distance: 60, crop: 'Wheat', quantity: 50, price: 2200 },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Buyer Matches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map(m => <BuyerCard key={m.id} match={m} onAccept={() => alert('Accepted!')} />)}
      </div>
    </div>
  );
};
export default BuyerMatches;
