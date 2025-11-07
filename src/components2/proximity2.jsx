import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProximitySection = () => {
  const [activeAccordion, setActiveAccordion] = useState("schools");

  useEffect(() => {
    AOS.init();
  }, []);

  const handleAccordionClick = (accordionName) => {
    // debugger;
    setActiveAccordion(accordionName);
  };

  return (
    <>
      <section className="proximity-section" id="proximity">
        <div className="container">
          <div className="row">
            <div
              className="col-12 mb-4 text-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className="section-title mb-lg-5" data-aos="fade-up">
                Location Advantages
              </h2>
            </div>
            {/* <div className="col-12 col-lg-6 d-none d-md-block"></div> */}
          </div>
          <div className="row px-lg-5">
            {/* Left Side Accordion */}
            <div
              className="col-md-6 d-none d-md-block"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {/* Schools Panel */}
              <div
                className={`right-panel text-center text-md-start ${
                  activeAccordion === "schools" ? "active" : ""
                }`}
                //   data-aos="fade-left"
                //   data-aos-duration="1000"
              >
                
                <ul>
                  <li>
                    <span>10 mins from Medavakkam and Mambakkam Main Road</span>
                  </li>
                  <li>
                    <span>15 mins from SIPCOT IT Park, Siruseri </span>
                  </li>
                  {/* <li><span>Shree Niketan Patasala </span> - 10 Mins</li> */}
                  <li>
                    <span>20 mins to OMR Road (via Thalambur & Navalur)</span>
                  </li>
                  <li>
                    <span>25 mins to Tambaram and GST Road</span>
                  </li>
                  <li>
                    <span>Nearby IT hubs - Sholinganallur, Perumbakkam & Navalur </span>
                  </li>
                  <li>
                    <span>Close to top schools and colleges like HLC, VIT Chennai, and Velammal Global </span>
                  </li>
                  <li>
                    <span>Near reputed hospitals such as Global and Kamakshi </span>
                  </li>
                  <li>
                    <span>Excellent connectivity via Vandalur–Kelambakkam Road </span>
                  </li>
                  <li>
                    <span>Well-connected to public transport and upcoming infrastructure projects</span>
                  </li>
                  {/* <li><span>St. Mary's Matriculation Hr.Secondary School </span> - 25 Mins</li> */}
                </ul>
              </div>
            </div>
            {/* LEFT SIDE (Accordion) */}
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31118.671610365946!2d80.15290229601533!3d12.853999196822286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525976fe0fccb3%3A0x4a8e9a8c87836ac7!2sPonmar%2C%20Moolacheri%2C%20Tamil%20Nadu%20600127!5e0!3m2!1sen!2sin!4v1762417022929!5m2!1sen!2sin"
                style={{ border: 0, width: "100%", height: "50vh", }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>

            {/* Right Side Content - Only show active panel */}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ProximitySection;
