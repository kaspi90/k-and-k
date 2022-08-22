import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="w-4/5	m-auto">
      <NavBar></NavBar>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
