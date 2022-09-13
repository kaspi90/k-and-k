import logo from "../img/k-and-k_logo.png";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

function NavBar() {
  const [mode, setMode] = useState(false);
  const el = document.getElementById("modeSwitch");

  useEffect(() => {
    el?.classList.toggle("dark", mode);
  }, [mode]);

  function toggleMode() {
    setMode((prevState) => !prevState);
  }

  return (
    <div className=" bg-neutral-100 mb-12 dark:bg-gray-900 dark:text-white">
      <nav className="flex justify-between items-center h-24  w-4/5 mx-auto mb-8">
        <a href="/">
          <img className="max-h-24 p-4	" src={logo}></img>
        </a>
        <div className="flex gap-5 content-center items-center">
          <a href="#aboutUs">Über Uns</a>
          <a href="#projects">Projekte</a>
          <a href="#contact">Kontakt</a>
          <div className="flex">
            <IconContext.Provider
              value={{
                color: mode ? "#671595" : "#224CA6",
                className: "hover:grayscale",
                size: "2em",
              }}
            >
              <button onClick={toggleMode}>
                {mode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
              </button>
            </IconContext.Provider>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
