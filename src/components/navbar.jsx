import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapse from "bootstrap/js/dist/collapse"; // ✅ import Collapse
import logo from "../assets/images/logo/varam_Black.png"
function Navbar() {
  useEffect(() => {
    // Smooth scroll + close collapse
    const handleSmoothScroll = (e) => {
      const targetId = e.currentTarget.getAttribute("href");

      if (targetId.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 70, // offset for fixed navbar
            behavior: "smooth",
          });
        }
      }

      // Collapse navbar after clicking
      const bsCollapse = document.querySelector("#mobileNav");
      if (bsCollapse && bsCollapse.classList.contains("show")) {
        const collapseInstance = Collapse.getInstance(bsCollapse) 
          || new Collapse(bsCollapse, { toggle: false });
        collapseInstance.hide();
      }
    };

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll)
    );

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  const handleNavClick = (e, sectionId, path) => {
    e.preventDefault();

    // Scroll to section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Update URL without reloading
    window.history.pushState({}, "", path);

    // Close the navbar if it's open (mobile)
    const navbarToggler = document.querySelector(".navbar-collapse.show");
    if (navbarToggler) {
      navbarToggler.classList.remove("show");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light bg-white"
      style={{
        borderBottom: "0px solid #2d2d5f",
        boxShadow:
          "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",padding:"12px 0px"
      }}
    >
      <div className="container">
        {/* ---- Mobile Navbar ---- */}
        <div className="d-lg-none w-100">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "100px" }}
              />
            </a>

            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileNav"
              aria-controls="mobileNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ borderColor: "#2d2d5f" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse mt-2" id="mobileNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a className="nav-link custom-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/edge"
                onClick={(e) => handleNavClick(e, "edge", "/edge")}>
                  Edge
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/amenities"
                onClick={(e) => handleNavClick(e, "amenities", "/amenities")}>
                  Amenities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/highlights"
                onClick={(e) => handleNavClick(e, "highlights", "/highlights")}>
                  Highlights
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/proximity"
                 onClick={(e) => handleNavClick(e, "proximity", "/proximity")}>
                  Proximity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/layout"
                onClick={(e) => handleNavClick(e, "layout", "/layout")}>
                  Layout
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/gallery"
                onClick={(e) => handleNavClick(e, "gallery", "/gallery")}>
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="/contact"
                onClick={(e) => handleNavClick(e, "contact", "/contact")}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Desktop Navbar ---- */}
        <div className="d-none d-lg-flex w-100 justify-content-between align-items-center">
          {/* Left */}
          <div className="navbar-nav">
            <a className="nav-link custom-link" href="/">Home</a>
            <a className="nav-link custom-link" href="/edge"
            onClick={(e) => handleNavClick(e, "edge", "/varam/edge")}>Edge</a>
            <a className="nav-link custom-link" href="/amenities" onClick={(e) => handleNavClick(e, "amenities", "/varam/amenities")}>Amenities</a>
            <a className="nav-link custom-link" href="/highlights"
            onClick={(e) => handleNavClick(e, "highlights", "/varam/highlights")}>Highlights</a>
          </div>

          {/* Center Logo */}
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "180px" }}
            />
          </a>

          {/* Right */}
          <div className="navbar-nav">
            <a className="nav-link custom-link" href="/proximity" onClick={(e) => handleNavClick(e, "proximity", "/varam/proximity")}>Proximity</a>
            <a className="nav-link custom-link" href="/layout"
            onClick={(e) => handleNavClick(e, "layout", "/layout")}>Layout</a>
            <a className="nav-link custom-link" href="/gallery" onClick={(e) => handleNavClick(e, "gallery", "/varam/gallery")}>Gallery</a>
            <a className="nav-link custom-link" href="/contact" onClick={(e) => handleNavClick(e, "contact", "/varam/contact")}>Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
