const OrderStatusBadge = ({ status }) => {
  const colors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-blue-100 text-blue-800',
    dispatched: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
    completed: 'bg-gray-100 text-gray-800'
  };
  const color = colors[status.toLowerCase()] || colors.pending;
  return <span className={`px-2 py-1 rounded text-xs font-semibold capitalize ${color}`}>{status}</span>;
};
export default OrderStatusBadge;
