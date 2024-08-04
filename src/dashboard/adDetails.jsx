import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AdContext } from '../context/AdContext';
import BreedCrumb from '../components/breedCrumb';
import Loader from '../components/loader';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Checkbox, useDisclosure } from "@nextui-org/react";

const AdDetails = () => {
  const { id } = useParams();
  const { ad, fetchAdById, updateAd, error } = useContext(AdContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    adName: '',
    category: '',
    subcategory: '',
    tags: '',
    price: '',
    description: '',
    features: '',
    phoneNumber: '',
    backupPhoneNumber: '',
    email: '',
    websiteLink: '',
    location: '',
    mapLocation: '',
    images: [],
  });
  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    if (id) {
      fetchAdById(id);
    }
  }, [id]);

  useEffect(() => {
    if (ad) {
      setFormData({
        adName: ad.adName,
        category: ad.category,
        subcategory: ad.subcategory,
        tags: ad.tags.join(', '),
        price: ad.price,
        description: ad.description,
        features: ad.features.join(', '),
        phoneNumber: ad.phoneNumber,
        backupPhoneNumber: ad.backupPhoneNumber,
        email: ad.email,
        websiteLink: ad.websiteLink,
        location: ad.location,
        mapLocation: ad.mapLocation,
        images: ad.images,
      });
    }
  }, [ad]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewImages([...e.target.files]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const updatedAdData = new FormData();
    for (const key in formData) {
      if (key === 'tags' || key === 'features') {
        updatedAdData.append(key, formData[key].split(', '));
      } else if (key !== 'images') {
        updatedAdData.append(key, formData[key]);
      }
    }
    for (let i = 0; i < newImages.length; i++) {
      updatedAdData.append('images', newImages[i]);
    }
    try {
      await updateAd(id, updatedAdData);
      setLoading(false);
      onOpenChange(false);
      setSuccessModalOpen(true);
    } catch (error) {
      console.error('Failed to update ad', error);
      setLoading(false);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!ad) {
    return <div><Loader /></div>;
  }

  return (
    <div>
      <BreedCrumb currentPage={`Ad/${id}`} pageTitle="ad-details" />
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="card mb-3">
                <img className="card-img img-fluid" src={ad.images[0]} alt="Main Ad" id="product-detail" />
              </div>
              <div className="row">
                <div className="col-1 align-self-center">
                  <a href="#" role="button" data-bs-slide="prev">
                    <i className="text-dark fas fa-chevron-left"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                </div>
                <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                  <div className="carousel-inner product-links-wap" role="listbox">
                    {ad.images.map((image, index) => (
                      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="row">
                          <div className="col-4">
                            <a href="#">
                              <img className="card-img img-fluid" src={image} alt={`Product Image ${index + 1}`} />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-1 align-self-center">
                  <a href="#" role="button" data-bs-slide="next">
                    <i className="text-dark fas fa-chevron-right"></i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">{ad.adName}</h1>
                  <p className="h3 py-2">${ad.price}</p>
                  <h6 className="font-bold mt-4">Description: <span className="text-base font-normal">{ad.description}</span></h6>
                  <h6 className="font-bold mt-3">Category: <span className="text-base font-normal">{ad.category}</span></h6>
                  <h6 className="font-bold mt-3">Subcategory: <span className="text-base font-normal">{ad.subcategory}</span></h6>
                  <h6 className="font-bold mt-3">Phone: <span className="text-base font-normal">{ad.phoneNumber}</span></h6>
                  <h6 className="font-bold mt-3">Location: <span className="text-base font-normal">{ad.location}</span></h6>
                  <div className="flex mt-3 gap-6 items-center">
                    <h6 className="font-bold">Features:</h6>
                    <ul>

                      <li>{ad.features}</li>
                      {/* {ad.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))} */}
                    </ul>
                  </div>
                  <div className="flex mt-3 items-center gap-6">
                    <h6 className="font-bold">Tag:</h6>
                    <ul>
                      {ad.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="btn mt-4" onPress={() => onOpenChange(true)} color="primary">Edit Ad</Button>
                  <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">Edit Ad</ModalHeader>
                          <ModalBody>
                            {loading ? (
                              <Loader />
                            ) : (
                              <>
                                {step === 1 && (
                                  <div>
                                    <h3 className="text-xl font-bold mb-4">Step 1: Basic Info</h3>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="adName">Ad Name</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="adName" id="adName" value={formData.adName} onChange={handleChange} />
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
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="tags">Tags</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="tags" id="tags" value={formData.tags} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="price">Price</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="number" name="price" id="price" value={formData.price} onChange={handleChange} />
                                    </div>
                                    <div className="flex justify-between">
                                      <Button color="primary" variant="flat" onPress={() => setStep(2)}>Next Step</Button>
                                    </div>
                                  </div>
                                )}
                                {step === 2 && (
                                  <div>
                                    <h3 className="text-xl font-bold mb-4">Step 2: Description and Images</h3>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="description">Ad Description</label>
                                      <textarea className="w-full px-3 py-2 border rounded" name="description" id="description" value={formData.description} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="features">Features <span className="text-gray-500">(optional)</span></label>
                                      <textarea className="w-full px-3 py-2 border rounded" name="features" id="features" value={formData.features} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2">Upload Photos</label>
                                      <Input type="file" multiple onChange={handleImageChange} />
                                      <div className="flex flex-wrap mt-4">
                                        {formData.images.map((image, index) => (
                                          <div key={index} className="relative w-24 h-24 mr-2 mb-2">
                                            <img src={image} alt={`Uploaded ${index}`} className="w-full h-full object-cover rounded" />
                                            <Button className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full" onClick={() => handleRemoveImage(index)}>
                                              &times;
                                            </Button>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex justify-between">
                                      <Button color="primary" variant="flat" onPress={() => setStep(1)}>Previous</Button>
                                      <Button color="primary" variant="flat" onPress={() => setStep(3)}>Next Step</Button>
                                    </div>
                                  </div>
                                )}
                                {step === 3 && (
                                  <div>
                                    <h3 className="text-xl font-bold mb-4">Step 3: Contact Information</h3>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Phone Number</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="backupPhoneNumber">Backup Phone Number <span className="text-gray-500">(optional)</span></label>
                                      <Input className="w-full px-3 py-2 border rounded" type="tel" name="backupPhoneNumber" id="backupPhoneNumber" value={formData.backupPhoneNumber} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="websiteLink">Website Link <span className="text-gray-500">(optional)</span></label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="websiteLink" id="websiteLink" value={formData.websiteLink} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="location" id="location" value={formData.location} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="mapLocation">Map Location <span className="text-gray-500">(optional)</span></label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="mapLocation" id="mapLocation" value={formData.mapLocation} onChange={handleChange} />
                                    </div>
                                    <div className="flex items-center mb-4">
                                      <Checkbox className="mr-2" id="saveContact">Save my contact information for faster posting</Checkbox>
                                    </div>
                                    <div className="flex justify-between">
                                      <Button color="primary" variant="flat" onPress={() => setStep(2)}>Previous</Button>
                                      <Button color="primary" onPress={() => handleSubmit()}>Update Ad</Button>
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                          </ModalBody>
                          <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>Close</Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                  <Modal isOpen={successModalOpen} onOpenChange={setSuccessModalOpen}>
                    <ModalContent>
                      <ModalHeader className="flex flex-col gap-1">Ad Updated Successfully</ModalHeader>
                      <ModalBody>
                        <div className="text-center">
                          <div className="mb-4">
                            <svg className="w-20 h-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 17h10M7 10h.01M3 6h18" />
                            </svg>
                          </div>
                          <h2 className="text-xl font-bold">Your ad has been successfully updated!</h2>
                          <p className="text-gray-600">Congratulations! Your ad has been updated and is now live and visible to your target audience.</p>
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onPress={() => setSuccessModalOpen(false)}>Close</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdDetails;
