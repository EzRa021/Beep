import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // const apiUrl = "https://beep-backend.vercel.app";
  const apiUrl = "http://localhost:3000";

  const [user, setUser] = useState(null);
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user: authUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/users/profile`, { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };
   fetchUser();
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
