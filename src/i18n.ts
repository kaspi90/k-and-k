import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationDE from "./translations/de/translation.json";
import translationEN from "./translations/en/translation.json";

// Deutsch ist die Hauptsprache (/), Englisch liegt unter /en.
// Komponenten nutzen über useLocale() eine fest an die Seitensprache gebundene t-Funktion.
i18n.use(initReactI18next).init({
  resources: {
    de: { translation: translationDE },
    en: { translation: translationEN },
  },
  lng: "de",
  fallbackLng: "de",
  supportedLngs: ["de", "en"],
  interpolation: { escapeValue: false },
  returnNull: false,
});

export default i18n;
