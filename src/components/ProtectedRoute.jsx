import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ role, children }) => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If role is required and doesn't match
  if (role && user?.role && user.role !== role) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
