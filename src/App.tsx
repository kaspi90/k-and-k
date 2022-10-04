import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Imprint from "./components/Imprint";
import PrivacyProtection from "./components/PrivacyProtection";
import Contact from "./components/Contact";
import { I18nextProvider } from "react-i18next";
import i18n from "./react-i18next";
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const Home = (props: any) => {
  return (
    <>
      <AboutUs mode={props.mode} />
      <Projects mode={props.mode} />
      <Contact></Contact>
    </>
  );
};

function App() {
  const [mode, setMode] = React.useState(false);
  const el = document.getElementById("modeSwitch");

  React.useEffect(() => {
    el?.classList.toggle("dark", mode);
  }, [mode]);

  function toggleMode() {
    setMode((prevState) => !prevState);
  }
  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <div className="w-full m-auto dark:bg-slate-800 dark:text-white">
            <NavBar toggleMode={toggleMode} mode={mode} />

            <Routes>
              <Route path="/" element={<Home mode={mode} />} />
              <Route path="/impressum" element={<Imprint />} />
              <Route path="/datenschutz" element={<PrivacyProtection />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </I18nextProvider>
    </div>
  );
}

export default App;
