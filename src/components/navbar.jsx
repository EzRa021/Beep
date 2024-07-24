import React from 'react'

const Navbar = () => {
    return (
        <header className="header header--one header--home-three" id="sticky-menu">
            <div className="container navigation-bar">
                <div className="d-flex align-items-center ">
                    <button className="toggle-icon  ">
                        <span className="toggle-icon__bar"></span>
                        <span className="toggle-icon__bar"></span>
                        <span className="toggle-icon__bar"></span>
                    </button>
                    {/* <!-- Brand Logo --> */}
                    <a href="index.html" className="navigation-bar__logo">
                        <img src="/src/images/svg/logo.svg" alt="brand-logo" className="logo-white text-white" />
                        <img src="/src/images/svg/logo-dark.svg" alt="brand-logo" className="logo-dark" />
                    </a>
                </div>
                {/* <!-- Menu --> */}
                <ul className="menu">
                    {/* <!--Homepage--> */}
                    <li className="menu__item">
                        <a href="index.html" className="menu__item">Home</a>
                    </li>
                    {/* <!--adlist--> */}
                    <li className="menu__item">
                        <a href="marketplace.html" className="menu__item">Marketplace</a>
                    </li>
                    <li className="menu__item">
                        <a href="about.html" className="menu__item">About Beep</a>
                    </li>
                    <li className="menu__item">
                        <a href="signin.html" className="menu__item">My Dashboard</a>
                    </li>
                    <li className="menu__item">
                        <a href="contact.html" className="menu__item">Contact</a>
                    </li>
                </ul>
                {/* <!-- Action Buttons --> */}
                <div className="navigation-bar__buttons">
                    <a href="signup.html" className="btn tg">
                        <span className="icon--left">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6">
                                    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                                    <path d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                                    <path
                                        d="M7.9751 24.9218C8.72836 23.4408 9.87675 22.1971 11.2931 21.3284C12.7095 20.4598 14.3387 20 16.0002 20C17.6617 20 19.2909 20.4598 20.7073 21.3284C22.1237 22.1971 23.272 23.4407 24.0253 24.9217"
                                        stroke="currentColor"
                                        stroke-width="1.6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </g>
                            </svg>
                        </span>
                        Login / Register
                    </a>
                    <a href="post-ads.html" className="btn">
                        <span className="icon--left">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                                <path d="M8.25 12H15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 8.25V15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        Post Ads
                    </a>
                    {/* <!-- Responsive Navigation Menu --> */}
                    <div className="menu--sm mobile-menu">
                        {/* <!-- head --> */}
                        <div className="mobile-menu__header">
                            {/* <!-- brand --> */}
                            <div className="mobile-menu__brand">
                                <a href="index.html">
                                    <img src="/src/images/svg/logo-dark.svg" alt="logo"/>
                                </a>
                                <div className="close">
                                    <span>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 5.08325L15.6066 15.6899" stroke="#191F33" stroke-width="1.9375" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M4.99999 15.9167L15.6066 5.31015" stroke="#191F33" stroke-width="1.9375" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="mobile-menu__search">
                                <form action="#">
                                    <div className="input-field">
                                        <input type="text" placeholder="browse category" className=""/>
                                            <button className="icon icon-search">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                    </div>
                                </form>
                            </div>

                            <div className="mobile-menu__body">
                                <ul >
                                    <li className="menu--sm__item">
                                        <a href="#" className="menu--sm__link active">
                                            Home
                                            <span className="icon">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 6L8 11L13 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </a>
                                        <ul className="menu--sm-dropdown">
                                            <li className="menu--sm-dropdown__item">
                                                <a href="index.html" className="menu--sm-dropdown__link active">Homepage 01</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu--sm__item">
                                        <a href="#" className="menu--sm__link">
                                            All Category
                                            <span className="icon">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 6L8 11L13 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </a>
                                        <ul className="menu--sm-dropdown">
                                            <li className="menu--sm-dropdown__item">
                                                <a href="#" className="menu--sm-dropdown__link">Mobile</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="#" className="menu--sm-dropdown__link">Basic Electronics</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="#" className="menu--sm-dropdown__link">Vehicles</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="#" className="menu--sm-dropdown__link">Real Estate</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="#" className="menu--sm-dropdown__link"> Basic School Essentials</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="#" className="menu--sm-dropdown__link">Home &amp; Living</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="#" className="menu--sm-dropdown__link">Nearest Services</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="#" className="menu--sm-dropdown__link">Education</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu--sm__item">
                                        <a href="ad-list.html" className="menu--sm__link">Ads Listing</a>
                                    </li>
                                    <li className="menu--sm__item">
                                        <a href="#" className="menu--sm__link">
                                            Pages
                                            <span className="icon">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 6L8 11L13 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </a>
                                        <ul className="menu--sm-dropdown__item">
                                            <li className="menu--sm-dropdown__item">
                                                <a href="blog-list.html" className="menu--sm-dropdown__link">Blog List</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="blog-details.html" className="menu--sm-dropdown__link">Single Blogs</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="about.html" className="menu--sm-dropdown__link">About</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="price-plan.html" className="menu--sm-dropdown__link">Pricing Plans</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="signin.html" className="menu--sm-dropdown__link">Sign In</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="signup.html" className="menu--sm-dropdown__link">Sign Up</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="dashboard.html" className="menu--sm-dropdown__link">user Dashboard</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="faq.html" className="menu--sm-dropdown__link">Faqs</a>
                                            </li>
                                            <li className="menu--sm-dropdown__item">
                                                <a href="404-error.html" className="menu--sm-dropdown__link">404 Error Pages</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu--sm__item">
                                        <a href="contact.html" className="menu--sm__link">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mobile-menu__language">
                                <h2>Languages</h2>
                                <div className="language-picker js-language-picker mobile-show">
                                    <form action="" className="language-picker__form">
                                        <label for="language-picker-select"></label>
                                        <select name="language-picker-select" id="language-picker-select">
                                            <option lang="en" value="english" selected>En</option>
                                            <option lang="de" value="english">De</option>
                                            <option lang="fr" value="english">Fr</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- footer  --> */}
                        <div className="mobile-menu__footer ">
                            <div className="mobile-menu-user-wrap">
                                <div className="mobile-menu-user-left">
                                    <div className="mobile-menu-user">
                                        <img src="/src/images/users/img-06.png" alt=""/>
                                    </div>
                                    <div className="mobile-menu-user-data">
                                        <h5>Olawale Taiwo Olaoluwa</h5>
                                        <p>Member</p>
                                    </div>
                                </div>
                                <div className="mobile-menu-user-right">
                                    <a className="sign-out" href="signin.html"><img src="/src/images/svg/SignOut.svg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar