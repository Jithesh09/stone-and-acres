import React from 'react'
import { useEffect } from 'react'
import Navbar from "../components2/navbar2";
import Hero from "../components2/home-banner2";
import EdgeSection from "../components2/edge2";
import Amenities from "../components2/amenities2";
import Highlights from "../components2/highlights2";
import ProximitySection from "../components2/proximity2";
import GallerySection from "../components2/gallery2";
import Layout from "../components2/layout2";
import Footer from "../common/footer";


const PonmarHome = () => {

    useEffect(() => {
  document.title = "Residential Plots For Sale In Ponmar Near Medavakkam";

  let metaDesc = document.querySelector("meta[name='description']");
  if(!metaDesc){
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = "Premium plots in Ponmar near Medavakkam, OMR & SIPCOT IT Park. 125-acre gated community with lifestyle amenities and great connectivity in Chennai.";

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
  canonical.href = "https://chainandlinks.com/ponmar";
}, []);
  return (
    
    <>
    <Navbar />
      <Hero />
      <EdgeSection/>
      <GallerySection/>
      <Highlights/>
      <ProximitySection/>
      <Layout/>
      <Footer/>
    </>
  )
}

export default PonmarHome