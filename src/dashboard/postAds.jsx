import React, { useState, useContext } from 'react';
import { AdContext } from '../context/AdContext';
import { useNavigate } from 'react-router-dom';
import DashNav from '../components/dashNav';
import BreedCrumb from '../components/breedCrumb';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { toast } from 'react-toastify';

const PostAds = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { createAd } = useContext(AdContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false); // New state for loading
  const [formData, setFormData] = useState({
    adName: '',
    category: '',
    subcategory: '',
    tags: '',
    price: '',
    description: '',
    phoneNumber: '',
    backupPhoneNumber: '',
    email: '',
    websiteLink: '',
    location: '',
    mapLocation: '',
    overview: {
      Conditions: '',
      Brand: '',
      Model: '',
      ModelYear: '',
      Authenticity: '',
    }
  });
  const [features, setFeatures] = useState([]);
  const [featureInput, setFeatureInput] = useState('');
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOverviewChange = (e) => {
    setFormData({
      ...formData,
      overview: { ...formData.overview, [e.target.name]: e.target.value }
    });
  };

  const handleFeatureChange = (e) => {
    setFeatureInput(e.target.value);
  };

  const addFeature = () => {
    if (featureInput) {
      setFeatures([...features, featureInput]);
      setFeatureInput('');
    }
  };

  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    const adData = new FormData();
    for (const key in formData) {
      if (key === 'overview') {
        for (const overviewKey in formData.overview) {
          adData.append(`overview.${overviewKey}`, formData.overview[overviewKey]);
        }
      } else {
        adData.append(key, formData[key]);
      }
    }
    for (let i = 0; i < images.length; i++) {
      adData.append('images', images[i]);
    }
    adData.append('features', features);

    try {
      await createAd(adData);
      onOpen();
      setLoading(false); // Set loading state to false after success
    } catch (error) {
      toast.error(error.message || 'An error occurred while posting the ad.');
      setLoading(false); // Set loading state to false on error
    }
  };

  const handleModalClose = () => {
    onOpenChange(false);
    navigate('/my-ads');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <BreedCrumb pageTitle="Post Ads" currentPage="post-ads" />
      <section className="py-8">
        <div className="container mx-auto flex">
          <DashNav />
          <div className="w-full lg:w-3/4 px-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {step === 1 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Step 1: Basic Info</h3>
                  <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="adName">Ad Name</label>
                      <input className="w-full px-3 py-2 border rounded" type="text" name="adName" id="adName" value={formData.adName} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="category">Category</label>
                      <select className="w-full px-3 py-2 border rounded" id="category" name="category" value={formData.category} onChange={handleChange}>
                        <option value="">Choose ads category</option>
                        <option value="Product">Product</option>
                        <option value="Service">Services</option>
                        <option value="Other">Others</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="subcategory">Sub Category</label>
                      <select className="w-full px-3 py-2 border rounded" id="subcategory" name="subcategory" value={formData.subcategory} onChange={handleChange}>
                        <option value="">Choose sub category</option>
                        <option value="Phones and gadgets">Phones & Gadgets</option>
                        <option value="Stationaries">Stationaries</option>
                        <option value="Dry cleaning">Dry cleaning</option>
                        <option value="Barbing">Barbing</option>
                        <option value="Hair stylist">Hair stylist</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    {formData.subcategory === 'Phones and gadgets' && (
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Overview Details</h4>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2" htmlFor="Conditions">Conditions</label>
                          <input className="w-full px-3 py-2 border rounded" type="text" name="Conditions" id="Conditions" value={formData.overview.Conditions} onChange={handleOverviewChange} />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2" htmlFor="Brand">Brand</label>
                          <input className="w-full px-3 py-2 border rounded" type="text" name="Brand" id="Brand" value={formData.overview.Brand} onChange={handleOverviewChange} />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2" htmlFor="Model">Model</label>
                          <input className="w-full px-3 py-2 border rounded" type="text" name="Model" id="Model" value={formData.overview.Model} onChange={handleOverviewChange} />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2" htmlFor="ModelYear">Model Year</label>
                          <input className="w-full px-3 py-2 border rounded" type="text" name="ModelYear" id="ModelYear" value={formData.overview.ModelYear} onChange={handleOverviewChange} />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 mb-2" htmlFor="Authenticity">Authenticity</label>
                          <input className="w-full px-3 py-2 border rounded" type="text" name="Authenticity" id="Authenticity" value={formData.overview.Authenticity} onChange={handleOverviewChange} />
                        </div>
                      </div>
                    )}
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="tags">Tags</label>
                      <input className="w-full px-3 py-2 border rounded" type="text" name="tags" id="tags" value={formData.tags} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="price">Price</label>
                      <input className="w-full px-3 py-2 border rounded" type="number" name="price" id="price" value={formData.price} onChange={handleChange} />
                    </div>
                    <div className="flex justify-between">
                      <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setStep(2)}>Next Step</button>
                    </div>
                  </form>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Step 2: Description and Images</h3>
                  <form onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="description">Ad Description</label>
                      <textarea className="w-full px-3 py-2 border rounded" name="description" id="description" value={formData.description} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="features">Features <span className="text-gray-500">(optional)</span></label>
                      <div className="flex">
                        <input className="w-full px-3 py-2 border rounded" type="text" name="feature" id="feature" value={featureInput} onChange={handleFeatureChange} />
                        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-600" onClick={addFeature}>Add</button>
                      </div>
                      <div className="mt-2">
                        {features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-gray-700">{feature}</span>
                            <button className="ml-2 text-red-500" onClick={() => removeFeature(index)}>Remove</button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Upload Photos</label>
                      <input type="file" multiple onChange={handleImageChange} />
                      <div className="flex flex-wrap mt-4">
                        {Array.from(images).map((image, index) => (
                          <div key={index} className="relative w-24 h-24 mr-2 mb-2">
                            <img src={URL.createObjectURL(image)} alt="Uploaded" className="w-full h-full object-cover rounded" />
                            <button className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full" onClick={() => setImages(Array.from(images).filter((_, i) => i !== index))}>
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setStep(1)}>Previous</button>
                      <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setStep(3)}>Next Step</button>
                    </div>
                  </form>
                </div>
              )}
              {step === 3 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Step 3: Contact Information</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Phone Number</label>
                      <input className="w-full px-3 py-2 border rounded" type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="backupPhoneNumber">Backup Phone Number <span className="text-gray-500">(optional)</span></label>
                      <input className="w-full px-3 py-2 border rounded" type="tel" name="backupPhoneNumber" id="backupPhoneNumber" value={formData.backupPhoneNumber} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                      <input className="w-full px-3 py-2 border rounded" type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="websiteLink">Website Link <span className="text-gray-500">(optional)</span></label>
                      <input className="w-full px-3 py-2 border rounded" type="text" name="websiteLink" id="websiteLink" value={formData.websiteLink} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
                      <input className="w-full px-3 py-2 border rounded" type="text" name="location" id="location" value={formData.location} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="mapLocation">Map Location <span className="text-gray-500">(optional)</span></label>
                      <input className="w-full px-3 py-2 border rounded" type="text" name="mapLocation" id="mapLocation" value={formData.mapLocation} onChange={handleChange} />
                    </div>
                    <div className="flex items-center mb-4">
                      <input type="checkbox" className="mr-2" id="saveContact" />
                      <label htmlFor="saveContact" className="text-gray-700">Save my contact information for faster posting</label>
                    </div>
                    <div className="flex justify-between">
                      <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setStep(2)}>Previous</button>
                      <button type="submit" className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
                        {loading ? (
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                          </svg>
                        ) : 'Post Ad'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Ad Posted Successfully</ModalHeader>
              <ModalBody>
                <div className="text-center">
                  <div className="mb-4">
                    <svg className="w-20 h-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 17h10M7 10h.01M3 6h18" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold">Your ad has been successfully posted!</h2>
                  <p className="text-gray-600">Congratulations! Your ad is now live and visible to your target audience.</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleModalClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PostAds;
