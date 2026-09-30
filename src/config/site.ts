import site from "./site.json";
import routes from "./routes.json";

export type Lang = "de" | "en";
export type PersonId = "heike" | "erik";
export type RouteKey = "home" | "heike" | "erik" | "imprint" | "privacy";

export interface PersonLinks {
  name: string;
  givenName: string;
  initials: string;
  email: string;
  linkedin: string;
  github?: string;
  /**
   * Nur für Heike („From Plans to Pixels“) und nur mit bestätigter URL –
   * `null` bzw. fehlend blendet den Link vollständig aus.
   */
  instagram?: string | null;
  /** Nur geprüfte, vollständige CVs verlinken – `null` blendet Downloads aus. */
  cv: Record<Lang, string> | null;
}

/** Deutsch ist die Hauptsprache (ohne Präfix), Englisch liegt unter /en. */
export const LANGS: Lang[] = ["de", "en"];
export const DEFAULT_LANG: Lang = "de";

export const SITE_URL: string = site.siteUrl;
export const BRAND_NAME: string = site.brandName;
export const CONTACT_EMAIL: string = site.email;
export const FEATURES = site.features;
export const PEOPLE = site.people as Record<PersonId, PersonLinks>;
export const PERSON_IDS: PersonId[] = ["heike", "erik"];

interface RouteDef {
  key: RouteKey;
  de: string;
  en: string;
  feature?: keyof typeof FEATURES;
}

export const ROUTES = (routes as RouteDef[]).filter(
  (route) => !route.feature || FEATURES[route.feature]
);

export function pathFor(key: RouteKey, lang: Lang): string {
  const route = ROUTES.find((r) => r.key === key);
  if (!route) return lang === "en" ? "/en" : "/";
  return route[lang];
}

export function routeKeyForPath(pathname: string): RouteKey | undefined {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const match = ROUTES.find((r) => r.de === normalized || r.en === normalized);
  return match?.key;
}

export function langForPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

/** Instagram gehört ausschließlich zu Heike und erscheint nur mit bestätigter URL. */
export function instagramFor(person: PersonId): string | null {
  return person === "heike" ? PEOPLE.heike.instagram ?? null : null;
}

/**
 * Frühere Adressen → neue Adressen (dauerhafte Weiterleitung).
 * Dieselbe Tabelle steht für das Hosting in vercel.json.
 */
export function legacyRedirect(pathname: string): string | null {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  if (normalized === "/de") return "/";
  if (normalized.startsWith("/de/")) return normalized.slice(3);
  if (normalized === "/legal-notice") return "/en/legal-notice";
  if (normalized === "/privacy") return "/en/privacy";
  return null;
}

export function mailto(subject: string, recipient = CONTACT_EMAIL): string {
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
}
