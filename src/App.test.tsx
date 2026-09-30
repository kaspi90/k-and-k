/* eslint-disable testing-library/no-node-access -- geprüft werden bewusst <head>-Metadaten, <html lang> und sämtliche Links im Dokument */
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";

import "./i18n";
import { AppRoutes } from "./App";
import { PEOPLE } from "./config/site";
import { ThemeProvider } from "./theme/ThemeProvider";

const PAGES: Array<[string, "de" | "en"]> = [
  ["/", "de"],
  ["/heike", "de"],
  ["/erik", "de"],
  ["/impressum", "de"],
  ["/datenschutz", "de"],
  ["/en", "en"],
  ["/en/heike", "en"],
  ["/en/erik", "en"],
  ["/en/legal-notice", "en"],
  ["/en/privacy", "en"],
];
const PLACEHOLDER = /content required|asset required|attribution pending|to be confirmed|content pending|real project details|placeholder|lorem ipsum|\bTODO\b|to verify|information required|pending verification/i;

function LocationProbe() {
  const { pathname, hash } = useLocation();
  return <output data-testid="location">{pathname + hash}</output>;
}

function renderAt(path: string) {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
        <LocationProbe />
      </MemoryRouter>
    </ThemeProvider>
  );
}

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

describe("Deutsch als Hauptversion", () => {
  test("/ zeigt die deutsche Startseite", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Wir entwickeln Software, die funktioniert.");
    expect(screen.getByText("Softwareentwicklung · direkt und persönlich")).toBeInTheDocument();
    expect(screen.getByText("KI-gestützt, wo es sinnvoll ist.")).toBeInTheDocument();
    expect(screen.getByText(/Heike und Erik arbeiten unabhängig als selbstständige Softwareentwickler/)).toBeInTheDocument();
    expect(screen.getAllByText("Direkt für Projektanfragen verfügbar.")).toHaveLength(2);
    expect(document.documentElement.lang).toBe("de");
  });

  test("deutsche Texte ohne „Freelance-Team“, „Setup“ oder englische Navigation", () => {
    renderAt("/");
    const text = document.body.textContent ?? "";
    expect(text).not.toMatch(/Freelance-Team|im Setup|freiberuflich|messbar|uns beide|eingespieltes Team/i);
    expect(screen.queryByText("Services")).not.toBeInTheDocument();
    expect(screen.queryByText(/Translated from German/)).not.toBeInTheDocument();
  });

  test("/en zeigt die englische Startseite", () => {
    renderAt("/en");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("We build software that works.");
    expect(document.documentElement.lang).toBe("en");
  });

  test("zeigt im Header nur die Bildmarke ohne ausgeschriebenen Markennamen", () => {
    renderAt("/");
    const homeLinks = screen.getAllByRole("link", { name: "k-and-k.codes – Startseite" });
    for (const homeLink of homeLinks) {
      expect(homeLink).toContainElement(homeLink.querySelector("img"));
      expect(homeLink).toHaveTextContent("");
    }
    expect(document.querySelector(".brand-name")).toBeNull();
  });

  test.each(PAGES)("%s hat html lang=%s", (path, lang) => {
    renderAt(path);
    expect(document.documentElement.lang).toBe(lang);
  });
});

describe("Weiterleitungen alter Adressen", () => {
  test.each([
    ["/de", "/"],
    ["/de#people", "/#people"],
    ["/de/heike", "/heike"],
    ["/de/erik#contact", "/erik#contact"],
    ["/de/impressum", "/impressum"],
    ["/de/datenschutz", "/datenschutz"],
    ["/legal-notice", "/en/legal-notice"],
    ["/privacy", "/en/privacy"],
  ])("%s → %s", (from, to) => {
    renderAt(from);
    expect(screen.getByTestId("location")).toHaveTextContent(to);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});

describe("Sprachumschalter", () => {
  test.each([
    ["/", "EN – English", "/en"],
    ["/#contact", "EN – English", "/en#contact"],
    ["/heike", "EN – English", "/en/heike"],
    ["/impressum", "EN – English", "/en/legal-notice"],
    ["/en/erik", "DE – Deutsch", "/erik"],
    ["/en/privacy", "DE – Deutsch", "/datenschutz"],
    ["/en#people", "DE – Deutsch", "/#people"],
  ])("auf %s führt „%s“ zu %s", (path, label, target) => {
    renderAt(path);
    for (const link of screen.getAllByRole("link", { name: label })) expect(link).toHaveAttribute("href", target);
  });

  test("aktuelle Sprache ist markiert", () => {
    renderAt("/erik");
    expect(screen.getAllByRole("link", { name: "DE – Deutsch" })[0]).toHaveAttribute("aria-current", "true");
  });
});

describe("SEO zur Laufzeit", () => {
  test("deutsche Seite: Canonical, hreflang und x-default", () => {
    renderAt("/heike");
    expect(document.title).toBe("Heike Kasper — Selbstständige Softwareentwicklerin | k-and-k.codes");
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://www.k-and-k.codes/heike");
    expect(document.head.querySelector('link[hreflang="de"]')).toHaveAttribute("href", "https://www.k-and-k.codes/heike");
    expect(document.head.querySelector('link[hreflang="en"]')).toHaveAttribute("href", "https://www.k-and-k.codes/en/heike");
    expect(document.head.querySelector('link[hreflang="x-default"]')).toHaveAttribute("href", "https://www.k-and-k.codes/heike");
  });

  test("englische Seite: Canonical unter /en, x-default auf Deutsch", () => {
    renderAt("/en/legal-notice");
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://www.k-and-k.codes/en/legal-notice");
    expect(document.head.querySelector('link[hreflang="x-default"]')).toHaveAttribute("href", "https://www.k-and-k.codes/impressum");
    expect(document.head.querySelector('meta[property="og:locale"]')).toHaveAttribute("content", "en_US");
  });

  test.each(["/gibt-es-nicht", "/en/gibt-es-nicht"])("%s zeigt 404 und wird nicht indexiert", (path) => {
    renderAt(path);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(path.startsWith("/en") ? "Page not found." : "Seite nicht gefunden.");
    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
    expect(document.head.querySelector('link[rel="canonical"]')).toBeNull();
  });
});

describe("Startseite", () => {
  test("blendet Case Studies samt Navigation und Hero-CTA aus, solange keine freigegeben sind", () => {
    renderAt("/");
    expect(screen.queryByRole("link", { name: /Projekte ansehen/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^Projekte$/ })).not.toBeInTheDocument();
    expect(document.getElementById("work")).toBeNull();
  });

  test("zeigt beide Profile gleichwertig", () => {
    renderAt("/");
    for (const person of Object.values(PEOPLE)) {
      expect(screen.getByRole("heading", { level: 3, name: person.name })).toBeInTheDocument();
    }
    expect(screen.getAllByRole("link", { name: /Profil ansehen/ })).toHaveLength(2);
  });

  test("bleibt bewusst kompakt", () => {
    renderAt("/");
    expect(document.querySelectorAll("#services .service-grid > li")).toHaveLength(3);
    expect(document.querySelectorAll(".workflow-item")).toHaveLength(4);
    expect(document.querySelector(".collaboration-compact")).toBeInTheDocument();
    const aiTasks = document.querySelector(".ai-card.helps");
    const humanTasks = document.querySelector(".ai-card.human");
    expect(aiTasks).toHaveTextContent("Code-Review");
    expect(humanTasks).toHaveTextContent("Finale Prüfung und Freigabe");
    expect(humanTasks).not.toHaveTextContent("Code-Review");
    expect(document.getElementById("expertise")).toBeNull();
  });

  test("Kundenstimmen: Deutsch im Original, Englisch als gekennzeichnete Übersetzung, Zuordnung sichtbar", () => {
    const { unmount } = renderAt("/");
    expect(screen.getByText(/„Erik hat sehr gute Kenntnisse in verschiedenen Webtechnologien/)).toBeInTheDocument();
    expect(screen.getByText("Empfehlung für Heike")).toBeInTheDocument();
    expect(screen.getAllByText("Empfehlung für Erik")).toHaveLength(3);
    expect(Array.from(document.querySelectorAll(".testimonial details")).every((item) => item.hasAttribute("open"))).toBe(true);
    unmount();
    renderAt("/en");
    expect(screen.getAllByText("Translated from German")).toHaveLength(4);
  });
});

describe("Inhalte und Links auf allen Seiten", () => {
  test.each(PAGES)("%s enthält keine Platzhalter", (path) => {
    renderAt(path);
    expect(document.body.textContent).not.toMatch(PLACEHOLDER);
  });

  test.each(PAGES)("%s: externe Links öffnen sicher, keine generischen oder leeren Links", (path) => {
    renderAt(path);
    const anchors = Array.from(document.querySelectorAll("a"));
    const hrefs = anchors.map((a) => a.getAttribute("href") ?? "");
    expect(hrefs.filter((href) => href === "" || href === "#")).toEqual([]);
    expect(hrefs.filter((href) => /^https?:\/\/(www\.)?(linkedin|github|instagram)\.com\/?$/.test(href))).toEqual([]);
    const unsafe = anchors.filter((a) => a.getAttribute("target") === "_blank" && !(a.getAttribute("rel") ?? "").includes("noopener"));
    expect(unsafe).toEqual([]);
  });

  test.each(PAGES)("%s: nur der bestätigte Instagram-Account", (path) => {
    renderAt(path);
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href*="instagram.com"]'));
    for (const link of links) expect(link.href).toBe("https://www.instagram.com/fromplanstopixels/");
  });
});

describe("Instagram nur bei Heike", () => {
  const URL = "https://www.instagram.com/fromplanstopixels/";

  test("erscheint auf Heikes Karte, nicht bei Erik und nicht im Footer", () => {
    renderAt("/");
    const links = document.querySelectorAll(`a[href="${URL}"]`);
    expect(links).toHaveLength(1);
    expect(links[0].closest("article")).toHaveAttribute("aria-labelledby", "profile-heike");
    expect(links[0].closest("footer.footer")).toBeNull();
  });

  test("erscheint auf Heikes Profilseite bei den Social Links, ohne eigenen Abschnitt", () => {
    renderAt("/heike");
    const main = within(screen.getByRole("main"));
    expect(main.getByRole("link", { name: /Instagram · @fromplanstopixels/ })).toHaveAttribute("href", URL);
    expect(main.queryByRole("heading", { name: /fromplanstopixels/ })).not.toBeInTheDocument();
    expect(document.querySelectorAll(`a[href="${URL}"]`)).toHaveLength(1);
  });

  test("erscheint nicht auf Eriks Profilseite", () => {
    renderAt("/erik");
    expect(document.querySelector('a[href*="instagram.com"]')).toBeNull();
  });
});

describe("Energie- und Gebäudebezug bei Heike", () => {
  test("Karten zeigen den fachlichen Hintergrund – Energie nur bei Heike", () => {
    renderAt("/");
    const heike = within(screen.getByRole("article", { name: "Heike Kasper" }));
    const erik = within(screen.getByRole("article", { name: "Erik Kasper" }));
    expect(heike.getByText("Architektur, Gebäude und Energieeffizienz")).toBeInTheDocument();
    expect(erik.getByText("Wirtschaftsinformatik und Unternehmensführung")).toBeInTheDocument();
    expect(erik.queryByText(/Energie|Gebäude/)).not.toBeInTheDocument();
  });

  test("Heikes Profil nennt den neuen Schwerpunkt und die belegte Masterarbeit", () => {
    renderAt("/heike");
    expect(screen.getByText("Digitale Lösungen für Gebäude und Energie")).toBeInTheDocument();
    expect(screen.queryByText("Strukturierte Entwicklung komplexer Systeme")).not.toBeInTheDocument();
    expect(screen.getByText(/Werdegang verbindet Softwareentwicklung mit Architektur und Energieeffizienz/)).toBeInTheDocument();
    expect(screen.getByText(/Lehrstuhl Bauphysik und Technische Gebäudeausrüstung/)).toBeInTheDocument();
  });
});

describe("Lebensläufe", () => {
  test("deutsche Startseite verlinkt beide deutschen PDFs nur auf den Personenkarten", () => {
    renderAt("/");
    expect(screen.getByRole("link", { name: /Lebenslauf \(PDF\)\s*:\s*Heike Kasper/ })).toHaveAttribute("href", "/cv/heike-kasper-cv-de.pdf");
    expect(screen.getByRole("link", { name: /Lebenslauf \(PDF\)\s*:\s*Erik Kasper/ })).toHaveAttribute("href", "/cv/erik-kasper-cv-de.pdf");
    const footer = screen.getByRole("contentinfo");
    expect(within(footer).queryByRole("link", { name: /Lebenslauf|CV/i })).not.toBeInTheDocument();
  });

  test("deutsche Profilseite bietet Heikes deutschen Lebenslauf an", () => {
    renderAt("/heike");
    const button = within(screen.getByRole("main")).getByRole("link", { name: /Lebenslauf herunterladen\s*:\s*Heike Kasper/ });
    expect(button).toHaveAttribute("href", "/cv/heike-kasper-cv-de.pdf");
    expect(button).toHaveAttribute("download");
  });

  test("englische Profilseite bietet Eriks englischen CV an", () => {
    renderAt("/en/erik");
    const button = within(screen.getByRole("main")).getByRole("link", { name: /Download CV\s*:\s*Erik Kasper/ });
    expect(button).toHaveAttribute("href", "/cv/erik-kasper-cv-en.pdf");
    expect(button).toHaveAttribute("download");
  });
});

describe("Profilseiten", () => {
  test("zeigen Status, verifizierte Links, Werdegang und Ausbildung", () => {
    renderAt("/heike");
    expect(screen.getByRole("heading", { level: 1, name: "Heike Kasper" })).toBeInTheDocument();
    expect(screen.getByText("Selbstständig · direkt für Projektanfragen verfügbar")).toBeInTheDocument();
    const main = within(screen.getByRole("main"));
    expect(main.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute("href", PEOPLE.heike.linkedin);
    expect(main.getByRole("link", { name: /GitHub/ })).toHaveAttribute("href", PEOPLE.heike.github!);
    expect(main.getByRole("link", { name: "heike@k-and-k.codes" })).toHaveAttribute("href", "mailto:heike@k-and-k.codes");
    expect(main.getByRole("link", { name: /Projekt besprechen/ })).toHaveAttribute("href", expect.stringContaining("mailto:heike@k-and-k.codes"));
    expect(screen.getByRole("heading", { name: "Projekte" })).toBeInTheDocument();
    expect(screen.getByText("Meetago")).toBeInTheDocument();
    expect(screen.getByText("AI")).toBeInTheDocument();
    expect(screen.queryByText(/Kadelo GmbH/)).not.toBeInTheDocument();
    expect(screen.getByText("Master of Science, Architektur")).toBeInTheDocument();
  });

  test("zeigt bei Erik weder WEBPROJAGGT noch GitHub", () => {
    renderAt("/erik");
    const main = within(screen.getByRole("main"));
    expect(main.queryByText(/WEBPROJAGGT/i)).not.toBeInTheDocument();
    expect(main.queryByRole("link", { name: /GitHub/ })).not.toBeInTheDocument();
    expect(main.getByRole("link", { name: "erik@k-and-k.codes" })).toHaveAttribute("href", "mailto:erik@k-and-k.codes");
  });
});

describe("Theme", () => {
  test("Umschalter wechselt das Theme, ist benannt und speichert die Auswahl", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    renderAt("/");
    fireEvent.click(screen.getByRole("button", { name: "Zum hellen Modus wechseln" }));
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(window.localStorage.getItem("kk-theme")).toBe("light");
    expect(screen.getByRole("button", { name: "Zum dunklen Modus wechseln" })).toBeInTheDocument();
  });
});
