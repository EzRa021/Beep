import React from 'react'
import { useContext } from 'react'
import { AdContext } from '../context/AdContext';

const MarketPlace = () => {
    const { allAds } = useContext(AdContext);
    return (
        <div>
            {/* <!-- recent-post section start  --> */}
            <section className="section recent-post">
                <div className="container">
                    <h2 className="text--heading-1 section__title">
                        MARKETPLACE..
                    </h2>
                    <div className="row">
                        
                        {allAds?.map((ad, index) => (
                            <div className="col-xl-3 col-md-6">
                                <div className="cards cards--one">
                                    <a href={`/single-ad/${ad._id}`} className="cards__img-wrapper">
                                        <img src={ad.images[0]} alt="card-img" className="img-fluid" />
                                    </a>
                                    <div className="cards__info">
                                        <div className="cards__info-top">
                                            <h6 className="text--body-4 cards__category-title">
                                                <span className="icon">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 11L8 14.5L14 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2 8L8 11.5L14 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M2 5L8 8.5L14 5L8 1.5L2 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                {ad.adName}
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title"><b> Soup Kitchen, we prepare all kinds of soup</b></a>
                                        </div>
                                        <div className="cards__info-bottom">
                                            <h6 className="cards__location text--body-4">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M10 10.625C11.3807 10.625 12.5 9.50571 12.5 8.125C12.5 6.74429 11.3807 5.625 10 5.625C8.61929 5.625 7.5 6.74429 7.5 8.125C7.5 9.50571 8.61929 10.625 10 10.625Z"
                                                            stroke="#27C200"
                                                            stroke-width="1.2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M16.25 8.125C16.25 13.75 10 18.125 10 18.125C10 18.125 3.75 13.75 3.75 8.125C3.75 6.4674 4.40848 4.87769 5.58058 3.70558C6.75269 2.53348 8.3424 1.875 10 1.875C11.6576 1.875 13.2473 2.53348 14.4194 3.70558C15.5915 4.87769 16.25 6.4674 16.25 8.125V8.125Z"
                                                            stroke="#27C200"
                                                            stroke-width="1.2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                {ad.location}
                                            </h6>
                                            <span className="cards__price-title text--body-3-600"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))

                        }

                    </div>
                    <div className="recent-post__btn">
                        <a href="blog-list.html" className="btn">
                            View All
                            <span className="icon--right">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 12H20.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M14 5.25L20.75 12L14 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- recent-post section end --> */}

            {/* <!-- top-category section start  --> */}
            <section className="section top-category bgcolor--gray-10">
                <div className="container">
                    <h2 className="text--heading-1 section__title">
                        Top Category
                    </h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categorylist-card">
                                <div className="categorylist-card__top">
                                    <div className="categorylist-card__top-left">
                                        <h2 className="categorylist-card__title text--body-2-600">Electronics</h2>
                                        <span className="categorylist-card__item-available">(69,114)</span>
                                    </div>
                                    <div className="categorylist-card__top-right">
                                        <div className="categorylist-card__icon">
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M27 30.375V5.625C27 4.38236 25.9926 3.375 24.75 3.375L11.25 3.375C10.0074 3.375 9 4.38236 9 5.625V30.375C9 31.6176 10.0074 32.625 11.25 32.625H24.75C25.9926 32.625 27 31.6176 27 30.375Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path d="M13.5 7.875H22.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="categorylist-card__bottom">
                                    <ul className="categorylist-card__list">
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Laptops, Desktop Computers, Tablets
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                TVs
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Cameras, Camcorders &amp; Accessories
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Laptops, Other Electronics
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                View All
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categorylist-card">
                                <div className="categorylist-card__top">
                                    <div className="categorylist-card__top-left">
                                        <h2 className="categorylist-card__title text--body-2-600">Mobile Phone</h2>
                                        <span className="categorylist-card__item-available">(62,099)</span>
                                    </div>
                                    <div className="categorylist-card__top-right">
                                        <div className="categorylist-card__icon">
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.75 27L29.25 27C30.4926 27 31.5 25.9926 31.5 24.75L31.5 9C31.5 7.75736 30.4926 6.75 29.25 6.75L6.75 6.75C5.50736 6.75 4.5 7.75736 4.5 9L4.5 24.75C4.5 25.9926 5.50736 27 6.75 27Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path d="M22.5 31.5H13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="categorylist-card__bottom">
                                    <ul className="categorylist-card__list">
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Mobile Phone
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                TVs
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Mobile Phone Accessories
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                SIM Cards
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                View All
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categorylist-card">
                                <div className="categorylist-card__top">
                                    <div className="categorylist-card__top-left">
                                        <h2 className="categorylist-card__title text--body-2-600">Vehicles</h2>
                                        <span className="categorylist-card__item-available">(69,114)</span>
                                    </div>
                                    <div className="categorylist-card__top-right">
                                        <div className="categorylist-card__icon">
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.25 16.875H33.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path
                                                    d="M31.5 25.875V29.25C31.5 29.5484 31.3815 29.8345 31.1705 30.0455C30.9595 30.2565 30.6734 30.375 30.375 30.375H27C26.7016 30.375 26.4155 30.2565 26.2045 30.0455C25.9935 29.8345 25.875 29.5484 25.875 29.25V25.875"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M10.125 25.875V29.25C10.125 29.5484 10.0065 29.8345 9.79549 30.0455C9.58452 30.2565 9.29837 30.375 9 30.375H5.625C5.32663 30.375 5.04048 30.2565 4.82951 30.0455C4.61853 29.8345 4.5 29.5484 4.5 29.25V25.875"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path d="M9 21.375H11.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M24.75 21.375H27" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path
                                                    d="M31.5 16.875L27.2969 7.41809C27.2085 7.21923 27.0644 7.05028 26.8819 6.9317C26.6995 6.81311 26.4865 6.75 26.2689 6.75H9.73111C9.51349 6.75 9.30055 6.81311 9.11808 6.9317C8.93561 7.05028 8.79145 7.21923 8.70307 7.41809L4.5 16.875V25.875H31.5V16.875Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="categorylist-card__bottom">
                                    <ul className="categorylist-card__list">
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Car
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Motorbikes &amp; Bicycles
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Three Wheelers
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Trucks
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                View All
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categorylist-card">
                                <div className="categorylist-card__top">
                                    <div className="categorylist-card__top-left">
                                        <h2 className="categorylist-card__title text--body-2-600">Property</h2>
                                        <span className="categorylist-card__item-available">(69,114)</span>
                                    </div>
                                    <div className="categorylist-card__top-right">
                                        <div className="categorylist-card__icon">
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.75 19.6296V29.2501C6.75 29.5484 6.86853 29.8346 7.07951 30.0455C7.29048 30.2565 7.57663 30.3751 7.875 30.3751H28.125C28.4234 30.3751 28.7095 30.2565 28.9205 30.0455C29.1315 29.8346 29.25 29.5484 29.25 29.2501V19.6299"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M7.59859 5.625H28.4014C28.6459 5.625 28.8837 5.70464 29.0789 5.85186C29.2741 5.99908 29.416 6.20587 29.4831 6.44094L31.5 13.5H4.5L6.51687 6.44094C6.58404 6.20587 6.72594 5.99908 6.92112 5.85186C7.11629 5.70464 7.35411 5.625 7.59859 5.625Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M13.5 13.5V15.75C13.5 16.9435 13.0259 18.0881 12.182 18.932C11.3381 19.7759 10.1935 20.25 9 20.25C7.80653 20.25 6.66193 19.7759 5.81802 18.932C4.97411 18.0881 4.5 16.9435 4.5 15.75V13.5"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M22.5 13.5V15.75C22.5 16.9435 22.0259 18.0881 21.182 18.932C20.3381 19.7759 19.1935 20.25 18 20.25C16.8065 20.25 15.6619 19.7759 14.818 18.932C13.9741 18.0881 13.5 16.9435 13.5 15.75V13.5"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M31.5 13.5V15.75C31.5 16.9435 31.0259 18.0881 30.182 18.932C29.3381 19.7759 28.1935 20.25 27 20.25C25.8065 20.25 24.6619 19.7759 23.818 18.932C22.9741 18.0881 22.5 16.9435 22.5 15.75V13.5"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="categorylist-card__bottom">
                                    <ul className="categorylist-card__list">
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Apartments for Salse
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                New Developments
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Commercial Properties for Sale
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Property Tools &amp; Services
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                View All
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categorylist-card">
                                <div className="categorylist-card__top">
                                    <div className="categorylist-card__top-left">
                                        <h2 className="categorylist-card__title text--body-2-600">Home &amp; living</h2>
                                        <span className="categorylist-card__item-available">(69,114)</span>
                                    </div>
                                    <div className="categorylist-card__top-right">
                                        <div className="categorylist-card__icon">
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M27 30.375V5.625C27 4.38236 25.9926 3.375 24.75 3.375L11.25 3.375C10.0074 3.375 9 4.38236 9 5.625V30.375C9 31.6176 10.0074 32.625 11.25 32.625H24.75C25.9926 32.625 27 31.6176 27 30.375Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path d="M13.5 7.875H22.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="categorylist-card__bottom">
                                    <ul className="categorylist-card__list">
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Living Room Furniture
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Kitchen &amp; Dining Furniture
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Bedroom Furniture
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Office &amp; Shop Furniture
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                View All
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categorylist-card">
                                <div className="categorylist-card__top">
                                    <div className="categorylist-card__top-left">
                                        <h2 className="categorylist-card__title text--body-2-600">Fashion &amp; Beauty</h2>
                                        <span className="categorylist-card__item-available">(37,114)</span>
                                    </div>
                                    <div className="categorylist-card__top-right">
                                        <div className="categorylist-card__icon">
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M27 16.875H30.8047C31.0136 16.875 31.2184 16.8168 31.3962 16.707C31.5739 16.5971 31.7175 16.44 31.8109 16.2531L34.3991 11.0769C34.5277 10.8197 34.5529 10.523 34.4696 10.2478C34.3862 9.97253 34.2007 9.73966 33.951 9.59699L27 5.625"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M9.00001 16.875H5.1953C4.98637 16.875 4.78157 16.8168 4.60385 16.707C4.42613 16.5971 4.2825 16.44 4.18907 16.2531L1.60095 11.0769C1.47235 10.8197 1.44712 10.523 1.53045 10.2478C1.61378 9.97253 1.79935 9.73966 2.04902 9.59699L9.00001 5.625"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path
                                                    d="M22.5 5.625C22.5 6.81847 22.0259 7.96307 21.182 8.80698C20.3381 9.65089 19.1935 10.125 18 10.125C16.8065 10.125 15.6619 9.65089 14.818 8.80698C13.9741 7.96307 13.5 6.81847 13.5 5.625H9V29.25C9 29.5484 9.11853 29.8345 9.32951 30.0455C9.54048 30.2565 9.82663 30.375 10.125 30.375H25.875C26.1734 30.375 26.4595 30.2565 26.6705 30.0455C26.8815 29.8345 27 29.5484 27 29.25V5.625H22.5Z"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="categorylist-card__bottom">
                                    <ul className="categorylist-card__list">
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Clothing &amp; Accessories
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Jewellery
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Watches
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                Bags
                                            </a>
                                        </li>
                                        <li className="categorylist-card__list-item">
                                            <a href="#" className="categorylist-card__list-link text--body-3">
                                                <span className="icon">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                                View All
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- top-category section end  --> */}



            {/* <!-- counter section start  --> */}
            {/* <!-- counter section end  --> */}

            {/* <!-- download section start  --> */}
            <section className="download section pb-lg-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="/src/images/bg/mobile.png" className="download__img-content w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="download__content">
                                <h2 className="download__title text--heading-1">Download our mobile app</h2>
                                <p className="download__brief text--body-2">
                                    We are working on our mobile app, stay tune for update.
                                </p>
                                <div className="download__apps-store">
                                    <a href="#" className="app">
                                        <div className="app-logo">
                                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#googlesPlay)">
                                                    <path
                                                        d="M20.087 15.4109L6.29177 1.48889L23.8438 11.6301L20.087 15.4109ZM2.69017 0.670898C1.87737 1.09922 1.33337 1.87857 1.33337 2.89301V30.6533C1.33337 31.6677 1.87737 32.4471 2.69017 32.8754L18.7334 16.7699L2.69017 0.670898ZM29.271 14.8634L25.5894 12.7186L21.4822 16.7764L25.5894 20.8341L29.3462 18.6893C30.471 17.7892 30.471 15.7635 29.271 14.8634ZM6.29177 32.0638L23.8438 21.9226L20.087 18.1418L6.29177 32.0638Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="googlesPlay">
                                                        <rect width="32" height="32.2045" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="app-info">
                                            <h5 className="text--body-5">Get it now</h5>
                                            <h2 className="text--body-3-600">Google Play</h2>
                                        </div>
                                    </a>
                                    <a href="#" className="app">
                                        <div className="app-logo">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#appsStore)">
                                                    <path
                                                        d="M29.056 24.938C28.5893 26.0249 28.013 27.0614 27.336 28.0313C26.4306 29.3213 25.69 30.214 25.1193 30.71C24.2346 31.5233 23.286 31.9407 22.2706 31.964C21.542 31.964 20.6633 31.7567 19.64 31.336C18.6133 30.9173 17.67 30.7093 16.8073 30.7093C15.9026 30.7093 14.9326 30.9173 13.8946 31.336C12.8553 31.7567 12.018 31.976 11.378 31.9973C10.4046 32.0393 9.43396 31.6107 8.46463 30.71C7.84663 30.17 7.07396 29.246 6.14729 27.9367C5.15329 26.538 4.33596 24.9167 3.69596 23.0673C3.01063 21.0707 2.66663 19.1367 2.66663 17.2647C2.66663 15.12 3.12996 13.2707 4.05796 11.7207C4.78796 10.4753 5.75796 9.494 6.97263 8.77267C8.16428 8.05956 9.52398 7.67581 10.9126 7.66067C11.686 7.66067 12.7 7.9 13.9606 8.37C15.2173 8.84133 16.024 9.08067 16.378 9.08067C16.642 9.08067 17.5386 8.80067 19.058 8.24333C20.4953 7.726 21.708 7.512 22.7013 7.59667C25.394 7.814 27.4166 8.87533 28.7613 10.7873C26.354 12.246 25.1626 14.2893 25.1866 16.9107C25.208 18.9527 25.9486 20.652 27.4046 22.0007C28.0646 22.6273 28.8013 23.1113 29.6206 23.4547C29.4488 23.9552 29.2605 24.4499 29.056 24.938ZM22.8813 0.640667C22.8813 2.24067 22.2966 3.73533 21.1313 5.118C19.7246 6.76267 18.024 7.71267 16.1793 7.56267C16.1545 7.36139 16.142 7.15879 16.142 6.956C16.142 5.42 16.8106 3.776 17.9986 2.43133C18.592 1.75067 19.3453 1.18467 20.26 0.733333C21.1733 0.288667 22.036 0.0426667 22.848 0C22.8713 0.214 22.8813 0.428 22.8813 0.64V0.640667Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="appsStore">
                                                        <rect width="32" height="32" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="app-info">
                                            <h5 className="text--body-5">Get it now</h5>
                                            <h2 className="text--body-3-600">App Store</h2>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- download section end  --> */}

            {/* <!-- subscribe section start  --> */}
            <section className="subscribe bgcolor--g">
                <div className="container">
                    <div className="subscribe__content">
                        <div className="subscribe__left">
                            <h2 className="subscribe__title text--heading-2">Subscribe to our newsletter</h2>
                            <p className="text--body-3 subscribe__description">

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
            {/* <!-- subscribe section end  --> */}


        </div>
    )
}

export default MarketPlace