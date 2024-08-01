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
  const fetchUserById = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5173/user/${userId}`, { withCredentials: true });
      setSingleUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user by id', error);
      return null;
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser, fetchUserById, singleUser  }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
