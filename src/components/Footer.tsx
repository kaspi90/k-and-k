import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-between items-center h-14 border-b-2">
      <p>© 2022 K&K Coding</p>
      <div className="flex gap-5">
        <Link to="impressum">Impressum</Link>
        <Link to="datenschutz">Datenschutz</Link>
      </div>
    </footer>
  );
}

export default Footer;
