import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Foot from "./components/Foot";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import GetInvolved from "./pages/GetInvolved";
import HomePage from "./pages/HomePage";
import "animate.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
        <Foot />
      </Router>
    </>
  );
}

export default App;
