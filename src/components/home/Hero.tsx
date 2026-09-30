import { hasCaseStudies } from "../../content/caseStudies";
import { useLocale } from "../../i18n/LocaleContext";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/SectionHead";

/** Technische Visualisierung des Delivery-Ablaufs – rein dekorativ, Inhalt über aria-label. */
function SystemMap() {
  const { t, list } = useLocale();
  const steps = list("hero.mapSteps");
  return (
    <figure className="system-map" role="img" aria-label={t("a11y.workflow")}>
      <div className="system-top" aria-hidden="true">
        <span>{t("hero.mapTitle")}</span>
        <span className="live">
          <i /> {t("hero.mapStatus")}
        </span>
      </div>
      <div className="system-canvas" aria-hidden="true">
        {steps.map((step, i) => (
          <div className={`system-node node-${i}`} key={step}>
            <small>0{i + 1}</small>
            <b>{step}</b>
          </div>
        ))}
        <svg viewBox="0 0 650 330">
          <path d="M88 65H270Q300 65 300 95V140M360 65h110q30 0 30 30v45M85 250h145q30 0 30-30v-35M345 185v35q0 30 30 30h175" />
          <path d="M315 165h50" />
        </svg>
        <div className="cursor-label">{t("hero.mapHuman")}</div>
      </div>
    </figure>
  );
}

export function Hero() {
  const { t, list, section } = useLocale();
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-copy">
        <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
        <h1 id="hero-title">
          {t("hero.title")} <br className="hero-break" />
          {t("hero.titleLead")} <em>{t("hero.titleAccent")}</em>
        </h1>
        <p className="hero-ai">{t("hero.ai")}</p>
        <p className="hero-sub">{t("hero.sub")}</p>
        <div className="hero-actions">
          {hasCaseStudies && (
            <Button to={section("work")} icon="arrow">
              {t("hero.ctaWork")}
            </Button>
          )}
          <Button to={section("people")} variant={hasCaseStudies ? "secondary" : "primary"} icon={hasCaseStudies ? undefined : "arrow"}>
            {t("hero.ctaPeople")}
          </Button>
          <Button to={section("contact")} variant="secondary">
            {t("hero.ctaContact")}
          </Button>
        </div>
      </div>
      <SystemMap />
      <ul className="hero-proof">
        {list("hero.proof").map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
