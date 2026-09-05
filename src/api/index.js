import axios from 'axios';


const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({ 
  baseURL: API_BASE_URL 
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth
export const login = (email, password) => api.post('/auth/login', { email, password });
export const register = (data) => api.post('/auth/register', data);
export const getMe = () => api.get('/auth/me');

// Crops & Markets
export const getCrops = (search) => api.get('/crops', { params: { search } });
export const getMarkets = () => api.get('/markets');
export const getMarketPrices = (marketId, cropId) => api.get(`/markets/${marketId}/prices`, { params: { crop_id: cropId } });

// Farmer - exact backend route names
export const createListing = (data) => api.post('/farmer/listing', data);
export const getMyListings = () => api.get('/farmer/listings');
export const updateListing = (id, data) => api.put(`/farmer/listing/${id}`, data);
export const deleteListing = (id) => api.delete(`/farmer/listing/${id}`);
export const getMarketPricesForFarmer = (cropId) => api.get('/farmer/market-prices', { params: { crop_id: cropId } });
export const getBuyerMatches = (listingId) => api.get('/farmer/buyer-matches', { params: { listing_id: listingId } });
export const createFarmerOrder = (data) => api.post('/farmer/order', data);
export const getFarmerOrders = () => api.get('/farmer/orders');
export const getFarmerAnalytics = () => api.get('/farmer/analytics');
export const getFarmerProfile = () => api.get('/farmer/profile');
export const updateFarmerProfile = (data) => api.put('/farmer/profile', data);

// Buyer
export const createRequirement = (data) => api.post('/buyer/requirement', data);
export const getMyRequirements = () => api.get('/buyer/requirements');
export const getFarmerMatches = (requirementId) => api.get('/buyer/farmer-matches', { params: { requirement_id: requirementId } });
export const createBuyerOrder = (data) => api.post('/buyer/order', data);
export const getBuyerOrders = () => api.get('/buyer/orders');
export const updateOrderStatus = (id, status) => api.put(`/buyer/order/${id}/status`, { status });

// FPO
export const createAggregatedListing = (data) => api.post('/fpo/aggregate', data);
export const getFPOListings = () => api.get('/fpo/listings');
export const getFPOAnalytics = () => api.get('/fpo/analytics');
export const addFarmerToFPO = (data) => api.post('/fpo/farmer/add', data);

// Admin
export const getAdminUsers = (page, size, userType) => api.get('/admin/users', { params: { page, size, user_type: userType } });
export const verifyUser = (id) => api.put(`/admin/user/${id}/verify`);
export const getAdminAnalytics = () => api.get('/admin/analytics');
export const getAdminTransactions = () => api.get('/admin/transactions');
export const addCrop = (data) => api.post('/admin/crops', data);

// Common
export const getDemandAnalysis = () => api.get('/demand/analysis');
export const estimateLogistics = (data) => api.post('/logistics/estimate', data);
export const getNotifications = () => api.get('/notifications');
export const markNotificationRead = (id) => api.put(`/notifications/${id}/read`);
export const getHealth = () => api.get('/health');

export default api;