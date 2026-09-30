import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import type { Lang } from "../../config/site";
import { LocaleProvider, useLocale } from "../../i18n/LocaleContext";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const prefersReducedMotion = () =>
  typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Scrollt bei Seitenwechsel nach oben bzw. zum Anker (#people …) – auch von Unterseiten aus. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView?.({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

/** Dezente Einblendung beim Scrollen – ohne IntersectionObserver oder bei Reduced Motion sofort sichtbar. */
function RevealObserver() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.visible)"));
    if (typeof window.IntersectionObserver !== "function" || prefersReducedMotion()) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}

function Frame() {
  const { t, lang } = useLocale();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        {t("a11y.skip")}
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollManager />
      <RevealObserver />
    </div>
  );
}

export function Layout({ lang }: { lang: Lang }) {
  return (
    <LocaleProvider lang={lang}>
      <Frame />
    </LocaleProvider>
  );
}
