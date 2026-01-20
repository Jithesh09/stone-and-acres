import React from "react";
import Image1 from "../assets/images/edge-img1.jpeg";
import Image2 from "../assets/images/edge-img2.jpeg";
import Brocure from "../assets/images/brocure/brocure_varam.pdf";
import { useNavigate } from "react-router-dom";
// import { handleSubmit } from "../utils/handleSubmit.js";

function EdgeSection() {
  const navigate = useNavigate();

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name")?.trim(),
      phone: formData.get("phone")?.trim(),
      email: formData.get("email")?.trim(),
      enquiryType: formData.get("enquiryType"),
    };

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
      const response = await fetch("https://chainandlinks.com/sendmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.text();
      console.log("Server response:", result);

      if (response.ok) {
        e.target.reset();
        navigate("/varam/thank-you", { state: { submitted: true } });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong, please try again.");
      e.target.reset();
    }
  };

  return (
    <section id="edge" className="edge-section">
      <div className="container">
        <div className="row contact-section">
          <h2
            className="section-title-normal text-center mt-5"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Enquire Now
          </h2>
          <p
            className="text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Get in touch for more information
          </p>
          <form onSubmit={handleSubmit2}>
  <div className="row g-2 g-lg-3 mt-2 mt-lg-5">

    <div className="col-12 col-sm-6 col-lg-2">
      <input
        type="text"
        name="name"
        className="enquiry-field"
        placeholder="Enter Name"
        required
      />
    </div>

    <div className="col-12 col-sm-6 col-lg-2">
      <input
        type="tel"
        name="phone"
        className="enquiry-field"
        placeholder="Enter Phone Number"
        required
      />
    </div>

    <div className="col-12 col-sm-6 col-lg-2">
      <input
        type="email"
        name="email"
        className="enquiry-field"
        placeholder="Enter Email"
        required
      />
    </div>

    <div className="col-12 col-sm-6 col-lg-2">
      <select
        name="enquiryType"
        className="enquiry-field enquiry-select"
        required
      >
        <option disabled value="">Select Enquiry</option>
        <option value="villa">Villa</option>
        <option value="Plot">Plot</option>
      </select>
    </div>

    <div className="col-12 col-lg-3">
      <button className="enquiry-btn" type="submit">
        Book a Free Site Visit
      </button>
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
            <h1 className="edge-title" data-aos="fade-up">
              VARAM - Villa Plots in Padappai
            </h1>
            <p className="edge-description" data-aos="fade-up">
              Varam is an integrated 32-acre community crafted for families who
              aspire to live amidst growth, convenience, and comfort. With 460+
              premium plots, a world-class 18,000 sqft. clubhouse, and 100+
              lifestyle amenities, Varam redefines modern plotted living in
              Chennai's booming Padappai corridor.
            </p>
            {/* <span className="download-btn-div">
              <a href={Brocure} download="Varam_Brochure.pdf">
                <button className="download-btn">Download Brochure</button>
              </a>
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EdgeSection;
