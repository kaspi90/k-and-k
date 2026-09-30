# Offene Inhalte, Freigaben und Prüfpunkte

Interne Liste – wird **nicht** veröffentlicht. Stand: 28.09.2026 (Branch `redesign-2026`).

Grundsatz: Nichts erfinden. Fehlende Inhalte bleiben öffentlich ausgeblendet, bis sie
vorliegen und bestätigt sind. Die Tests (`npm run test:ci`) schlagen fehl, sobald
Platzhaltertexte wie „content required“, „to be confirmed“ oder „TODO“ in öffentliche
Inhalte gelangen.

## URL-Struktur

Deutsch ist die Hauptversion (ohne Präfix), Englisch liegt unter `/en`.

| Seite | Deutsch | Englisch |
| --- | --- | --- |
| Startseite | `/` | `/en` |
| Heike | `/heike` | `/en/heike` |
| Erik | `/erik` | `/en/erik` |
| Impressum | `/impressum` | `/en/legal-notice` |
| Datenschutz | `/datenschutz` | `/en/privacy` |

`x-default` zeigt auf die deutsche Fassung. Dauerhafte Weiterleitungen (`vercel.json`
und clientseitig): `/de` → `/`, `/de/*` → `/*`, `/legal-notice` → `/en/legal-notice`,
`/privacy` → `/en/privacy`.

## Ausgeblendet – so wird es aktiviert

| Bereich | Status | Aktivieren |
| --- | --- | --- |
| Case Studies („Ausgewählte Projekte“, Nav-Link, Hero-Button) | verborgen, da keine freigegebenen Projekte | Projekt in `src/content/caseStudies.ts` eintragen – Bereich, Navigation und Button erscheinen automatisch |
| CV-Downloads (Karte: Link „Lebenslauf (PDF)“, Profilseite: Button) | **aktiv** – vier öffentliche PDFs vorhanden | mit `scripts/generate-cvs.py` aus den geprüften Profilinhalten neu erzeugen |
| Instagram „From Plans to Pixels“ | **aktiv** | `@fromplanstopixels`, nur bei Heikes persönlichen Links (Karte + Profilseite), nicht bei Erik und nicht im Footer |
| Profilseiten `/heike`, `/erik` | **aktiv** (belegte Inhalte vorhanden) | bei Bedarf über `features.profilePages` in `src/config/site.json` abschalten – Routen, Links und Sitemap folgen automatisch |

## Lebensläufe

Erwartete Dateien (geprüft, ohne private Adresse/Telefon/Geburtsdatum, ohne interne Hinweise):

- `public/cv/heike-kasper-cv-de.pdf`
- `public/cv/heike-kasper-cv-en.pdf`
- `public/cv/erik-kasper-cv-de.pdf`
- `public/cv/erik-kasper-cv-en.pdf`

Die vier Dateien werden mit `npm run generate:cvs` automatisch aus der zentralen Quelle
`src/content/profiles.ts` erzeugt und sind in `src/config/site.json` eingetragen. Neue
Stationen, Ausbildungen, Technologien oder Schwerpunkte müssen daher nur noch im jeweiligen
Website-Profil ergänzt und anschließend neu generiert werden; das PDF-Layout passt sich an und
erzeugt bei mehr Inhalt automatisch weitere Seiten mit der gestalteten Seitenleiste.
Das Portrait ist als reine CV-Darstellung im Generator konfiguriert; bestätigte Interessen
liegen ebenfalls im jeweiligen Profil. Heike ist mit „Laufen, Brettspiele, Skifahren, Wandern,
Manga lesen und Zeichnen“ eingetragen. Bei Erik stehen „Skifahren, Radfahren, Laufen und
Brettspiele“.

```json
"heike": { "cv": { "de": "/cv/heike-kasper-cv-de.pdf", "en": "/cv/heike-kasper-cv-en.pdf" } },
"erik":  { "cv": { "de": "/cv/erik-kasper-cv-de.pdf",  "en": "/cv/erik-kasper-cv-en.pdf" } }
```

Die deutsche Seite verlinkt automatisch das deutsche PDF, `/en` das englische. Die Links
erscheinen auf der jeweiligen Personenkarte und Profilseite, bewusst nicht im Footer. Sicherungen:
`npm run build` bricht ab, wenn eine eingetragene Datei fehlt, und `npm run test:ci` prüft
Namensschema und Existenz der Dateien.

## Energie- und Gebäudekompetenz Heike – zu bestätigen

Öffentlich verwendet werden nur belegte Angaben (Heikes Profil, Karte „Hintergrund“, Meta-Beschreibung):

- Architekturstudium (B.Sc. Bergische Universität Wuppertal, M.Sc. TU Dortmund)
- Masterarbeit zur Vakuumdämmung am **Lehrstuhl Bauphysik und Technische Gebäudeausrüstung**
  der TU Dortmund (Deckblatt: „M. Sc. Architektur und Städtebau“, Wintersemester 2016/17,
  Abgabe 20.03.2017; Quelle `Documents/Documents/Vakuumdämmung/`)

Erik wird bewusst **nicht** mit Energie in Verbindung gebracht. Energieberatung erscheint
nirgends als Leistung von k-and-k.codes (Test prüft das).

Offene Punkte:
- [x] **Titel der Masterarbeit:** nach der abgegebenen PDF (20.03.2017) „Vakuumdämmung in der Baukonstruktion“; Website und CVs verwenden diese Fassung.
- [ ] **Studiengang und Zeitraum:** Website „Master of Science, Architektur, 2014–2018“; Deckblatt „M. Sc. Architektur und Städtebau“, Abgabe März 2017 – Bezeichnung und Abschlussjahr bestätigen
- [ ] **Energieberater-Qualifikation:** genaue Bezeichnung (z. B. Gebäudeenergieberater:in, Energieeffizienz-Expert:in) – lokal gibt es nur Hinweise auf eine laufende Weiterbildung (Übungsunterlagen „Modul 3 – Anlagentechnik“, Abgabe 30.01.2026, in `Downloads/wetransfer_hausaufgabe_anlagentechnik-pdf_2026-05-04_1047/`), aber keinen Nachweis
- [ ] Institution bzw. Bildungsträger
- [ ] Zeitraum oder Abschlussdatum
- [ ] fachliche Schwerpunkte (z. B. Wohngebäude, Anlagentechnik, GEG, DIN V 18599)
- [ ] bisherige praktische Projekte oder Beratungen – ggf. auch die eigene Energieberater-Plattform (Energiefundament) als Softwareprojekt nennen? Nur mit Freigabe
- [ ] Soll Energieberatung aktiv als Leistung angeboten werden – und falls ja, unter welcher Marke (k-and-k.codes oder Energiefundament)?
- [ ] Darf die Bezeichnung öffentlich und rechtlich verwendet werden (z. B. Eintrag in der Energieeffizienz-Expertenliste, geschützte Titel)?

## Vor dem Livegang zu bestätigen

### Rechtliches (Impressum/Datenschutz in `src/content/legal.ts`)
- [ ] **Registergericht** – fehlt (Pflichtangabe für GmbH, § 5 Abs. 1 Nr. 4 DDG)
- [ ] **HRB-Nummer** – fehlt
- [ ] **Vertretungsberechtigte Geschäftsführung** – fehlt (§ 5 Abs. 1 Nr. 1 DDG)
- [ ] **Telefonnummer** 0211 436912303 noch aktuell?
- [ ] **Allgemeiner Vertragspartner:** Heike/Erik persönlich oder Kadelo GmbH? Das Impressum nennt bisher Kadelo GmbH. Für Meetago ist Heikes freiberufliche Mitarbeit seit Mai 2023 bestätigt.
- [ ] **Datenschutz Vercel:** vollständige Angaben, Rechtsgrundlage für US-Übermittlung (DPF/SCC), AV-Vertrag, Umfang und Speicherdauer der Server-Logs
- [ ] Verantwortlicher im Datenschutz: bisher widersprüchlich (alte Erklärung „Heike Kasper, Kasperlino GmbH“, Impressum „Kadelo GmbH“) – jetzt Kadelo GmbH
- [ ] Rechtsgrundlagen aktualisiert: § 5 **DDG** (statt TMG), § 18 Abs. 2 **MStV** (statt § 55 RStV), § 25 **TDDDG** – prüfen
- [ ] Local Storage für die Theme-Auswahl (§ 25 Abs. 2 Nr. 2 TDDDG) – Einschätzung bestätigen
- [ ] Alte Haftungsausschlüsse (TMG-Bezug) wurden nicht übernommen – bewusst so gewollt?
- [ ] E-Mail im Impressum jetzt `kontakt@k-and-k.codes` (bisher `kontakt@kadelo.de`)

### Persönliche Angaben
- [ ] **Eriks Masterabschluss und Zeitraum** (IU, „2022–2026“, Abschluss erfolgt?)
- [ ] „Seit“-Angaben auf Aktualität prüfen: Heike Meetago seit Mai 2023 und Javlis seit 2022; Erik Kadelo seit 2015
- [ ] Eriks Seeders-Eintrag: Rollenbezeichnung stand auf der alten Website nicht – jetzt „Gründung und strategisches Management“
- [ ] Javlis.com (TopieT GmbH) in Heikes Profil: Projekt weiterhin nennen? javlis.com leitet inzwischen auf docs.javsphere.com um – daher ohne Link
- [ ] Sprachen und Sprachniveaus (bisher nirgends veröffentlicht)

### Freigaben
- [ ] **Kundenstimmen:** Erlaubnis zur Wiederveröffentlichung – Igor Shelkovenkov (für Heike), Sebastian Heinl, Kia Kahawa, Michael Zsilla (für Erik). Texte unverändert von der bisherigen Website; englische Fassungen sind als „Translated from German“ gekennzeichnet. Keine weiteren Empfehlungen ergänzen.
- [ ] Englische Übersetzungen der Empfehlungen gegenlesen
- [ ] **Bearbeitete Porträts** (freigestellt, Color Grading): Freigabe durch Heike und Erik
- [ ] **Instagram-URL** „From Plans to Pixels“ (exakte Profil-URL)
- [ ] `kontakt@k-and-k.codes` als einzige öffentliche Adresse – Postfach erreichbar?
- [ ] Deutsche und englische Texte final freigeben

### Dateien und Projekte
- [x] **Veröffentlichungsfähige CVs** für beide – vier neue, einseitige PDFs ohne private Adresse, Telefonnummer oder Geburtsdatum; Deutsch und Englisch getrennt. Vor dem Livegang verbleiben die oben genannten inhaltlichen Prüfpunkte, insbesondere Eriks Masterstatus und Heikes exakte Studien-/Masterarbeitsbezeichnung.
- [ ] **Freigegebene Case Studies** – je Projekt: Titel oder anonymisierte Beschreibung, Ausgangssituation, Herausforderung, Beitrag Heike/Erik/beide, Lösung, Technologien, Ergebnis, überprüfbare Wirkung (keine erfundenen Kennzahlen), freigegebene Screenshots oder anonymisierte Visualisierung, Attribution und Kundenfreigabe.

## Hosting

- `vercel.json` setzt jetzt `"framework": null` (Preset „Other“) mit `buildCommand: npm run build` und `outputDirectory: build`. Dadurch entfällt der SPA-Catch-all des Create-React-App-Presets: Jede gültige Seite liegt als eigene HTML-Datei vor, unbekannte Pfade liefern `404.html` mit **HTTP 404**. **Auf einem Vercel-Preview prüfen**, bevor Production umgestellt wird (Status von `/gibt-es-nicht`, `/en/gibt-es-nicht`, Weiterleitungen, alle Seiten 200).
- Cache: HTML `max-age=0, must-revalidate`; `/static` und `/fonts` ein Jahr `immutable` (bisher wurde auch `index.html` ein Jahr gecacht).
- Lokal bildet `npm run preview` (`scripts/serve.js`) Weiterleitungen und 404-Status nach.
- Nach Livegang: Sitemap `https://www.k-and-k.codes/sitemap.xml` in der Google Search Console einreichen; alte `/de/…`-URLs sind per 308 weitergeleitet.
