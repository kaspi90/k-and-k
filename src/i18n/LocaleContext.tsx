import { createContext, ReactNode, useContext, useMemo } from "react";

import i18n from "../i18n";
import { Lang, pathFor, RouteKey } from "../config/site";

export type Translate = (key: string, options?: Record<string, unknown>) => string;

interface LocaleValue {
  lang: Lang;
  t: Translate;
  /** Liste aus den Übersetzungen (returnObjects) */
  list: <T = string>(key: string, options?: Record<string, unknown>) => T[];
  path: (key: RouteKey) => string;
  /** Link auf einen Abschnitt der Startseite in der aktuellen Sprache */
  section: (id: string) => { pathname: string; hash: string };
}

const LocaleContext = createContext<LocaleValue | null>(null);

export function LocaleProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const value = useMemo<LocaleValue>(() => {
    const fixedT = i18n.getFixedT(lang);
    const t: Translate = (key, options) => String(fixedT(key, options));
    return {
      lang,
      t,
      list: <T,>(key: string, options?: Record<string, unknown>) => {
        const result = fixedT(key, { ...options, returnObjects: true }) as unknown;
        return Array.isArray(result) ? (result as T[]) : [];
      },
      path: (key) => pathFor(key, lang),
      section: (id) => ({ pathname: pathFor("home", lang), hash: `#${id}` }),
    };
  }, [lang]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleValue {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used within a LocaleProvider");
  return value;
}
