import React from "react";
import thankyouImage from "../assets/images/banner/Thank-you-HD-Size.jpg";
import thankyouImagemobile from "../assets/images/banner/Thank-you-Reel-Size.jpg";
import logo from "../assets/images/logo/varam_Black.png";

const ThankYou = () => {
  return (
    <>
  {/* Desktop View */}
  <div
    className="d-none d-md-flex justify-content-center align-items-center vh-100 bg-light position-relative"
    style={{ overflow: "hidden" }}
  >
    {/* Logo (top-left) */}
    <a href="/varam">
    <img
      src={logo}
      alt="Logo"
      className="position-absolute"
      style={{
        top: "20px",
        left: "30px",
        width: "120px", // adjust size as needed
        zIndex: 10,
      }}
    />
    </a>

    {/* Thank You Image */}
    <img
      src={thankyouImage}
      alt="Thank You"
      className="img-fluid w-100 h-100"
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  </div>

  {/* Mobile View */}
  <div
    className="d-flex d-md-none justify-content-center align-items-center vh-100 bg-light position-relative"
    style={{ overflow: "hidden" }}
  >
    {/* Logo (top-left) */}
     <a href="/varam">
    <img
      src={logo}
      alt="Logo"
      className="position-absolute"
      style={{
        top: "15px",
        left: "20px",
        width: "100px", // smaller size for mobile
        zIndex: 10,
      }}
    />
    </a>

    {/* Thank You Image */}
    <img
      src={thankyouImagemobile}
      alt="Thank You"
      className="img-fluid w-100 h-100"
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  </div>
</>

  );
};

export default ThankYou;
