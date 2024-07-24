import React from 'react'

const Faq = () => {
  return (
    <div>
        
        {/* <!-- breedcrumb section start  --> */}
        <section className="breedcrumb" style={{ 
  background: "url('src/images/bg/bg-04.jpg') center center/cover no-repeat" 
}}>
            <div className="container">
                <h2 className="breedcrumb__title text--heading-2">Faqs</h2>
                <ul className="breedcrumb__page">
                    <li className="breedcrumb__page-item">
                        <a href="index.html" className="breedcrumb__page-link text--body-3">Home</a>
                    </li>
                    <li className="breedcrumb__page-item">
                        <a href="#" className="breedcrumb__page-link text--body-3">/</a>
                    </li>
                    <li className="breedcrumb__page-item">
                        <a href="#" className="breedcrumb__page-link text--body-3">Faqs</a>
                    </li>
                </ul>
            </div>
        </section>
        {/* <!-- breedcrumb section end  --> */}

        {/* <!-- faq section start  --> */}
        <section className="faq section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="faq__title text--heading-1">Frequently asked question</h2>
                        <p className="faq__brief text--body-3">
                            Praesent finibus dictum nisl sit amet vulputate. Fusce a metus eu velit posuere semper a bibendum ante. Donec eu tellus dapibus, semper orci eget, commodo lacu praesent ullamcorper.
                        </p>

                        <ul className="nav nav-pills faq__nav" id="pills-tab" role="tablist">
                            <li className="nav-item faq__nav-item" role="presentation">
                                <button className="nav-link faq__nav-link active" id="pills-general-tab" data-bs-toggle="pill" data-bs-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="true">
                                    <span className="icon">
                                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.50951 32.2339C7.07139 30.8025 8.02524 27.7973 7.29325 26.0364C6.53443 24.211 3.75 22.7419 3.75 20.7971C3.75 18.8523 6.53445 17.3831 7.29325 15.5578C8.02525 13.7969 7.07139 10.7917 8.50951 9.36032C9.94764 7.92891 12.9669 8.87831 14.7361 8.14973C16.57 7.39447 18.0461 4.62305 20.0001 4.62305C21.954 4.62305 23.43 7.39448 25.2639 8.14974C27.0331 8.87832 30.0524 7.92892 31.4905 9.36032C32.9286 10.7917 31.9748 13.7969 32.7068 15.5578C33.4656 17.3832 36.25 18.8523 36.25 20.7972C36.25 22.742 33.4656 24.2111 32.7067 26.0364C31.9747 27.7973 32.9286 30.8025 31.4905 32.2339C30.0524 33.6653 27.0331 32.7159 25.2639 33.4445C23.43 34.1997 21.9539 36.9712 19.9999 36.9712C18.046 36.9712 16.57 34.1997 14.7361 33.4445C12.9669 32.7159 9.94764 33.6653 8.50951 32.2339Z"
                                                stroke="currentColor"
                                                stroke-width="2.66667"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M20 30.7481C21.0355 30.7481 21.875 29.9126 21.875 28.8819C21.875 27.8512 21.0355 27.0156 20 27.0156C18.9645 27.0156 18.125 27.8512 18.125 28.8819C18.125 29.9126 18.9645 30.7481 20 30.7481Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M20 23.2834V22.0392C20.8653 22.0392 21.7112 21.7838 22.4306 21.3053C23.1501 20.8268 23.7108 20.1467 24.042 19.3511C24.3731 18.5554 24.4597 17.6798 24.2909 16.8351C24.1221 15.9904 23.7054 15.2145 23.0936 14.6055C22.4817 13.9965 21.7022 13.5818 20.8535 13.4138C20.0049 13.2457 19.1252 13.332 18.3258 13.6616C17.5263 13.9911 16.8431 14.5493 16.3623 15.2654C15.8816 15.9815 15.625 16.8234 15.625 17.6846"
                                                stroke="currentColor"
                                                stroke-width="2.66667"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    general
                                </button>
                            </li>
                            <li className="nav-item faq__nav-item" role="presentation">
                                <button className="nav-link faq__nav-link" id="pills-account-tab" data-bs-toggle="pill" data-bs-target="#pills-account" type="button" role="tab" aria-controls="pills-account" aria-selected="false">
                                    <span className="icon">
                                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20 25.7717C23.4518 25.7717 26.25 22.9865 26.25 19.5509C26.25 16.1152 23.4518 13.3301 20 13.3301C16.5482 13.3301 13.75 16.1152 13.75 19.5509C13.75 22.9865 16.5482 25.7717 20 25.7717Z"
                                                stroke="currentColor"
                                                stroke-width="2.66667"
                                                stroke-miterlimit="10"
                                            />
                                            <path
                                                d="M9.96826 31.8949C10.9098 30.0524 12.3453 28.505 14.1158 27.4243C15.8863 26.3435 17.9227 25.7715 19.9996 25.7715C22.0766 25.7715 24.113 26.3435 25.8835 27.4243C27.654 28.505 29.0895 30.0523 30.031 31.8949"
                                                stroke="currentColor"
                                                stroke-width="2.66667"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M31.25 12.086C32.6307 12.086 33.75 10.972 33.75 9.59769C33.75 8.22343 32.6307 7.10938 31.25 7.10938C29.8693 7.10938 28.75 8.22343 28.75 9.59769C28.75 10.972 29.8693 12.086 31.25 12.086Z"
                                                stroke="currentColor"
                                                stroke-width="2.66667"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path d="M31.25 7.11038V5.24414" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M29.0847 8.35499L27.4609 7.42188" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M29.0847 10.8438L27.4609 11.7769" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M31.25 12.0859V13.9522" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M33.4146 10.8438L35.0383 11.7769" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M33.4146 8.35499L35.0383 7.42188" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M34.8935 19.0067C34.9646 19.6002 35.0001 20.1974 35 20.7951C35 23.748 34.1203 26.6345 32.4721 29.0898C30.8238 31.545 28.4812 33.4586 25.7403 34.5886C22.9994 35.7186 19.9834 36.0142 17.0737 35.4382C14.1639 34.8621 11.4912 33.4402 9.39341 31.3522C7.29562 29.2642 5.86701 26.6039 5.28823 23.7078C4.70945 20.8117 5.0065 17.8098 6.14181 15.0817C7.27713 12.3536 9.19972 10.0219 11.6665 8.38138C14.1332 6.74086 17.0333 5.86523 20 5.86523C20.4693 5.86523 20.9333 5.88638 21.3919 5.92866"
                                                stroke="currentColor"
                                                stroke-width="2.66667"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>

                                    Your account
                                </button>
                            </li>
                            <li className="nav-item faq__nav-item" role="presentation">
                                <button className="nav-link faq__nav-link" id="pills-money-tab" data-bs-toggle="pill" data-bs-target="#pills-money" type="button" role="tab" aria-controls="pills-money" aria-selected="false">
                                    <span className="icon">
                                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M35 9.5957H5C4.30964 9.5957 3.75 10.1527 3.75 10.8399V30.7464C3.75 31.4335 4.30964 31.9906 5 31.9906H35C35.6904 31.9906 36.25 31.4335 36.25 30.7464V10.8399C36.25 10.1527 35.6904 9.5957 35 9.5957Z"
                                                stroke="currentColor"
                                                stroke-width="2.66667"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path d="M26.249 27.0156H31.249" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.749 27.0156H21.249" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.74902 15.9512H36.249" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    money & Payment
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content faq__tab-content" id="pills-tabContent">
                            {/* <!-- General --> */}
                            <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab">
                                {/* <!-- Frequent Asked Question  --> */}
                                <div className="accordion faq__acordion" id="generalQuestion">
                                    <div className="accordion-item faq__accordion-item">
                                        <h2 className="accordion-header faq__accordion-header" id="freqOne">
                                            <button className="accordion-button faq__accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <span className="text">  Donec in ipsum sit amet mi tincidunt lacinia ut id risus.
                                                    lorem</span>
                                                <span className="icon">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12.0039H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 3.75391V20.2539" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse faq__accordion-collapse collapse show" aria-labelledby="freqOne" data-bs-parent="#generalQuestion">
                                            <div className="accordion-body faq__accordion-body">
                                                <p className="text--body-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item faq__accordion-item">
                                        <h2 className="accordion-header faq__accordion-header" id="freqTwo">
                                            <button className="accordion-button faq__accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <span className="text">Etiam rutrum ligula at dui tempor.</span>
                                                <span className="icon">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12.0039H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 3.75391V20.2539" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse faq__accordion-collapse collapse" aria-labelledby="freqTwo" data-bs-parent="#generalQuestion">
                                            <div className="accordion-body faq__accordion-body">
                                                <p className="text--body-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item faq__accordion-item">
                                        <h2 className="accordion-header faq__accordion-header" id="freqThree">
                                            <button className="accordion-button faq__accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <span className="text">                                                Morbi vitae neque eu sapien aliquet rhoncus.</span>
                                                <span className="icon">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12.0039H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 3.75391V20.2539" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse faq__accordion-collapse collapse" aria-labelledby="freqThree" data-bs-parent="#generalQuestion">
                                            <div className="accordion-body faq__accordion-body">
                                                <p className="text--body-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Your Account --> */}
                            <div className="tab-pane fade" id="pills-account" role="tabpanel" aria-labelledby="pills-account-tab">
                                {/* <!-- Frequent Asked Question  --> */}
                                <div className="accordion faq__acordion" id="accountQuestion">
                                    <div className="accordion-item faq__accordion-item">
                                        <h2 className="accordion-header faq__accordion-header" id="accountOne">
                                            <button className="accordion-button faq__accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                               <span className="text"> Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</span>
                                                <span className="icon">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12.0039H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 3.75391V20.2539" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse faq__accordion-collapse collapse show" aria-labelledby="accountOne" data-bs-parent="#accountQuestion">
                                            <div className="accordion-body faq__accordion-body">
                                                <p className="text--body-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item faq__accordion-item">
                                        <h2 className="accordion-header faq__accordion-header" id="accountTwo">
                                            <button className="accordion-button faq__accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                <span className="text">Morbi vitae neque eu sapien aliquet rhoncus.</span>
                                                <span className="icon">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12.0039H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 3.75391V20.2539" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse faq__accordion-collapse collapse" aria-labelledby="accountTwo" data-bs-parent="#accountQuestion">
                                            <div className="accordion-body faq__accordion-body">
                                                <p className="text--body-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item faq__accordion-item">
                                        <h2 className="accordion-header faq__accordion-header" id="accountThree">
                                            <button className="accordion-button faq__accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            <span className="text">Morbi vitae neque eu sapien aliquet rhoncus.</span>
                                                <span className="icon">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12.0039H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 3.75391V20.2539" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse faq__accordion-collapse collapse" aria-labelledby="accountThree" data-bs-parent="#accountQuestion">
                                            <div className="accordion-body faq__accordion-body">
                                                <p className="text--body-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Money & Payment --> */}
                            <div className="tab-pane fade" id="pills-money" role="tabpanel" aria-labelledby="pills-money-tab">
                                {/* <!-- Frequent Asked Question  --> */}
                                <div className="accordion faq__acordion" id="paymentQuestion">
                                    <div className="accordion-item faq__accordion-item">
                                        <h2 className="accordion-header faq__accordion-header" id="moneyOne">
                                            <button className="accordion-button faq__accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                <span className="text"> Donec in ipsum sit amet mi tincidunt lacinia ut id risus.</span>
                                                <span className="icon">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12.0039H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 3.75391V20.2539" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse faq__accordion-collapse collapse show" aria-labelledby="moneyOne" data-bs-parent="#paymentQuestion">
                                            <div className="accordion-body faq__accordion-body">
                                                <p className="text--body-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item faq__accordion-item">
                                        <h2 className="accordion-header faq__accordion-header" id="moneyTwo">
                                            <button className="accordion-button faq__accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                                                                <span className="text">Morbi vitae neque eu sapien aliquet rhoncus.</span>
                                                <span className="icon">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12.0039H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 3.75391V20.2539" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse faq__accordion-collapse collapse" aria-labelledby="moneyTwo" data-bs-parent="#paymentQuestion">
                                            <div className="accordion-body faq__accordion-body">
                                                <p className="text--body-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item faq__accordion-item">
                                        <h2 className="accordion-header faq__accordion-header" id="moneyThree">
                                            <button className="accordion-button faq__accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                            <span className="text">Morbi vitae neque eu sapien aliquet rhoncus.</span>
                                                <span className="icon">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12.0039H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 3.75391V20.2539" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="collapseNine" className="accordion-collapse faq__accordion-collapse collapse" aria-labelledby="moneyThree" data-bs-parent="#paymentQuestion">
                                            <div className="accordion-body faq__accordion-body">
                                                <p className="text--body-3">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- faq section end   --> */}

    </div>
  )
}

export default Faq