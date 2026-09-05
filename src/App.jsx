import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import { NotificationProvider } from './context/NotificationContext';
import { AuthProvider } from './context/AuthContext';

// Farmer Pages
import FarmerDashboard from './pages/farmer/Dashboard';
import Listings from './pages/farmer/Listings';
import MarketPrices from './pages/farmer/MarketPrices';
import BuyerMatches from './pages/farmer/BuyerMatches';
import FarmerOrders from './pages/farmer/Orders';
import FarmerAnalytics from './pages/farmer/Analytics';

// Buyer Pages
import BuyerDashboard from './pages/buyer/Dashboard';
import Requirements from './pages/buyer/Requirements';
import FarmerMatchesBuyer from './pages/buyer/FarmerMatches';
import BuyerOrders from './pages/buyer/Orders';

// FPO Pages
import FPODashboard from './pages/fpo/Dashboard';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NotificationProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/farmer/*" element={<ProtectedRoute role="farmer"><Layout role="farmer" /></ProtectedRoute>}>
              <Route path="dashboard" element={<FarmerDashboard />} />
              <Route path="listings" element={<Listings />} />
              <Route path="market-prices" element={<MarketPrices />} />
              <Route path="buyer-matches" element={<BuyerMatches />} />
              <Route path="orders" element={<FarmerOrders />} />
              <Route path="analytics" element={<FarmerAnalytics />} />
            </Route>

            <Route path="/buyer/*" element={<ProtectedRoute role="buyer"><Layout role="buyer" /></ProtectedRoute>}>
              <Route path="dashboard" element={<BuyerDashboard />} />
              <Route path="requirements" element={<Requirements />} />
              <Route path="farmer-matches" element={<FarmerMatchesBuyer />} />
              <Route path="orders" element={<BuyerOrders />} />
            </Route>

            <Route path="/fpo/*" element={<ProtectedRoute role="fpo"><Layout role="fpo" /></ProtectedRoute>}>
              <Route path="dashboard" element={<FPODashboard />} />
            </Route>

            <Route path="/admin/*" element={<ProtectedRoute role="admin"><Layout role="admin" /></ProtectedRoute>}>
              <Route path="dashboard" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </NotificationProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
