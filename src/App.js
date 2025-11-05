import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../src/assets/css/style.css";
import Varam from "./pages/varamHome.jsx";
import ThankYou from "./components/thankyou.jsx";
import Home from "./pages/home.jsx";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/varam" element={<Varam />} />
        <Route path="/varam/thank-you" element={<ThankYou />} />

        {/* Catch-all route: redirect wrong URLs to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
