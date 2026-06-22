import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import mainBannner from "../assets/images/banner/Untitled-2.jpeg";
import MobileBanner from "../assets/images/banner/Untitled-3.jpeg";
import { ToastContainer,toast } from "react-toastify";
function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    });
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Phone number is required");
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Enter a valid 10-digit phone number");
      return false;
    }
    return true;
  };

  const navigate = useNavigate();

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch("https://chainandlinks.com/sendmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          source: "ponmar",
        }),
      });

      const result = await response.text();
      console.log("Server response:", result);

      if (!response.ok) {
        toast.error("Server error, please try again");
        return;
      }

      setFormData({ name: "", email: "", phone: "" });
      localStorage.setItem("SubmittedAt", Date.now().toString());
      setShowConfirmation(true);
      toast.success("Form submitted successfully!");
      navigate("/ponmar/thank-you", { state: { submitted: true } });

      setTimeout(() => {
        setShowPopup(false);
        setShowConfirmation(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission failed:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="kingdom-of-joy">
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="banner-section">
        <div className="banner-container">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={mainBannner}
            />
            <source
              media="(max-width: 767px)"
              srcSet={MobileBanner}
            />
            <img
              src={mainBannner}
              alt="Kingdom of Joy Banner"
              className="img-fluid"
            />
          </picture>
        </div>

        <div className="form-section" id="homeform">
          <div className="form-container">
            {/* <div className="form-logo">
              <img
                src={"https://ponbhoomi.gphomes.in/img/gp_logo.png"}
                alt="Kingdom of Joy Logo"
                className="img-fluid"
              />
            </div> */}
            {/* <h4>Please share your contact details to download the brochure</h4> */}

            <form className="contact-form" onSubmit={handleSubmit1}>
              <div className="form-group">
                <label htmlFor="name" className="form-name">Name<span className="text-danger">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  // placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>


              <div className="form-group">
                <label htmlFor="phone">Phone<span className="text-danger">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  // placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  // placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Enquire Now"}
              </button>

              {showConfirmation && (
                <p className="text-success mt-2">Form submitted successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
