import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Foot from "./components/Foot";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import GetInvolved from "./pages/GetInvolved";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
        <Foot />
      </Router>
    </>
  );
}

export default App;
