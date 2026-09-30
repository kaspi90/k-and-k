import fs from "fs";
import path from "path";

import en from "../translations/en/translation.json";
import de from "../translations/de/translation.json";
import site from "../config/site.json";
import { caseStudies } from "./caseStudies";
import { imprint, privacy } from "./legal";
import { profiles } from "./profiles";
import { testimonials } from "./testimonials";

const FORBIDDEN = /content required|asset required|attribution pending|to be confirmed|content pending|placeholder|lorem ipsum|\bTODO\b|to verify|information required|\bpending\b/i;

function keys(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) return value.flatMap((item, i) => keys(item, `${prefix}[${i}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) => keys(child, prefix ? `${prefix}.${key}` : key));
  }
  return [prefix];
}

function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

test("englische und deutsche Übersetzung haben dieselbe Struktur", () => {
  expect(keys(de)).toEqual(keys(en));
});

test("öffentliche Inhalte enthalten keine Platzhalter oder internen Hinweise", () => {
  const all = strings([en, de, profiles, testimonials, imprint, privacy, caseStudies]);
  const hits = all.filter((text) => FORBIDDEN.test(text));
  expect(hits).toEqual([]);
});

test("deutsche Texte: kein Freelance-Team, keine Setup-Floskeln oder unbelegten Versprechen", () => {
  const german = strings([de, profiles.heike.de, profiles.erik.de]).join("\n");
  expect(german).not.toMatch(/Freelance-Team|Setup|messbar|uns beide|eingespieltes Team|einzeln oder gemeinsam/i);
  expect(strings(de.meta).join(" ")).toMatch(/selbstständig/i);
});

test("Positionierung bietet Heike und Erik nicht als gemeinsames Team an", () => {
  const english = strings(en).join("\n");
  expect(english).not.toMatch(/both of us|as one team|individually or together/i);
});

test("Zeiträume sind einheitlich geschrieben", () => {
  const periods = (["heike", "erik"] as const).flatMap((id) =>
    (["de", "en"] as const).flatMap((lang) => [...profiles[id][lang].experience, ...profiles[id][lang].education].map((e) => e.period))
  );
  for (const period of periods) expect(period).toMatch(/^(Seit|Since)( (Mai|May))? \d{4}$|^\d{4}(–\d{4})?$/);
});

test("Lebensläufe: nur geprüfte PDFs unter /cv/ mit festem Namensschema, Dateien müssen existieren", () => {
  for (const [id, person] of Object.entries(site.people) as Array<[string, { cv: Record<string, string> | null }]>) {
    if (!person.cv) continue;
    for (const lang of ["de", "en"]) {
      expect(person.cv[lang]).toBe(`/cv/${id}-kasper-cv-${lang}.pdf`);
      expect(fs.existsSync(path.join(__dirname, "../../public", person.cv[lang]))).toBe(true);
    }
  }
});

test("Energie- und Gebäudebezug nur bei Heike, keine Energieberatung als Leistung", () => {
  const heike = strings([profiles.heike.de, profiles.heike.en]).join(" ");
  const erik = strings([profiles.erik.de, profiles.erik.en]).join(" ");
  expect(heike).toMatch(/Energieeffizienz/);
  expect(heike).toMatch(/Digitale Lösungen für Gebäude und Energie/);
  expect(erik).not.toMatch(/Energie|energy|Gebäude|building/i);
  const everything = strings([en, de, profiles, testimonials]).join(" ");
  expect(everything).not.toMatch(/Energieberat|energy consult|energy advis/i);
});

test("Instagram ist nur für Heike vorgesehen", () => {
  expect("instagram" in site.people.erik).toBe(false);
});

test("beide Profile sind vergleichbar lang", () => {
  for (const lang of ["en", "de"] as const) {
    const heike = profiles.heike[lang].bio.length;
    const erik = profiles.erik[lang].bio.length;
    expect(Math.abs(heike - erik) / Math.max(heike, erik)).toBeLessThan(0.15);
    expect(profiles.heike[lang].skills).toHaveLength(profiles.erik[lang].skills.length);
  }
});

test("Konfiguration trennt gemeinsame und persönliche E-Mail-Adressen", () => {
  expect(site.email).toBe("kontakt@k-and-k.codes");
  expect(site.people.heike.email).toBe("heike@k-and-k.codes");
  expect(site.people.erik.email).toBe("erik@k-and-k.codes");
  for (const person of Object.values(site.people)) {
    expect(person.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\/[\w-]+$/);
  }
  const githubs = Object.values(site.people)
    .map((person) => ("github" in person ? person.github : undefined))
    .filter((value): value is string => Boolean(value));
  expect(githubs).toHaveLength(1);
  for (const github of githubs) expect(github).toMatch(/^https:\/\/github\.com\/[\w-]+$/);
  expect(site.people.heike.instagram).toBe("https://www.instagram.com/fromplanstopixels/");
  expect("github" in site.people.erik).toBe(false);
});

test("Kundenstimmen verlinken auf die Originale bei LinkedIn", () => {
  for (const item of testimonials) {
    expect(item.url).toMatch(/^https:\/\/www\.linkedin\.com\/in\/.+\/details\/recommendations\//);
    expect(item.quote.de.length).toBeGreaterThan(40);
    expect(item.quote.en.length).toBeGreaterThan(40);
  }
});
