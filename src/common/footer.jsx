import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPonmar = location.pathname.startsWith("/ponmar");
  const isVaram = location.pathname.startsWith("/varam")
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const fd = new FormData(e.target);
    const payload = {
      name: fd.get("name")?.trim(),
      phone: fd.get("phone")?.trim(),
      email: fd.get("email")?.trim(),
      ...(isPonmar ? { source: "ponmar" } : {}), // ONLY Ponmar has source
    };

    console.log("Footer payload:", payload);

    // Validation
    if (!payload.name) return alert("Please enter your name");
    if (!/^[0-9]{10}$/.test(payload.phone))
      return alert("Enter a valid 10-digit mobile number");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
      return alert("Enter a valid email");

    try {
      const response = await fetch("https://chainandlinks.com/sendmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      await response.text();

      if (response.ok) {
        e.target.reset();

        // Redirect to correct Thank-You page
        if (isPonmar) navigate("/ponmar/thank-you", { state: { submitted: true } });
        else if (isVaram) navigate("/varam/thank-you", { state: { submitted: true } });

        return;
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Address */}
          <div className="col-md-6 mb-4">
            <div className="footerAddress mb-4">
              <h4 className="mb-3">Our Address</h4>
              <p>
                No.78/2 (138/2), L.B Road,<br />
                Thiruvanmiyur<br />
                Chennai - 600 041,<br />
                Tamil Nadu
              </p>
            </div>

            <div className="footerContact">
              <h4 className="mb-3">Contact Us</h4>
              <p><FaPhoneAlt className="me-2 text-primary" /> +91 8438 598947</p>
              <p><FaEnvelope className="me-2 text-primary" /> Contact@chainandlinks.com</p>
            </div>
          </div>

          {/* Form */}
          <div className="col-md-6 mb-4">
            <h4 className="mb-3">Quick Contact</h4>

            <form onSubmit={handleSubmit} className="bg-secondary p-4 rounded">

              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                name="phone"
                className="form-control mb-3"
                placeholder="Your Phone Number"
                required
              />

              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Your Email"
                required
              />

              <button
                type="submit"
                className="btn w-100 text-light"
                style={{ backgroundColor: "var(--header-title)" }}
              >
                Send
              </button>
            </form>

          </div>

        </div>

        {/* Bottom */}
        <div id="contact" className="row border-top pt-3 mt-4">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <button
              onClick={() => navigate("/privacy-policy")}
              className="btn btn-link text-light text-decoration-none p-0"
            >
              Privacy Policy
            </button>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <small>© {new Date().getFullYear()} Chain and Links</small><br />
            <small>Powered By ATWIAS</small>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
