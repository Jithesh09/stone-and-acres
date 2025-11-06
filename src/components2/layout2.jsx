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
            <h1 className="section-title mb-lg-5 ">F.A.Qs</h1>
            </div>
            <ul className="accordion-box clearfix">
              <li
                className={`accordion block ${
                  activeIndex === 0 ? "active" : ""
                }`}
              >
                <div className="acc-btn" onClick={() => toggleAccordion(0)}>
                  1. How close is Ponmar to Medavakkam?
                </div>
                {activeIndex === 0 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Ponmar is just a few minutes away from Medavakkam, with excellent connectivity to SIPCOT IT Park, OMR Road, and Navalur through the Mambakkam and Vandalur–Kelambakkam roads. The location offers quick access to Chennai’s key IT and residential hubs.
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
                  2. Are there good schools and hospitals near Ponmar?
                </div>
                {activeIndex === 1 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, Ponmar is surrounded by reputed schools, colleges, and hospitals in nearby areas like Medavakkam, Perumbakkam, and Navalur, ensuring convenience for residents.      q
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
                  3. What amenities are available in the Ponmar plots project?
                </div>
                {activeIndex === 2 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
The project includes lifestyle amenities such as landscaped parks, children’s play areas, wide roads, street lighting, and a community zone, offering a comfortable and modern living environment.
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
                  4. Is buying a plot in Ponmar a good investment for the future?
                </div>
                {activeIndex === 3 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, Ponmar’s rapid growth, strong connectivity, and rising property demand make it a smart investment with great potential for appreciation.
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
                  5. Are home loans available for buying plots in Ponmar? 
                </div>
                {activeIndex === 4 && (
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, leading banks and financial institutions offer home loans and plot loans for this Ponmar project, making it easier to own your plot with flexible EMI options.
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