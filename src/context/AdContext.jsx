import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdContext = createContext();

const AdProvider = ({ children }) => {
  const apiUrl = "https://beep-backend.vercel.app";
  // const apiUrl = "http://localhost:3000";


  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [ad, setAd] = useState(null);
  const [allAds, setAllAds] = useState([]);
  const [relatedAds, setRelatedAds] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAds();
    fetchAllAds();
  }, []);

  const fetchAds = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/api/ads/user`, { withCredentials: true });
      setAds(response.data.ads);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch ads', error);
      setLoading(false);
    }
  };

  const fetchAllAds = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/api/ads/`, { withCredentials: true });
      setAllAds(response.data);
      setFilteredAds(response.data); // Initialize filteredAds
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch all ads', error.message);
      toast.error('Failed to fetch all ads');
      setLoading(false);
    }
  };

  const searchAds = (searchTerm) => {
    const filtered = allAds.filter(ad => ad.adName.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredAds(filtered);
  };

  const filterAdsBySubcategory = (subcategory) => {
    const filtered = allAds.filter(ad => ad.subcategory === subcategory);
    setFilteredAds(filtered);
  };

  const fetchAdById = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/api/ads/${id}`, { withCredentials: true });
      setAd(response.data);

      // Fetch related ads based on subcategory
      const relatedAdsResponse = await axios.get(`${apiUrl}/api/ads`);
      const relatedAds = relatedAdsResponse.data.filter(ad => ad.subcategory === response.data.subcategory && ad._id !== response.data._id);
      setRelatedAds(relatedAds);

      // Fetch user who posted the ad
      if (response.data.user) {
        fetchUserById(response.data.user);
      }

      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch ad by id:', err);
      setError('Failed to fetch ad');
      setLoading(false);
    }
  };

  const fetchUserById = async (userId) => {
    try {
      const response = await axios.get(`${apiUrl}/api/users/${userId}`);
      setUser(response.data);
    } catch (err) {
      console.error('Failed to fetch user by id:', err);
    }
  };

  const createAd = async (adData) => {
    try {
      setLoading(true);
      await axios.post(`${apiUrl}/api/ads`, adData, { withCredentials: true });
      fetchAllAds();
      toast.success('Ad created successfully');
      setLoading(false);
    } catch (error) {
      console.error('Failed to create ad', error);
      toast.error('Failed to create ad');
      setLoading(false);
    }
  };

  const updateAd = async (id, adData) => {
    try {
      setLoading(true);
      await axios.put(`${apiUrl}/api/ads/${id}`, adData, { withCredentials: true });
      fetchAllAds();
      toast.success('Ad updated successfully');
      setLoading(false);
    } catch (error) {
      console.error('Failed to update ad', error);
      toast.error('Failed to update ad');
      setLoading(false);
    }
  };

  const deleteAd = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/ads/${id}`, { withCredentials: true });
      fetchAllAds();
      toast.success('Ad deleted successfully');
    } catch (error) {
      console.error('Failed to delete ad', error);
      toast.error('Failed to delete ad');
    }
  };

  return (
    <AdContext.Provider value={{
      ads,
      filterAdsBySubcategory,
      allAds,
      filteredAds,
      relatedAds,
      fetchAdById,
      user,
      error,
      loading,
      fetchAllAds,
      searchAds,
      createAd,
      updateAd,
      ad,
      deleteAd
    }}>
      {children}
      <ToastContainer />
    </AdContext.Provider>
  );
};

export default AdProvider;
