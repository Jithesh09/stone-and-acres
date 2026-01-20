import React from "react";

const VillaTypes = () => {
  const villas = [
    {
      title: "🏡 2 BHK Villa",
      land: "600 sq.ft",
      built: "900 sq.ft",
      description: [
        "Ideal for small families and first-time homebuyers",
        "Smart layout with optimal space planning",
      ],
    },
    {
      title: "🏡 2.5 BHK Villa",
      land: "1000 sq.ft",
      built: "1200 sq.ft",
      description: [
        "Perfect for families needing extra space for home office or study",
        "Balanced design for comfort and future needs",
      ],
    },
    {
      title: "🏡 3 BHK Villa",
      land: "1200 sq.ft",
      built: "1500 sq.ft",
      description: [
        "Spacious homes designed for larger families",
        "Enhanced privacy with generous living areas",
      ],
    },
  ];

  return (
    <section className="highlights-section">
      <div className="container my-5">
        <div className="row">
          {/* <div class="col-12 col-lg-6 d-none d-md-block"></div> */}
          <div
            className="col-12 mb-4 text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="section-title mb-lg-5 highlights" data-aos="fade-up">
              Villa Configuration
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {villas.map((villa, index) => (
            <div className="col-12" key={index}>
              <div
                className="card shadow-sm h-100 villa-card"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="card-body">
                  <h4 className="card-title mb-3">{villa.title}</h4>

                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <p className="mb-1">
                        <strong>Land Extent:</strong> {villa.land}
                      </p>
                    </div>
                    <div className="col-md-6 col-12">
                      <p className="mb-1">
                        <strong>Built-Up Area:</strong> {villa.built}
                      </p>
                    </div>
                  </div>

                  <ul className="mb-0">
                    {villa.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillaTypes;
