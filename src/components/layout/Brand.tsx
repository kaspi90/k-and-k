import { Link } from "react-router-dom";

import mark2x from "../../img/brand/kk-mark@2x.png";
import mark3x from "../../img/brand/kk-mark@3x.png";
import { useLocale } from "../../i18n/LocaleContext";

/** Geometrische KK-Bildmarke als kompakter Link zur Startseite. */
export function Brand() {
  const { t, path } = useLocale();
  return (
    <Link to={path("home")} className="brand" aria-label={t("a11y.home")}>
      <img className="brand-mark" src={mark2x} srcSet={`${mark2x} 2x, ${mark3x} 3x`} width={42} height={25} alt="" />
    </Link>
  );
}
