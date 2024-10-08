import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { AdContext } from '../context/AdContext';
import Loader from "../components/loader";

const SingleAds = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate
    const { ad, fetchAdById, relatedAds, user, error, loading } = useContext(AdContext);

    function getLinkWhatsApp(number, message) {
        const url = 'https://api.whatsapp.com/send?phone=' + number + '&text=' + encodeURIComponent(message);
        return url;
    }

    const handleSendMessage = () => {
        const whatsappUrl = getLinkWhatsApp(ad?.phoneNumber, ` Hello, I am interested in your ${ad.category} ${ad.adName}.`);
        window.open(whatsappUrl, '_blank');
    }

    useEffect(() => {
        fetchAdById(id);
    }, [id]);

    if (loading) {
        return <div><Loader /></div>;
    }

    if (error) {
        return <div className=' w-full h-[400px] text-center text-4xl font-bold '>Something Went Wrong, Refresh this page</div>;
    }

    if (!ad) {
        return <div className=' w-full h-[400px] text-center text-4xl font-bold '>No ad found, Refresh this page</div>;
    }

    const handleRelatedAdClick = (relatedAdId) => {
        navigate(`/single-ad/${relatedAdId}`);
    }
    return (
        <div>

            {/* <!-- single ads section start  --> */}
            <section class="product-item section mt-20">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8">
                            <div class="product-item__badge">
                                <div class="badge badge--warning">
                                    Featrued
                                </div>
                                <div class="badge badge--danger">
                                    <span class="icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="16" height="16" rx="8" fill="#FF4F4F" />
                                            <path
                                                d="M8.17231 10.4505L10.1424 11.6987C10.3943 11.8582 10.7069 11.6209 10.6322 11.327L10.063 9.08782C10.047 9.02546 10.0489 8.95983 10.0685 8.8985C10.0881 8.83716 10.1246 8.78261 10.1738 8.74111L11.9405 7.27066C12.1727 7.07745 12.0529 6.69219 11.7546 6.67284L9.44743 6.5231C9.38528 6.51866 9.32568 6.49666 9.27556 6.45966C9.22543 6.42265 9.18685 6.37217 9.16431 6.31409L8.30382 4.14718C8.28043 4.08553 8.23884 4.03246 8.18458 3.99501C8.13031 3.95756 8.06594 3.9375 8 3.9375C7.93407 3.9375 7.86969 3.95756 7.81543 3.99501C7.76116 4.03246 7.71957 4.08553 7.69618 4.14718L6.8357 6.31409C6.81315 6.37217 6.77457 6.42265 6.72445 6.45966C6.67432 6.49666 6.61472 6.51866 6.55258 6.5231L4.24539 6.67284C3.94715 6.69219 3.82733 7.07745 4.05947 7.27066L5.82616 8.74111C5.87539 8.78261 5.91192 8.83716 5.93152 8.8985C5.95113 8.95983 5.95303 9.02546 5.937 9.08782L5.40912 11.1644C5.31944 11.5171 5.69465 11.8019 5.99685 11.6104L7.82769 10.4505C7.87919 10.4177 7.93896 10.4003 8 10.4003C8.06104 10.4003 8.12082 10.4177 8.17231 10.4505Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                    Member
                                </div>
                                <div class="badge badge--success">
                                    <span class="icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="16" height="16" rx="8" fill="#27C200" />
                                            <path d="M11.4375 5.8125L7.0625 10.1873L4.875 8" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    Verified Seller
                                </div>
                            </div>
                            <div class="product-item__ads-info">
                                <h2 class="text--heading-2 title">{ad?.adName}</h2>

                                <ul class="post-details">
                                    <li class="post-details__item">
                                        <span class="icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                                                    stroke="#767E94"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                                                    stroke="#767E94"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <p class="text--body-3">{ad?.location}</p>
                                    </li>
                                    <li class="post-details__item">
                                        <span class="icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#767E94" stroke-width="1.6" stroke-miterlimit="10" />
                                                <path d="M12 6.75V12H17.25" stroke="#767E94" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <p class="text--body-3">{ad?.createdAt}</p>
                                    </li>

                                </ul>
                            </div>
                            <div className=' mt-5' >
                                {/* <div> */}
                                <div className=' grid gap-3 lg:grid-cols-4 content-center '>
                                    {
                                        ad.images?.map((image, index) => (
                                            <div class="product-item__slider-item w-[150px] h-[100px]">
                                                <img className=' object-cover w-full' src={image} alt={index} />
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* </div> */}
                                <div className=' w-full mt-3 h-[400px]'>
                                    <img className=' w-full h-full object-cover' src={ad.images[0]} alt="" />
                                </div>
                            </div>
                            <div class="product-item__description">
                                <h2 class="text--body-1-600">Descriptions</h2>

                                <p class="text--body-3">
                                    {ad?.description}
                                </p>
                                <p class="text--body-3">

                                </p>
                            </div>
                            <div class="product-item__feature">
                                <h2 class="text--body-1-600">Feature</h2>

                                <ul class="feature">
                                    <li>
                                        <ul>
                                            {
                                                ad.features?.map((feature, index) => (
                                                    <li class="feature-item">
                                                        <span class="icon">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M20.25 6.75L9.75 17.2495L4.5 12" stroke="#00AAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <p class="text--body-3">{feature}</p>
                                                    </li>
                                                ))
                                            }


                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 shadow-md rounded-lg">
                            <div class="product-item__sidebar py-4">
                                <div class="product-item__sidebar-top">
                                    <div class="product-item__sidebar-item product-price">
                                        <h2 class="text--heading-2">{ad?.price}</h2>
                                        <button class="btn--fav">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                                                    stroke="#00AAFF"
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="product-item__sidebar-item">
                                        <div class="card-number">
                                            <div class="number number--hide text--body-2">
                                                <span class="icon">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M19.9272 5C21.6225 5.45592 23.1682 6.34928 24.4095 7.59059C25.6508 8.8319 26.5441 10.3776 27.0001 12.0728"
                                                            stroke="#00AAFF"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M18.8916 8.86426C19.9087 9.13781 20.8362 9.67382 21.5809 10.4186C22.3257 11.1634 22.8617 12.0908 23.1353 13.108"
                                                            stroke="#00AAFF"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M11.5595 15.6015C12.5968 17.7222 14.3158 19.4334 16.4412 20.461C16.5967 20.5347 16.7687 20.5666 16.9403 20.5537C17.1119 20.5407 17.2771 20.4832 17.4198 20.387L20.5492 18.3002C20.6877 18.2079 20.8469 18.1516 21.0126 18.1364C21.1782 18.1212 21.3451 18.1475 21.498 18.213L27.3526 20.7222C27.5515 20.8067 27.7175 20.9535 27.8257 21.1405C27.9339 21.3276 27.9783 21.5447 27.9524 21.7593C27.7673 23.2073 27.0608 24.5382 25.9652 25.5028C24.8695 26.4674 23.4598 26.9996 22 26.9996C17.4913 26.9996 13.1673 25.2086 9.97919 22.0204C6.79107 18.8323 5 14.5083 5 9.99963C5.00008 8.53985 5.53224 7.13015 6.49685 6.03448C7.46146 4.93881 8.79237 4.23231 10.2404 4.04726C10.4549 4.0213 10.672 4.06576 10.8591 4.17394C11.0461 4.28212 11.193 4.44816 11.2775 4.64704L13.7888 10.5068C13.8537 10.6583 13.8802 10.8236 13.8658 10.9879C13.8514 11.1522 13.7967 11.3103 13.7064 11.4483L11.6268 14.6258C11.5322 14.7687 11.4762 14.9338 11.4644 15.1048C11.4526 15.2758 11.4854 15.447 11.5595 15.6015V15.6015Z"
                                                            stroke="#00AAFF"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                                {ad?.phoneNumber}
                                            </div>
                                            <div class="number number--show text--body-2">
                                                <span class="icon">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M19.9272 5C21.6225 5.45592 23.1682 6.34928 24.4095 7.59059C25.6508 8.8319 26.5441 10.3776 27.0001 12.0728"
                                                            stroke="#00AAFF"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M18.8916 8.86426C19.9087 9.13781 20.8362 9.67382 21.5809 10.4186C22.3257 11.1634 22.8617 12.0908 23.1353 13.108"
                                                            stroke="#00AAFF"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M11.5595 15.6015C12.5968 17.7222 14.3158 19.4334 16.4412 20.461C16.5967 20.5347 16.7687 20.5666 16.9403 20.5537C17.1119 20.5407 17.2771 20.4832 17.4198 20.387L20.5492 18.3002C20.6877 18.2079 20.8469 18.1516 21.0126 18.1364C21.1782 18.1212 21.3451 18.1475 21.498 18.213L27.3526 20.7222C27.5515 20.8067 27.7175 20.9535 27.8257 21.1405C27.9339 21.3276 27.9783 21.5447 27.9524 21.7593C27.7673 23.2073 27.0608 24.5382 25.9652 25.5028C24.8695 26.4674 23.4598 26.9996 22 26.9996C17.4913 26.9996 13.1673 25.2086 9.97919 22.0204C6.79107 18.8323 5 14.5083 5 9.99963C5.00008 8.53985 5.53224 7.13015 6.49685 6.03448C7.46146 4.93881 8.79237 4.23231 10.2404 4.04726C10.4549 4.0213 10.672 4.06576 10.8591 4.17394C11.0461 4.28212 11.193 4.44816 11.2775 4.64704L13.7888 10.5068C13.8537 10.6583 13.8802 10.8236 13.8658 10.9879C13.8514 11.1522 13.7967 11.3103 13.7064 11.4483L11.6268 14.6258C11.5322 14.7687 11.4762 14.9338 11.4644 15.1048C11.4526 15.2758 11.4854 15.447 11.5595 15.6015V15.6015Z"
                                                            stroke="#00AAFF"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                                {/* +234 9078654317 */}
                                            </div>

                                            <span class="text--body-4 message">Phone number revealed.</span>
                                        </div>
                                        <a onClick={handleSendMessage} class=" flex items-center rounded-lg gap-3 justify-center w-full px-2 py-3 bg-blue-600">
                                            <span class="">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.25895 16.5939C3.14076 14.7089 2.74916 12.4805 3.15768 10.3272C3.56621 8.1739 4.74675 6.2438 6.47764 4.89933C8.20853 3.55486 10.3707 2.8885 12.5581 3.02539C14.7455 3.16227 16.8078 4.09298 18.3575 5.64274C19.9073 7.19251 20.838 9.25472 20.9749 11.4421C21.1118 13.6296 20.4455 15.7917 19.101 17.5226C17.7565 19.2535 15.8264 20.4341 13.6732 20.8426C11.5199 21.2511 9.29149 20.8596 7.40649 19.7414L7.40651 19.7413L4.29808 20.6294C4.16947 20.6662 4.03338 20.6678 3.90391 20.6343C3.77443 20.6007 3.65628 20.5332 3.5617 20.4386C3.46713 20.344 3.39956 20.2259 3.36601 20.0964C3.33246 19.9669 3.33415 19.8308 3.37089 19.7022L4.25901 16.5938L4.25895 16.5939Z"
                                                        stroke="white"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M12.325 12C12.325 12.1795 12.1795 12.325 12 12.325C11.8205 12.325 11.675 12.1795 11.675 12C11.675 11.8205 11.8205 11.675 12 11.675C12.1795 11.675 12.325 11.8205 12.325 12Z"
                                                        fill="white"
                                                        stroke="white"
                                                        stroke-width="1.6"
                                                    />
                                                    <path
                                                        d="M7.825 12C7.825 12.1795 7.67949 12.325 7.5 12.325C7.32051 12.325 7.175 12.1795 7.175 12C7.175 11.8205 7.32051 11.675 7.5 11.675C7.67949 11.675 7.825 11.8205 7.825 12Z"
                                                        fill="white"
                                                        stroke="white"
                                                        stroke-width="1.6"
                                                    />
                                                    <path
                                                        d="M16.825 12C16.825 12.1795 16.6795 12.325 16.5 12.325C16.3205 12.325 16.175 12.1795 16.175 12C16.175 11.8205 16.3205 11.675 16.5 11.675C16.6795 11.675 16.825 11.8205 16.825 12Z"
                                                        fill="white"
                                                        stroke="white"
                                                        stroke-width="1.6"
                                                    />
                                                </svg>
                                            </span>
                                            <div className=' hover:text-black'>
                                                Send Message
                                            </div>

                                        </a>
                                    </div>
                                    <div class="product-item__sidebar-item user-details">
                                        <div class="user">
                                            <div class="img">
                                                <img src={user?.profileImage} alt="user-photo" />
                                            </div>
                                            <div class="info">
                                                <span class="text--body-4">Add by:</span>
                                                <h2 class="text--body-3-600">{user?.fullName}</h2>
                                            </div>
                                        </div>
                                        <ul class="contact">
                                            <li class="contact-item">
                                                <span class="icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path
                                                            d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                                                            stroke="#00AAFF"
                                                            stroke-width="1.6"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path d="M10.3636 12L3.2312 18.538" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M20.7687 18.5381L13.6362 12" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                                <h6 class="text--body-3">{user?.email}</h6>
                                            </li>
                                            <li class="contact-item">
                                                <span class="icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.25 21.75H18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
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
                                                <h6 class="text--body-3">{ad.location}</h6>
                                            </li>
                                            <li class="contact-item">
                                                <span class="icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                            stroke="#00AAFF"
                                                            stroke-width="1.6"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M4.64868 17.1935L5.74348 16.5326C5.85345 16.4662 5.94453 16.3727 6.00799 16.261C6.07144 16.1493 6.10514 16.0231 6.10586 15.8947L6.12488 12.5076C6.12567 12.3661 6.16649 12.2277 6.24261 12.1084L8.10285 9.19297C8.15783 9.1068 8.22985 9.03278 8.31448 8.97545C8.39911 8.91813 8.49456 8.8787 8.59498 8.8596C8.6954 8.84051 8.79866 8.84214 8.89843 8.8644C8.99819 8.88666 9.09236 8.92908 9.17513 8.98905L11.0179 10.3241C11.1739 10.4372 11.3676 10.4858 11.5585 10.46L14.5098 10.0603C14.6909 10.0358 14.8567 9.94602 14.9763 9.80789L17.0535 7.40781C17.1796 7.26211 17.2448 7.07346 17.2355 6.88099L17.126 4.60254"
                                                            stroke="#00AAFF"
                                                            stroke-width="1.6"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M17.5376 19.0956L16.5315 18.0875C16.4374 17.9932 16.3198 17.9257 16.191 17.8919L14.1793 17.364C14.0007 17.3171 13.8457 17.2061 13.7439 17.0521C13.6421 16.898 13.6007 16.7119 13.6276 16.5293L13.8512 15.0109C13.8701 14.8827 13.9218 14.7616 14.0014 14.6594C14.081 14.5572 14.1857 14.4773 14.3053 14.4276L17.1601 13.241C17.2919 13.1862 17.4367 13.1702 17.5774 13.1948C17.718 13.2195 17.8487 13.2838 17.9541 13.3802L20.288 15.5147"
                                                            stroke="#00AAFF"
                                                            stroke-width="1.6"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                                <a href={ad.websiteLink} class="text--body-3 flex items-center gap-2">
                                                    <p> {ad.websiteLink}</p>
                                                    <span class="icon">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.1875 7.03125L15.1869 2.81306L10.9688 2.8125" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M10.123 7.87695L15.1855 2.81445" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M12.9375 10.125V14.625C12.9375 14.7742 12.8782 14.9173 12.7727 15.0227C12.6673 15.1282 12.5242 15.1875 12.375 15.1875H3.375C3.22582 15.1875 3.08274 15.1282 2.97725 15.0227C2.87176 14.9173 2.8125 14.7742 2.8125 14.625V5.625C2.8125 5.47582 2.87176 5.33274 2.97725 5.22725C3.08274 5.12176 3.22582 5.0625 3.375 5.0625H7.875"
                                                                stroke="currentColor"
                                                                stroke-width="1.3"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-item__sidebar-item location">
                                        <h2 class="text--body-2">Ads location</h2>
                                        <div class="location-map">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.7185490125266!2d-74.2352986842746!3d40.68016994749835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5b6a0b3391%3A0x76c486324be28e94!2sKean%20University!5e0!3m2!1sen!2sbd!4v1629579114991!5m2!1sen!2sbd"
                                                width="600"
                                                height="450"
                                                style={{ border: "0" }}
                                                allowfullscreen=""
                                                loading="lazy"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-item__sidebar-bottom">
                                    <div class="product-item__sidebar-item overview">
                                        <h2 class="text--body-1">Overview</h2>
                                        <ul class="overview-details">
                                            {
                                                ad.overview?.map((data) => (
                                                    <li class="overview-details__item">
                                                        <span class="text--body-3 title">{data}</span>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                        <a href="#" class="report">
                                            <span class="icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 9.75V13.5" stroke="#464D61" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M10.7018 3.74857L2.45399 17.9978C2.32201 18.2258 2.25242 18.4846 2.2522 18.748C2.25198 19.0115 2.32115 19.2703 2.45275 19.4986C2.58434 19.7268 2.77373 19.9163 3.00184 20.0481C3.22996 20.1799 3.48876 20.2493 3.7522 20.2493H20.2477C20.5112 20.2493 20.77 20.1799 20.9981 20.0481C21.2262 19.9163 21.4156 19.7268 21.5472 19.4986C21.6788 19.2703 21.748 19.0115 21.7478 18.748C21.7475 18.4846 21.6779 18.2258 21.546 17.9978L13.2982 3.74857C13.1664 3.52093 12.9771 3.33193 12.7493 3.20055C12.5214 3.06916 12.263 3 12 3C11.7369 3 11.4785 3.06916 11.2507 3.20055C11.0228 3.33193 10.8335 3.52093 10.7018 3.74857V3.74857Z"
                                                        stroke="#464D61"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="#464D61" />
                                                </svg>
                                            </span>
                                            Report Abuse
                                        </a>

                                        <div class="share-content">
                                            <h2 class="share-content__title text--body-3">
                                                <span class="icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                                                            stroke="#464D61"
                                                            stroke-width="1.6"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M16.5 21.75C18.1569 21.75 19.5 20.4069 19.5 18.75C19.5 17.0931 18.1569 15.75 16.5 15.75C14.8431 15.75 13.5 17.0931 13.5 18.75C13.5 20.4069 14.8431 21.75 16.5 21.75Z"
                                                            stroke="#464D61"
                                                            stroke-width="1.6"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M16.5 8.25C18.1569 8.25 19.5 6.90685 19.5 5.25C19.5 3.59315 18.1569 2.25 16.5 2.25C14.8431 2.25 13.5 3.59315 13.5 5.25C13.5 6.90685 14.8431 8.25 16.5 8.25Z"
                                                            stroke="#464D61"
                                                            stroke-width="1.6"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path d="M13.9767 6.87207L8.52319 10.3779" stroke="#464D61" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.52319 13.6221L13.9767 17.1279" stroke="#464D61" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                                Share Ads
                                            </h2>
                                            <ul class="share">
                                                <li class="share__item">
                                                    <a href="#" class="social-link social-link--wa share__link">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M13.3059 2.67206C11.9026 1.26709 10.0363 0.493011 8.04806 0.492188C3.95108 0.492188 0.61673 3.82645 0.615082 7.92453C0.614532 9.23456 0.956757 10.5134 1.60724 11.6406L0.552734 15.4922L4.49307 14.4586C5.5788 15.0508 6.80112 15.3629 8.04504 15.3633H8.04816C12.1447 15.3633 15.4794 12.0287 15.481 7.93048C15.4818 5.94433 14.7093 4.07693 13.3059 2.67206ZM8.04806 14.108H8.0455C6.93698 14.1075 5.84979 13.8096 4.90112 13.2469L4.67563 13.1129L2.33737 13.7263L2.96149 11.4466L2.81454 11.2128C2.19611 10.2292 1.86954 9.09228 1.87009 7.92499C1.87137 4.51877 4.64285 1.74756 8.05054 1.74756C9.70068 1.74811 11.2519 2.39154 12.4182 3.5593C13.5846 4.72705 14.2266 6.27923 14.226 7.93002C14.2246 11.3365 11.4533 14.108 8.04806 14.108ZM11.4368 9.48102C11.2511 9.388 10.338 8.93884 10.1677 8.87677C9.99759 8.81479 9.87363 8.78393 9.74994 8.96979C9.62607 9.15564 9.2702 9.57403 9.1618 9.6979C9.0534 9.82187 8.94519 9.83743 8.75943 9.74441C8.57367 9.65149 7.97528 9.45529 7.26584 8.82257C6.71378 8.33011 6.34106 7.72192 6.23267 7.53607C6.12445 7.35004 6.23175 7.25922 6.31415 7.15704C6.5152 6.90738 6.71652 6.64563 6.77841 6.52176C6.84039 6.3978 6.80936 6.28931 6.76285 6.19638C6.71652 6.10345 6.34509 5.1893 6.19037 4.81732C6.03949 4.45532 5.8865 4.50421 5.77243 4.49853C5.66421 4.49313 5.54034 4.49203 5.41647 4.49203C5.29269 4.49203 5.09146 4.53845 4.92117 4.72449C4.75098 4.91043 4.27124 5.35968 4.27124 6.27383C4.27124 7.18799 4.93674 8.0711 5.02957 8.19507C5.12241 8.31903 6.33923 10.1949 8.20224 10.9993C8.64535 11.1909 8.99124 11.305 9.26105 11.3906C9.70599 11.532 10.1107 11.512 10.4308 11.4642C10.7877 11.4109 11.5295 11.0149 11.6844 10.5811C11.8392 10.1472 11.8392 9.77545 11.7927 9.6979C11.7463 9.62045 11.6225 9.57403 11.4368 9.48102Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="share__item">
                                                    <a href="#" class="social-link social-link--fb share__link">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.33328 16H6.16101V8.1131H4V5.54528H6.16092V3.7181C6.16092 1.55288 7.1167 0 10.2804 0C10.9495 0 12 0.134507 12 0.134507V2.51887H10.8966C9.7724 2.51887 9.33345 2.85992 9.33345 3.80281V5.54528H11.9579L11.7242 8.1131H9.33336L9.33328 16Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="share__item">
                                                    <a href="#" class="social-link social-link--tw share__link">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5.00378 14.4016C11.0081 14.4016 14.2917 9.45578 14.2917 5.16691C14.2917 5.02645 14.2888 4.88663 14.2824 4.7474C14.9214 4.28774 15.4728 3.71862 15.9108 3.0667C15.3259 3.32525 14.6965 3.49927 14.0362 3.57773C14.7101 3.17592 15.2275 2.54026 15.4716 1.78255C14.8308 2.1605 14.1298 2.42694 13.3988 2.57037C12.8031 1.93949 11.955 1.54492 11.016 1.54492C9.21328 1.54492 7.75143 2.99844 7.75143 4.79011C7.75143 5.04484 7.78011 5.29252 7.83612 5.53018C5.12304 5.39444 2.71728 4.10292 1.10722 2.13909C0.817235 2.63441 0.664706 3.19735 0.665213 3.77042C0.665213 4.89647 1.24149 5.89052 2.11788 6.47209C1.59949 6.45635 1.09247 6.31713 0.639471 6.06614C0.638986 6.07977 0.638986 6.09304 0.638986 6.1076C0.638986 7.67943 1.76419 8.99181 3.25786 9.28919C2.97733 9.36515 2.68785 9.40355 2.39709 9.40339C2.18712 9.40339 1.98248 9.38285 1.78359 9.34489C2.19918 10.6345 3.40426 11.5729 4.83303 11.5991C3.71575 12.4698 2.30832 12.9884 0.778658 12.9884C0.518442 12.9887 0.258439 12.9736 0 12.9435C1.44471 13.8642 3.16017 14.4014 5.00394 14.4014"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="share__item">
                                                    <a href="#" class="social-link social-link--in share__link">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0)">
                                                                <path
                                                                    d="M15.9968 15.9995V15.9988H16.0008V10.1308C16.0008 7.26016 15.3828 5.04883 12.0268 5.04883C10.4135 5.04883 9.33082 5.93416 8.88882 6.7735H8.84216V5.31683H5.66016V15.9988H8.97349V10.7095C8.97349 9.31683 9.23749 7.97017 10.9622 7.97017C12.6615 7.97017 12.6868 9.5595 12.6868 10.7988V15.9995H15.9968Z"
                                                                    fill="white"
                                                                />
                                                                <path d="M0.263672 5.31836H3.58101V16.0004H0.263672V5.31836Z" fill="white" />
                                                                <path
                                                                    d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0">
                                                                    <rect width="16" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="share__item">
                                                    <a href="#" class="social-link social-link--p share__link">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#pinterest)">
                                                                <path
                                                                    d="M8.21733 0C3.83133 0.000666667 1.5 2.81067 1.5 5.87467C1.5 7.29533 2.294 9.068 3.56533 9.63C3.928 9.79333 3.88 9.594 4.192 8.40067C4.21667 8.30133 4.204 8.21533 4.124 8.12267C2.30667 6.02067 3.76933 1.69933 7.958 1.69933C14.02 1.69933 12.8873 10.0873 9.01267 10.0873C8.014 10.0873 7.27 9.30333 7.50533 8.33333C7.79067 7.178 8.34933 5.936 8.34933 5.10333C8.34933 3.00467 5.22267 3.316 5.22267 6.09667C5.22267 6.956 5.52667 7.536 5.52667 7.536C5.52667 7.536 4.52067 11.6 4.334 12.3593C4.018 13.6447 4.37667 15.7253 4.408 15.9047C4.42733 16.0033 4.538 16.0347 4.6 15.9533C4.69933 15.8233 5.91533 14.0887 6.256 12.8347C6.38 12.378 6.88867 10.5247 6.88867 10.5247C7.224 11.13 8.19067 11.6367 9.22067 11.6367C12.2847 11.6367 14.4993 8.94333 14.4993 5.60133C14.4887 2.39733 11.7467 0 8.21733 0V0Z"
                                                                    fill="white"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="pinterest">
                                                                    <rect width="16" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="share__item">
                                                    <a href="#" class="social-link social-link--lk share__link">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.55744 5.58014L11.1042 4.03334C11.4234 3.7139 11.8023 3.46046 12.2195 3.28751C12.6366 3.11457 13.0837 3.0255 13.5353 3.02539C13.9868 3.02529 14.434 3.11415 14.8512 3.2869C15.2684 3.45966 15.6474 3.71291 15.9667 4.03221C16.286 4.35151 16.5393 4.73059 16.712 5.14779C16.8848 5.56499 16.9737 6.01214 16.9736 6.46369C16.9734 6.91524 16.8844 7.36235 16.7114 7.77947C16.5385 8.19659 16.285 8.57555 15.9656 8.8947L13.7559 11.1044C13.4367 11.4236 13.0577 11.6768 12.6407 11.8496C12.2236 12.0223 11.7766 12.1112 11.3252 12.1112C10.8738 12.1112 10.4268 12.0223 10.0097 11.8496C9.59268 11.6768 9.21373 11.4236 8.89453 11.1044"
                                                                stroke="white"
                                                                stroke-width="1.2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                            <path
                                                                d="M10.4415 14.4198L8.8947 15.9666C8.57555 16.286 8.19659 16.5394 7.77947 16.7124C7.36235 16.8853 6.91524 16.9744 6.46369 16.9745C6.01214 16.9746 5.56499 16.8858 5.14779 16.713C4.73059 16.5402 4.35151 16.287 4.03221 15.9677C3.71291 15.6484 3.45966 15.2693 3.2869 14.8521C3.11415 14.4349 3.02529 13.9878 3.02539 13.5362C3.0255 13.0847 3.11457 12.6376 3.28751 12.2204C3.46046 11.8033 3.7139 11.4243 4.03334 11.1052L6.24305 8.89549C6.56225 8.57629 6.9412 8.32309 7.35826 8.15034C7.77531 7.97759 8.22231 7.88867 8.67373 7.88867C9.12515 7.88867 9.57215 7.97759 9.98921 8.15034C10.4063 8.32309 10.7852 8.57629 11.1044 8.89549"
                                                                stroke="white"
                                                                stroke-width="1.2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- single ads section End  -->. */}

            {/* <!-- related ads section start  --> */}
            <section class="section related-post">
                <div class="container px-0">
                    <div class="related-post__header">
                        <h2 class="text--heading-1">Related Ads</h2>
                        <div class="slider-btn">
                            <button class="slider-btn--prev">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.25 12H3.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button class="slider-btn--next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 12H20.25" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="lg:grid-cols-3 px-2 grid-cols-2 grid lg:gap-4 gap-2" id="relatedPostSlider">
                        {relatedAds?.map((relatedAd) => (
                            <div className="" key={relatedAd._id}>
                                <div className="cards cards--one cards--highlight" onClick={() => handleRelatedAdClick(relatedAd._id)}>
                                    <div className="cards__img-wrapper">
                                        <img src={relatedAd.images[0]} alt="card-img" className="img-fluid" />
                                    </div>
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
                                                {relatedAd.category}
                                            </h6>
                                            <div className="text--body-3-600 cards__caption-title">
                                                {relatedAd.adName}
                                            </div>
                                        </div>
                                        <div className="cards__info-bottom">
                                            <div className=" flex justify-between line-clamp-1">
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
                                            <p className=' text-sm line-clamp-1'>{relatedAd.location}</p>  
                                            </div>
                                            <span className="cards__price-title text--body-3-600">{relatedAd.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- related ads section end  --> */}

        </div>
    )
}

export default SingleAds