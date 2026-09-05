const StatsCard = ({ title, value, change }) => {
  const isPositive = change > 0;
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-gray-900">{value}</span>
        {change !== undefined && change !== null && (
          <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '↑' : '↓'} {Math.abs(change)}%
          </span>
        )}
      </div>
    </div>
  );
};
export default StatsCard;
