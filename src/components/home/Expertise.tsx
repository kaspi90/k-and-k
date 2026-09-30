import { useLocale } from "../../i18n/LocaleContext";
import { SectionHead } from "../ui/SectionHead";

interface Group {
  title: string;
  items: string[];
}

export function Expertise() {
  const { t, list } = useLocale();
  return (
    <section className="section expertise container" id="expertise" aria-labelledby="expertise-title">
      <SectionHead id="expertise-title" label={t("expertise.eyebrow")} title={t("expertise.title")} />
      <div className="expertise-grid reveal">
        {list<Group>("expertise.groups").map((group, i) => (
          <article key={group.title}>
            <span className="index" aria-hidden="true">
              0{i + 1}
            </span>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
