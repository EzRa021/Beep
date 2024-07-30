import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { AdContext } from '../context/AdContext';

const AdList = () => {
  const { allAds, filteredAds, fetchAllAds, searchAds, filterAds } = useContext(AdContext);
  const [searchParams, setSearchParams] = useState({ title: '', location: '', category: '' });
  const [filters, setFilters] = useState({
    product: { 'Phones and gadgets': false, Stationaries: false, 'Dry cleaning': false },
    service: { Barbing: false, 'Hair stylist': false },
    other: { Other: false }
  });
  console.log(allAds)
  useEffect(() => {
    fetchAllAds();
  }, []);

  const handleSearchChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e) => {
    const { name, checked, dataset } = e.target;
    setFilters({
      ...filters,
      [dataset.type]: {
        ...filters[dataset.type],
        [name]: checked
      }
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchAds(searchParams);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    filterAds(filters);
  };

  return (
    <div>
      <div className="container mx-auto mt-10">
        {/* Search Box */}
        <div className="mt-20 ad-list__search-box">
          <div className="container">
            <div className="search">
              <form onSubmit={handleSearchSubmit}>
                <div className="search__content">
                  <div className="search__content-item">
                    <div className="input-field">
                      <input
                        type="text"
                        name="title"
                        placeholder="Search by ads title, keyword..."
                        value={searchParams.title}
                        onChange={handleSearchChange}
                      />
                      <span className="icon icon--left">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                            stroke="#00AAFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M21 21L16.65 16.65" stroke="#00AAFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="search__content-item">
                    <div className="input-field">
                      <input
                        type="text"
                        name="location"
                        placeholder="Locations"
                        value={searchParams.location}
                        onChange={handleSearchChange}
                      />
                      <span className="icon icon--left">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                            stroke="#00AAFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                            stroke="#00AAFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="search__content-item">
                    <div className="input-field">
                      <select
                        name="category"
                        className="js-example-basic-single w-100"
                        style={{ width: 'calc(100% - 60px)' }}
                        value={searchParams.category}
                        onChange={handleSearchChange}
                      >
                        <option value="">Select Category</option>
                        <option value="Product">Product</option>
                        <option value="Service">Service</option>
                        <option value="Other">Other</option>
                      </select>
                      <span className="icon icon--left">
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="#00AAFF"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="css-i6dzq1"
                        >
                          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                          <polyline points="2 17 12 22 22 17"></polyline>
                          <polyline points="2 12 12 17 22 12"></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="search__content-item">
                    <button className="btn btn--lg" type="submit">
                      <span className="icon--left">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div></div>

      <div className="mobile-search-filed">
        <div className="container">
          <div className="search-field-wrap">
            <div className="input-field">
              <input type="text" placeholder="Search for anything" />
              <span className="icon icon--left">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                    stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M17.5 17.5L13.875 13.875" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
            <span className="toggle-bar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11.25L12 20.25" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 3.75L12 8.25" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.75 18.75L18.7501 20.25" stroke="white" stroke-width="1.6" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M18.7501 3.75L18.75 15.75" stroke="white" stroke-width="1.6" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M21 15.75H16.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.25007 15.75L5.25 20.25" stroke="white" stroke-width="1.6" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M5.25 3.75L5.25007 12.75" stroke="white" stroke-width="1.6" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M3 12.75H7.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.25 8.25H9.75" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </span>
          </div>

        </div>
      </div>
      <div className="offcanvas-overlay"></div>


      <section className="section ad-list">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="list-sidebar mt-5">
                <div className="product-filter">
                  <h3>Product Filters</h3>
                  <span className="close">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.625 4.375L4.375 15.625"
                        stroke="#767E94"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.625 15.625L4.375 4.375"
                        stroke="#767E94"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <form onSubmit={handleFilterSubmit}>
                  <div className="accordion list-sidebar__accordion" id="accordionGroup">
                    <div className="accordion-item list-sidebar__accordion-item category">
                      <h2 className="accordion-header list-sidebar__accordion-header" id="category">
                        <button
                          className="accordion-button list-sidebar__accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#categoryCollapse"
                          aria-expanded="true"
                          aria-controls="categoryCollapse"
                        >
                          Category
                        </button>
                      </h2>
                      <div id="categoryCollapse" className="accordion-collapse collapse show" aria-labelledby="category" data-bs-parent="#accordionGroup">
                        <div className="accordion-body list-sidebar__accordion-body">
                          <div className="accordion list-sidebar__accordion-inner" id="subcategoryGroup">
                            <div className="accordion-item list-sidebar__accordion-inner-item">
                              <h2 className="accordion-header" id="product">
                                <div
                                  className="accordion-button list-sidebar__accordion-inner-button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#productCollapse"
                                  aria-expanded="true"
                                  aria-controls="productCollapse"
                                >
                                  <span className="list-sidebar__accordion-inner-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M18 20.25V3.75C18 2.92157 17.3284 2.25 16.5 2.25L7.5 2.25C6.67157 2.25 6 2.92157 6 3.75L6 20.25C6 21.0784 6.67157 21.75 7.5 21.75H16.5C17.3284 21.75 18 21.0784 18 20.25Z"
                                        stroke="#66CCFF"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path d="M9 5.25H15" stroke="#66CCFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                  Product
                                  <span className="icon icon--plus">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2.5 8H13.5" stroke="#AEB3C2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                      <path d="M8 2.5V13.5" stroke="#AEB3C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                  <span className="icon icon--minus">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2.5 8H13.5" stroke="#464D61" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </div>
                              </h2>
                              <div id="productCollapse" className="accordion-collapse collapse show" aria-labelledby="product" data-bs-parent="#subcategoryGroup">
                                <div className="accordion-body list-sidebar__accordion-inner-body">
                                  <div className="list-sidebar__accordion-inner-body--item">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="phones-gadgets"
                                        name="Phones and gadgets"
                                        data-type="product"
                                        onChange={handleFilterChange}
                                      />
                                      <label className="form-check-label" htmlFor="phones-gadgets">
                                        Phones and gadgets
                                      </label>
                                    </div>
                                  </div>
                                  <div className="list-sidebar__accordion-inner-body--item">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="stationaries"
                                        name="Stationaries"
                                        data-type="product"
                                        onChange={handleFilterChange}
                                      />
                                      <label className="form-check-label" htmlFor="stationaries">
                                        Stationaries
                                      </label>
                                    </div>
                                  </div>
                                  <div className="list-sidebar__accordion-inner-body--item">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="dry-cleaning"
                                        name="Dry cleaning"
                                        data-type="product"
                                        onChange={handleFilterChange}
                                      />
                                      <label className="form-check-label" htmlFor="dry-cleaning">
                                        Dry cleaning
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item list-sidebar__accordion-inner-item">
                              <h2 className="accordion-header" id="service">
                                <div
                                  className="accordion-button list-sidebar__accordion-inner-button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#serviceCollapse"
                                  aria-expanded="true"
                                  aria-controls="serviceCollapse"
                                >
                                  <span className="list-sidebar__accordion-inner-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M18 20.25V3.75C18 2.92157 17.3284 2.25 16.5 2.25L7.5 2.25C6.67157 2.25 6 2.92157 6 3.75L6 20.25C6 21.0784 6.67157 21.75 7.5 21.75H16.5C17.3284 21.75 18 21.0784 18 20.25Z"
                                        stroke="#66CCFF"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path d="M9 5.25H15" stroke="#66CCFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                  Service
                                  <span className="icon icon--plus">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2.5 8H13.5" stroke="#AEB3C2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                      <path d="M8 2.5V13.5" stroke="#AEB3C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                  <span className="icon icon--minus">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2.5 8H13.5" stroke="#464D61" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </div>
                              </h2>
                              <div id="serviceCollapse" className="accordion-collapse collapse show" aria-labelledby="service" data-bs-parent="#subcategoryGroup">
                                <div className="accordion-body list-sidebar__accordion-inner-body">
                                  <div className="list-sidebar__accordion-inner-body--item">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="barbing"
                                        name="Barbing"
                                        data-type="service"
                                        onChange={handleFilterChange}
                                      />
                                      <label className="form-check-label" htmlFor="barbing">
                                        Barbing
                                      </label>
                                    </div>
                                  </div>
                                  <div className="list-sidebar__accordion-inner-body--item">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="hair-stylist"
                                        name="Hair stylist"
                                        data-type="service"
                                        onChange={handleFilterChange}
                                      />
                                      <label className="form-check-label" htmlFor="hair-stylist">
                                        Hair stylist
                                      </label>
                                    </div>
                                  </div>
                                  <div className="list-sidebar__accordion-inner-body--item">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="additional-services"
                                        name="Additional services"
                                        data-type="service"
                                        onChange={handleFilterChange}
                                      />
                                      <label className="form-check-label" htmlFor="additional-services">
                                        Additional services
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item list-sidebar__accordion-inner-item">
                              <h2 className="accordion-header" id="other">
                                <div
                                  className="accordion-button list-sidebar__accordion-inner-button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#otherCollapse"
                                  aria-expanded="true"
                                  aria-controls="otherCollapse"
                                >
                                  <span className="list-sidebar__accordion-inner-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M18 20.25V3.75C18 2.92157 17.3284 2.25 16.5 2.25L7.5 2.25C6.67157 2.25 6 2.92157 6 3.75L6 20.25C6 21.0784 6.67157 21.75 7.5 21.75H16.5C17.3284 21.75 18 21.0784 18 20.25Z"
                                        stroke="#66CCFF"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path d="M9 5.25H15" stroke="#66CCFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                  Other
                                  <span className="icon icon--plus">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2.5 8H13.5" stroke="#AEB3C2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                      <path d="M8 2.5V13.5" stroke="#AEB3C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                  <span className="icon icon--minus">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2.5 8H13.5" stroke="#464D61" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </div>
                              </h2>
                              <div id="otherCollapse" className="accordion-collapse collapse show" aria-labelledby="other" data-bs-parent="#subcategoryGroup">
                                <div className="accordion-body list-sidebar__accordion-inner-body">
                                  <div className="list-sidebar__accordion-inner-body--item">
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="other-category"
                                        name="Other"
                                        data-type="other"
                                        onChange={handleFilterChange}
                                      />
                                      <label className="form-check-label" htmlFor="other-category">
                                        Other
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn--lg" type="submit">Apply Filters</button>
                  </div>
                </form>
              </div> </div>
            <div className="col-xl-9">
              <div className="ad-list__content row">
                {/* <div className=""> */}
                {filteredAds?.map((ad) => (
                  <div key={ad._id} className="col-lg-4">
                    <div className="cards cards--one cards--highlight">
                      <a href={`single-ad/${ad._id}`} className="cards__img-wrapper">
                        <img src={ad.images[0]} alt="card-img" className="img-fluid" />

                      </a>
                      <div className="cards__info">
                        <div className="cards__info-top">
                          <h6 className="text--body-4 cards__category-title">
                            <span className="icon">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 11L8 14.5L14 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M2 8L8 11.5L14 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M2 5L8 8.5L14 5L8 1.5L2 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </span>
                            {ad.category}
                          </h6>
                          <a href={`single-ad/${ad._id}`} className="text--body-3-600 cards__caption-title">{ad.adName}</a>
                        </div>
                        <div className="cards__info-bottom">
                          <h6 className="cards__location text--body-4">
                            <span className="icon">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10 10.625C11.3807 10.625 12.5 9.50571 12.5 8.125C12.5 6.74429 11.3807 5.625 10 5.625C8.61929 5.625 7.5 6.74429 7.5 8.125C7.5 9.50571 8.61929 10.625 10 10.625Z"
                                  stroke="#27C200"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M16.25 8.125C16.25 13.75 10 18.125 10 18.125C10 18.125 3.75 13.75 3.75 8.125C3.75 6.4674 4.40848 4.87769 5.58058 3.70558C6.75269 2.53348 8.3424 1.875 10 1.875C11.6576 1.875 13.2473 2.53348 14.4194 3.70558C15.5915 4.87769 16.25 6.4674 16.25 8.125V8.125Z"
                                  stroke="#27C200"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </span>
                            {ad.location}
                          </h6>
                          <span className="cards__price-title text--body-3-600">{ad.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* </div> */}
              </div>
              <div className="page-navigation">
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item page-navigation__item page-navigation__prev">
                      <a className="page-link page-navigation__link" href="#" aria-label="Previous">
                        <span aria-hidden="true">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.25 12H3.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="page-item page-navigation__item"><a className="page-link page-navigation__link active" href="#">1</a></li>
                    <li className="page-item page-navigation__item"><a className="page-link page-navigation__link" href="#">2</a></li>
                    <li className="page-item page-navigation__item"><a className="page-link page-navigation__link" href="#">3</a></li>
                    <li className="page-item page-navigation__item"><a className="page-link page-navigation__link" href="#">4</a></li>
                    <li className="page-item page-navigation__item"><a className="page-link page-navigation__link" href="#">5</a></li>
                    <li className="page-item page-navigation__item page-navigation__next">
                      <a className="page-link page-navigation__link" href="#" aria-label="Next">
                        <span aria-hidden="true">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 12H20.25" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
         




          </div>
        </div>
      </section>



    </div>
  )
}

export default AdList
