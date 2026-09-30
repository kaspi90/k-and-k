import { PEOPLE } from "../../config/site";
import { CaseStudy, caseStudies } from "../../content/caseStudies";
import { useLocale } from "../../i18n/LocaleContext";
import { SectionHead } from "../ui/SectionHead";

/**
 * Case-Study-Layout aus dem Figma-Entwurf. Wird nur gerendert, wenn echte,
 * freigegebene Projekte in src/content/caseStudies.ts eingetragen sind.
 */
function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const { t, lang } = useLocale();
  const rows: Array<[string, string]> = [
    [t("work.labels.challenge"), study.challenge[lang]],
    [t("work.labels.situation"), study.situation[lang]],
    [t("work.labels.role"), study.role[lang]],
    [t("work.labels.contributors"), study.contributors.map((id) => PEOPLE[id].name).join(" & ")],
    [t("work.labels.solution"), study.solution[lang]],
    [t("work.labels.technology"), study.technology.join(", ")],
    [t("work.labels.result"), study.result[lang]],
    [t("work.labels.impact"), study.impact[lang]],
  ];
  return (
    <article className={`case-study reveal ${index % 2 ? "case-alt" : ""}`}>
      <div className="case-copy">
        <div className="case-index">0{index + 1}</div>
        <h3>{study.title[lang]}</h3>
        <dl>
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <span className="led-by">{study.attribution[lang]}</span>
      </div>
      <div className="product-frame">
        <img src={study.visual.src} alt={study.visual.alt[lang]} width={study.visual.width} height={study.visual.height} loading="lazy" decoding="async" />
      </div>
    </article>
  );
}

export function Work() {
  const { t } = useLocale();
  if (caseStudies.length === 0) return null;
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHead id="work-title" label={t("work.eyebrow")} title={t("work.title")} body={t("work.body")} />
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </div>
    </section>
  );
}
