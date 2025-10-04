import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // icons
import { handleSubmit } from "/stone and acres/src/utils/handlesubmit.js";

const Footer = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  const handleClose = () => setShowPolicy(false);
  const handleShow = () => setShowPolicy(true);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const payload = {
  //     name: formData.get("name"),
  //     phone: formData.get("phone"),
  //     email: formData.get("email"),
  //   };
  //   console.log("Payload:", payload);
  //   alert("form submitted!)");
  //   e.target.reset();
  // };

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Left column */}
          <div className="col-md-6 mb-4">
            <div className="footerAddress mb-4">
              <h4 className="mb-3">Our Address</h4>
              <p>
                STONE AND ACRES REALTY CONSULTANTS LLP,<br />
                78/2(138/2), L.B Road,<br />
                Thiruvanmiyur,<br />
                Chennai - 600041.
              </p>
            </div>

            <div className="footerContact">
              <h4 className="mb-3">Contact Us</h4>
              <p>
                <FaPhoneAlt className="me-2 text-primary" />
                +91 8438 598947
              </p>
              <p>
                <FaEnvelope className="me-2 text-primary" />
                contact@stoneandacres.in  
              </p>
            </div>
          </div>

          {/* Right column - form */}
          <div className="col-md-6 mb-4">
            <h4 className="mb-3">Quick Contact</h4>
            <form onSubmit={handleSubmit} className="bg-secondary p-4 rounded">
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
              <button type="submit" className="btn w-100 text-light hover:bg-dark" style={{backgroundColor: "var(--header-title)"}}>
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div id="contact" className="row border-top pt-3 mt-4">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <button
              onClick={handleShow}
              className="btn btn-link text-light text-decoration-none p-0"
            >
              Privacy Policy
            </button>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <small>© {new Date().getFullYear()} Code Name Varam.</small><br></br>
            <small>Powered By ATWIAS</small>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal show={showPolicy} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your privacy is our priority. We collect only necessary data to improve your villa plots buying experience. Your information is secure and never shared. By using our site, you agree to our data practices.Reach out to us with any concerns.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;
