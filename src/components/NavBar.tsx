import logo from "../img/k-and-k_logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between items-center h-28 border-b-2">
      <a href="/">
        <img className="max-h-24 p-4	" src={logo}></img>
      </a>
      <div className="flex gap-5">
        <a href="#">Über Uns</a>
        <a href="#">Leistungen</a>
        <a href="#">Projekte</a>
      </div>
    </nav>
  );
}
export default NavBar;
