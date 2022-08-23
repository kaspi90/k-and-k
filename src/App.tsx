import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Divider from "./components/Divider";
import Service from "./components/Service";
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
      <Service />
      <Divider></Divider>
    </>
  );
};

function App() {
  return (
    <div className="w-4/5	m-auto">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Imprint />} />
          <Route path="/datenschutz" element={<PrivacyProtection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
