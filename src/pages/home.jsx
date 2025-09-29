import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/home-banner";
import EdgeSection from "../components/edge";
import Amenities from "../components/amenities";
import Highlights from "../components/highlights";
import ProximitySection from "../components/proximity";
import GallerySection from "../components/gallery";
import Layout from "../components/layout";

function Home() {
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
    </>
  );
}

export default Home;
