import Footer3 from "@/components/Footer/Footer3";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const ServiceTrendings = () => {
  return (
    <>
      <h1 className="py-5 px-3">Trending/Explore More</h1>
      <div className="case-study-grid-section pt-1 mb-130">
        <div className="container-lg container-fluid">
          <div className="row gy-5 justify-content-between mb-70">
            <div className="col-lg-4 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card two">
                  <div className="case-study-img">
                    <img
                      src="assets/img/Enterprise_platforms/trend-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                      MVP Development Trends
                      </Link>
                    </h3>
                    <p>
                    Startups and established companies alike are increasingly using MVPs to validate ideas quickly and reduce time-to-market.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card two">
                  <div className="case-study-img">
                    <img
                      src="assets/img/Enterprise_platforms/trend-2.jpg"
                      alt=""
                      style={{height:"275px"}}
                    />
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">Custom ERP Solutions</Link>
                    </h3>
                    <p>
                    More enterprises are opting for bespoke ERP systems to address unique business needs and enhance integration across departments.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card two">
                  <div className="case-study-img">
                    <img
                      src="assets/img/Enterprise_platforms/trend-3.jpg"
                      alt=""
                    />                
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">CRM Innovations</Link>
                    </h3>
                    <p>
                    Advances in CRM technology are driving personalized customer experiences and better data-driven decision-making.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTrendings;