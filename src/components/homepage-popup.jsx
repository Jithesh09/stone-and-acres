import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const HomePagePopupForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    };

    console.log("Payload:", payload);
    alert("form submitted!)");
    e.target.reset();
    handleClose();
  };

  return (
    <>
      {/* Responsive Floating Contact Button */}
      <div
      className="fixed-contact"
        onClick={handleShow}
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
          textAlign: "center",
        }}
      >
        Contact Us
      </div>

      {/* Adjust button position for mobile using media query */}
      <style>
        {`
          @media (max-width: 768px) {
            .fixed-contact {
        top: auto !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        transform: none !important;
        border-radius: 8px 8px 0 0 !important;
        padding: 15px !important;
            }
          }
        `}
      </style>

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
