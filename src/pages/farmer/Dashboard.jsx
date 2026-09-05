import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import StatsCard from '../../components/StatsCard';
import { getMyListings, getFarmerOrders, getMarkets } from '../../api';
import toast from 'react-hot-toast';

const FarmerDashboard = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [orders, setOrders] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [listRes, ordRes, mktRes] = await Promise.all([
          getMyListings(),
          getFarmerOrders(),
          getMarkets(),
        ]);
        setListings(listRes.data || []);
        setOrders(ordRes.data || []);
        setMarkets(mktRes.data || []);
      } catch (err) {
        toast.error('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const activeListings = listings.filter(l => l.status === 'active').length;
  const pendingOrders = orders.filter(o => o.status === 'pending').length;

  const quickActions = [
    { label: '+ New Listing', to: '/farmer/listings', color: 'bg-green-600 text-white hover:bg-green-700' },
    { label: '📊 Market Prices', to: '/farmer/market-prices', color: 'bg-blue-50 text-blue-700 hover:bg-blue-100' },
    { label: '🤝 Buyer Matches', to: '/farmer/buyer-matches', color: 'bg-purple-50 text-purple-700 hover:bg-purple-100' },
    { label: '📈 Analytics', to: '/farmer/analytics', color: 'bg-orange-50 text-orange-700 hover:bg-orange-100' },
  ];

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Good morning, {user?.full_name?.split(' ')[0] || 'Farmer'}! 🌞
          </h1>
          <p className="text-gray-500 mt-1">Here's your farm overview for today</p>
        </div>
        <Link to="/farmer/listings" className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 flex items-center gap-2">
          + New Listing
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard title="Active Listings" value={activeListings} icon="📋" change={0} />
        <StatsCard title="Pending Orders" value={pendingOrders} icon="📦" change={0} />
        <StatsCard title="Markets Nearby" value={markets.length} icon="🏪" change={0} />
        <StatsCard title="Listings Total" value={listings.length} icon="🌾" change={0} />
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map((a, i) => (
            <Link key={i} to={a.to} className={`${a.color} px-4 py-3 rounded-lg font-medium text-center transition-colors`}>
              {a.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Listings */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Listings</h2>
          <Link to="/farmer/listings" className="text-green-600 text-sm font-medium hover:underline">View all →</Link>
        </div>
        {listings.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <div className="text-4xl mb-2">📋</div>
            <p>No listings yet. <Link to="/farmer/listings" className="text-green-600 font-medium">Create your first listing</Link></p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-100">
            <thead>
              <tr>
                {['Crop ID', 'Quantity', 'Expected Price', 'Status', 'Created'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {listings.slice(0, 5).map(l => (
                <tr key={l.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Crop #{l.crop_id}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{l.quantity} {l.unit}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">₹{l.expected_price?.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${l.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {l.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{l.created_at ? new Date(l.created_at).toLocaleDateString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Nearby Markets */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Nearby Markets</h2>
          <Link to="/farmer/market-prices" className="text-green-600 text-sm font-medium hover:underline">Compare prices →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {markets.slice(0, 3).map((m, i) => (
            <div key={i} className="p-4 border border-gray-100 rounded-lg hover:border-green-200 transition-colors">
              <div className="font-medium text-gray-900">🏪 {m.name}</div>
              <div className="text-sm text-gray-400 mt-1">{m.state || m.district || 'India'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FarmerDashboard;
