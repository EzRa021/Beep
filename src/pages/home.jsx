import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import { AdContext } from '../context/AdContext';

const Home = () => {
    const { allAds, loading } = useContext(AdContext);
    return (
        <>
            {/* <!-- header section end   -->
    <!-- Banner section start  --> */}
            <div className="banner banner--three">
                <div className="container">
                    <span className="banner__tag text--body-2-600">OVER 5,000 LIVE ADS</span>
                    <div className=" text-6xl font-bold banner__title text--display-2 animate__animated animate__bounceInDown">
                        WELCOME TO UNIVERSITY OF IBADAN ONLINE MINI MARKET.
                    </div>

                    {/* <!-- Search Box --> */}
                    <div className="search">
                        <form action="#">
                            <div className="search__content">
                                {/* <!-- search by keyword/title --> */}
                                <div className="search__content-item">
                                    <div className="input-field">
                                        <input type="text" placeholder="Browse diferent Ads Category" />
                                        <span className="icon icon--left">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                                    stroke="#00AAFF"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path d="M21 21L16.65 16.65" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- Search By location --> */}
                                <div className="search__content-item">
                                    <div className="input-field">
                                        <input type="text" placeholder="University of Ibadan" />
                                        <span className="icon icon--left">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                                                    stroke="#00AAFF"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                                                    stroke="#00AAFF"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- Select Category temprorary disable --> */}
                                <div className="search__content-item">
                                    <div className="input-field input-field--transparent">
                                        <select name="category" className="js-example-basic-single w-100">
                                            <option value="null" style={{ display: "none" }}>Select Category</option>
                                            <option value="1">Laptops</option>
                                            <option value="2">Phones</option>
                                            <option value="3">Electronics</option>
                                            <option value="4">Accessories</option>
                                            <option value="5">Home Appliances</option>
                                            <option value="6">Textbooks</option>
                                            <option value="7">Kitchen Utensils</option>
                                            <option value="8"></option>
                                        </select>
                                        <span className="icon icon--left">
                                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00AAFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                                <polyline points="2 17 12 22 22 17"></polyline>
                                                <polyline points="2 12 12 17 22 12"></polyline>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- Search Btn --> */}
                                <div className="search__content-item">
                                    <button className="btn btn--lg">
                                        <span className="icon--left">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                                    stroke="white"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path d="M21 21L16.65 16.65" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Banner section end   -->

    <!-- Poupular category Section start  --> */}
            <section className="section popular-category">
                <div className="container">
                    <h2 className="text--heading-1 section__title">Popular ADS Category</h2>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-6">
                            <div className="category-card">
                                <div className="category-card__icon">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M27 30.375V5.625C27 4.38236 25.9926 3.375 24.75 3.375L11.25 3.375C10.0074 3.375 9 4.38236 9 5.625V30.375C9 31.6176 10.0074 32.625 11.25 32.625H24.75C25.9926 32.625 27 31.6176 27 30.375Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M18 10.125C18.932 10.125 19.6875 9.36948 19.6875 8.4375C19.6875 7.50552 18.932 6.75 18 6.75C17.068 6.75 16.3125 7.50552 16.3125 8.4375C16.3125 9.36948 17.068 10.125 18 10.125Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <h5 className="text--body-2 category-card__title">Phones and Basic gadgets</h5>
                                <div className="category-card__view">
                                    <span className="first view-number">50+ Ads</span>
                                    <Link to="/market-place" className="second view-btn">
                                        View Ads
                                        <span className="icon">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.25 12H20.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14 5.25L20.75 12L14 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                            <div className="category-card">
                                <div className="category-card__icon">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M30 4.5H6C4.34315 4.5 3 5.84315 3 7.5V22.5C3 24.1569 4.34315 25.5 6 25.5H30C31.6569 25.5 33 24.1569 33 22.5V7.5C33 5.84315 31.6569 4.5 30 4.5Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path d="M12 31.5H24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M18 25.5V31.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <h5 className="text--body-2 category-card__title">Computer Services</h5>
                                <div className="category-card__view">
                                    <span className="first view-number">50+ Ads</span>
                                    <Link to="/market-place" className="second view-btn">
                                        View Ads
                                        <span className="icon">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.25 12H20.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14 5.25L20.75 12L14 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                            <div className="category-card">
                                <div className="category-card__icon">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#vehicles)">
                                            <path d="M-0.168945 16.2844H35.2686" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M32.7373 26.4094V30.2063C32.7373 30.542 32.604 30.8639 32.3666 31.1012C32.1293 31.3386 31.8073 31.4719 31.4717 31.4719H27.6748C27.3391 31.4719 27.0172 31.3386 26.7799 31.1012C26.5425 30.8639 26.4092 30.542 26.4092 30.2063V26.4094"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M8.69043 26.4094V30.2063C8.69043 30.542 8.55709 30.8639 8.31974 31.1012C8.08239 31.3386 7.76047 31.4719 7.4248 31.4719H3.62793C3.29227 31.4719 2.97035 31.3386 2.733 31.1012C2.49565 30.8639 2.3623 30.542 2.3623 30.2063V26.4094"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path d="M7.4248 21.3469H9.95606" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M25.1436 21.3469H27.6748" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M32.7373 16.2844L28.0089 5.6454C27.9094 5.42169 27.7472 5.23161 27.542 5.09821C27.3367 4.9648 27.0971 4.8938 26.8523 4.8938H8.2473C8.00249 4.8938 7.76292 4.9648 7.55765 5.09821C7.35237 5.23161 7.19019 5.42169 7.09076 5.6454L2.3623 16.2844V26.4094H32.7373V16.2844Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="vehicles">
                                                <rect width="36" height="36" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h5 className="text--body-2 category-card__title">Uber services</h5>
                                <div className="category-card__view">
                                    <span className="first view-number">50+ Ads</span>
                                    <Link to="/market-place" className="second view-btn">
                                        View Ads
                                        <span className="icon">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.25 12H20.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14 5.25L20.75 12L14 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                            <div className="category-card">
                                <div className="category-card__icon">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.75 19.6295V29.2499C6.75 29.5483 6.86853 29.8345 7.07951 30.0454C7.29048 30.2564 7.57663 30.3749 7.875 30.3749H28.125C28.4234 30.3749 28.7095 30.2564 28.9205 30.0454C29.1315 29.8345 29.25 29.5483 29.25 29.2499V19.6297"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M7.59859 5.625H28.4014C28.6459 5.625 28.8837 5.70464 29.0789 5.85186C29.2741 5.99908 29.416 6.20587 29.4831 6.44094L31.5 13.5H4.5L6.51687 6.44094C6.58404 6.20587 6.72594 5.99908 6.92112 5.85186C7.11629 5.70464 7.35411 5.625 7.59859 5.625Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13.5 13.5V15.75C13.5 16.9435 13.0259 18.0881 12.182 18.932C11.3381 19.7759 10.1935 20.25 9 20.25C7.80653 20.25 6.66193 19.7759 5.81802 18.932C4.97411 18.0881 4.5 16.9435 4.5 15.75V13.5"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M22.5 13.5V15.75C22.5 16.9435 22.0259 18.0881 21.182 18.932C20.3381 19.7759 19.1935 20.25 18 20.25C16.8065 20.25 15.6619 19.7759 14.818 18.932C13.9741 18.0881 13.5 16.9435 13.5 15.75V13.5"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M31.5 13.5V15.75C31.5 16.9435 31.0259 18.0881 30.182 18.932C29.3381 19.7759 28.1935 20.25 27 20.25C25.8065 20.25 24.6619 19.7759 23.818 18.932C22.9741 18.0881 22.5 16.9435 22.5 15.75V13.5"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h5 className="text--body-2 category-card__title">Real Estate & Accomodations</h5>
                                <div className="category-card__view">
                                    <span className="first view-number">50+ Ads</span>
                                    <Link to="/market-place" className="second view-btn">
                                        View Ads
                                        <span className="icon">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.25 12H20.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14 5.25L20.75 12L14 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                            <div className="category-card">
                                <div className="category-card__icon">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M26.0145 5.21258L20.1136 11.1135L20.9091 15.0909L24.8866 15.8864L30.7875 9.98555L30.7881 9.98531C31.5184 11.7094 31.6931 13.6183 31.2878 15.4464C30.8825 17.2744 29.9173 18.9306 28.5266 20.1844C27.1359 21.4382 25.3889 22.2272 23.5288 22.4416C21.6687 22.656 19.788 22.2852 18.1485 21.3807L18.1487 21.3804L10.2616 30.5114C9.62853 31.1438 8.77028 31.4989 7.8755 31.4986C6.98073 31.4983 6.12268 31.1428 5.48998 30.5101C4.85728 29.8774 4.50172 29.0193 4.50146 28.1246C4.50121 27.2298 4.85628 26.3715 5.48862 25.7385L14.6196 17.8515L14.6194 17.8516C13.7149 16.2121 13.344 14.3314 13.5585 12.4713C13.7729 10.6112 14.5619 8.86417 15.8157 7.47349C17.0695 6.0828 18.7257 5.11761 20.5537 4.71228C22.3817 4.30694 24.2906 4.48162 26.0148 5.21201L26.0145 5.21258Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h5 className="text--body-2 category-card__title">Basic School Essentials</h5>
                                <div className="category-card__view">
                                    <span className="first view-number">50+ Ads</span>
                                    <Link to="/market-place" className="second view-btn">
                                        View Ads
                                        <span className="icon">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.25 12H20.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14 5.25L20.75 12L14 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                            <div className="category-card">
                                <div className="category-card__icon">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M30.375 30.375V16.2477C30.375 16.0909 30.3422 15.9359 30.2788 15.7925C30.2154 15.6492 30.1228 15.5207 30.0068 15.4152L18.756 5.18687C18.5489 4.9986 18.2791 4.89428 17.9992 4.89429C17.7193 4.8943 17.4495 4.99863 17.2424 5.18692L5.99317 15.4152C5.87721 15.5207 5.78455 15.6492 5.72115 15.7925C5.65775 15.9359 5.625 16.0909 5.625 16.2476V30.375"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M2.25 30.375H33.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M21.374 30.3739V22.4989C21.374 22.2005 21.2555 21.9144 21.0445 21.7034C20.8335 21.4924 20.5474 21.3739 20.249 21.3739H15.749C15.4507 21.3739 15.1645 21.4924 14.9535 21.7034C14.7426 21.9144 14.624 22.2005 14.624 22.4989V30.3739"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h5 className="text--body-2 category-card__title">Home & Living</h5>
                                <div className="category-card__view">
                                    <span className="first view-number">40+ Ads</span>
                                    <Link to="/market-place" className="second view-btn">
                                        View Ads
                                        <span className="icon">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.25 12H20.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14 5.25L20.75 12L14 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                            <div className="category-card">
                                <div className="category-card__icon">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M33.8509 17.126L30.375 18.8639L25.875 10.2461L29.3863 8.49047C29.6501 8.35857 29.9552 8.33554 30.2358 8.42635C30.5164 8.51716 30.7501 8.71453 30.8867 8.97598L34.345 15.599C34.4142 15.7314 34.4563 15.8763 34.4688 16.0252C34.4814 16.1741 34.4642 16.3239 34.4182 16.4661C34.3722 16.6082 34.2983 16.7398 34.2009 16.8531C34.1035 16.9664 33.9846 17.0591 33.8509 17.126V17.126Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M5.62515 18.7133L2.14923 16.9753C2.0156 16.9085 1.89662 16.8157 1.79923 16.7025C1.70184 16.5892 1.62799 16.4576 1.58199 16.3155C1.53599 16.1733 1.51877 16.0234 1.53132 15.8746C1.54388 15.7257 1.58596 15.5808 1.65511 15.4484L5.1135 8.82535C5.25001 8.5639 5.48375 8.36652 5.76436 8.27572C6.04498 8.18491 6.35004 8.20794 6.61384 8.33984L10.1251 10.0955L5.62515 18.7133Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M30.375 18.864L28.125 21.4962L22.9504 26.6708C22.813 26.8082 22.6424 26.9076 22.4552 26.9595C22.268 27.0113 22.0705 27.0138 21.8821 26.9667L13.7319 24.9292C13.579 24.8909 13.4359 24.821 13.3117 24.724L5.625 18.7133"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M28.1247 21.4962L21.9372 16.9962L20.1372 18.3462C19.3583 18.9304 18.4109 19.2462 17.4372 19.2462C16.4635 19.2462 15.5161 18.9304 14.7372 18.3462L13.9749 17.7745C13.846 17.6778 13.7393 17.5545 13.6621 17.413C13.585 17.2715 13.5392 17.115 13.5277 16.9542C13.5163 16.7935 13.5396 16.6321 13.5959 16.4811C13.6523 16.3301 13.7404 16.193 13.8544 16.079L19.3577 10.5757C19.4622 10.4713 19.5862 10.3884 19.7227 10.3319C19.8592 10.2753 20.0054 10.2462 20.1532 10.2462H25.8747"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M10.2056 10.0953L17.4224 7.99137C17.6802 7.91622 17.9564 7.93575 18.2011 8.04645L23.0623 10.2461" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.75 29.9337L11.5116 28.8741C11.3396 28.8311 11.1803 28.748 11.0465 28.6317L7.875 25.875" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h5 className="text--body-2 category-card__title">Nearest Services</h5>
                                <div className="category-card__view">
                                    <span className="first view-number">50+ Ads</span>
                                    <Link to="/ad-list" className="second view-btn">
                                        View Ads
                                        <span className="icon">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.25 12H20.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14 5.25L20.75 12L14 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                            <div className="category-card">
                                <div className="category-card__icon">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.125 13.5L18 4.5L34.875 13.5L18 22.5L1.125 13.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M26.4375 33.75V18L18 13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M30.9375 15.6V23.267C30.938 23.5097 30.8595 23.7459 30.714 23.9401C29.7666 25.2007 25.7699 29.8125 18 29.8125C10.2301 29.8125 6.23337 25.2007 5.28603 23.9401C5.14049 23.7459 5.06204 23.5097 5.0625 23.267V15.6"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h5 className="text--body-2 category-card__title">Education </h5>
                                <div className="category-card__view">
                                    <span className="first view-number">50+ Ads</span>
                                    <Link to="/market-place" className="second view-btn">
                                        View Ads
                                        <span className="icon">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.25 12H20.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14 5.25L20.75 12L14 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Poupular category Section end   -->

    <!-- recent-post section start  --> */}
            
    <section className="section recent-post">
      <div className="container">
        <h2 className="text--heading-1 section__title">Our Popular Ads</h2>
        <div className="row">
          {loading ? (
            <div className=' flex justify-center items-center '>njciyvcuvhvcjhvhvajhvhvhavh<svg class="animate-spin text-blue-300 h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            
          </svg></div> // You can replace this with a spinner or a loading component
          ) : (
            allAds?.slice(0, 12).map((ad) => (
              <div className="col-xl-3 col-md-6" key={ad._id}>
                <div className="cards cards--one cards--highlight">
                  <Link to={`single-ad/${ad._id}`} className="cards__img-wrapper">
                    <img src={ad.images[0]} alt="card-img" className="img-fluid" />
                  </Link>
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
                      </h6>
                      <Link to="/market-place" className="text--body-3-600 cards__caption-title">
                        {ad.adName}
                      </Link>
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
            ))
          )}
        </div>
      </div>
    </section>
            {/* // <!-- recent-post section end -->

    // <!-- work section start  --> */}
            <section className="section work bgcolor--gray-10">
                <div className="container">
                    <h2 className="text--heading-1 section__title">How it Works</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="work-card">
                                <span className="work-card__icon">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.2" d="M25 31.25C31.9036 31.25 37.5 25.6536 37.5 18.75C37.5 11.8464 31.9036 6.25 25 6.25C18.0964 6.25 12.5 11.8464 12.5 18.75C12.5 25.6536 18.0964 31.25 25 31.25Z" fill="#FF4F4F"></path>
                                        <path d="M34.375 10.9375H43.75" stroke="#FF4F4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M39.0625 6.25V15.625" stroke="#FF4F4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M6.05255 42.1857C7.97357 38.8606 10.7358 36.0996 14.0617 34.18C17.3876 32.2605 21.1601 31.25 25.0002 31.25C28.8403 31.25 32.6128 32.2606 35.9387 34.1803C39.2646 36.0999 42.0267 38.8609 43.9477 42.1861"
                                            stroke="#FF4F4F"
                                            stroke-width="2.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M36.7287 23.0826C35.8932 25.3386 34.4241 27.3054 32.4978 28.7467C30.5716 30.188 28.2702 31.0424 25.8701 31.2075C23.47 31.3725 21.0733 30.8411 18.9679 29.677C16.8625 28.5129 15.138 26.7657 14.0015 24.6453C12.865 22.5249 12.3649 20.1215 12.5613 17.7237C12.7576 15.326 13.6421 13.0359 15.1084 11.1287C16.5747 9.22143 18.5605 7.77809 20.8272 6.97207C23.094 6.16604 25.5452 6.03161 27.8865 6.58493"
                                            stroke="#FF4F4F"
                                            stroke-width="2.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="work-card__count-number">
                                    01
                                </span>
                                <h2 className="work-card__title text--body-1" style={{ textAlign: "justify" }}>Create Account</h2>
                                <p className="work-card__description text--body-3">Everything you ever needed in one place                           </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="work-card">
                                <span className="work-card__icon">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.2"
                                            d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z"
                                            fill="#FFBF00"
                                        ></path>
                                        <path d="M18.75 25.0012H31.25" stroke="#FFBF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M18.75 31.2512H31.25" stroke="#FFBF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z"
                                            stroke="#FFBF00"
                                            stroke-width="2.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path d="M15.625 4.68872V10.9387" stroke="#FFBF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M25 4.68872V10.9387" stroke="#FFBF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M34.375 4.68872V10.9387" stroke="#FFBF00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>
                                <span className="work-card__count-number">
                                    02
                                </span>
                                <h2 className="work-card__title text--body-1" style={{ textAlign: "justify" }}>Post Ads</h2>
                                <p className="work-card__description text--body-3">Reach thousands of potential buyers quickly and easily by posting your ads on our marketplace</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="work-card">
                                <span className="work-card__icon">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.2"
                                            d="M6.46637 14.5736C6.32466 14.814 6.24995 15.0879 6.25 15.3669V34.633C6.25 34.9103 6.32377 35.1825 6.46374 35.4219C6.6037 35.6612 6.80483 35.8589 7.04647 35.9949L24.234 45.6628C24.4678 45.7944 24.7317 45.8635 25 45.8635L25.002 45.8635L25.1854 25L6.46641 14.5736L6.46637 14.5736Z"
                                            fill="#27C200"
                                        ></path>
                                        <path
                                            d="M43.75 34.633V15.3669C43.75 15.0897 43.6762 14.8174 43.5363 14.5781C43.3963 14.3388 43.1952 14.141 42.9535 14.0051L25.766 4.33714C25.5322 4.20558 25.2683 4.13647 25 4.13647C24.7317 4.13647 24.4678 4.20558 24.234 4.33714L7.04647 14.0051C6.80483 14.141 6.6037 14.3388 6.46374 14.5781C6.32377 14.8174 6.25 15.0897 6.25 15.3669V34.633C6.25 34.9103 6.32377 35.1825 6.46374 35.4219C6.6037 35.6612 6.80483 35.859 7.04647 35.9949L24.234 45.6628C24.4678 45.7944 24.7317 45.8635 25 45.8635C25.2683 45.8635 25.5322 45.7944 25.766 45.6628L42.9535 35.9949C43.1952 35.859 43.3963 35.6612 43.5363 35.4219C43.6762 35.1825 43.75 34.9103 43.75 34.633Z"
                                            stroke="#27C200"
                                            stroke-width="2.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path d="M34.5746 29.7873V19.6311L15.625 9.17969" stroke="#27C200" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M43.5345 14.5756L25.1853 25L6.46631 14.5736" stroke="#27C200" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M25.1853 25L25.002 45.8635" stroke="#27C200" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>
                                <span className="work-card__count-number">
                                    03
                                </span>
                                <h2 className="work-card__title text --body-1" style={{ textAlign: "justify" }}>Start Earning</h2>
                                <p className="work-card__description text--body-3">Turn your items into income effortlessly! Join our marketplace and start earning today. List your products, reach a global audience, and watch the sales roll in.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section price-plan">
                <div className="container">
                    <h2 className="price-plan__title text--heading-1">Get Membership Now</h2>
                    <p className="price-plan__brief text--body-3">Unlock exclusive benefits and features tailored to enhance your marketplace experience!</p>
                    <nav style={{ textAlign: "center" }}>
                        <div className="price-plan__nav">
                            <button className="price-plan__link active" type="button">Monthly</button>
                            <button className="price-plan__link" type="button">Annually</button>
                        </div>
                    </nav>
                    <div id="nav-tabContent">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6">
                                <div className="plan-card">
                                    <div className="plan-card__top">
                                        <h2 className="plan-card__title text--body-1">Basic</h2>
                                        <p className="plan-card__description">Access essential features to buy and sell with ease, and start exploring our marketplace today!</p>
                                        <div className="plan-card__price">
                                            <h5 className="text--display-3">₦3,000</h5>
                                            <span className="text--body-3">/month</span>
                                        </div>
                                        <Link href="#" className="plan-card__select-pack btn btn--bg w-100" data-bs-toggle="modal" data-bs-target="#planModal">
                                            Choose Plan
                                            <span className="icon--right">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.75 12H20.25" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="plan-card__bottom">
                                        <div className="plan-card__package">
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Post 3 Ads per week</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Multiple-images</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Basic customer support</h5>
                                            </div>
                                            <div className="plan-card__package-list">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Featured ads</h5>
                                            </div>
                                            <div className="plan-card__package-list">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Special ads badge</h5>
                                            </div>
                                            <div className="plan-card__package-list">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Beep membership</h5>
                                            </div>
                                            <div className="plan-card__package-list">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Advertise your brand on Beep</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="plan-card plan-card--active">
                                    <div className="plan-card__top">
                                        <h2 className="plan-card__title text--body-1">Standard</h2>
                                        <p className="plan-card__description">
                                            Enjoy enhanced listing options and priority support to boost your marketplace experience!
                                        </p>
                                        <div className="plan-card__price">
                                            <h5 className="text--display-3">₦5,000</h5>
                                            <span className="text--body-3">/month</span>
                                        </div>

                                        <Link href="#" className="plan-card__select-pack btn btn--bg w-100" data-bs-toggle="modal" data-bs-target="#planModal">
                                            Choose Plan
                                            <span className="icon--right">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.75 12H20.25" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="plan-card__bottom">
                                        <div className="plan-card__package">
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Post 3 Ads per week</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Multiple-images</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Basic customer support</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Featured ads</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Special ads badge</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Beep membership</h5>
                                            </div>
                                            <div className="plan-card__package-list">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Advertise your brand on Beeps</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="plan-card">
                                    <div className="plan-card__top">
                                        <h2 className="plan-card__title text--body-1">Premium</h2>
                                        <p className="plan-card__description">
                                            Gain access to top-tier features and maximize your success in our marketplace!
                                        </p>
                                        <div className="plan-card__price">
                                            <h5 className="text--display-3">₦10,000</h5>
                                            <span className="text--body-3">/month</span>
                                        </div>
                                        <Link href="#" className="plan-card__select-pack btn btn--bg w-100" data-bs-toggle="modal" data-bs-target="#planModal">
                                            Choose Plan
                                            <span className="icon--right">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.75 12H20.25" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="plan-card__bottom">
                                        <div className="plan-card__package">
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Post 3 Ads per week</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Multiple-images</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Basic customer support</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Featured ads</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Special ads badge</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Beep membership</h5>
                                            </div>
                                            <div className="plan-card__package-list active">
                                                <span className="icon">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                <h5 className="text--body-3">Advertise your brand on Beeps</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="subscribe bgcolor--g">
                <div className="container">
                    <div className="subscribe__content">
                        <div className="subscribe__left">
                            <h2 className="subscribe__title text--heading-2">Subscribe to our newsletter</h2>
                            <p className="text--body-3 subscribe__description" style={{ textAlign: "justify" }}>Stay updated with the latest news, special offers, and exclusive content delivered straight to your inbox.
                            </p>
                        </div>
                        <div className="subscribe__right">
                            <form action="#">
                                <div className="subscribe__input-group">
                                    <span className="icon">
                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 1.25L10 9.5L1 1.25" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M1 1.25H19V14C19 14.1989 18.921 14.3897 18.7803 14.5303C18.6397 14.671 18.4489 14.75 18.25 14.75H1.75C1.55109 14.75 1.36032 14.671 1.21967 14.5303C1.07902 14.3897 1 14.1989 1 14V1.25Z"
                                                stroke="#00AAFF"
                                                stroke-width="1.6"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path d="M8.36357 8L1.2312 14.538" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.7687 14.5381L11.6362 8" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <input type="text" placeholder="Email Address" />
                                    <button className="btn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>


    )
}

export default Home