import React from "react";
import { useEffect } from "react";
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
function VaramHome() {
  useEffect(() => {
  document.title = "Villa Plots for sale in Padappai, Chennai - VARAM";

  let metaDesc = document.querySelector("meta[name='description']");
  if(!metaDesc){
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = "VARAM offers premium RERA approved villa plots in Padappai, designed for those seeking a peaceful lifestyle with excellent connectivity and long-term investment value.";

  // change favicon
  const favicon = document.getElementById("favicon");
  if (favicon) favicon.href = "/chainlogo.jpg";

  // change canonical
  let canonical = document.querySelector("link[rel='canonical']");
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = "https://chainandlinks.com/varam";
}, []);
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

export default VaramHome;
