import React, { createContext, useState, useEffect, useContext } from 'react';
import { getNotifications, markNotificationRead } from '../api';
import { AuthContext } from './AuthContext';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchNotifications = async () => {
      try {
        const res = await getNotifications();
        setNotifications(res.data);
        setUnreadCount(res.data.filter(n => !n.read).length);
      } catch (err) {}
    };
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const markRead = async (id) => {
    try {
      await markNotificationRead(id);
      setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (err) {}
  };

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, markRead }}>
      {children}
    </NotificationContext.Provider>
  );
};
