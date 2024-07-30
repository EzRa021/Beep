import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AdContext = createContext();

const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [ad, setAd] = useState(null);
  const [allAds, setAllAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editAd, setEditAd] = useState(null);

  useEffect(() => {
    fetchAds();
    fetchAllAds();
  }, []);

  const fetchAds = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/ads/user', { withCredentials: true });
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
      const response = await axios.get('http://localhost:3000/api/ads', { withCredentials: true });
      setAllAds(response.data);
      setFilteredAds(response.data);
      setLoading(false);
    } catch (error) {
      console.log('Failed to fetch ads', error.message);
      setLoading(false);
    }
  };

  const searchAds = (searchParams) => {
    const { title, location, category } = searchParams;
    const filtered = allAds.filter(ad => {
      const matchesTitle = title ? ad.title.toLowerCase().includes(title.toLowerCase()) : true;
      const matchesLocation = location ? ad.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesCategory = category ? ad.category.toLowerCase() === category.toLowerCase() : true;
      return matchesTitle && matchesLocation && matchesCategory;
    });
    setFilteredAds(filtered);
  };

  const filterAds = (filters) => {
    const filtered = allAds.filter(ad => {
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
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/api/ads/${id}`, { withCredentials: true });
      setAd(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch ad by id', error);
      setLoading(false);
    }
  };

  const createAd = async (adData) => {
    try {
      setLoading(true);
      await axios.post('http://localhost:3000/api/ads', adData, { withCredentials: true });
      fetchAds();
      setLoading(false);
      toast.success('Ad created successfully');
    } catch (error) {
      console.error('Failed to create ad', error);
      setLoading(false);
      toast.error('Failed to create ad');
    }
  };

  const updateAd = async (id, adData) => {
    try {
      setLoading(true);
      await axios.put(`http://localhost:3000/api/ads/${id}`, adData, { withCredentials: true });
      fetchAds();
      setLoading(false);
      toast.success('Ad updated successfully');
    } catch (error) {
      console.error('Failed to update ad', error);
      setLoading(false);
      toast.error('Failed to update ad');
    }
  };

  const deleteAd = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3000/api/ads/${id}`, { withCredentials: true });
      fetchAds();
      setLoading(false);
      toast.success('Ad deleted successfully');
    } catch (error) {
      console.error('Failed to delete ad', error);
      setLoading(false);
      toast.error('Failed to delete ad');
    }
  };

  return (
    <AdContext.Provider value={{
      ads,
      allAds,
      filteredAds,
      fetchAllAds,
      searchAds,
      filterAds,
      createAd,
      updateAd,
      ad,
      fetchAdById,
      deleteAd,
      setEditAd,
      loading
    }}>
      {children}
    </AdContext.Provider>
  );
};

export default AdProvider;
