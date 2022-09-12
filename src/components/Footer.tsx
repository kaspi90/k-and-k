import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-between w-full items-center h-14  bg-gray-700 dark:bg-slate-900 py-10 text-white px-4 ">
      <div className="w-4/5	flex justify-between items-center mx-auto">
        <p>© 2022 K&K Coding</p>
        <div className="flex gap-5">
          <Link to="impressum">Impressum</Link>
          <Link to="datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
