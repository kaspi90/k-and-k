/**
 * Erzeugt nach `react-scripts build` für jede Route eine eigene index.html
 * mit sprach- und seitenspezifischen Meta-Angaben (Titel, Beschreibung,
 * Canonical, hreflang, Open Graph, JSON-LD) sowie sitemap.xml und 404.html.
 *
 * So sehen Suchmaschinen und Social-Preview-Crawler (LinkedIn, Slack …) die
 * richtigen Angaben auch ohne JavaScript. Die App selbst bleibt eine SPA.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BUILD = path.join(ROOT, "build");
const site = require("../src/config/site.json");
const routeDefs = require("../src/config/routes.json");
const translations = {
  en: require("../src/translations/en/translation.json"),
  de: require("../src/translations/de/translation.json"),
};

const LANGS = ["de", "en"];
const DEFAULT_LANG = "de"; // Hauptsprache ohne Präfix, x-default
const OG_LOCALE = { de: "de_DE", en: "en_US" };
const OG_IMAGE = { de: "/og-image-de.png", en: "/og-image.png" };
const OG_IMAGE_ALT = {
  de: "k-and-k.codes – Heike Kasper und Erik Kasper, zwei selbstständige Softwareentwickler",
  en: "k-and-k.codes – Heike Kasper and Erik Kasper, two independent software developers",
};
const NOSCRIPT = {
  de: "k-and-k.codes benötigt JavaScript. Kontakt: kontakt@k-and-k.codes",
  en: "k-and-k.codes needs JavaScript. Contact: kontakt@k-and-k.codes",
};

const routes = routeDefs.filter((r) => !r.feature || site.features[r.feature]);
const url = (p) => site.siteUrl + p;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const meta = (lang, key) => translations[lang].meta[key];

const ORG_ID = `${site.siteUrl}/#organization`;
const WEBSITE_ID = `${site.siteUrl}/#website`;
const personId = (id) => `${site.siteUrl}/${id}#person`;

function person(id, lang) {
  const p = site.people[id];
  const route = routes.find((r) => r.key === id);
  return {
    "@type": "Person",
    "@id": personId(id),
    name: p.name,
    givenName: p.givenName,
    familyName: p.name.split(" ").slice(-1)[0],
    email: p.email,
    jobTitle: p.schema.jobTitle,
    description: meta(lang, id).description,
    ...(route ? { url: url(route[DEFAULT_LANG]) } : {}),
    image: `${site.siteUrl}/people/${id}-kasper.webp`,
    sameAs: [p.linkedin, p.github, p.instagram].filter(Boolean),
    knowsAbout: p.schema.knowsAbout,
    alumniOf: p.schema.alumniOf.map((name) => ({ "@type": "CollegeOrUniversity", name })),
    memberOf: { "@id": ORG_ID },
  };
}

function organization(lang) {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.brandName,
    url: url("/"),
    logo: url("/brand/kk-mark.png"),
    image: url(OG_IMAGE[DEFAULT_LANG]),
    email: site.email,
    description: meta(lang, "home").description,
    member: Object.keys(site.people).map((id) => ({ "@id": personId(id) })),
    knowsAbout: ["React", "TypeScript", "Web application development", "Software modernization", "AI-assisted software development"],
  };
}

function breadcrumbs(lang, key) {
  const home = routes.find((r) => r.key === "home")[lang];
  const current = routes.find((r) => r.key === key)[lang];
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: site.brandName, item: url(home) },
      { "@type": "ListItem", position: 2, name: meta(lang, key).title.split(" | ")[0].split(" — ")[0], item: url(current) },
    ],
  };
}

function structuredData(key, lang, pageUrl) {
  const page = {
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: meta(lang, key).title,
    description: meta(lang, key).description,
    inLanguage: lang,
    isPartOf: { "@id": WEBSITE_ID },
  };
  const graph = [
    organization(lang),
    { "@type": "WebSite", "@id": WEBSITE_ID, url: url("/"), name: site.brandName, inLanguage: LANGS, publisher: { "@id": ORG_ID } },
  ];
  if (key === "home") {
    graph.push({ "@type": "WebPage", ...page, about: { "@id": ORG_ID } }, person("heike", lang), person("erik", lang));
  } else if (key === "heike" || key === "erik") {
    graph.push({ "@type": "ProfilePage", ...page, mainEntity: { "@id": personId(key) }, breadcrumb: breadcrumbs(lang, key) }, person(key, lang));
  } else {
    graph.push({ "@type": "WebPage", ...page, breadcrumb: breadcrumbs(lang, key) });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function headTags({ key, lang, pagePath, alternates, noindex }) {
  const m = meta(lang, key);
  const tags = [
    `<meta data-meta name="description" content="${esc(m.description)}">`,
    `<meta data-meta name="robots" content="${noindex ? "noindex, follow" : "index, follow"}">`,
  ];
  if (pagePath) {
    tags.push(`<link data-meta rel="canonical" href="${url(pagePath)}">`);
    for (const [hreflang, href] of alternates) tags.push(`<link data-meta rel="alternate" hreflang="${hreflang}" href="${url(href)}">`);
    tags.push(`<meta data-meta property="og:url" content="${url(pagePath)}">`);
  }
  tags.push(
    `<meta data-meta property="og:type" content="${key === "heike" || key === "erik" ? "profile" : "website"}">`,
    `<meta data-meta property="og:site_name" content="${site.brandName}">`,
    `<meta data-meta property="og:title" content="${esc(m.title)}">`,
    `<meta data-meta property="og:description" content="${esc(m.description)}">`,
    `<meta data-meta property="og:image" content="${url(OG_IMAGE[lang])}">`,
    `<meta data-meta property="og:image:width" content="1200">`,
    `<meta data-meta property="og:image:height" content="630">`,
    `<meta data-meta property="og:image:alt" content="${esc(OG_IMAGE_ALT[lang])}">`,
    `<meta data-meta property="og:locale" content="${OG_LOCALE[lang]}">`,
    `<meta data-meta property="og:locale:alternate" content="${OG_LOCALE[lang === "de" ? "en" : "de"]}">`,
    `<meta data-meta name="twitter:card" content="summary_large_image">`
  );
  if (pagePath) {
    const json = JSON.stringify(structuredData(key, lang, url(pagePath))).replace(/</g, "\\u003c");
    tags.push(`<script data-meta type="application/ld+json">${json}</script>`);
  }
  return tags.join("");
}

function render(template, options) {
  const { key, lang } = options;
  return template
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta(lang, key).title)}</title>`)
    .replace(/<(meta|link)\b[^>]*\bdata-meta\b[^>]*>/g, "")
    .replace(/<script data-meta[\s\S]*?<\/script>/g, "")
    .replace("</head>", `${headTags(options)}</head>`)
    .replace(NOSCRIPT[DEFAULT_LANG], NOSCRIPT[lang]);
}

function write(pagePath, html) {
  const target = pagePath === "/" ? path.join(BUILD, "index.html") : path.join(BUILD, pagePath.slice(1), "index.html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
  return path.relative(BUILD, target);
}

/** Lebensläufe nur verlinken, wenn die geprüften PDFs wirklich im Build liegen. */
function assertCvFiles() {
  for (const [id, person] of Object.entries(site.people)) {
    if (!person.cv) continue;
    for (const lang of LANGS) {
      const file = person.cv[lang];
      if (!file || !fs.existsSync(path.join(BUILD, file))) {
        throw new Error(`Lebenslauf fehlt: ${id} (${lang}) → ${file}. PDF nach public${file} legen oder "cv" in src/config/site.json auf null setzen.`);
      }
    }
  }
}

function main() {
  assertCvFiles();
  const templatePath = path.join(BUILD, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  if (!template.includes("data-meta")) throw new Error("build/index.html enthält keine data-meta-Tags – Template geändert?");

  const written = [];
  for (const route of routes) {
    const alternates = [["de", route.de], ["en", route.en], ["x-default", route[DEFAULT_LANG]]];
    for (const lang of LANGS) {
      const pagePath = route[lang];
      written.push(write(pagePath, render(template, { key: route.key, lang, pagePath, alternates })));
    }
  }

  // 404-Seite: liefert das Hosting für unbekannte Pfade mit HTTP 404 aus – nicht indexieren.
  // Die App erkennt die Sprache anschließend am Pfad (/en/… → Englisch).
  fs.writeFileSync(path.join(BUILD, "404.html"), render(template, { key: "notFound", lang: DEFAULT_LANG, noindex: true }));
  written.push("404.html");

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...routes.flatMap((route) =>
      LANGS.map((lang) =>
        [
          "  <url>",
          `    <loc>${url(route[lang])}</loc>`,
          `    <xhtml:link rel="alternate" hreflang="de" href="${url(route.de)}"/>`,
          `    <xhtml:link rel="alternate" hreflang="en" href="${url(route.en)}"/>`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(route[DEFAULT_LANG])}"/>`,
          "  </url>",
        ].join("\n")
      )
    ),
    "</urlset>",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(BUILD, "sitemap.xml"), sitemap);
  written.push("sitemap.xml");

  console.log(`postbuild: ${written.length} Dateien erzeugt\n  ${written.join("\n  ")}`);
}

main();
