// AdContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdContext = createContext();

const AdProvider = ({ children }) => {
  // const apiUrl = "http://localhost:3000"
  const apiUrl = "https://beep-backend.vercel.app"

  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [ad, setAd] = useState(null);
  const [allAds, setAllAds] = useState([]);
  const [editAd, setEditAd] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAdById
      fetchAds();
      fetchAllAds();
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const fetchAds = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/ads/user`, { withCredentials: true });
      setAds(response.data.ads);
      // toast.success('Ads fetched successfully');
    } catch (error) {
      console.error('Failed to fetch ads', error);
      toast.error('Failed to fetch ads');
    }
  };

  const fetchAllAds = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/ads/`, { withCredentials: true });
      setAllAds(response.data);
      setFilteredAds(response.data); // Initialize filteredAds
      // toast.success('All ads fetched successfully');
    } catch (error) {
      console.error('Failed to fetch all ads', error.message);
      toast.error('Failed to fetch all ads');
    }
  };

  const searchAds = (searchParams) => {
    const { title, location, category } = searchParams;
    const filtered = allAds?.filter(ad => {
      const matchesTitle = title ? ad.title.toLowerCase().includes(title.toLowerCase()) : true;
      const matchesLocation = location ? ad.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesCategory = category ? ad.category.toLowerCase() === category.toLowerCase() : true;
      return matchesTitle && matchesLocation && matchesCategory;
    });
    setFilteredAds(filtered);
  };

  const filterAds = (filters) => {
    const filtered = allAds?.filter(ad => {
      const productFilters = Object.keys(filters.product).filter(key => filters.product[key]);
      const serviceFilters = Object.keys(filters.service).filter(key => filters.service[key]);
      const otherFilters = Object.keys(filters.other).filter(key => filters.other[key]);

      const matchesProduct = productFilters.length ? productFilters.includes(ad.category) : true;
      const matchesService = serviceFilters.length ? serviceFilters.includes(ad.category) : true;
      const matchesOther = otherFilters.length ? otherFilters.includes(ad.category) : true;

      return matchesProduct || matchesService || matchesOther;
    });
    setFilteredAds(filtered);
  };

  const fetchAdById = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/api/ads/${id}`, {
        withCredentials: true,
      });
      setAd(response.data);
      toast.success('Ad fetched successfully');
    } catch (error) {
      console.error('Failed to fetch ad by id', error);
      toast.error('Failed to fetch ad by id');
    }
  };

  const createAd = async (adData) => {
    try {
      await axios.post(`${apiUrl}/api/ads`, adData, { withCredentials: true });
      fetchAllAds();
      // toast.success('Ad created successfully');
    } catch (error) {
      console.error('Failed to create ad', error);
      toast.error('Failed to create ad');
    }
  };

  const updateAd = async (id, adData) => {
    try {
      await axios.put(`${apiUrl}/api/ads/${id}`, adData, { withCredentials: true });
      fetchAllAds();
      toast.success('Ad updated successfully');
    } catch (error) {
      console.error('Failed to update ad', error);
      toast.error('Failed to update ad');
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
    <AdContext.Provider value={{ ads, allAds, filteredAds, fetchAllAds, searchAds, filterAds, createAd, updateAd, ad, fetchAdById, deleteAd, setEditAd }}>
      {children}
      <ToastContainer />
    </AdContext.Provider>
  );
};

export default AdProvider;
