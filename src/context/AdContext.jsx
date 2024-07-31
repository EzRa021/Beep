// AdContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AdContext = createContext();

const AdProvider = ({ children }) => {
  const apiUrl = "https://beep-backend.vercel.app";
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
      const response = await fetch(`${apiUrl}/api/ads/user`, {
        credentials: 'include',
      });
      const data = await response.json();
      setAds(data.ads);
      setLoading(false);
    } catch (error) {
      console.log('Failed to fetch ads', error.message);
      setLoading(false);
    }
  };

  const fetchAllAds = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}/api/ads`, {
        credentials: 'include',
      });
      const data = await response.json();
      setAllAds(data.ads);
      setFilteredAds(data.ads);
      setLoading(false);
    } catch (error) {
      console.log('Failed to fetch ads', error.message);
      setLoading(false);
    }
  };

  const searchAds = (searchParams) => {
    const { title, location, category } = searchParams;
    const filtered = allAds.filter(ad => {
      const matchesTitle = title ? ad.adName.toLowerCase().includes(title.toLowerCase()) : true;
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

      const matchesProduct = productFilters.length ? productFilters.includes(ad.subcategory) : true;
      const matchesService = serviceFilters.length ? serviceFilters.includes(ad.subcategory) : true;
      const matchesOther = otherFilters.length ? otherFilters.includes(ad.subcategory) : true;

      return matchesProduct || matchesService || matchesOther;
    });
    setFilteredAds(filtered);
  };

  const fetchAdById = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}/api/ads/${id}`, {
        credentials: 'include',
      });
      const data = await response.json();
      setAd(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch ad by id', error);
      setLoading(false);
    }
  };

  const createAd = async (adData) => {
    try {
      setLoading(true);
      await fetch(`${apiUrl}/api/ads`, {
        method: 'POST',
        credentials: 'include',
        body: adData,
      });
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
      await fetch(`${apiUrl}/api/ads/${id}`, {
        method: 'PUT',
        credentials: 'include',
        body: adData,
      });
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
      await fetch(`${apiUrl}/api/ads/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
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
