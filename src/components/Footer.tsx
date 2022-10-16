import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className=" bg-gray-700 dark:bg-gray-900  text-white ">
      <div className="max-w-[1280px] gap-x-5 h-20  px-8 flex justify-between items-center flex-wrap mx-auto sm:justify-center ">
        <p className="h-6">
          © 2022 K&K Coding - Made with love ❤ in Düsseldorf,{" "}
          {t("footer.germany")}
        </p>
        <div className="flex gap-5 h-6">
          <Link to="impressum">{t("footer.imprint")}</Link>
          <Link to="datenschutz">{t("footer.privacy")}</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
