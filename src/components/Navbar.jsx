import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import NotificationCenter from './NotificationCenter';

const Navbar = ({ role }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 z-10">
      <div className="flex items-center lg:hidden">
        <span className="text-xl font-bold text-primary">KrishiLink</span>
      </div>
      <div className="hidden lg:block text-lg font-medium text-gray-800 capitalize">
        {role} Portal
      </div>
      <div className="flex items-center space-x-4">
        <NotificationCenter />
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">{user?.name || 'User'}</span>
          <button onClick={logout} className="text-sm text-red-600 hover:text-red-800">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
