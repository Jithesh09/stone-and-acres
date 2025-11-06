import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/home-banner";
import EdgeSection from "../components/edge";
import Amenities from "../components/amenities";
import Highlights from "../components/highlights";
import ProximitySection from "../components/proximity";
import GallerySection from "../components/gallery";
import Layout from "../components/layout";
import Footer from "../components/footer";
import HomePagePopupForm from "../components/homepage-popup";
import Faq from "../components/faq";
function varamHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <EdgeSection/>
      <Amenities/>
      <Highlights/>
      <ProximitySection/>
      <Layout/>
      <GallerySection/>
      <Faq/>
      <Footer/>
      <HomePagePopupForm/>
    </>
  );
}

export default varamHome;
