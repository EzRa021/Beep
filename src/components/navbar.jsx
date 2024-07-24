import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const handleToggle = () => {
        document.querySelector('.menu').classList.toggle('active');
    };
    return (
        <header className="header header--one header--home-three" id="sticky-menu">
            <div className="container navigation-bar">
                <div className="d-flex align-items-center ">
                    <button className="toggle-icon" onClick={handleToggle}>
                        <span className="toggle-icon__bar"></span>
                        <span className="toggle-icon__bar"></span>
                        <span className="toggle-icon__bar"></span>
                    </button>
                    {/* <!-- Brand Logo --> */}
                    <Link to="/" className="navigation-bar__logo">
                        <img src="/src/images/svg/logo.svg" alt="brand-logo" className="logo-white text-white" />
                        <img src="/src/images/svg/logo-dark.svg" alt="brand-logo" className="logo-dark" />
                    </Link>
                </div>
                {/* <!-- Menu --> */}
                <ul className="menu">
                    {/* <!--Homepage--> */}
                    <li className="menu__item">
                        <Link to="/" className="menu__item">Home</Link>
                    </li>
                    {/* <!--adlist--> */}
                    <li className="menu__item">
                        <Link to="/market-place" className="menu__item">Marketplace</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/about" className="menu__item">About Beep</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/sign-in" className="menu__item">My Dashboard</Link>
                    </li>
                    <li className="menu__item">
                        <Link to="/contact" className="menu__item">Contact</Link>
                    </li>
                </ul>
                {/* <!-- Action Buttons --> */}
                <div className="navigation-bar__buttons">
                    <Link to="/sign-up" className="btn tg">
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
                    </Link>
                    <Link to="/post-ads" className="btn">
                        <span className="icon--left">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                                <path d="M8.25 12H15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 8.25V15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        Post Ads
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar
