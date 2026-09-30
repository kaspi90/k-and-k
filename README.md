# k-and-k.codes

Website von Heike Kasper und Erik Kasper – zwei unabhängig arbeitenden
selbstständigen Softwareentwicklern.

Create React App · React 18 · TypeScript · React Router · i18next · Tailwind (Reset/Utilities)

## Befehle

| Befehl | Zweck |
| --- | --- |
| `npm start` | Entwicklungsserver (http://localhost:3000) |
| `npm run build` | Produktions-Build + `scripts/postbuild.js` (statisches HTML je Route mit Meta/hreflang/JSON-LD, `sitemap.xml`, `404.html`) |
| `npm run preview` | Produktions-Build lokal ausliefern (http://localhost:4173) – inkl. Weiterleitungen aus `vercel.json` und HTTP 404 für unbekannte Pfade |
| `npm run test:ci` | Tests einmalig (inkl. Prüfung auf Platzhaltertexte und EN/DE-Schlüsselgleichheit) |
| `npm run typecheck` | TypeScript |
| `npm run lint` | ESLint (react-app-Regeln, keine Warnungen erlaubt) |

Node 20 (siehe `.nvmrc`).

## Struktur

- `src/config/site.json` – URL, E-Mail, Feature-Schalter, persönliche Links (Instagram/CV nur mit bestätigter URL)
- `src/config/routes.json` – alle Seiten in DE (Hauptversion, `/…`) und EN (`/en/…`); Basis für Router, Sprachumschalter, Postbuild und Sitemap
- `src/translations/{en,de}/translation.json` – Oberflächentexte
- `src/content/` – Profile, Kundenstimmen, Rechtstexte, Case Studies (leer → Bereich ausgeblendet), Portraits
- `src/styles/tokens.css` – semantische Design-Tokens für Dark (primär) und Light Mode
- `src/styles/site.css` – Layout und Komponenten nach dem Figma-Entwurf
- `public/brand/` – Logo-Varianten (auf dunklem/hellem Grund, Bildmarke), `public/og-image*.png` – Social Preview je Sprache
- `docs/CONTENT-TODO.md` – offene Inhalte, Freigaben und rechtliche Prüfpunkte

## Theme und Sprache

- Theme: Das Inline-Skript in `public/index.html` setzt `data-theme` vor dem ersten Rendern
  (gespeicherte Auswahl `localStorage["kk-theme"]`, sonst `prefers-color-scheme`). Kein Flackern.
- Sprache ergibt sich aus der URL: Deutsch ohne Präfix (Hauptversion, `x-default`), Englisch unter `/en`.
  Der Umschalter verlinkt dieselbe Seite in der anderen Sprache und behält Anker wie `#contact`;
  Theme und Sprache sind unabhängig.

## Deployment

Vercel mit Preset „Other“ (`vercel.json`: `framework: null`, Build `npm run build`, Output `build`) –
kein SPA-Catch-all, unbekannte Pfade liefern `404.html` mit HTTP 404.
Header und Weiterleitungen (`/de/*` → `/*`, `/legal-notice`, `/privacy` → `/en/…`): `vercel.json`.
