import React from 'react'

const Highlights = () => {
  return (
    <section id="highlights" class="highlights-section">
        <div class="container">
            <div class="row">
                {/* <div class="col-12 col-lg-6 d-none d-md-block"></div> */}
                <div class="col-12 mb-4 text-center" data-aos="fade-left" data-aos-duration="1000">
                    <h2 class="section-title mb-lg-5 highlights" data-aos="fade-up">
                        HIGHLIGHTS
                    </h2>
                </div>

            </div>
            {/* <!-- Three Main Highlights --> */}
           <div class="row g-4 mb-5 justify-content-center">
  <div class="col-lg text-center" data-aos="fade-up" data-aos-delay="100">
    <div class="highlight-card">
      <div class="highlight-icon">
        <i class="fas fa-network-wired"></i>
      </div>
      <h1 className="text-dark fs-1">V</h1>
    </div>
  </div>

  <div class="col-lg text-center" data-aos="fade-up" data-aos-delay="200">
    <div class="highlight-card">
      <div class="highlight-icon">
        <i class="fas fa-rocket"></i>
      </div>
      <h1 className="text-dark fs-1">A</h1>
    </div>
  </div>

  <div class="col-lg text-center" data-aos="fade-up" data-aos-delay="300">
    <div class="highlight-card">
      <div class="highlight-icon">
        <i class="fas fa-users"></i>
      </div>
      <h1 className="text-dark fs-1">R</h1>
    </div>
  </div>

  <div class="col-lg text-center" data-aos="fade-up" data-aos-delay="400">
    <div class="highlight-card">
      <div class="highlight-icon">
        <i class="fas fa-users"></i>
      </div>
      <h1 className="text-dark fs-1">A</h1>
    </div>
  </div>

  <div class="col-lg text-center" data-aos="fade-up" data-aos-delay="500">
    <div class="highlight-card">
      <div class="highlight-icon">
        <i class="fas fa-users"></i>
      </div>
      <h1 className="text-dark fs-1">M</h1>
    </div>
  </div>
</div>


            {/* <!-- Project Layout Image --> */}
            {/* <!-- <div class="row">
                <div class="col-12" data-aos="fade-up" data-aos-delay="400">
                    <div class="project-layout">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                            alt="Varam Project Layout" class="img-fluid" />
                        <div class="layout-labels">
                            <div class="label clubhouse-label">
                                <i class="fas fa-building"></i>
                                <span>CLUBHOUSE</span>
                            </div>
                            <div class="label entrance-label">
                                <i class="fas fa-door-open"></i>
                                <span>MAIN ENTRANCE</span>
                            </div>
                            <div class="future-development-text">
                                FUTURE<br />DEVELOPMENT
                            </div>
                        </div>
                    </div>
                </div>
            </div> --> */}
        </div>
    </section>
  )
}

export default Highlights