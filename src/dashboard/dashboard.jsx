import React from 'react'
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
import BreedCrumb from '../components/breedCrumb';
import DashNav from '../components/dashNav';
import { AdContext } from '../context/AdContext';
import { AuthContext } from '../context/AuthContext';
const DashboardPage = () => {

    const {ads, fetchAds} = useContext(AdContext);
    const {user} = useContext(AuthContext)
    const favouriteAdsCount = ads?.filter(ad => ad.liked==true).length;

  const [recentAds, setRecentAds] = useState([]);

      useEffect(() => {
        // Fetch the latest ads whenever the component mounts
        fetchAds(); 
    }, []); // Empty dependency array to trigger only on component mount


  useEffect(() => {
    // Sort ads by date and take the most recent ones
    const sortedAds = ads?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setRecentAds(sortedAds?.slice(0, 5)); // Display the 5 most recent ads
  }, [ads]);
    console.log(ads)
    return (
        <div>
            <BreedCrumb pageTitle={`Welcome Back, ${user.fullName}`} />
            <section className="section dashboard dashboard--user">
                <div className="container">
                    <div className="flex gap-10">
                        <DashNav/>  
                        <div className="">
                            <div className="dashboard__count-card row">
                                <div className="col-lg-4">
                                    <div className="dashboard-card dashboard-card--count w-full bgcolor--primary-9">
                                        <div className="dashboard-card--count__info">
                                            <span className="counter-number text--heading-2">{ads?.length}</span>
                                            <h2 className="counter-title text--body-3">Posted Ads</h2>
                                        </div>
                                        <div className="dashboard-card--count__icon">
                                            <span className="icon">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 23.75H25" stroke="#00AAFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M15 18.75H25" stroke="#00AAFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M25.0003 6.25H31.25C31.5815 6.25 31.8995 6.3817 32.1339 6.61612C32.3683 6.85054 32.5 7.16848 32.5 7.5V33.75C32.5 34.0815 32.3683 34.3995 32.1339 34.6339C31.8995 34.8683 31.5815 35 31.25 35H8.75C8.41848 35 8.10054 34.8683 7.86612 34.6339C7.6317 34.3995 7.5 34.0815 7.5 33.75V7.5C7.5 7.16848 7.6317 6.85054 7.86612 6.61612C8.10054 6.3817 8.41848 6.25 8.75 6.25H14.9997"
                                                        stroke="#00AAFF"
                                                        stroke-width="2.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M13.75 11.25V10C13.75 8.3424 14.4085 6.75269 15.5806 5.58058C16.7527 4.40848 18.3424 3.75 20 3.75C21.6576 3.75 23.2473 4.40848 24.4194 5.58058C25.5915 6.75269 26.25 8.3424 26.25 10V11.25H13.75Z"
                                                        stroke="#00AAFF"
                                                        stroke-width="2.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="dashboard-card dashboard-card--count w-full bgcolor--success-9">
                                        <div className="dashboard-card--count__info">
                                            <span className="counter-number text--heading-2">{favouriteAdsCount}</span>
                                            <h2 className="counter-title text--body-3">Favourite Ads</h2>
                                        </div>
                                        <div className="dashboard-card--count__icon">
                                            <span className="icon">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 20H11.25L13.75 16.25L18.75 23.75L21.25 20H25" stroke="#27C200" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M4.39285 14.999C4.38103 14.7918 4.37508 14.5838 4.375 14.375C4.37532 12.4971 5.02602 10.6773 6.21648 9.22488C7.40693 7.77251 9.06366 6.77727 10.905 6.40836C12.7463 6.03945 14.6586 6.31965 16.3166 7.20131C17.9747 8.08298 19.2763 9.51169 20 11.2445L20 11.2446C20.7237 9.5117 22.0253 8.08299 23.6833 7.20132C25.3414 6.31965 27.2537 6.03945 29.095 6.40836C30.9363 6.77727 32.5931 7.77251 33.7835 9.22488C34.974 10.6772 35.6247 12.4971 35.625 14.375C35.625 25 20 33.75 20 33.75C20 33.75 13.7586 30.2549 9.16523 25.0002"
                                                        stroke="#27C200"
                                                        stroke-width="2.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>

                            <div className="row dashboard__ads-activity">
                                <div className="col-lg-6">
                                    <div className="dashboard-card">
                                        <div className="dashboard__section-info">
                                            <h2 className="dashboard-card__title">Ads View</h2>

                                            <ul className="history">
                                                <li className="history-item">
                                                    <a href="#" className="history-link">
                                                        This Week
                                                        <span className="icon">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#939AAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                    <ul className="history-dropdown">
                                                        <li className="history-dropdown__item">
                                                            <a href="#" className="history-dropdown__link">Previous Week</a>
                                                        </li>
                                                        <li className="history-dropdown__item">
                                                            <a href="#" className="history-dropdown__link">Last Month</a>
                                                        </li>
                                                        <li className="history-dropdown__item">
                                                            <a href="#" className="history-dropdown__link">Last years</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <canvas id="adsview" width="536" height="436"></canvas>
                                    </div>
                                </div>
                              
                            </div>

                            <div className="dashboard__posted-ads">
      <div className="dashboard__section-info flex justify-between items-center mb-4">
        <h2 className="dashboard-card__title text-xl font-semibold">Recently Posted Ads</h2>
        <Link to="/my-ads" className="view-page text-blue-600 hover:underline">
          View All
          <span className="ml-1 inline-block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 12H20.25" stroke="#939AAD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#939AAD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentAds?.map(ad => (
          <div key={ad._id} className="dashboard__posted-ads-slider--item">
            <div className="cards cards--one overflow-visible border rounded-lg shadow-md p-4">
              <Link to={`/ad-details/${ad._id}`} className="cards__img-wrapper block mb-4">
                <img src={ad.images[0]} alt="card-img" className="w-full h-40 object-cover rounded" />
              </Link>
              <div className="cards__info">
                <div className="cards__info-top mb-2">
                  <h6 className="text--body-4 cards__category-title text-gray-600 text-sm flex items-center">
                    <span className="icon mr-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11L8 14.5L14 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M2 8L8 11.5L14 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M2 5L8 8.5L14 5L8 1.5L2 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                    {ad.category}
                  </h6>
                  <Link to={`/ad-details/${ad._id}`} className="text--body-3-600 cards__caption-title block text-lg font-semibold text-gray-800">
                    <b>{ad.adName}</b>
                  </Link>
                </div>
                <div className="cards__info-bottom flex justify-between items-center">
                  <span className="cards__price-title text--body-3-600 text-lg font-bold text-green-600">{ad.price}</span>
                  <ul className="edit flex space-x-2">
                    <li className="edit-icon relative">
                      <span className="icon-toggle cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                          <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      <ul className="edit-dropdown absolute top-full right-0 mt-1 w-40 bg-white border rounded shadow-lg">
                        <li className="edit-dropdown__item">
                          <Link to={`/edit-ad/${ad._id}`} className="edit-dropdown__link block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            <span className="icon mr-2">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.5 16.8749H3.75C3.58424 16.8749 3.42527 16.8091 3.30806 16.6918C3.19085 16.5746 3.125 16.4157 3.125 16.2499V12.7588C3.125 12.6767 3.14117 12.5954 3.17258 12.5196C3.20398 12.4438 3.25002 12.3749 3.30806 12.3168L12.6831 2.94185C12.8003 2.82464 12.9592 2.75879 13.125 2.75879C13.2908 2.75879 13.4497 2.82464 13.5669 2.94185L17.0581 6.43296C17.1753 6.55017 17.2411 6.70915 17.2411 6.87491C17.2411 7.04067 17.1753 7.19964 17.0581 7.31685L7.5 16.8749Z"
                                  stroke="currentColor"
                                  strokeWidth="1.3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path d="M10.625 5L15 9.375" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M16.8748 16.8753H7.49979L3.16455 12.54" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </span>
                            <h5 className="text--body-4">Edit Ads Details</h5>
                          </Link>
                        </li>
                        <li className="edit-dropdown__item">
                          <Link to={`/ad-details/${ad._id}`} className="edit-dropdown__link block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            <span className="icon mr-2">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102Z"
                                  stroke="currentColor"
                                  strokeWidth="1.3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                                  stroke="currentColor"
                                  strokeWidth="1.3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </span>
                            <h5 className="text--body-4">View Ads</h5>
                          </Link>
                        </li>
                        <li className="edit-dropdown__item">
                          <button className="edit-dropdown__link block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            <span className="icon mr-2">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                                  stroke="currentColor"
                                  strokeWidth="1.3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path d="M13.4375 8.125L8.85414 12.5L6.5625 10.3125" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </span>
                            <h5 className="text--body-4">Mark as Expired</h5>
                          </button>
                        </li>
                        <li className="edit-dropdown__item">
                          <button className="edit-dropdown__link block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            <span className="icon mr-2">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8745 4.375L3.12451 4.37501" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M8.125 8.125V13.125" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M11.875 8.125V13.125" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path
                                  d="M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M13.125 4.375V3.125C13.125 2.79348 12.9933 2.47554 12.7589 2.24112C12.5245 2.0067 12.2065 1.875 11.875 1.875H8.125C7.79348 1.875 7.47554 2.0067 7.24112 2.24112C7.0067 2.47554 6.875 2.79348 6.875 3.125V4.375"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </span>
                            <h5 className="text--body-4">Delete Ads</h5>
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- dashboard section end  --> */}

        </div>
    )
}

export default DashboardPage
