import React from 'react';
import PriceChart from '../../components/PriceChart';

const MarketPrices = () => {
  const chartData = [
    { date: '1 Sep', price: 2100, predicted: 2100 },
    { date: '2 Sep', price: 2150, predicted: 2140 },
    { date: '3 Sep', price: 2180, predicted: 2190 },
    { date: '4 Sep', price: 2170, predicted: 2200 },
    { date: '5 Sep', price: null, predicted: 2250 },
    { date: '6 Sep', price: null, predicted: 2280 },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Market Prices</h1>
      <PriceChart data={chartData} title="Wheat Price Trend & Prediction (₹/q)" showPrediction={true} />
    </div>
  );
};
export default MarketPrices;
