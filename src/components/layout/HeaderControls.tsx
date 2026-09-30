import { Link, useLocation } from "react-router-dom";

import { LANGS, langForPath, pathFor, routeKeyForPath } from "../../config/site";
import { useLocale } from "../../i18n/LocaleContext";
import { useTheme } from "../../theme/ThemeProvider";
import { Icon } from "../ui/Icon";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const label = theme === "dark" ? t("a11y.switchToLight") : t("a11y.switchToDark");
  return (
    <button type="button" className="icon-button theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
      <Icon name={theme === "dark" ? "sun" : "moon"} />
    </button>
  );
}

/** EN/DE-Umschalter: verlinkt jeweils dieselbe Seite in der anderen Sprache. */
export function LanguageSwitch() {
  const { t } = useLocale();
  const { pathname, hash } = useLocation();
  const current = langForPath(pathname);
  const key = routeKeyForPath(pathname) ?? "home";

  return (
    <div className="language-switch" role="group" aria-label={t("a11y.language")}>
      {LANGS.map((lang, index) => (
        <span key={lang} className="language-item">
          {index > 0 && <span className="language-sep" aria-hidden="true">/</span>}
          <Link
            to={{ pathname: pathFor(key, lang), hash }}
            lang={lang}
            hrefLang={lang}
            className={lang === current ? "active" : undefined}
            aria-current={lang === current ? "true" : undefined}
            aria-label={`${lang.toUpperCase()} – ${t(`language.${lang}`)}`}
          >
            {lang.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
