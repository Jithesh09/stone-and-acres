import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <div id="home" className="hero-section">
      {/* Background */}
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center text-white">
          <div className="col-12">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="hero-brand mb-3">varam</h1>
              <p className="hero-tagline mb-5">Where Land Meets</p>
              <h2 className="hero-legacy mb-5">LEGACY</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
