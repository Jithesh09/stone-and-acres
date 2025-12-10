import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../src/assets/css/style.css";
import Varam from "./pages/varamHome.jsx";
import ThankYou from "./components/thankyou.jsx";
import Home from "./pages/home.jsx";
import Ponmar from "./pages/ponmarHome.jsx";
import ThankYou2 from "./components2/thankyou2.jsx";
import GlobalPopupWrapper from "./common/GlobalPopupWrapper.jsx";
import PrivacyPolicy from "./common/privacyPolicy.jsx";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/varam" element={<Varam />} />
        <Route path="/varam/thank-you" element={<ThankYou />} />
        <Route path="/ponmar/thank-you" element={<ThankYou2 />} />
        <Route path="/ponmar" element={<Ponmar />} />
        <Route path="/privacy-policy" element= {<PrivacyPolicy />} />

        {/* Catch-all route: redirect wrong URLs to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <GlobalPopupWrapper />
    </BrowserRouter>
  );
}

export default App;
