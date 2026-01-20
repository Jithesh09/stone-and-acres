import React from 'react'
import LayoutImage from "../assets/images/layout/Layout_3D.jpg"
import { useState } from "react";

const Layout = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
        <section className="section-padding bg-cream layout-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className=" text-center">
            <h2 className="section-title mb-lg-5 ">FAQ</h2>
            </div>
            <ul className="accordion-box clearfix">
              <li
                className={`accordion block ${
                  activeIndex === 0 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(0)}>
                  1. Does buying a villa plot near Chennai give good returns?
                </div>
                {activeIndex === 0 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes. Buying a villa plot in Padappai is a smart future investment that can yield good returns due to the rapid development of the area and strong connectivity to GST Road and Oragadam.
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 1 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(1)}>
                  2. What is the reasonable price for purchasing villa plots in Padappai?
                </div>
                {activeIndex === 1 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                       Villa plot prices in Padappai vary depending on size, location and amenities, usually from 20-25 lakh for small plots. At Varam, we offer plots ranging from 21 Lakhs,  600 to 2400 Sq. ft. All plots are DTCP and RERA approved and located within a well planned gated community.
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`accordion block ${
                  activeIndex === 2 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(2)}>
                  3. Why should I invest in villa plots in Padappai?
                </div>
                {activeIndex === 2 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Varam in Padappai offers DTCP & RERA-approved villa plots in a premium gated community with wide roads, modern layouts, and 25+ amenities. Its prime location near GST Road and Oragadam makes it ideal for comfortable living and smart future investment.
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className={`accordion block ${
                  activeIndex === 3 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(3)}>
                  4. Are home loans available for Varam plots?
                </div>
                {activeIndex === 3 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                      Yes. Varam is bank-loan approved by major financial institutions, making it easier for buyers to invest without financial stress.
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className={`accordion block ${
                  activeIndex === 4 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(4)}>
                  5. Is Varam a good investment for the future?
                </div>
                {activeIndex === 4 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Absolutely. Padappai is witnessing rapid infrastructural development due to its proximity to Oragadam Industrial Hub and GST Road. Investing in Varam ensures a strong increase in value and a secure long-term return.
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className={`accordion block ${
                  activeIndex === 5 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(5)}>
                  6. Are villas in Padappai affordable compared to other areas in Chennai?
                </div>
                {activeIndex === 5 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes. Villas in Padappai are more affordable than many prime Chennai locations while still offering excellent connectivity and infrastructure growth. This makes Padappai one of the best options for buyers seeking budget-friendly villas in Chennai with high growth potential.
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className={`accordion block ${
                  activeIndex === 6 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(6)}>
                  7. Why should I invest in villas for sale in Chennai?
                </div>
                {activeIndex === 6 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Chennai offers strong infrastructure, steady property appreciation, and excellent connectivity. Villas for sale in Chennai provide privacy, spacious living, and long-term value, making them ideal for families and end-users.
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout