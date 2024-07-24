import React from 'react'

const AdList = () => {
  return (
    <div>
              {/* // <!-- breedcrumb section start  --> */}
        <section className="breedcrumb" style={{ 
  background: "url('src/images/bg/bg-04.jpg') center center/cover no-repeat" 
}}>
            <div className="container">
                <h2 className="breedcrumb__title text--heading-2">Ad List</h2>
                <ul className="breedcrumb__page">
                    <li className="breedcrumb__page-item">
                        <a href="index.html" className="breedcrumb__page-link text--body-3">Home</a>
                    </li>
                    <li className="breedcrumb__page-item">
                        <a href="#" className="breedcrumb__page-link text--body-3">/</a>
                    </li>
                    <li className="breedcrumb__page-item">
                        <a href="#" className="breedcrumb__page-link text--body-3">Ad list</a>
                    </li>
                </ul>
            </div>
        </section>
        {/* // <!-- breedcrumb section end  --> */}

        <div className="ad-list__search-box">
            <div className="container">
                {/* <!-- Search Box --> */}
                <div className="search">
                    <form action="#">
                        <div className="search__content">
                            {/* <!-- search by keyword/title --> */}
                            <div className="search__content-item">
                                <div className="input-field">
                                    <input type="text" placeholder="Search by ads title, keyword..." />
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
                                    <input type="text" placeholder="Locations" />
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
                                <div className="input-field">
                                    <select name="category" className="js-example-basic-single w-100" style={{ width: "calc(100% - 60px)" }}>
                                        <option value="null" style={{ display: "none" }}>Select Category</option>
                                        <option value="1">Category 1</option>
                                        <option value="2">Category 2</option>
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

        <div className="mobile-search-filed">
            <div className="container">
                <div className="search-field-wrap">
                    <div className="input-field">
                        <input type="text" placeholder="Search for anything"/>
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
                        <div className="list-sidebar">
                            <div className="product-filter">
                                <h3>Product Filters</h3>
                                <span className="close"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.625 4.375L4.375 15.625" stroke="#767E94" stroke-width="1.6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M15.625 15.625L4.375 4.375" stroke="#767E94" stroke-width="1.6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <div className="accordion list-sidebar__accordion" id="accordionGroup">
                                <div className="accordion-item list-sidebar__accordion-item category">
                                    <h2 className="accordion-header list-sidebar__accordion-header" id="category">
                                        <button className="accordion-button list-sidebar__accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#categoryCollapse" aria-expanded="true" aria-controls="categoryCollapse">
                                            Category
                                        </button>
                                    </h2>
                                    <div id="categoryCollapse" className="accordion-collapse collapse show" aria-labelledby="category" data-bs-parent="#accordionGroup">
                                        <div className="accordion-body list-sidebar__accordion-body">
                                            <div className="accordion list-sidebar__accordion-inner" id="subcategoryGroup">
                                                <div className="accordion-item list-sidebar__accordion-inner-item">
                                                    <h2 className="accordion-header" id="mobile">
                                                        <div className="accordion-button list-sidebar__accordion-inner-button" data-bs-toggle="collapse" data-bs-target="#mobileCollapse" aria-expanded="true" aria-controls="mobileCollapse">
                                                            <span className="list-sidebar__accordion-inner-icon">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M18 20.25V3.75C18 2.92157 17.3284 2.25 16.5 2.25L7.5 2.25C6.67157 2.25 6 2.92157 6 3.75L6 20.25C6 21.0784 6.67157 21.75 7.5 21.75H16.5C17.3284 21.75 18 21.0784 18 20.25Z"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path d="M9 5.25H15" stroke="#66CCFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            Phones and Basic Gadgets
                                                            <span className="icon icon--plus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#AEB3C2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8 2.5V13.5" stroke="#AEB3C2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            <span className="icon icon--minus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#464D61" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </h2>
                                                    <div id="mobileCollapse" className="accordion-collapse collapse show" aria-labelledby="mobile" data-bs-parent="#subcategoryGroup">
                                                        <div className="accordion-body list-sidebar__accordion-inner-body">
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-1-1" />
                                                                    <label className="form-check-label" for="category-item-1-1">
                                                                        Mobile 01
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-1-2" />
                                                                    <label className="form-check-label" for="category-item-1-2">
                                                                        Mobile 02
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-1-3" />
                                                                    <label className="form-check-label" for="category-item-1-3">
                                                                        Mobile 03
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-1-4" />
                                                                    <label className="form-check-label" for="category-item-1-4">
                                                                        Mobile 04
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item list-sidebar__accordion-inner-item">
                                                    <h2 className="accordion-header" id="electronics">
                                                        <div
                                                            className="accordion-button list-sidebar__accordion-inner-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#electronicsCollapse"
                                                            aria-expanded="true"
                                                            aria-controls="electronicsCollapse"
                                                        >
                                                            <span className="list-sidebar__accordion-inner-icon">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M4.5 18L19.5 18C20.3284 18 21 17.3284 21 16.5V6C21 5.17157 20.3284 4.5 19.5 4.5L4.5 4.5C3.67157 4.5 3 5.17157 3 6V16.5C3 17.3284 3.67157 18 4.5 18Z"
                                                                        stroke="#00AAFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path d="M15 21H9" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            Computer Services
                                                            <span className="icon icon--plus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#AEB3C2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8 2.5V13.5" stroke="#AEB3C2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            <span className="icon icon--minus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#464D61" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </h2>
                                                    <div id="electronicsCollapse" className="accordion-collapse collapse" aria-labelledby="electronics" data-bs-parent="#subcategoryGroup">
                                                        <div className="accordion-body list-sidebar__accordion-inner-body">
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-2-1" />
                                                                    <label className="form-check-label" for="category-item-2-1">
                                                                        Electronics 01
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-2-2" />
                                                                    <label className="form-check-label" for="category-item-2-2">
                                                                        Electronics 02
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-2-3" />
                                                                    <label className="form-check-label" for="category-item-2-3">
                                                                        Electronics 03
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-2-4" />
                                                                    <label className="form-check-label" for="category-item-2-4">
                                                                        Electronics 04
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item list-sidebar__accordion-inner-item">
                                                    <h2 className="accordion-header" id="vehicles">
                                                        <div
                                                            className="accordion-button list-sidebar__accordion-inner-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#vehicleCollapse"
                                                            aria-expanded="true"
                                                            aria-controls="vehicleCollapse"
                                                        >
                                                            <span className="list-sidebar__accordion-inner-icon">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.5 11.25H22.5" stroke="#66CCFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path
                                                                        d="M21 17.25V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H18C17.8011 20.25 17.6103 20.171 17.4697 20.0303C17.329 19.8897 17.25 19.6989 17.25 19.5V17.25"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M6.75 17.25V19.5C6.75 19.6989 6.67098 19.8897 6.53033 20.0303C6.38968 20.171 6.19891 20.25 6 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V17.25"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path d="M6 14.25H7.5" stroke="#66CCFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M16.5 14.25H18" stroke="#66CCFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path
                                                                        d="M21 11.25L18.198 4.9454C18.139 4.81282 18.0429 4.70018 17.9213 4.62113C17.7996 4.54208 17.6577 4.5 17.5126 4.5H6.48741C6.34233 4.5 6.20037 4.54208 6.07872 4.62113C5.95708 4.70018 5.86097 4.81282 5.80205 4.9454L3 11.25V17.25H21V11.25Z"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            Vehicles
                                                            <span className="icon icon--plus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#AEB3C2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8 2.5V13.5" stroke="#AEB3C2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            <span className="icon icon--minus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#464D61" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </h2>
                                                    <div id="vehicleCollapse" className="accordion-collapse collapse" aria-labelledby="vehicles" data-bs-parent="#subcategoryGroup">
                                                        <div className="accordion-body list-sidebar__accordion-inner-body">
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-3-1" />
                                                                    <label className="form-check-label" for="category-item-3-1">
                                                                        Vehicles 01
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-3-2" />
                                                                    <label className="form-check-label" for="category-item-3-2">
                                                                        Vehicles 02
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-3-3" />
                                                                    <label className="form-check-label" for="category-item-3-3">
                                                                        Vehicles 03
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-3-4" />
                                                                    <label className="form-check-label" for="category-item-3-4">
                                                                        Vehicles 04
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item list-sidebar__accordion-inner-item">
                                                    <h2 className="accordion-header" id="property">
                                                        <div
                                                            className="accordion-button list-sidebar__accordion-inner-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#propertyCollapse"
                                                            aria-expanded="true"
                                                            aria-controls="propertyCollapse"
                                                        >
                                                            <span className="list-sidebar__accordion-inner-icon">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M4.5 13.0859V19.4995C4.5 19.6985 4.57902 19.8892 4.71967 20.0299C4.86032 20.1705 5.05109 20.2495 5.25 20.2495H18.75C18.9489 20.2495 19.1397 20.1705 19.2803 20.0299C19.421 19.8892 19.5 19.6985 19.5 19.4995V13.0861"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M5.06573 3.75H18.9343C19.0973 3.75 19.2558 3.80309 19.3859 3.90124C19.516 3.99939 19.6106 4.13725 19.6554 4.29396L21 9H3L4.34458 4.29396C4.38936 4.13725 4.48396 3.99939 4.61408 3.90124C4.7442 3.80309 4.90274 3.75 5.06573 3.75Z"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M9 9V10.5C9 11.2956 8.68393 12.0587 8.12132 12.6213C7.55871 13.1839 6.79565 13.5 6 13.5C5.20435 13.5 4.44129 13.1839 3.87868 12.6213C3.31607 12.0587 3 11.2956 3 10.5V9"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M15 9V10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5V9"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21 9V10.5C21 11.2956 20.6839 12.0587 20.1213 12.6213C19.5587 13.1839 18.7956 13.5 18 13.5C17.2044 13.5 16.4413 13.1839 15.8787 12.6213C15.3161 12.0587 15 11.2956 15 10.5V9"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            Uber Services
                                                            <span className="icon icon--plus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#AEB3C2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8 2.5V13.5" stroke="#AEB3C2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            <span className="icon icon--minus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#464D61" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </h2>
                                                    <div id="propertyCollapse" className="accordion-collapse collapse" aria-labelledby="property" data-bs-parent="#subcategoryGroup">
                                                        <div className="accordion-body list-sidebar__accordion-inner-body">
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-4-1" />
                                                                    <label className="form-check-label" for="category-item-4-1">
                                                                        uber 01
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-4-2" />
                                                                    <label className="form-check-label" for="category-item-4-2">
                                                                        uber 02
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-4-3" />
                                                                    <label className="form-check-label" for="category-item-4-3">
                                                                        uber 03
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-4-4" />
                                                                    <label className="form-check-label" for="category-item-4-4">
                                                                        uber 04
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item list-sidebar__accordion-inner-item">
                                                    <h2 className="accordion-header" id="essential">
                                                        <div
                                                            className="accordion-button list-sidebar__accordion-inner-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#essentialCollapse"
                                                            aria-expanded="true"
                                                            aria-controls="essentialCollapse"
                                                        >
                                                            <span className="list-sidebar__accordion-inner-icon">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M17.343 3.47489L13.4091 7.40882L13.9394 10.0605L16.5911 10.5908L20.525 6.65687L20.5254 6.65671C21.0123 7.80611 21.1288 9.07873 20.8585 10.2974C20.5883 11.5161 19.9448 12.6202 19.0177 13.4561C18.0906 14.2919 16.9259 14.818 15.6859 14.9609C14.4458 15.1039 13.192 14.8566 12.099 14.2536L12.0991 14.2534L6.84106 20.3408C6.41902 20.7624 5.84685 20.9991 5.25034 20.9989C4.65382 20.9987 4.08179 20.7617 3.65999 20.3399C3.23819 19.9181 3.00115 19.3461 3.00098 18.7495C3.00081 18.153 3.23752 17.5809 3.65908 17.1588L9.7464 11.9008L9.74627 11.9009C9.14326 10.8079 8.89603 9.5541 9.03897 8.31402C9.18191 7.07394 9.70793 5.90929 10.5438 4.98216C11.3796 4.05504 12.4838 3.41158 13.7025 3.14135C14.9211 2.87113 16.1938 2.98758 17.3432 3.47451L17.343 3.47489Z"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            Basic school essentials
                                                            <span className="icon icon--plus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#AEB3C2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8 2.5V13.5" stroke="#AEB3C2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            <span className="icon icon--minus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#464D61" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </h2>
                                                    <div id="essentialCollapse" className="accordion-collapse collapse" aria-labelledby="essential" data-bs-parent="#subcategoryGroup">
                                                        <div className="accordion-body list-sidebar__accordion-inner-body">
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-5-1" />
                                                                    <label className="form-check-label" for="category-item-5-1">
                                                                        Essentials 01
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-5-2" />
                                                                    <label className="form-check-label" for="category-item-5-2">
                                                                        Essentials 02
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-5-3" />
                                                                    <label className="form-check-label" for="category-item-5-3">
                                                                        Essential 03
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-5-4" />
                                                                    <label className="form-check-label" for="category-item-5-4">
                                                                        Essential 04
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item list-sidebar__accordion-inner-item">
                                                    <h2 className="accordion-header" id="home">
                                                        <div className="accordion-button list-sidebar__accordion-inner-button collapsed" data-bs-toggle="collapse" data-bs-target="#homeCollapse" aria-expanded="true" aria-controls="homeCollapse">
                                                            <span className="list-sidebar__accordion-inner-icon">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M20.25 20.2498V10.8316C20.25 10.7271 20.2282 10.6238 20.1859 10.5282C20.1436 10.4326 20.0818 10.347 20.0045 10.2767L12.504 3.45775C12.3659 3.33223 12.186 3.26269 11.9995 3.2627C11.8129 3.2627 11.633 3.33226 11.4949 3.45778L3.99545 10.2767C3.91814 10.347 3.85637 10.4326 3.8141 10.5282C3.77183 10.6238 3.75 10.7271 3.75 10.8316V20.2498"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path d="M1.5 20.25H22.5" stroke="#66CCFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path
                                                                        d="M14.2495 20.249V14.999C14.2495 14.8001 14.1704 14.6093 14.0298 14.4687C13.8891 14.328 13.6984 14.249 13.4995 14.249H10.4995C10.3005 14.249 10.1098 14.328 9.96912 14.4687C9.82847 14.6093 9.74945 14.8001 9.74945 14.999V20.249"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            Home & Living
                                                            <span className="icon icon--plus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#AEB3C2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8 2.5V13.5" stroke="#AEB3C2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            <span className="icon icon--minus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#464D61" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </h2>
                                                    <div id="homeCollapse" className="accordion-collapse collapse" aria-labelledby="home" data-bs-parent="#subcategoryGroup">
                                                        <div className="accordion-body list-sidebar__accordion-inner-body">
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-6-1" />
                                                                    <label className="form-check-label" for="category-item-6-1">
                                                                        Home 01
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-6-2" />
                                                                    <label className="form-check-label" for="category-item-6-2">
                                                                        Home 02
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-6-3" />
                                                                    <label className="form-check-label" for="category-item-6-3">
                                                                        Home 03
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-6-4" />
                                                                    <label className="form-check-label" for="category-item-6-4">
                                                                        Home 04
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item list-sidebar__accordion-inner-item">
                                                    <h2 className="accordion-header" id="buisness">
                                                        <div
                                                            className="accordion-button list-sidebar__accordion-inner-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#businessCollapse"
                                                            aria-expanded="true"
                                                            aria-controls="businessCollapse"
                                                        >
                                                            <span className="list-sidebar__accordion-inner-icon">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M22.5673 11.4172L20.25 12.5759L17.25 6.83067L19.5909 5.66024C19.7667 5.5723 19.9701 5.55695 20.1572 5.61749C20.3443 5.67802 20.5001 5.80961 20.5911 5.9839L22.8967 10.3992C22.9428 10.4875 22.9708 10.5841 22.9792 10.6834C22.9876 10.7826 22.9761 10.8825 22.9454 10.9773C22.9148 11.0721 22.8655 11.1598 22.8006 11.2353C22.7357 11.3108 22.6564 11.3727 22.5673 11.4172V11.4172Z"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M3.75003 12.4753L1.43275 11.3166C1.34366 11.2721 1.26434 11.2103 1.19941 11.1347C1.13449 11.0592 1.08525 10.9715 1.05459 10.8767C1.02392 10.782 1.01244 10.682 1.02081 10.5828C1.02918 10.4835 1.05724 10.387 1.10334 10.2987L3.40893 5.88332C3.49994 5.70902 3.65576 5.57744 3.84284 5.5169C4.02992 5.45636 4.23329 5.47171 4.40916 5.55965L6.75003 6.73008L3.75003 12.4753Z"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M20.25 12.5761L18.75 14.3309L15.3003 17.7806C15.2087 17.8722 15.095 17.9385 14.9701 17.9731C14.8453 18.0076 14.7137 18.0093 14.588 17.9779L9.15458 16.6195C9.05266 16.594 8.95724 16.5474 8.87448 16.4827L3.75 12.4756"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M18.75 14.3311L14.625 11.3311L13.425 12.2311C12.9057 12.6205 12.2741 12.8311 11.625 12.8311C10.9759 12.8311 10.3443 12.6205 9.82498 12.2311L9.31678 11.8499C9.23082 11.7854 9.15972 11.7032 9.10828 11.6089C9.05685 11.5146 9.02629 11.4103 9.01867 11.3031C9.01105 11.1959 9.02656 11.0883 9.06413 10.9877C9.10171 10.887 9.16047 10.7956 9.23645 10.7196L12.9053 7.05072C12.975 6.98108 13.0576 6.92584 13.1486 6.88814C13.2396 6.85045 13.3371 6.83105 13.4356 6.83105H17.25"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M6.80386 6.73047L11.6151 5.32783C11.787 5.27772 11.9711 5.29075 12.1342 5.36455L15.375 6.83095"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M10.5 19.9558L7.67443 19.2494C7.55977 19.2207 7.4535 19.1654 7.3643 19.0878L5.25 17.25"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            Nearest services
                                                            <span className="icon icon--plus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#AEB3C2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8 2.5V13.5" stroke="#AEB3C2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            <span className="icon icon--minus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#464D61" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </h2>
                                                    <div id="businessCollapse" className="accordion-collapse collapse" aria-labelledby="buisness" data-bs-parent="#subcategoryGroup">
                                                        <div className="accordion-body list-sidebar__accordion-inner-body">
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-7-1" />
                                                                    <label className="form-check-label" for="category-item-7-1">
                                                                        buisness 01
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-7-2" />
                                                                    <label className="form-check-label" for="category-item-7-2">
                                                                        buisness 02
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-7-3" />
                                                                    <label className="form-check-label" for="category-item-7-3">
                                                                        buisness 03
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-7-4" />
                                                                    <label className="form-check-label" for="category-item-7-4">
                                                                        buisness 04
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item list-sidebar__accordion-inner-item">
                                                    <h2 className="accordion-header" id="education">
                                                        <div
                                                            className="accordion-button list-sidebar__accordion-inner-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#educationCollapse"
                                                            aria-expanded="true"
                                                            aria-controls="educationCollapse"
                                                        >
                                                            <span className="list-sidebar__accordion-inner-icon">
                                                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.75 9L13 3L24.25 9L13 15L1.75 9Z" stroke="#66CCFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M18.625 22.5V12L13 9" stroke="#66CCFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path
                                                                        d="M21.625 10.4004V15.5117C21.6253 15.6735 21.573 15.831 21.476 15.9605C20.8444 16.8009 18.18 19.8754 13 19.8754C7.82004 19.8754 5.15558 16.8009 4.52402 15.9605C4.42699 15.831 4.37469 15.6735 4.375 15.5117V10.4004"
                                                                        stroke="#66CCFF"
                                                                        stroke-width="1.6"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            Education
                                                            <span className="icon icon--plus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#AEB3C2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8 2.5V13.5" stroke="#AEB3C2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                            <span className="icon icon--minus">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.5 8H13.5" stroke="#464D61" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </h2>
                                                    <div id="educationCollapse" className="accordion-collapse collapse" aria-labelledby="education" data-bs-parent="#subcategoryGroup">
                                                        <div className="accordion-body list-sidebar__accordion-inner-body">
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-8-1" />
                                                                    <label className="form-check-label" for="category-item-8-1">
                                                                        Education 01
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-8-2" />
                                                                    <label className="form-check-label" for="category-item-8-2">
                                                                        Education 02
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-8-3" />
                                                                    <label className="form-check-label" for="category-item-8-3">
                                                                        Education 03
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="list-sidebar__accordion-inner-body--item">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="category-item-8-4" />
                                                                    <label className="form-check-label" for="category-item-8-4">
                                                                        Education 04
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
                                <div className="accordion-item list-sidebar__accordion-item seller-type">
                                    <h2 className="accordion-header list-sidebar__accordion-header" id="sellerType">
                                        <button className="accordion-button list-sidebar__accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sellerCollapse" aria-expanded="false" aria-controls="sellerCollapse">
                                            SELLER TYPE
                                        </button>
                                    </h2>
                                    <div id="sellerCollapse" className="accordion-collapse collapse show" aria-labelledby="sellerType" data-bs-parent="#accordionGroup">
                                        <div className="accordion-body list-sidebar__accordion-body">
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="type" id="type1" value="option1" checked />
                                                    <label className="form-check-label" for="type1">
                                                        Member
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="type" id="type2" value="option2" />
                                                    <label className="form-check-label" for="type2">
                                                        Non Member
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="type" id="type3" value="option3" />
                                                    <label className="form-check-label" for="type3">
                                                        Verified Seller
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="type" id="type4" value="option4" />
                                                    <label className="form-check-label" for="type4">
                                                        Urgents
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item list-sidebar__accordion-item condition">
                                    <h2 className="accordion-header list-sidebar__accordion-header" id="condition">
                                        <button
                                            className="accordion-button list-sidebar__accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#conditionCollapse"
                                            aria-expanded="false"
                                            aria-controls="conditionCollapse"
                                        >
                                            CONDITIONS
                                        </button>
                                    </h2>
                                    <div id="conditionCollapse" className="accordion-collapse collapse show" aria-labelledby="condition" data-bs-parent="#accordionGroup">
                                        <div className="accordion-body list-sidebar__accordion-body">
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="condition" id="condition1" value="option1" checked />
                                                    <label className="form-check-label" for="condition1">
                                                        Any
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="condition" id="condition2" value="option2" />
                                                    <label className="form-check-label" for="condition2">
                                                        New
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="condition" id="condition3" value="option3" />
                                                    <label className="form-check-label" for="condition3">
                                                        Useds
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item list-sidebar__accordion-item top-location">
                                    <h2 className="accordion-header list-sidebar__accordion-header" id="topLocation">
                                        <button
                                            className="accordion-button list-sidebar__accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#topLocationCollapse"
                                            aria-expanded="false"
                                            aria-controls="topLocationCollapse"
                                        >
                                            TOP LOCATION
                                        </button>
                                    </h2>
                                    <div id="topLocationCollapse" className="accordion-collapse collapse show" aria-labelledby="topLocation" data-bs-parent="#accordionGroup">
                                        <div className="accordion-body list-sidebar__accordion-body">
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="input-field">
                                                    <input type="text" placeholder="Search location" />
                                                    <span className="icon icon--left">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                                                                stroke="#00AAFF"
                                                                stroke-width="1.6"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                            <path d="M17.5 17.5L13.875 13.875" stroke="#00AAFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="location-item-1" />
                                                    <label className="form-check-label" for="location-item-1">
                                                        Awo Hall
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="location-item-2" />
                                                    <label className="form-check-label" for="location-item-2">
                                                        Queen Elizabeth Hall
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="location-item-3" />
                                                    <label className="form-check-label" for="location-item-3">
                                                        Chapel, Abadina Hall
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="location-item-4" />
                                                    <label className="form-check-label" for="location-item-4">
                                                        Agbowo express
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="location-item-5" />
                                                    <label className="form-check-label" for="location-item-5">
                                                        Mellanby Hall
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="location-item-6" />
                                                    <label className="form-check-label" for="location-item-6">
                                                        india Hall
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="location-item-7" />
                                                    <label className="form-check-label" for="location-item-7">
                                                        Bodija Market
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-sidebar__accordion-inner-body--item">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="location-item-8" />
                                                    <label className="form-check-label" for="location-item-8">
                                                        Ojoo Electronics Market
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item list-sidebar__accordion-item location-radius mobile-toggle-hide">
                                    <h2 className="accordion-header list-sidebar__accordion-header" id="locationRadius">
                                        <button className="accordion-button list-sidebar__accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#radiusCollapse" aria-expanded="false" aria-controls="radiusCollapse">
                                            LOCATION RADIUS <span id="value-range" className="text--body-3-600"> miles</span>
                                        </button>
                                    </h2>
                                    <div id="radiusCollapse" className="accordion-collapse collapse show" aria-labelledby="locationRadius" data-bs-parent="#accordionGroup">
                                        <div className="accordion-body list-sidebar__accordion-body">
                                            <input type="range" min="1" max="100" value="1" id="locationrange" className="sliderrange" />
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item list-sidebar__accordion-item price">
                                    <h2 className="accordion-header list-sidebar__accordion-header" id="priceTag">
                                        <button className="accordion-button list-sidebar__accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#priceCollapse" aria-expanded="false" aria-controls="priceCollapse">
                                            Prices
                                        </button>
                                    </h2>
                                    <div id="priceCollapse" className="accordion-collapse collapse show" aria-labelledby="priceTag" data-bs-parent="#accordionGroup">
                                        <div className="accordion-body list-sidebar__accordion-body">
                                            <div className="price-range-slider">
                                                <div className="slider-count-wrap">
                                                    <div className="slider-count">
                                                        <input type="number" value="0" className="from" />
                                                        <label>Naira</label>
                                                    </div>
                                                    <div className="slider-count">
                                                        <input type="number" value="1000" className="to" />
                                                        <label>Naira</label>
                                                    </div>
                                                </div>
                                                <input type="text" className="js-range-slider" name="my_range" value="" data-skin="round" data-type="double"  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="ad-list__content row">
                            <div className="col-lg-4">
                                <div className="cards cards--one cards--highlight">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-10.png" alt="card-img" className="img-fluid" />
                                        <span className="cards__tag text--body-5">
                                            Urgents
                                        </span>
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
                                                Phones and Gadgets
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">Itel selling fast</a>
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
                                                idia hall
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#42,000 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one cards--highlight">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-01.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Gadgets
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">Iphone 15</a>
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
                                                idia
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#1,200,000 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one cards--highlight">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-02.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Hair Brand
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">DTEEMS HAIRLINE </a>
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
                                                nationwide distribution
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">Affordable Prices </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one cards--highlight">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-17.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Food and delicacy
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">fast and sweet delicacy</a>
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
                                                Delivery across the Campus.
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">Affordable prices </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-27.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Shoes and Bags
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">student price shoes</a>
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
                                                Sultan Bello Hall
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">Affordable Prices </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-04.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Laundry Services
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">Clean and fast laundry services</a>
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
                                                Chapel of ressurection.
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#500/cloth </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-12.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Electric Kettle
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">electric kettle for sale</a>
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
                                                Agbowo Express
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#9000 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-19.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                School Bag for sale
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">Neat School Bag for sale</a>
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
                                                Kuti Hall
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#6500</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-20.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Uber services
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title"> Experience and professional driver available</a>
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
                                                Social Science department
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">Affordable price </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-21.png" alt="card-img" className="img-fluid" />
                                        <span className="cards__tag text--body-5">
                                            Urgents
                                        </span>
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
                                                Gas cooker for sale
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">Very neat 6kg Gas cooker for sale</a>
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
                                                Postgraduate Hall
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#25000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-11.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Computer Gadgets
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">Hp2000 for sale</a>
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
                                                Ojoo ElectronicsMarket
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#132,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-12.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Artist
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">Draw and sell different painting</a>
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
                                                Sultan Bello
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">different price range </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-23.png" alt="card-img" className="img-fluid" />
                                        <span className="cards__tag text--body-5">
                                            Urgents
                                        </span>
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
                                                Shoemaker
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title"> Repair and buy already made shoes</a>
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
                                                Abadina Road/delivery across Campus
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">Affordable prices </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-34.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Mathematics course tutorial
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">My name is Godwin i take different MAT tutorial</a>
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
                                                Agbowo
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">different subsription plan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-24.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Package food stuff
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title"> Different Package foodstuff</a>
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
                                                Queen Elizabeth Hall
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">Affordable Hall</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-25.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Snacks pack
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title"> different snacks pack</a>
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
                                                School Entrance
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#200-#1000 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-28.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Professional Tailor
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title"> 300l chemistry student can sew different types of cloth.</a>
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
                                                Faculty of Science
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">Affordable Prices </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-30.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Student Mattress for sale
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title"> 4X4 student mattress for sale</a>
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
                                                Kuti Hall
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#12,000 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-31.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Soup Kitchen
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">We prepare different soup</a>
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
                                                Delivery across Campus
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#1200-#5000 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-32.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Phone accessories
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">different phone accessories available</a>
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
                                                Central Mosque Road
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">Very affprdable</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cards cards--one">
                                    <a href="ad-details.html" className="cards__img-wrapper">
                                        <img src="/src/images/view/img-33.png" alt="card-img" className="img-fluid" />
                                        {/* <!-- <span className="cards__tag text--body-5">
                                            Urgents
                                        </span> --> */}
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
                                                Student Chair and Table for sale
                                            </h6>
                                            <a href="ad-details.html" className="text--body-3-600 cards__caption-title">Very neat chair and table for sale</a>
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
                                                Postgraduate Hall
                                            </h6>
                                            <span className="cards__price-title text--body-3-600">#12000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
  