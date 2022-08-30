import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Imprint from "./components/Imprint";
import PrivacyProtection from "./components/PrivacyProtection";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const Home = () => {
  return (
    <>
      <AboutUs />
      <Divider></Divider>
      <Projects />
    </>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="w-4/5	m-auto">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Imprint />} />
            <Route path="/datenschutz" element={<PrivacyProtection />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
