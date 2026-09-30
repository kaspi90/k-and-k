import { useLocale } from "../../i18n/LocaleContext";
import { Eyebrow, SectionHead } from "../ui/SectionHead";

interface Item {
  title: string;
  text: string;
}

/** Drei Kernleistungen mit einer kompakten Zusammenarbeitszeile. */
export function Services() {
  const { t, list } = useLocale();
  const services = list<Item>("services.items");
  const models = list<Item>("collaboration.items");

  return (
    <section className="section services container" id="services" aria-labelledby="services-title">
      <SectionHead id="services-title" label={t("services.eyebrow")} title={t("services.title")} body={t("services.body")} />
      <ul className="service-grid reveal">
        {services.map((item, i) => (
          <li key={item.title}>
            <span className="index" aria-hidden="true">
              0{i + 1}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>

      <aside className="collaboration-compact reveal" aria-labelledby="collaboration-title">
        <div>
          <Eyebrow>{t("collaboration.eyebrow")}</Eyebrow>
          <h3 id="collaboration-title">{t("collaboration.statement")}</h3>
        </div>
        <ul>
          {models.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
