const FarmerCard = ({ match, onCreateOrder }) => {
  const scoreColor = match.score > 80 ? 'bg-green-100 text-green-800' : match.score > 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800';
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-lg">{match.farmerName}</h4>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${scoreColor}`}>{match.score}% Match</span>
      </div>
      <p className="text-sm text-gray-500 mb-4">{match.location} • {match.distance} km away</p>
      <div className="mb-4">
        <p><span className="text-gray-500">Crop:</span> {match.crop}</p>
        <p><span className="text-gray-500">Qty Available:</span> {match.quantity} quintals</p>
        <p><span className="text-gray-500">Asking Price:</span> ₹{match.price}/q</p>
      </div>
      <div className="flex space-x-2">
        <button className="flex-1 bg-white border border-primary text-primary py-2 rounded font-medium hover:bg-green-50">Contact</button>
        <button onClick={() => onCreateOrder(match)} className="flex-1 bg-primary text-white py-2 rounded font-medium hover:bg-dark">Create Order</button>
      </div>
    </div>
  );
};
export default FarmerCard;
