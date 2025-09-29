import React from 'react'
import LayoutImage from "../assets/images/layout/Layout_3D.jpg"

const Layout = () => {
  return (
    <section className='layout-section' id='layout'>
        <div className="container text-center">
            <div class="row">
                <div class="col-12 mb-4 text-center" data-aos="fade-left" data-aos-duration="1000">
                    <h2 class="section-title mb-lg-5" data-aos="fade-up">
                        Layout
                    </h2>
                </div>

            </div>
            <img src={LayoutImage} alt="LayoutImage"/>
        </div>
    </section>
  )
}

export default Layout