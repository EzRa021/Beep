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

  if (error) {
    return <div>{error}</div>;
  }

  if (!ad) {
    return <div><Loader /></div>;
  }
  console.log(ad)

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
                      {ad.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
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
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="price" id="price" value={formData.price} onChange={handleChange} />
                                    </div>
                                  </div>
                                )}
                                {step === 2 && (
                                  <div>
                                    <h3 className="text-xl font-bold mb-4">Step 2: Contact Info</h3>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
                                      <textarea className="w-full px-3 py-2 border rounded" name="description" id="description" rows="4" value={formData.description} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="features">Features</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="features" id="features" value={formData.features} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Phone Number</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="backupPhoneNumber">Backup Phone Number</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="backupPhoneNumber" id="backupPhoneNumber" value={formData.backupPhoneNumber} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="websiteLink">Website Link</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="websiteLink" id="websiteLink" value={formData.websiteLink} onChange={handleChange} />
                                    </div>
                                  </div>
                                )}
                                {step === 3 && (
                                  <div>
                                    <h3 className="text-xl font-bold mb-4">Step 3: Location Info</h3>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="location" id="location" value={formData.location} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="mapLocation">Map Location</label>
                                      <Input className="w-full px-3 py-2 border rounded" type="text" name="mapLocation" id="mapLocation" value={formData.mapLocation} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                      <label className="block text-gray-700 mb-2" htmlFor="images">Images</label>
                                      <input className="w-full px-3 py-2 border rounded" type="file" name="images" id="images" onChange={handleImageChange} multiple />
                                      {newImages.length > 0 && (
                                        <div className="mt-2">
                                          <p className="text-sm text-gray-600">New images to be uploaded:</p>
                                          <ul>
                                            {newImages.map((file, index) => (
                                              <li key={index}>{file.name}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                      {formData.images.length > 0 && (
                                        <div className="mt-4">
                                          <p className="text-sm text-gray-600">Current images:</p>
                                          <ul>
                                            {formData.images.map((image, index) => (
                                              <li key={index}>
                                                <img src={image} alt={`Ad Image ${index + 1}`} className="w-16 h-16 object-cover inline-block mr-2" />
                                                <button className="text-red-600" onClick={() => handleRemoveImage(index)}>Remove</button>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                          </ModalBody>
                          <ModalFooter>
                            {step > 1 && <Button color="primary" variant="light" onClick={() => setStep(step - 1)}>Previous</Button>}
                            {step < 3 ? (
                              <Button color="primary" onClick={() => setStep(step + 1)}>Next</Button>
                            ) : (
                              <Button
                                color="primary"
                                onPress={() => {
                                  setLoading(true);
                                  const updatedFormData = {
                                    ...formData,
                                    tags: formData.tags.split(',').map(tag => tag.trim()),
                                    features: formData.features.split(',').map(feature => feature.trim()),
                                  };
                                  updateAd(id, updatedFormData, newImages)
                                    .then(() => {
                                      setSuccessModalOpen(true);
                                      onClose();
                                    })
                                    .catch((err) => {
                                      console.error(err);
                                    })
                                    .finally(() => {
                                      setLoading(false);
                                    });
                                }}
                              >
                                {loading ? <div role=" flex items-center gap-2 justify-center w-fit h-fit">
                                  <svg aria-hidden="true" class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                  </svg>
                                  <p class="">Updating ad</p>
                                </div> : "Update ad"}
                              </Button>
                            )}
                          </ModalFooter>
                        </>
                      )}
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
