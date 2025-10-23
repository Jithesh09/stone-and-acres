import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProximitySection = () => {
  const [activeAccordion, setActiveAccordion] = useState("worksites");

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
                PROXIMITY
              </h2>
            </div>
            {/* <div className="col-12 col-lg-6 d-none d-md-block"></div> */}
          </div>
          <div className="row px-lg-5">
            {/* Left Side Accordion */}
            {/* LEFT SIDE (Accordion) */}
            <div className="col-md-6">
              <div className="accordion" id="proximityAccordion">
                {/* --- Schools --- */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className={`accordion-button ${
                        activeAccordion === "schools" ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => handleAccordionClick("schools")}
                    >
                      Schools
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordion === "schools" ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      Close to top schools for easy education.
                      <div className="d-md-none mt-3">
                        <h5>Schools</h5>
                        <ul>
                          <li>
                            <span>Ravindra Bharathi Global School </span> - 3
                            Mins
                          </li>
                          <li>
                            <span>Alwin International Public School </span> - 10
                            Mins
                          </li>
                          {/* <li><span>Shree Niketan Patasala </span> - 10 Mins</li> */}
                          <li>
                            <span>Velammal Vidhyashram</span> - 13 Mins
                          </li>
                          <li>
                            <span>The Indian Public School</span> - 14 Mins
                          </li>
                          <li>
                            <span>Thriveni Academy Sr. Sec. School </span> - 15
                            Mins
                          </li>
                          {/* <li><span>St. Mary's Matriculation Hr.Secondary School </span> - 25 Mins</li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- Colleges --- */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className={`accordion-button ${
                        activeAccordion === "colleges" ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => handleAccordionClick("colleges")}
                    >
                      Colleges
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordion === "colleges" ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      Easy access to top institutes like SRM & Hindustan (HIET)
                      <div className="d-md-none mt-3">
                        <h5>Colleges</h5>
                        <ul>
                          <li>
                            <span>
                              Hindustan Institute of Engineering Technology{" "}
                            </span>{" "}
                            - 3 Mins
                          </li>
                          <li>
                            <span>RRASE College of Engineering</span> - 4 Mins
                          </li>
                          {/* <li><span>Dhaanish Ahmed College of Engineering </span> - 5 Mins</li> */}
                          <li>
                            <span>PSP Medical College </span> - 10 Mins
                          </li>
                          <li>
                            <span>Crescent University</span> - 10 Mins
                          </li>
                          <li>
                            <span>SRM University</span> - 28 Mins
                          </li>
                          {/* <li><span>Sri Sairam Institute of Technology </span> - 30 Mins</li> */}
                          {/* <li><span>Tagore Medical College & Hospital </span> - 30 Mins</li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- Worksites --- */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className={`accordion-button ${
                        activeAccordion === "worksites" ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => handleAccordionClick("worksites")}
                    >
                      Worksites
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordion === "worksites" ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      Just minutes from Oragadam SIPCOT and major IT hubs.
                      {/* MOBILE VIEW DETAILS */}
                      <div className="d-md-none mt-3">
                        <h5>Worksites</h5>
                        <ul>
                          <li>
                            <span>Oragadam SIPCOT Industrial Park </span> - 5
                            Mins
                          </li>
                          <li>
                            <span>Apollo Tyres</span> - 10 Mins
                          </li>
                          <li>
                            <span>Royal Enfield Factory</span> - 10 Mins
                          </li>
                          <li>
                            <span>Danfoss Industries</span> - 12 Mins
                          </li>
                          <li>
                            <span>Zoho</span> - 12 Mins
                          </li>
                          <li>
                            <span>Shriram IT Gateway </span> - 25 Mins
                          </li>
                          <li>
                            <span>Mahindra World City</span> - 30 Mins
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                 {/* --- Connectivity --- */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className={`accordion-button ${
                        activeAccordion === "commute" ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => handleAccordionClick("commute")}
                    >
                      Commute
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordion === "commute" ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      Easy connectivity via Tambaram Railway Station and
                      Padappai Flyover.
                      <div className="d-md-none mt-3">
                        <h5>Commute</h5>
                        <ul>
                          <li>
                            <span>Tambaram Railway Station </span> - 10 Mins
                          </li>
                          <li>
                            <span>Padappai Flyover</span> - 8 Mins
                          </li>
                          <li>
                            <span>Kilambakkam Bus Terminus </span> - 12 Mins
                          </li>
                          <li>
                            <span>Chennai Airport </span> - 30 Mins
                          </li>
                        </ul>
                        <h5>Proposed Upcoming Commute</h5>
                        <ul>
                          <li>
                            <span>Tambaram Railway Station </span> - 10 Mins
                          </li>
                          <li>
                            <span>Kilambakkam Electric Railway Station </span> -
                            8 Mins
                          </li>
                          <li>
                            <span>Kilambakkam Metro </span> - 12 Mins
                          </li>
                          <li>
                            <span>Parandur Airport </span> - 30 Mins
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- Hospitals --- */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className={`accordion-button ${
                        activeAccordion === "entertainment" ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => handleAccordionClick("entertainment")}
                    >
                      Entertainment
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      activeAccordion === "entertainment" ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      Well connected to hotels, malls & other recreational
                      spots.
                      <div className="d-md-none mt-3">
                        <h5>Entertainment</h5>
                        <ul>
                          <li>
                            <span>Hilarity Inn Hotel</span> - 2 Mins
                          </li>
                          <li>
                            <span>Mercure Hotel</span> - 10 Mins
                          </li>
                          <li>
                            <span>A2B Restaurant</span> - 10 Mins
                          </li>
                          <li>
                            <span>Thennaman Restaurant</span> - 10 Mins
                          </li>
                          <li>
                            <span>SH 48 Food Court</span> - 12 Mins
                          </li>
                          <li>
                            <span>Harsha Gardens (Banquet Hall)</span> - 13 Mins
                          </li>
                          <li>
                            <span>Vandalur Zoo</span> - 25 Mins
                          </li>
                          <li>
                            <span>Queensland</span> - 30 Mins
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content - Only show active panel */}
            <div
              className="col-md-6 d-none d-md-block"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {/* Worksites Panel */}
              <div
                className={`right-panel text-center text-md-end ${
                  activeAccordion === "worksites" ? "active" : ""
                }`}
                //   data-aos="fade-left"
                //   data-aos-duration="1000"
              >
                <h5>Worksites</h5>
                <ul>
                  <li>
                    <span>Oragadam SIPCOT Industrial Park </span> - 5 Mins
                  </li>
                  <li>
                    <span>Apollo Tyres</span> - 10 Mins
                  </li>
                  <li>
                    <span>Royal Enfield Factory</span> - 10 Mins
                  </li>
                  <li>
                    <span>Danfoss Industries</span> - 12 Mins
                  </li>
                  <li>
                    <span>Zoho</span> - 12 Mins
                  </li>
                  <li>
                    <span>Shriram IT Gateway </span> - 25 Mins
                  </li>
                  <li>
                    <span>Mahindra World City</span> - 30 Mins
                  </li>
                </ul>
              </div>

              {/* Colleges Panel */}
              <div
                className={`right-panel text-center text-md-end ${
                  activeAccordion === "colleges" ? "active" : ""
                }`}
                //   data-aos="fade-left"
                //   data-aos-duration="1000"
              >
                <h5>Colleges</h5>
                <ul>
                  <li>
                    <span>Hindustan Institute of Engineering Technology </span>{" "}
                    - 3 Mins
                  </li>
                  <li>
                    <span>RRASE College of Engineering</span> - 4 Mins
                  </li>
                  {/* <li><span>Dhaanish Ahmed College of Engineering </span> - 5 Mins</li>                                              */}
                  <li>
                    <span>PSP Medical College </span> - 10 Mins
                  </li>
                  <li>
                    <span>Crescent University</span> - 10 Mins
                  </li>
                  <li>
                    <span>SRM University</span> - 28 Mins
                  </li>
                  {/* <li><span>Sri Sairam Institute of Technology </span> - 30 Mins</li>
                <li><span>Tagore Medical College & Hospital </span> - 30 Mins</li> */}
                </ul>
              </div>

              {/* Schools Panel */}
              <div
                className={`right-panel text-center text-md-end ${
                  activeAccordion === "schools" ? "active" : ""
                }`}
                //   data-aos="fade-left"
                //   data-aos-duration="1000"
              >
                <h5>Schools</h5>
                <ul>
                  <li>
                    <span>Ravindra Bharathi Global School - 3 Mins</span> - 3
                    Mins
                  </li>
                  <li>
                    <span>Alwin International Public School </span> - 10 Mins
                  </li>
                  {/* <li><span>Shree Niketan Patasala </span> - 10 Mins</li> */}
                  <li>
                    <span>Velammal Vidhyashram</span> - 13 Mins
                  </li>
                  <li>
                    <span>The Indian Public School</span> - 14 Mins
                  </li>
                  <li>
                    <span>Thriveni Academy Sr. Sec. School </span> - 15 Mins
                  </li>
                  {/* <li><span>St. Mary's Matriculation Hr.Secondary School </span> - 25 Mins</li> */}
                </ul>
              </div>

              {/* Entertainment Panel */}
              <div
                className={`right-panel text-center text-md-end ${
                  activeAccordion === "entertainment" ? "active" : ""
                }`}
                //   data-aos="fade-left"
                //   data-aos-duration="1000"
              >
                <h5>Entertainment</h5>
                <ul>
                  <li>
                    <span>Hilarity Inn Hotel</span> - 2 Mins
                  </li>
                  {/* <li><span>Mercure Hotel</span> - 10 Mins</li> */}
                  <li>
                    <span>A2B Restaurant</span> - 10 Mins
                  </li>
                  {/* <li><span>Thennaman Restaurant</span> - 10 Mins</li> */}
                  <li>
                    <span>SH 48 Food Court</span> - 12 Mins
                  </li>
                  {/* <li><span>Harsha Gardens (Banquet Hall)</span> - 13 Mins</li> */}
                  <li>
                    <span>Vandalur Zoo</span> - 25 Mins
                  </li>
                  <li>
                    <span>Queensland</span> - 30 Mins
                  </li>
                </ul>
              </div>

              {/* Commute Panel */}
              <div
                className={`right-panel text-center text-md-end ${
                  activeAccordion === "commute" ? "active" : ""
                }`}
                //   data-aos="fade-left"
                //   data-aos-duration="1000"
              >
                <h5>Commute</h5>
                <ul>
                  <li>
                    <span>Tambaram Railway Station </span> - 10 Mins
                  </li>
                  <li>
                    <span>Padappai Flyover</span> - 8 Mins
                  </li>
                  <li>
                    <span>Kilambakkam Bus Terminus </span> - 12 Mins
                  </li>
                  <li>
                    <span>Chennai Airport </span> - 30 Mins
                  </li>
                </ul>
                <h5>Proposed Upcoming Commute</h5>
                <ul>
                  <li>
                    <span>Tambaram Railway Station </span> - 10 Mins
                  </li>
                  <li>
                    <span>Kilambakkam Electric Railway Station </span> - 8 Mins
                  </li>
                  <li>
                    <span>Kilambakkam Metro </span> - 12 Mins
                  </li>
                  <li>
                    <span>Parandur Airport </span> - 30 Mins
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProximitySection;
