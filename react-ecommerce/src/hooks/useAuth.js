import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    user,
    error,
    handleLogin,
    handleLogout,
  };
};