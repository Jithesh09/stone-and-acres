import React from 'react'
import { useLocation } from "react-router-dom";
import HomePagePopupFormPonmar from "../components2/homepage-popup2";
import HomePagePopupFormVaram from "../components/homepage-popup";

const GlobalPopupWrapper = () => {
  const location = useLocation();

  // Render popup depending on route
  if (location.pathname.startsWith("/ponmar")) {
    return <HomePagePopupFormPonmar />;
  }
  if (location.pathname.startsWith("/varam")) {
    return <HomePagePopupFormVaram />;
  }

  return null; // no popup on home or thank-you pages
};


export default GlobalPopupWrapper