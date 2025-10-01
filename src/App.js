import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../src/assets/css/style.css";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/varam" element={<Home />} />

        {/* Catch-all route: redirect wrong URLs to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
