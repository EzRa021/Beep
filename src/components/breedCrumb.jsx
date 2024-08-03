import React from 'react'

const BreedCrumb = ({pageTitle, currentPage, greeting, user}) => {
  return (
    <div>
         {/* // <!-- breedcrumb section start  --> */}
         <section className="breedcrumb" style={{
                background: "url('src/images/bg/bg-04.jpg') center center/cover no-repeat"
            }}>  
                <div className="container mx-auto">
                  
                    <h2 className="breedcrumb__title text--heading-2">{pageTitle}</h2>
                    <ul className="breedcrumb__page">
                        <li className="breedcrumb__page-item">
                            <a href="/overview" className="breedcrumb__page-link text--body-3">Overview</a>
                        </li>
                        <li className="breedcrumb__page-item">
                            <a href="#" className="breedcrumb__page-link text--body-3">/</a>
                        </li>
                        <li className="breedcrumb__page-item">
                            <a href="#" className="breedcrumb__page-link text--body-3">{currentPage}</a>
                        </li>

                      
                    </ul>
                </div>
            </section>
            {/* // <!-- breedcrumb section end  --> */}

    </div>
  )
}

export default BreedCrumb