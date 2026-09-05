import { useState, useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const NotificationCenter = () => {
  const { notifications, unreadCount, markRead } = useContext(NotificationContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative p-2 text-gray-600 hover:text-primary focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        {unreadCount > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{unreadCount}</span>}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-100">
          <div className="p-3 font-semibold bg-gray-50 border-b">Notifications</div>
          <div className="max-h-64 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-sm text-gray-500 text-center">No notifications</div>
            ) : (
              notifications.map(n => (
                <div key={n.id} onClick={() => markRead(n.id)} className={`p-3 border-b text-sm cursor-pointer hover:bg-gray-50 ${n.read ? 'text-gray-600' : 'text-gray-900 bg-green-50 font-medium'}`}>
                  {n.message}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default NotificationCenter;
