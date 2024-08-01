import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // const apiUrl = "http://localhost:3000"
  const apiUrl = "https://beep-backend.vercel.app"
  const [user, setUser] = useState(null);
  const [singleUser, setSingleUser] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/users/profile`, { withCredentials: true });
        setUser(response.data);
        console.log(user)
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };
    fetchUser();
  }, []);
 // AdContext.jsx
const fetchUserById = async (userId) => {
  try {
    setLoading(true);
    const response = await fetch(`${apiUrl}/api/users/${userId}`, {
      credentials: 'include'
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Failed to fetch user');
    }

    const user = await response.json();
    setLoading(false);
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error.message);
    setLoading(false);
    throw error;
  }
};

  return (
    <UserContext.Provider value={{ user, setUser, fetchUserById }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
