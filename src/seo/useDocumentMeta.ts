import { useEffect } from "react";

import { DEFAULT_LANG, Lang, LANGS, pathFor, RouteKey, SITE_URL } from "../config/site";
import { useLocale } from "../i18n/LocaleContext";

const OG_LOCALE: Record<Lang, string> = { de: "de_DE", en: "en_US" };
const OG_IMAGE: Record<Lang, string> = { de: "/og-image-de.png", en: "/og-image.png" };

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    el.setAttribute("data-meta", "");
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (key: string, keyAttr: "name" | "property") => () => {
  const el = document.createElement("meta");
  el.setAttribute(keyAttr, key);
  return el;
};

/**
 * Hält Titel, Beschreibung, Canonical, hreflang und Open-Graph-Angaben bei
 * clientseitiger Navigation aktuell. Die statischen Varianten je Route erzeugt
 * scripts/postbuild.js, damit Crawler und Social Previews sie ohne JavaScript sehen.
 */
export function useDocumentMeta(page: RouteKey | "notFound") {
  const { lang, t } = useLocale();

  useEffect(() => {
    const title = t(`meta.${page}.title`);
    const description = t(`meta.${page}.description`);
    document.title = title;
    document.documentElement.lang = lang;

    upsert('meta[name="description"]', meta("description", "name"), "content", description);
    upsert('meta[property="og:title"]', meta("og:title", "property"), "content", title);
    upsert('meta[property="og:description"]', meta("og:description", "property"), "content", description);
    upsert('meta[property="og:locale"]', meta("og:locale", "property"), "content", OG_LOCALE[lang]);
    upsert('meta[property="og:image"]', meta("og:image", "property"), "content", SITE_URL + OG_IMAGE[lang]);
    upsert('meta[name="robots"]', meta("robots", "name"), "content", page === "notFound" ? "noindex, follow" : "index, follow");

    document.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    if (page !== "notFound") {
      const url = SITE_URL + pathFor(page, lang);
      upsert('meta[property="og:url"]', meta("og:url", "property"), "content", url);
      const canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = url;
      canonical.setAttribute("data-meta", "");
      document.head.appendChild(canonical);
      [...LANGS, "x-default" as const].forEach((hreflang) => {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = hreflang;
        link.href = SITE_URL + pathFor(page, hreflang === "x-default" ? DEFAULT_LANG : hreflang);
        link.setAttribute("data-meta", "");
        document.head.appendChild(link);
      });
    }
  }, [lang, page, t]);
}
