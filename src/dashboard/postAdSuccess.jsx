import React from 'react'

const PostAdSuccess = () => {
  return (
    <div>
              {/* // <!-- breedcrumb section start  --> */}
        <section className="breedcrumb" style={{ 
  background: "url('src/images/bg/bg-04.jpg') center center/cover no-repeat" 
}}>
            <div className="container">
                <h2 className="breedcrumb__title text--heading-2">Overview</h2>
                <ul className="breedcrumb__page">
                    <li className="breedcrumb__page-item">
                        <a href="index.html" className="breedcrumb__page-link text--body-3">Home</a>
                    </li>
                    <li className="breedcrumb__page-item">
                        <a href="#" className="breedcrumb__page-link text--body-3"></a>
                    </li>
                    <li className="breedcrumb__page-item">
                        <a href="#" className="breedcrumb__page-link text--body-3">Dashboard</a>
                    </li>
                    <li className="breedcrumb__page-item">
                        <a href="#" className="breedcrumb__page-link text--body-3">/</a>
                    </li>
                    <li className="breedcrumb__page-item">
                        <a href="#" className="breedcrumb__page-link text--body-3">Post Ads</a>
                    </li>
                </ul>
            </div>
        </section>
        {/* // <!-- breedcrumb section end  --> */}

        {/* // <!-- dashboard section start  --> */}
        <section className="section dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="dashboard__navigation">
                            <div className="dashboard__navigation-top">
                                <div className="dashboard__user-proifle">
                                    <div className="dashboard__user-img">
                                        <img src="/src/images/users/img-01.png" alt="user-photo" />
                                    </div>
                                    <div className="dashboard__user-info">
                                        <h2 className="name text--body-2-600">Taiwo Olaoluwa</h2>
                                        <p className="designation text--body-4">Member</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard__navigation-bottom">
                                <ul className="dashboard__nav">
                                    <li className="dashboard__nav-item">
                                        <a href="dashboard.html" className="dashboard__nav-link">
                                            <span className="icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 3H3V10H10V3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M21 3H14V10H21V3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M21 14H14V21H21V14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M10 14H3V21H10V14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            Overview
                                        </a>
                                    </li>
                                    <li className="dashboard__nav-item">
                                        <a href="post-ads.html" className="dashboard__nav-link active">
                                            <span className="icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                        stroke="currentColor"
                                                        stroke-width="1.6"
                                                        stroke-miterlimit="10"
                                                    />
                                                    <path d="M8.25 12H15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 8.25V15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            post ads
                                        </a>
                                    </li>
                                    <li className="dashboard__nav-item">
                                        <a href="myad.html" className="dashboard__nav-link">
                                            <span className="icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 14.25H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9 11.25H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M15.0002 3.75H18.75C18.9489 3.75 19.1397 3.82902 19.2803 3.96967C19.421 4.11032 19.5 4.30109 19.5 4.5V20.25C19.5 20.4489 19.421 20.6397 19.2803 20.7803C19.1397 20.921 18.9489 21 18.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V4.5C4.5 4.30109 4.57902 4.11032 4.71967 3.96967C4.86032 3.82902 5.05109 3.75 5.25 3.75H8.9998"
                                                        stroke="currentColor"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M8.25 6.75V6C8.25 5.00544 8.64509 4.05161 9.34835 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9946 2.25 13.9484 2.64509 14.6517 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6V6.75H8.25Z"
                                                        stroke="currentColor"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            My ads
                                        </a>
                                    </li>
                                    <li>
                                        <a href="account-setting.html" className="dashboard__nav-link">
                                            <span className="icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                                                        stroke="currentColor"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                    <path
                                                        d="M11.5193 4.13952L9.75029 2.81315C9.65538 2.74175 9.54485 2.69393 9.42783 2.67363C9.3108 2.65332 9.19063 2.66112 9.07721 2.69638C8.52933 2.86794 7.99778 3.08787 7.48884 3.35355C7.38349 3.40881 7.29279 3.48834 7.22422 3.58556C7.15566 3.68278 7.1112 3.79492 7.09452 3.91271L6.78179 6.10186C6.66259 6.20753 6.54589 6.31742 6.43169 6.43156C6.31752 6.54573 6.2076 6.66246 6.10191 6.78176L6.10186 6.78179L3.9131 7.09479C3.7955 7.11142 3.68353 7.15576 3.58642 7.22415C3.48932 7.29254 3.40986 7.38303 3.35459 7.48816C3.08849 7.99689 2.86814 8.52826 2.69613 9.076C2.66071 9.18957 2.65281 9.30994 2.67307 9.42717C2.69334 9.5444 2.7412 9.65513 2.81269 9.75022L4.13952 11.5193C4.12995 11.6783 4.12514 11.8385 4.12509 12C4.12509 12.1614 4.1299 12.3217 4.13953 12.4808L4.13952 12.4809L2.81315 14.2499C2.74175 14.3448 2.69393 14.4553 2.67363 14.5723C2.65332 14.6894 2.66112 14.8095 2.69638 14.923C2.86794 15.4708 3.08787 16.0024 3.35355 16.5113C3.40881 16.6167 3.48834 16.7074 3.58556 16.776C3.68278 16.8445 3.79492 16.889 3.91271 16.9057L6.10186 17.2184C6.20752 17.3376 6.31742 17.4543 6.43156 17.5685C6.54572 17.6827 6.66245 17.7926 6.78175 17.8983L6.78179 17.8983L7.09479 20.0871C7.11142 20.2047 7.15575 20.3167 7.22415 20.4138C7.29254 20.5109 7.38303 20.5903 7.48816 20.6456C7.99688 20.9117 8.52825 21.132 9.07599 21.304C9.18957 21.3395 9.30994 21.3474 9.42716 21.3271C9.54439 21.3068 9.65512 21.259 9.75021 21.1875L11.5193 19.8607C11.6783 19.8702 11.8385 19.875 12 19.8751C12.1614 19.8751 12.3217 19.8703 12.4808 19.8607L12.4809 19.8607L14.2499 21.187C14.3448 21.2584 14.4553 21.3063 14.5723 21.3266C14.6894 21.3469 14.8095 21.3391 14.923 21.3038C15.4708 21.1322 16.0024 20.9123 16.5113 20.6466C16.6167 20.5914 16.7074 20.5118 16.776 20.4146C16.8445 20.3174 16.889 20.2053 16.9057 20.0875L17.2184 17.8983C17.3376 17.7927 17.4543 17.6828 17.5685 17.5686C17.6827 17.4545 17.7926 17.3377 17.8983 17.2184L17.8983 17.2184L20.0871 16.9054C20.2047 16.8888 20.3167 16.8444 20.4138 16.776C20.5109 16.7076 20.5903 16.6172 20.6456 16.512C20.9117 16.0033 21.132 15.4719 21.304 14.9242C21.3395 14.8106 21.3474 14.6902 21.3271 14.573C21.3068 14.4558 21.259 14.3451 21.1875 14.25L19.8607 12.4809C19.8702 12.3219 19.875 12.1616 19.8751 12.0002C19.8751 11.8387 19.8703 11.6785 19.8607 11.5194L19.8607 11.5193L21.187 9.75029C21.2584 9.65538 21.3063 9.54485 21.3266 9.42783C21.3469 9.3108 21.3391 9.19063 21.3038 9.07721C21.1322 8.52933 20.9123 7.99778 20.6466 7.48884C20.5914 7.38349 20.5118 7.29279 20.4146 7.22422C20.3174 7.15566 20.2053 7.1112 20.0875 7.09452L17.8983 6.78179C17.7927 6.66259 17.6828 6.54589 17.5686 6.43169C17.4545 6.31752 17.3377 6.2076 17.2184 6.10191L17.2184 6.10186L16.9054 3.9131C16.8888 3.7955 16.8444 3.68353 16.776 3.58642C16.7076 3.48932 16.6172 3.40986 16.512 3.35459C16.0033 3.08849 15.4719 2.86814 14.9242 2.69613C14.8106 2.66071 14.6902 2.65281 14.573 2.67307C14.4558 2.69334 14.3451 2.7412 14.25 2.81269L12.4809 4.13952C12.3219 4.12995 12.1616 4.12514 12.0002 4.12509C11.8387 4.12509 11.6785 4.1299 11.5194 4.13953L11.5193 4.13952Z"
                                                        stroke="currentColor"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            Account Settings
                                        </a>
                                    </li>
                                    <li className="dashboard__nav-item">
                                        <a href="#" className="dashboard__nav-link">
                                            <span className="icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.3135 8.0625L20.2499 12L16.3135 15.9375" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.75 12H20.2472" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M9.75 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9.75"
                                                        stroke="currentColor"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <span className="dashboard__navigation-toggle-btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.5 13.5H4.5C4.08579 13.5 3.75 13.8358 3.75 14.25V18C3.75 18.4142 4.08579 18.75 4.5 18.75H19.5C19.9142 18.75 20.25 18.4142 20.25 18V14.25C20.25 13.8358 19.9142 13.5 19.5 13.5Z"
                                        stroke="currentColor"
                                        stroke-width="1.6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M19.5 5.25H4.5C4.08579 5.25 3.75 5.58579 3.75 6V9.75C3.75 10.1642 4.08579 10.5 4.5 10.5H19.5C19.9142 10.5 20.25 10.1642 20.25 9.75V6C20.25 5.58579 19.9142 5.25 19.5 5.25Z"
                                        stroke="currentColor"
                                        stroke-width="1.6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="dashboard-post post-publish">
                            <div className="icon">
                                <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        opacity="0.2"
                                        d="M19.1464 70.8536C15.9106 67.6178 18.0568 60.8244 16.4098 56.8438C14.7025 52.7174 8.4375 49.3963 8.4375 44.9999C8.4375 40.6035 14.7025 37.2825 16.4098 33.1561C18.0568 29.1756 15.9106 22.3822 19.1464 19.1464C22.3822 15.9106 29.1756 18.0568 33.1562 16.4098C37.2826 14.7025 40.6037 8.4375 45.0001 8.4375C49.3965 8.4375 52.7175 14.7025 56.8439 16.4098C60.8244 18.0568 67.6178 15.9106 70.8536 19.1464C74.0894 22.3822 71.9432 29.1756 73.5902 33.1562C75.2975 37.2826 81.5625 40.6037 81.5625 45.0001C81.5625 49.3965 75.2975 52.7175 73.5902 56.8439C71.9432 60.8244 74.0894 67.6178 70.8536 70.8536C67.6178 74.0894 60.8244 71.9432 56.8438 73.5902C52.7174 75.2975 49.3963 81.5625 44.9999 81.5625C40.6035 81.5625 37.2825 75.2975 33.1561 73.5902C29.1756 71.9432 22.3822 74.0894 19.1464 70.8536Z"
                                        fill="#27C200"
                                    />
                                    <path
                                        d="M19.1464 70.8536C15.9106 67.6178 18.0568 60.8244 16.4098 56.8438C14.7025 52.7174 8.4375 49.3963 8.4375 44.9999C8.4375 40.6035 14.7025 37.2825 16.4098 33.1561C18.0568 29.1756 15.9106 22.3822 19.1464 19.1464C22.3822 15.9106 29.1756 18.0568 33.1562 16.4098C37.2826 14.7025 40.6037 8.4375 45.0001 8.4375C49.3965 8.4375 52.7175 14.7025 56.8439 16.4098C60.8244 18.0568 67.6178 15.9106 70.8536 19.1464C74.0894 22.3822 71.9432 29.1756 73.5902 33.1562C75.2975 37.2826 81.5625 40.6037 81.5625 45.0001C81.5625 49.3965 75.2975 52.7175 73.5902 56.8439C71.9432 60.8244 74.0894 67.6178 70.8536 70.8536C67.6178 74.0894 60.8244 71.9432 56.8438 73.5902C52.7174 75.2975 49.3963 81.5625 44.9999 81.5625C40.6035 81.5625 37.2825 75.2975 33.1561 73.5902C29.1756 71.9432 22.3822 74.0894 19.1464 70.8536Z"
                                        stroke="#27C200"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path d="M60.4688 36.5625L39.8436 56.25L29.5312 46.4062" stroke="#27C200" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h2 className="text--heading-1">Your ad is successfully Publish</h2>
                            <p className="post-publish__brief text--body-3">Congratulations ! your ads is successfully published. This means that your content is now live and visible to your target audience.</p>
                            <div className="btns-group">
                                <a href="post-ads.html" className="btn btn--outline">Go Back</a>
                                <a href="post-ads.html" className="btn">
                                    Go Back
                                    <span className="icon--right">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 12H20.25" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <button className="scrollTop">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20.25V3.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.25 10.5L12 3.75L18.75 10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>


    </div>
  )
}

export default PostAdSuccess
  