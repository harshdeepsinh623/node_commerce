import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    // In a real app, you would validate credentials with an API
    // This is a simplified example
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const register = (userData) => {
    // In a real app, you would send registration data to an API
    // This is a simplified example
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  const value = {
    currentUser,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};