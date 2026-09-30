import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { FEATURES, legacyRedirect } from "./config/site";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import { ThemeProvider } from "./theme/ThemeProvider";

/** Frühere Adressen (/de/…, /legal-notice, /privacy) – Anker bleibt erhalten. */
function LegacyRedirect() {
  const { pathname, hash } = useLocation();
  const target = legacyRedirect(pathname) ?? "/";
  return <Navigate to={{ pathname: target, hash }} replace />;
}

/**
 * Deutsch unter /, Englisch unter /en. Alle Routen stehen zusätzlich in
 * src/config/routes.json – daraus erzeugt scripts/postbuild.js je Seite
 * statisches HTML mit passenden Meta-Angaben, hreflang und strukturierten Daten.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/en" element={<Layout lang="en" />}>
        <Route index element={<HomePage />} />
        {FEATURES.profilePages && <Route path="heike" element={<ProfilePage person="heike" />} />}
        {FEATURES.profilePages && <Route path="erik" element={<ProfilePage person="erik" />} />}
        <Route path="legal-notice" element={<LegalPage type="imprint" />} />
        <Route path="privacy" element={<LegalPage type="privacy" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/de/*" element={<LegacyRedirect />} />
      <Route path="/de" element={<LegacyRedirect />} />
      <Route path="/legal-notice" element={<LegacyRedirect />} />
      <Route path="/privacy" element={<LegacyRedirect />} />
      <Route element={<Layout lang="de" />}>
        <Route path="/" element={<HomePage />} />
        {FEATURES.profilePages && <Route path="/heike" element={<ProfilePage person="heike" />} />}
        {FEATURES.profilePages && <Route path="/erik" element={<ProfilePage person="erik" />} />}
        <Route path="/impressum" element={<LegalPage type="imprint" />} />
        <Route path="/datenschutz" element={<LegalPage type="privacy" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
