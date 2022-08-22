import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Divider from "./components/Divider";

function App() {
  return (
    <div className="w-4/5	m-auto">
      <NavBar></NavBar>
      <AboutUs></AboutUs>
      <Divider></Divider>
    </div>
  );
}

export default App;
