import Footer3 from "@/components/Footer/Footer3";
import Home1AwardSection from "@/components/award-section/home1-award-section";
import Header from "@/components/header/Header";
import Home1TestimonialSection from "@/components/testimonial-section/home1-testimonial-section";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const AboutPage = () => {
  return (
    <>

      <main className="page-content">
        <div className="line_wrap">
          <div className="line_item first-line" />
          <div className="line_item center-line" />
          <div className="line_item last-line" />
        </div>
        <div className="about-banner-section">
          <div className="container-lg container-fluid">
            <div className="about-content-wrap">
              <div className="sub-title text-animation">
                <h6>
                 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={6}
                    viewBox="0 0 50 6"
                  >
                    <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                  </svg>
                </h6>
                <svg
                  className="star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={45}
                  height={36}
                  viewBox="0 0 45 36"
                >
                  <path d="M41.0652 13.6409C35.2969 11.1608 31.0567 6.12526 29.8725 0C28.6882 6.12526 24.448 11.1608 18.6798 13.6409C17.5719 14.1294 14.7451 14.881 14.7451 14.881C14.7451 14.881 17.5337 15.6326 18.6798 16.1211C24.448 18.6013 28.6882 23.6743 29.8725 29.762C31.0567 23.6367 35.2969 18.6013 41.0652 16.1211C42.173 15.6326 44.9998 14.881 44.9998 14.881C44.9998 14.881 42.2112 14.1294 41.0652 13.6409Z" />
                  <path d="M17.1903 26.4929C13.7523 25.0274 11.2693 22.0211 10.5435 18.4136C9.85588 22.0211 7.33466 25.0274 3.89663 26.4929C3.24722 26.7935 1.56641 27.2069 1.56641 27.2069C1.56641 27.2069 3.20902 27.6578 3.89663 27.9209C7.33466 29.3864 9.81768 32.3927 10.5435 36.0002C11.2693 32.4303 13.7523 29.424 17.1903 27.9585C17.8398 27.6578 19.5206 27.2445 19.5206 27.2445C19.5206 27.2445 17.8398 26.7935 17.1903 26.4929Z" />
                  <path d="M44.3893 27.2443C44.3893 28.1086 43.6635 28.785 42.823 28.785C41.9444 28.785 41.2568 28.071 41.2568 27.2443C41.2568 26.38 41.9826 25.7036 42.823 25.7036C43.6635 25.666 44.3893 26.38 44.3893 27.2443Z" />
                  <path d="M15.318 5.8244C15.318 6.6887 14.5922 7.36511 13.7518 7.36511C12.8732 7.36511 12.1855 6.65112 12.1855 5.8244C12.1855 4.9601 12.9114 4.28369 13.7518 4.28369C14.6304 4.28369 15.318 4.9601 15.318 5.8244Z" />
                  <path d="M1.56621 16.4218C2.43121 16.4218 3.13243 15.732 3.13243 14.881C3.13243 14.0301 2.43121 13.3403 1.56621 13.3403C0.701218 13.3403 0 14.0301 0 14.881C0 15.732 0.701218 16.4218 1.56621 16.4218Z" />
                </svg>
              </div>
              <div className="about-section-title text-animation">
                <h1>
                EMPOWER YOUR BUSINESS WITH INNOVATIVE DIGITAL SOLUTION <br />
                  <span style={{fontSize:"40px"}}>
                  Our Team's Deep Market understanding delivers Strategic Solutions
                  to keep your Business Ahead.
                  </span>
                </h1>
              </div>
              <Link
                className="circle-btn btn-hover two d-md-none d-flex"
                href="/contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                </svg>{" "}
                Get in <strong>Touch</strong>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
          </div>
          <div className="about-img-area d-md-block d-none">
            <div className="container-fluid p-0">
              <div className="about-img-wrap">
                <img src="assets/img/innerpage/about-banner-img.jpg" alt="" />
                <div className="button-area">
                  <div className="btn_wrapper">
                    <Link className="circle-btn btn-hover two" href="/contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>{" "}
                      Get in <strong>Touch</strong>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partner-area  pt-130 mb-130">
          <div className="container-lg container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="partner-wrap">
                  <div className="title1">
                    <h6>Our Trusted Partner</h6>
                  </div>
                  <div className="marquee light">
                    <div className="marquee__group">
                      <Marquee>
                        <a href="#">
                          <img src="assets/img/Partners/AWS-light.png" alt="" style={{height:"36px", width:"130px"}} />
                        </a>
                        <a href="#">
                          <img src="assets/img/Partners/Microsoft-light.png" alt="" style={{height:"36px", width:"150px"}} />
                        </a>
                        <a href="#">
                          <img src="assets/img/Partners/Zoho-light.png" alt="" style={{height:"100px", width:"100px"}} />
                        </a>
                        <a href="#">
                          <img src="assets/img/Partners/Namecheap-light.png" alt="" style={{height:"100px", width:"150px"}} />
                        </a>
                        <a href="#">
                          <img src="assets/img/Partners/Wati-light.png" alt="" style={{height:"36px", width:"150px"}} />
                        </a>
                        <a href="#">
                          <img src="assets/img/Partners/Razorpay-light.png" alt="" style={{height:"36px", width:"150px"}} />
                        </a>
                      </Marquee>
                    </div>
                    <div aria-hidden="true" className="marquee__group">
                      <Marquee>
                        <a href="#">
                          <img src="assets/img/home1/partner-01.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-02.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-03.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-04.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-05.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-06.png" alt="" />
                        </a>
                      </Marquee>
                    </div>
                  </div>
                  <div className="marquee dark">
                    <div className="marquee__group">
                      <Marquee>
                      <a href="#">
                          <img src="assets/img/Partners/AWS-dark.png" alt="" style={{height:"36px", width:"130px"}} />
                        </a>
                        <a href="#">
                          <img src="assets/img/Partners/Microsoft-dark.png" alt="" style={{height:"56px", width:"150px"}} />
                        </a>
                        <a href="#">
                          <img src="assets/img/Partners/Zoho-light.png" alt="" style={{height:"100px", width:"100px"}} />
                        </a>
                        <a href="#">
                          <img src="assets/img/Partners/Namecheap-dark.png" alt="" style={{height:"40px", width:"150px"}} />
                        </a>
                        <a href="#">
                          <img src="assets/img/Partners/Wati-dark.png" alt="" style={{height:"36px", width:"150px"}} />
                        </a>
                        <a href="#">
                          <img src="assets/img/Partners/Razorpay-dark.png" alt="" style={{height:"36px", width:"150px"}} />
                        </a>
                      </Marquee>
                    </div>
                    <div aria-hidden="true" className="marquee__group">
                      <Marquee>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-01.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-02.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-03.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-04.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-05.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-06.png"
                            alt=""
                          />
                        </a>
                      </Marquee>
                    </div>
                  </div>
                  <div className="title2 ">
                    <h6>Almost 20+ Partner we have</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;