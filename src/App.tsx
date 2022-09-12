import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Imprint from "./components/Imprint";
import PrivacyProtection from "./components/PrivacyProtection";
import Contact from "./components/Contact";

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

      <Projects />
      <Contact></Contact>
    </>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="w-full m-auto dark:bg-slate-800 dark:text-white">
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
