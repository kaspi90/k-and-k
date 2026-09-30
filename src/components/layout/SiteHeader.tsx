import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { hasCaseStudies } from "../../content/caseStudies";
import { useLocale } from "../../i18n/LocaleContext";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Brand } from "./Brand";
import { LanguageSwitch, ThemeToggle } from "./HeaderControls";

export function useNavItems() {
  const { t } = useLocale();
  return [
    hasCaseStudies ? { id: "work", label: t("nav.work") } : null,
    { id: "people", label: t("nav.people") },
    { id: "services", label: t("nav.services") },
    { id: "process", label: t("nav.process") },
  ].filter((item): item is { id: string; label: string } => item !== null);
}

export function SiteHeader() {
  const { t, section } = useLocale();
  const items = useNavItems();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="nav-shell">
      <nav className="nav container" aria-label={t("a11y.primaryNav")}>
        <Brand />
        <div id="primary-menu" className={`nav-panel ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {items.map((item) => (
              <li key={item.id}>
                <Link to={section(item.id)}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-panel-language">
            <LanguageSwitch />
          </div>
          <Button to={section("contact")} icon="arrow" className="nav-cta nav-cta-mobile">
            {t("nav.cta")}
          </Button>
        </div>
        <div className="nav-tools">
          <div className="nav-tools-language">
            <LanguageSwitch />
          </div>
          <ThemeToggle />
          <Button to={section("contact")} icon="arrow" className="nav-cta nav-cta-desktop">
            {t("nav.cta")}
          </Button>
          <button
            type="button"
            className="icon-button menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            aria-label={menuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>
    </header>
  );
}
