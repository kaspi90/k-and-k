import logo from "../logo.svg";

function NavBar() {
  return (
    <nav className="flex justify-between items-center h-28 border-b-2">
      <img className="max-h-24	" src={logo}></img>
      <div className="flex gap-5">
        <a href="#">Über Uns</a>
        <a href="#">Leistungen</a>
        <a href="#">Projekte</a>
      </div>
    </nav>
  );
}
export default NavBar;
