"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Home1solutionSection = ({ style = "home1-solution-section" }) => {
  useEffect(() => {
    // Function to handle click event using event delegation
    const handleClick = (e) => {
      const accordionItem = e.target.closest(".accordion-item");
      if (!accordionItem) return; // If clicked element is not an accordion item, exit

      // Get the index of the clicked accordion item
      const index = Array.from(accordionItem.parentElement.children).indexOf(
        accordionItem
      );

      // Remove 'active' class from all image list items
      document.querySelectorAll(".solution-img-wrapper li").forEach((item) => {
        item.classList.remove("active");
      });

      // Add 'active' class to the corresponding image list item
      const imageListItem = document.querySelector(
        `.solution-img-wrapper li:nth-child(${index + 1})`
      );
      if (imageListItem) {
        imageListItem.classList.add("active");
      }
    };

    // Attach click event listener to the parent element if it exists
    const accordionFlush = document.querySelector(".accordion-flush");
    if (accordionFlush) {
      accordionFlush.addEventListener("click", handleClick);
    }

    // Cleanup function to remove event listener when component unmounts
    return () => {
      if (accordionFlush) {
        accordionFlush.removeEventListener("click", handleClick);
      }
    };
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div className={`home1-solution-section ${style}`}>
      <div className="vector d-lg-flex d-none">
        <svg
          width={300}
          height={372}
          viewBox="0 0 300 372"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle cx={-20} cy={320} r={270} strokeWidth={100} />
          </g>
        </svg>
      </div>
      <div className="container-lg container-fluid">
        <div className="row g-4 mb-60">
          <div className="col-lg-4">
            <div className="sub-title text-animation">
              <h6>
                Our Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={6}
                  viewBox="0 0 50 6"
                >
                  <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                </svg>
              </h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="section-title text-animation">
              <h2>
                SMART FINANCE
                <br />
                BRIGHT FUTURE
              </h2>
              <div className="dash-and-paragraph">
                <div className="dash" />
                <p>
                  Our work in the financial services industry includes deep
                  knowledge and capabilities in three core, cross-functional
                  areas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-4">
            <ul className="solution-img-wrapper text-animation">
              <li className="active">
                <div
                  className="solution-img"
                  style={{
                    backgroundImage: "url(assets/img/Industries_Fintech/solution-1.jpg)",
                  }}
                ></div>
              </li>
              <li>
                <div
                  className="solution-img"
                  style={{
                    backgroundImage: "url(assets/img/Industries_Fintech/solution-2.jpg)",
                  }}
                ></div>
              </li>
              <li>
                <div
                  className="solution-img"
                  style={{
                    backgroundImage: "url(assets/img/Industries_Fintech/solution-3.jpg)",
                  }}
                ></div>
              </li>
              <li>
                <div
                  className="solution-img"
                  style={{
                    backgroundImage: "url(assets/img/Industries_Fintech/solution-4.jpg)",
                  }}
                ></div>
              </li>
              <li>
                <div
                  className="solution-img"
                  style={{
                    backgroundImage: "url(assets/img/Industries_Fintech/solution-5.jpg)",
                  }}
                ></div>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h3 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    1. Banking
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.42387 0C5.57582 0 5.72154 0.0585322 5.82898 0.16272C5.93642 0.266908 5.99679 0.408218 5.99679 0.555562V8.10343L9.02923 5.16284C9.13729 5.06164 9.28201 5.00564 9.43222 5.00691C9.58244 5.00817 9.72614 5.0666 9.83236 5.16961C9.93858 5.27261 9.99884 5.41195 10.0001 5.55762C10.0014 5.70329 9.9437 5.84362 9.83934 5.9484L5.82892 9.83734C5.72148 9.94149 5.57579 10 5.42387 10C5.27195 10 5.12625 9.94149 5.01882 9.83734L1.0084 5.9484C0.953682 5.89716 0.910035 5.83585 0.880009 5.76807C0.849983 5.70029 0.834179 5.62739 0.833518 5.55362C0.832857 5.47986 0.847352 5.4067 0.876159 5.33842C0.904966 5.27015 0.947507 5.20812 1.0013 5.15595C1.05509 5.10379 1.11906 5.06254 1.18947 5.0346C1.25988 5.00667 1.33532 4.99261 1.41139 4.99325C1.48746 4.99389 1.56264 5.00922 1.63254 5.03834C1.70244 5.06745 1.76566 5.10978 1.8185 5.16284L4.85095 8.10343V0.555562C4.85095 0.408218 4.91131 0.266908 5.01876 0.16272C5.1262 0.0585322 5.27192 0 5.42387 0Z"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <a href="#">Innovation</a>
                      </li>
                      <li>
                        <a href="#">Tailored</a>
                      </li>
                      <li>
                        <a href="#">Technology</a>
                      </li>
                      <li>
                        <a href="#">Success</a>
                      </li>
                    </ul>
                    <p>
                      Empowering financial innovation for banks with tailored
                      solutions and cutting-edge technology. Partner with us for
                      immediate results and long-term success.
                    </p>
                    <Link className="explore-btn" href="/service-details">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    2. Insurance
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.42387 0C5.57582 0 5.72154 0.0585322 5.82898 0.16272C5.93642 0.266908 5.99679 0.408218 5.99679 0.555562V8.10343L9.02923 5.16284C9.13729 5.06164 9.28201 5.00564 9.43222 5.00691C9.58244 5.00817 9.72614 5.0666 9.83236 5.16961C9.93858 5.27261 9.99884 5.41195 10.0001 5.55762C10.0014 5.70329 9.9437 5.84362 9.83934 5.9484L5.82892 9.83734C5.72148 9.94149 5.57579 10 5.42387 10C5.27195 10 5.12625 9.94149 5.01882 9.83734L1.0084 5.9484C0.953682 5.89716 0.910035 5.83585 0.880009 5.76807C0.849983 5.70029 0.834179 5.62739 0.833518 5.55362C0.832857 5.47986 0.847352 5.4067 0.876159 5.33842C0.904966 5.27015 0.947507 5.20812 1.0013 5.15595C1.05509 5.10379 1.11906 5.06254 1.18947 5.0346C1.25988 5.00667 1.33532 4.99261 1.41139 4.99325C1.48746 4.99389 1.56264 5.00922 1.63254 5.03834C1.70244 5.06745 1.76566 5.10978 1.8185 5.16284L4.85095 8.10343V0.555562C4.85095 0.408218 4.91131 0.266908 5.01876 0.16272C5.1262 0.0585322 5.27192 0 5.42387 0Z"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <a href="#">Optimization</a>
                      </li>
                      <li>
                        <a href="#">Collaboration</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Activities</a>
                      </li>
                    </ul>
                    <p>
                      We help insurers enhance profitability and efficiency,
                      leverage digital tools, boost customer loyalty, and gain a
                      competitive edge with advanced analytics.
                    </p>
                    <Link className="explore-btn" href="/service-details">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    3. Payments
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.42387 0C5.57582 0 5.72154 0.0585322 5.82898 0.16272C5.93642 0.266908 5.99679 0.408218 5.99679 0.555562V8.10343L9.02923 5.16284C9.13729 5.06164 9.28201 5.00564 9.43222 5.00691C9.58244 5.00817 9.72614 5.0666 9.83236 5.16961C9.93858 5.27261 9.99884 5.41195 10.0001 5.55762C10.0014 5.70329 9.9437 5.84362 9.83934 5.9484L5.82892 9.83734C5.72148 9.94149 5.57579 10 5.42387 10C5.27195 10 5.12625 9.94149 5.01882 9.83734L1.0084 5.9484C0.953682 5.89716 0.910035 5.83585 0.880009 5.76807C0.849983 5.70029 0.834179 5.62739 0.833518 5.55362C0.832857 5.47986 0.847352 5.4067 0.876159 5.33842C0.904966 5.27015 0.947507 5.20812 1.0013 5.15595C1.05509 5.10379 1.11906 5.06254 1.18947 5.0346C1.25988 5.00667 1.33532 4.99261 1.41139 4.99325C1.48746 4.99389 1.56264 5.00922 1.63254 5.03834C1.70244 5.06745 1.76566 5.10978 1.8185 5.16284L4.85095 8.10343V0.555562C4.85095 0.408218 4.91131 0.266908 5.01876 0.16272C5.1262 0.0585322 5.27192 0 5.42387 0Z"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <a href="#">Real-time</a>
                      </li>
                      <li>
                        <a href="#">Distributed</a>
                      </li>
                      <li>
                        <a href="#">Cost-saving</a>
                      </li>
                      <li>
                        <a href="#">Competitiveness</a>
                      </li>
                    </ul>
                    <p>
                      We help card issuers, merchant acquirers, and payment
                      processors adopt real-time A2A payments and distributed
                      ledger tech to improve service, cut costs, and stay
                      competitive.
                    </p>
                    <Link className="explore-btn" href="/service-details">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    4. Market Infrastructure
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.42387 0C5.57582 0 5.72154 0.0585322 5.82898 0.16272C5.93642 0.266908 5.99679 0.408218 5.99679 0.555562V8.10343L9.02923 5.16284C9.13729 5.06164 9.28201 5.00564 9.43222 5.00691C9.58244 5.00817 9.72614 5.0666 9.83236 5.16961C9.93858 5.27261 9.99884 5.41195 10.0001 5.55762C10.0014 5.70329 9.9437 5.84362 9.83934 5.9484L5.82892 9.83734C5.72148 9.94149 5.57579 10 5.42387 10C5.27195 10 5.12625 9.94149 5.01882 9.83734L1.0084 5.9484C0.953682 5.89716 0.910035 5.83585 0.880009 5.76807C0.849983 5.70029 0.834179 5.62739 0.833518 5.55362C0.832857 5.47986 0.847352 5.4067 0.876159 5.33842C0.904966 5.27015 0.947507 5.20812 1.0013 5.15595C1.05509 5.10379 1.11906 5.06254 1.18947 5.0346C1.25988 5.00667 1.33532 4.99261 1.41139 4.99325C1.48746 4.99389 1.56264 5.00922 1.63254 5.03834C1.70244 5.06745 1.76566 5.10978 1.8185 5.16284L4.85095 8.10343V0.555562C4.85095 0.408218 4.91131 0.266908 5.01876 0.16272C5.1262 0.0585322 5.27192 0 5.42387 0Z"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <a href="#">Optimization</a>
                      </li>
                      <li>
                        <a href="#">Collaboration</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Activities</a>
                      </li>
                    </ul>
                    <p>
                      We collaborate with stock exchanges, clearinghouses and
                      payment infrastructure companies to optimize operations
                      and support buy- and sell-side market activities.
                    </p>
                    <Link className="explore-btn" href="/service-details">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    5. Wealth and Assets Management
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.42387 0C5.57582 0 5.72154 0.0585322 5.82898 0.16272C5.93642 0.266908 5.99679 0.408218 5.99679 0.555562V8.10343L9.02923 5.16284C9.13729 5.06164 9.28201 5.00564 9.43222 5.00691C9.58244 5.00817 9.72614 5.0666 9.83236 5.16961C9.93858 5.27261 9.99884 5.41195 10.0001 5.55762C10.0014 5.70329 9.9437 5.84362 9.83934 5.9484L5.82892 9.83734C5.72148 9.94149 5.57579 10 5.42387 10C5.27195 10 5.12625 9.94149 5.01882 9.83734L1.0084 5.9484C0.953682 5.89716 0.910035 5.83585 0.880009 5.76807C0.849983 5.70029 0.834179 5.62739 0.833518 5.55362C0.832857 5.47986 0.847352 5.4067 0.876159 5.33842C0.904966 5.27015 0.947507 5.20812 1.0013 5.15595C1.05509 5.10379 1.11906 5.06254 1.18947 5.0346C1.25988 5.00667 1.33532 4.99261 1.41139 4.99325C1.48746 4.99389 1.56264 5.00922 1.63254 5.03834C1.70244 5.06745 1.76566 5.10978 1.8185 5.16284L4.85095 8.10343V0.555562C4.85095 0.408218 4.91131 0.266908 5.01876 0.16272C5.1262 0.0585322 5.27192 0 5.42387 0Z"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <a href="#">Optimization</a>
                      </li>
                      <li>
                        <a href="#">Strategies</a>
                      </li>
                      <li>
                        <a href="#">Advisory</a>
                      </li>
                      <li>
                        <a href="#">Planning</a>
                      </li>
                    </ul>
                    <p>
                      We help wealth management and private banking institutions
                      optimize strategies and operations to deliver top-tier
                      asset management, investment advice, and financial
                      planning services.
                    </p>
                    <Link className="explore-btn" href="/service-details">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1solutionSection;
