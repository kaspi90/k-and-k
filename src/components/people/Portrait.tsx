import { PEOPLE, PersonId } from "../../config/site";
import { PORTRAIT_SIZE, portraits } from "../../content/portraits";
import { useLocale } from "../../i18n/LocaleContext";
import { useTheme } from "../../theme/ThemeProvider";

interface PortraitProps {
  person: PersonId;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/**
 * Portrait auf technischem Hintergrund (Raster, Glow, Korn aus CSS).
 * Das freigestellte Bild wechselt passend zum Theme zwischen Dark- und Light-Grading.
 */
export function Portrait({ person, sizes, priority = false, className = "" }: PortraitProps) {
  const { theme } = useTheme();
  const { t } = useLocale();
  const image = portraits[person][theme];
  return (
    <div className={`portrait portrait-${person} ${className}`}>
      <div className="portrait-backdrop" aria-hidden="true" />
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={sizes}
        width={PORTRAIT_SIZE}
        height={PORTRAIT_SIZE}
        alt={t("a11y.portrait", { name: PEOPLE[person].name })}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      <div className="portrait-fade" aria-hidden="true" />
      <div className="portrait-caption" aria-hidden="true">
        <span>k&amp;k / people</span>
        <b>{PEOPLE[person].initials}</b>
      </div>
    </div>
  );
}
