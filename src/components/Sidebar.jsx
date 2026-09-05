import { Link, useLocation } from 'react-router-dom';

const navLinks = {
  farmer: [
    { name: 'Dashboard', path: '/farmer/dashboard' },
    { name: 'My Listings', path: '/farmer/listings' },
    { name: 'Market Prices', path: '/farmer/market-prices' },
    { name: 'Buyer Matches', path: '/farmer/buyer-matches' },
    { name: 'Orders', path: '/farmer/orders' },
    { name: 'Analytics', path: '/farmer/analytics' },
  ],
  buyer: [
    { name: 'Dashboard', path: '/buyer/dashboard' },
    { name: 'Requirements', path: '/buyer/requirements' },
    { name: 'Farmer Matches', path: '/buyer/farmer-matches' },
    { name: 'Orders', path: '/buyer/orders' },
  ],
  fpo: [
    { name: 'Dashboard', path: '/fpo/dashboard' },
  ],
  admin: [
    { name: 'Dashboard', path: '/admin/dashboard' },
  ]
};

const Sidebar = ({ role }) => {
  const location = useLocation();
  const links = navLinks[role] || [];

  return (
    <div className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="text-2xl font-bold text-primary flex items-center">
          <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 21a9 9 0 01-9-9c0-4.97 4.03-9 9-9h.264c-.167.313-.264.652-.264 1a3 3 0 003 3c.652 0 1.25-.19 1.764-.515A8.966 8.966 0 0121 12a9 9 0 01-9 9zm-1-7v-2h2v2h-2zm0-4V8h2v2h-2z" clipRule="evenodd"/></svg>
          KrishiLink
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-light text-primary' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
