import React from 'react'
import Navbar from "../components2/navbar2";
import Hero from "../components2/home-banner2";
import EdgeSection from "../components2/edge2";
import Amenities from "../components2/amenities2";
import Highlights from "../components2/highlights2";
import ProximitySection from "../components2/proximity2";
import GallerySection from "../components2/gallery2";
import Layout from "../components2/layout2";
import Footer from "../components2/footer2";
import HomePagePopupForm from "../components2/homepage-popup2";


const ponmarHome = () => {
  return (
    
    <>
    <Navbar />
      <Hero />
      <EdgeSection/>
      <Amenities/>
      <Highlights/>
      <ProximitySection/>
      <Layout/>
      {/* <GallerySection/> */}
      <Footer/>
      <HomePagePopupForm/>
    </>
  )
}

export default ponmarHome