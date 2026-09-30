import type { Lang, PersonId } from "../config/site";

/**
 * Case Studies werden nur veröffentlicht, wenn Inhalte, Attribution und
 * Visualisierungen verifiziert und – falls nötig – vom Auftraggeber freigegeben
 * sind. Solange diese Liste leer ist, bleiben der Bereich „Selected Work“,
 * der Navigationslink und der Hero-CTA „View our work“ automatisch verborgen.
 *
 * Offene Punkte: docs/CONTENT-TODO.md
 */
export interface CaseStudy {
  id: string;
  /** Wer hat beigetragen? Muss bestätigt sein. */
  contributors: PersonId[];
  /** Freigegebener Projekttitel oder anonymisierte Beschreibung. */
  title: Record<Lang, string>;
  challenge: Record<Lang, string>;
  situation: Record<Lang, string>;
  role: Record<Lang, string>;
  solution: Record<Lang, string>;
  technology: string[];
  result: Record<Lang, string>;
  /** Überprüfbare Wirkung – keine erfundenen Kennzahlen. */
  impact: Record<Lang, string>;
  /** Freigegebener Screenshot oder anonymisierte Visualisierung. */
  visual: { src: string; alt: Record<Lang, string>; width: number; height: number };
  /** Bestätigte Attribution, z. B. „Mit Freigabe von …“. */
  attribution: Record<Lang, string>;
}

export const caseStudies: CaseStudy[] = [];

export const hasCaseStudies = caseStudies.length > 0;
