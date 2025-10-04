import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import { handleSubmit } from "../utils/handleSubmit.js";

const HomePagePopupForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submit triggered ✅");

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name")?.trim(),
      phone: formData.get("phone")?.trim(),
      email: formData.get("email")?.trim(),
    };

    console.log("Payload:", payload);

    // Validation
    if (!payload.name) {
      alert("Please enter your name");
      return;
    }
    if (!/^[0-9]{10}$/.test(payload.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("https://stoneandacres.in/sendmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.text();
      console.log("Server response:", result);
      alert("Form submitted successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <>
      {/* Responsive Floating Contact Button */}
      {/* Floating Contact Button (Desktop) */}
<div
  onClick={handleShow}
  className="fixed-contact d-none d-md-block"
  style={{
    position: "fixed",
    top: "50%",
    left: 0,
    transform: "translateY(-50%) rotate(-90deg)",
    transformOrigin: "left top",
    backgroundColor: "var(--header-title)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "0 0 8px 8px",
    cursor: "pointer",
    fontWeight: "bold",
    zIndex: 1000,
  }}
>
  Contact Us
</div>

{/* Mobile Buttons (Only visible on mobile) */}
<div
  className="fixed-contact-mobile d-flex d-md-none"
  style={{
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 1000,
  }}
>
  <button
    onClick={handleShow}
    style={{
      flex: 1,
      backgroundColor: "var(--header-title)",
      color: "#fff",
      padding: "15px",
      border: "none",
      fontWeight: "bold",
    }}
  >
    Enquire
  </button>
  <a
    href="tel:+918438598947"
    style={{
      flex: 1,
      backgroundColor: "#495259",
      color: "#fff",
      padding: "15px",
      textAlign: "center",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    Call
  </a>
</div>

      {/* Modal Popup Form */}
      <Modal show={showForm} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Quick Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <button type="submit" className="btn w-100 text-light" style={
                {backgroundColor: "var(--header-title)", }
            }>
              Send
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HomePagePopupForm;
