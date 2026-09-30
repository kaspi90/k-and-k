import type { PersonId } from "../config/site";
import type { Theme } from "../theme/ThemeProvider";

import heikeDark480 from "../img/portraits/heike-dark-480.webp";
import heikeDark800 from "../img/portraits/heike-dark-800.webp";
import heikeDark1200 from "../img/portraits/heike-dark-1200.webp";
import heikeLight480 from "../img/portraits/heike-light-480.webp";
import heikeLight800 from "../img/portraits/heike-light-800.webp";
import heikeLight1200 from "../img/portraits/heike-light-1200.webp";
import erikDark480 from "../img/portraits/erik-dark-480.webp";
import erikDark800 from "../img/portraits/erik-dark-800.webp";
import erikDark1200 from "../img/portraits/erik-dark-1200.webp";
import erikLight480 from "../img/portraits/erik-light-480.webp";
import erikLight800 from "../img/portraits/erik-light-800.webp";
import erikLight1200 from "../img/portraits/erik-light-1200.webp";

/**
 * Freigestellte, einheitlich zugeschnittene Portraitserie (quadratisch,
 * gleiche Kopfgröße und Augenlinie) mit separatem Grading für Dark und Light
 * Mode. Hintergrund, Raster und Glow liefert CSS.
 */
type Variant = { src: string; srcSet: string };

const set = (s480: string, s800: string, s1200: string): Variant => ({
  src: s800,
  srcSet: `${s480} 480w, ${s800} 800w, ${s1200} 1200w`,
});

export const PORTRAIT_SIZE = 1200;

export const portraits: Record<PersonId, Record<Theme, Variant>> = {
  heike: {
    dark: set(heikeDark480, heikeDark800, heikeDark1200),
    light: set(heikeLight480, heikeLight800, heikeLight1200),
  },
  erik: {
    dark: set(erikDark480, erikDark800, erikDark1200),
    light: set(erikLight480, erikLight800, erikLight1200),
  },
};
