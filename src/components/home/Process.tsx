import { useLocale } from "../../i18n/LocaleContext";
import { SectionHead } from "../ui/SectionHead";

interface Step {
  title: string;
  text: string;
  tag: "" | "ai" | "human";
}

/** Gemeinsamer Prozess inklusive KI – ersetzt die früheren Bereiche „AI-assisted Development“ und „How we work“. */
export function Process() {
  const { t, list } = useLocale();
  const steps = list<Step>("process.steps");

  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead id="process-title" label={t("process.eyebrow")} title={t("process.title")} body={t("process.body")}>
          <p className="process-statement">{t("process.statement")}</p>
        </SectionHead>
        <ol className="workflow reveal">
          {steps.map((step, i) => (
            <li className="workflow-item" key={step.title}>
              <span className="index" aria-hidden="true">
                0{i + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {step.tag && (
                  <span className={`step-tag step-tag-${step.tag}`}>
                    <i aria-hidden="true" />
                    {step.tag === "ai" ? t("process.tagAi") : t("process.tagHuman")}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
        <div className="ai-cards">
          <article className="ai-card helps reveal">
            <span className="card-tag">{t("process.helpsTag")}</span>
            <h3>{t("process.helpsTitle")}</h3>
            <ul className="word-list">
              {list("process.helps").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="ai-card human reveal">
            <span className="card-tag">{t("process.humanTag")}</span>
            <h3>{t("process.humanTitle")}</h3>
            <ul className="word-list">
              {list("process.human").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
