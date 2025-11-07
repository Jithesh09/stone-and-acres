import React from 'react'

const Highlights = () => {
  return (
    <section id="highlights" className="highlights-section">
      <div className="container">
        <div className="row">
          {/* <div class="col-12 col-lg-6 d-none d-md-block"></div> */}
          <div
            className="col-12 mb-4 text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="section-title mb-lg-3 highlights" data-aos="fade-up">
              Why Choose Ponmar?
            </h2>
          </div>
        </div>
        {/* <!-- Three Main Highlights --> */}
        <div className="row g-4 mb-5 justify-content-center">
          {/* <div
            className="col-lg text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h2 className="text-dark fs-1 mb-3">V</h2>
              <p className="text-dark">
                <span className="fs-4">18,000 Sq.ft</span>
                <br></br> Clubhouse
              </p>
            </div>
          </div>

          <div
            className="col-lg text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h2 className="text-dark fs-1 mb-3">A</h2>
              <p className="text-dark">
                <span className="fs-4">32 Acres </span>
                <br></br>of Land{" "}
              </p>
            </div>
          </div>

          <div
            className="col-lg text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-users"></i>
              </div>
              <h2 className="text-dark fs-1 mb-3">R</h2>
              <p className="text-dark">
                <span className="fs-4">600 - 2400</span>
                <br></br> sq. ft. Plot Range{" "}
              </p>
            </div>
          </div>

          <div
            className="col-lg text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-users"></i>
              </div>
              <h2 className="text-dark fs-1 mb-3">A</h2>
              <p className="text-dark">
                <span className="fs-4">460+</span>
                <br></br> Villa Plots
              </p>
            </div>
          </div>

          <div
            className="col-lg text-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-users"></i>
              </div>
              <h2 className="text-dark fs-1 mb-3">M</h2>
              <p className="text-dark">
                <span className="fs-4">100+</span>
                <br></br> Lifestyle Amenities
              </p>
            </div>
          </div> */}
          <div className="col-10 mb-1 edge-description">
            Ponmar is one of Chennai’s most promising real-estate destinations,
            located strategically between Mambakkam and Medavakkam, making it
            perfect for both residential and investment purposes. With growing
            IT development, superior connectivity, and planned infrastructure,
            it’s a smart choice for long-term growth and quality living.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights