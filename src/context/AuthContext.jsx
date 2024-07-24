import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await axios.get('https://beep-xi.vercel.app/api/auth/user', { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    checkUserLoggedIn();
  }, []);

  const signUp = async (fullName, username, email, password) => {
    try {
      const response = await axios.post('https://beep-xi.vercel.app/api/auth/register', { fullName, username, email, password }, { withCredentials: true });
      setUser(response.data);
      alert('Registration successful');
      navigate('/login');
    } catch (error) {
      console.log(error);
      alert('Registration failed');
    }
  };

  const signIn = async (email, password) => {
    try {
      const response = await axios.post('https://beep-xi.vercel.app/api/auth/login', { email, password }, { withCredentials: true });
      setUser(response.data);
      alert('Login successful');
      navigate('/overview');
    } catch (error) {
      console.log(error);
      alert('Login failed');
    }
  };

  const logout = async () => {
    try {
      await axios.post('https://beep-xi.vercel.app/api/auth/logout', {}, { withCredentials: true });
      setUser(null);
      alert('Logout successful');
      navigate('/sign-in');
    } catch (error) {
      console.log(error);
      alert('Logout failed');
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
