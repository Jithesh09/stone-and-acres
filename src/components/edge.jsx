import React from "react";
import Image1 from "../assets/images/edge-img1.jpeg";
import Image2 from "../assets/images/edge-img2.jpeg";
import Brocure from "../assets/images/brocure/brocure_varam.pdf";
import { handleSubmit } from "/stone and acres/src/utils/handlesubmit.js";

function EdgeSection() {

  return (
    <section id="edge" className="edge-section">
      <div className="container">
        {/* <div
          class="row key-facts"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="col-3 col-md-3 p-0">
            <div class="key-fact-item item-1">
              <h3>32</h3>
              <p>Acres</p>
            </div>
          </div>
          <div class="col-3 col-md-3 p-0">
            <div class="key-fact-item">
              <h3>600-2,400</h3>
              <p>Sq.Ft</p>
            </div>
          </div>
          <div class="col-3 col-md-3 p-0">
            <div class="key-fact-item">
              <h3>550</h3>
              <p>Villa Plots</p>
            </div>
          </div>
          <div class="col-3 col-md-3 p-0">
            <div class="key-fact-item item-4">
              <h3>18,000 Sq.Ft</h3>
              <p>Clubhouse</p>
            </div>
          </div>
        </div> */}
        <div className="row contact-section">
          <h2
            className="section-title-normal text-center mt-5"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Enquire Now
          </h2>
          <p class="text-center" data-aos="fade-left" data-aos-duration="1000">
           Get in touch for more information
          </p>
          <form onSubmit={handleSubmit}>
            <div
              className="row m-0 mt-2 mt-lg-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="col-12 mb-2 mb-lg-0 col-lg-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="col-12 mb-2 mb-lg-0 col-lg-3">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
              <div className="col-12 mb-2 mb-lg-0 col-lg-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="col-12 mb-2 mb-lg-0 col-lg-3">
                <button type="submit">Book a Free Site Visit</button>
              </div>
            </div>
          </form>
        </div>
        <div className="row align-items-center edge-row">
          {/* Left Image Cards - Updated Structure */}
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="edge-images-container" data-aos="fade-up">
              <div className="edge-card-largebox" data-aos="fade-up">
                <div
                  className="edge-card-large"
                  style={{
                    backgroundImage: `url(${Image1})`,
                  }}
                ></div>
              </div>
              <div className="edge-card-smallbox">
                <div
                  className="edge-card-small"
                  style={{
                    backgroundImage: `url(${Image2})`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="col-lg-6 edge-content"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="section-title" data-aos="fade-up">
              THE EDGE
            </h2>
            <p className="edge-description" data-aos="fade-up">
              Varam is an integrated 32-acre community crafted for families who
              aspire to live amidst growth, convenience, and comfort. With 550
              premium plots, a world-class 18,000 sqft. clubhouse, and 25+
              lifestyle amenities, Varam redefines modern plotted living in
              Chennai's booming Padappai corridor.
            </p>
            <span className="download-btn-div">
              <a href={Brocure} download="Varam_Brochure.pdf">
                <button className="download-btn">Download Brochure</button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EdgeSection;
