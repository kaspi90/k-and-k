import { Link } from "react-router-dom";

import { CONTACT_EMAIL, FEATURES, PEOPLE, PERSON_IDS } from "../../config/site";
import { useLocale } from "../../i18n/LocaleContext";
import { Brand } from "./Brand";
import { useNavItems } from "./SiteHeader";

function ExternalLink({ href, children }: { href: string; children: string }) {
  const { t } = useLocale();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> ({t("a11y.newTab")})</span>
    </a>
  );
}

export function SiteFooter() {
  const { t, path, section } = useLocale();
  const items = useNavItems();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <div className="footer-brand-copy">
            <p>{t("footer.tagline")}</p>
            <span>{t("footer.names")}</span>
          </div>
        </div>
        <nav aria-label={t("a11y.footerNav")} className="footer-nav">
          <div>
            <h2>{t("footer.explore")}</h2>
            {items.map((item) => (
              <Link key={item.id} to={section(item.id)}>
                {item.label}
              </Link>
            ))}
            <Link to={section("contact")}>{t("nav.contact")}</Link>
          </div>
          <div>
            <h2>{t("footer.people")}</h2>
            {FEATURES.profilePages &&
              PERSON_IDS.map((id) => (
                <Link key={id} to={path(id)}>
                  {PEOPLE[id].name}
                </Link>
              ))}
            {PERSON_IDS.map((id) => (
              <ExternalLink key={`li-${id}`} href={PEOPLE[id].linkedin}>
                {t("footer.linkedin", { name: PEOPLE[id].givenName })}
              </ExternalLink>
            ))}
            {PERSON_IDS.filter((id) => PEOPLE[id].github).map((id) => (
              <ExternalLink key={`gh-${id}`} href={PEOPLE[id].github!}>
                {t("footer.github", { name: PEOPLE[id].givenName })}
              </ExternalLink>
            ))}
          </div>
          <div>
            <h2>{t("footer.contact")}</h2>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <Link to={path("imprint")}>{t("footer.imprint")}</Link>
            <Link to={path("privacy")}>{t("footer.privacy")}</Link>
          </div>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>{t("footer.copyright", { year })}</span>
      </div>
    </footer>
  );
}
