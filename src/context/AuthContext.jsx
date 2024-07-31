// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const apiUrl = "https://beep-backend.vercel.app";
  // const apiUrl = "http://localhost:3000"
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          const response = await axios.get(`${apiUrl}/api/auth/me`, { withCredentials: true });
          setUser(response.data);
          localStorage.setItem('user', JSON.stringify(response.data));
        }
      } catch (error) {
        console.error('Not authenticated', error);
        setUser(null);
        localStorage.removeItem('user');
        toast.error('User not authenticated');
      }
    };

    checkUserLoggedIn();
  }, []);

  const signUp = async (fullName, username, email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/register`, { fullName, username, email, password }, { withCredentials: true });
      setUser(response.data);
      toast.success('Registration successful');
      navigate('/login');
    } catch (error) {
      console.log(error.message);
      toast.error('Registration failed');
    }
  };

  const signIn = async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, { email, password }, { withCredentials: true });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      toast.success('Login successful');
      navigate('/overview');
    } catch (error) {
      console.error('Login failed', error);
      toast.error('Login failed');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${apiUrl}/api/auth/logout`, {}, { withCredentials: true });
      setUser(null);
      localStorage.removeItem('user');
      toast.success('Logout successful');
      navigate('/sign-in');
    } catch (error) {
      console.error('Logout failed', error);
      toast.error('Logout failed');
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, logout, setUser }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
