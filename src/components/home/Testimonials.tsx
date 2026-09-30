import { PEOPLE } from "../../config/site";
import { testimonials } from "../../content/testimonials";
import { useLocale } from "../../i18n/LocaleContext";
import { Icon } from "../ui/Icon";
import { SectionHead } from "../ui/SectionHead";

export function Testimonials() {
  const { t, lang } = useLocale();
  return (
    <section className="section testimonials container" id="references" aria-labelledby="references-title">
      <SectionHead id="references-title" label={t("testimonials.eyebrow")} title={t("testimonials.title")} body={t("testimonials.body")} />
      <ul className="testimonial-grid">
        {testimonials.map((item) => (
          <li key={item.id} className={`testimonial testimonial-${item.about} reveal`}>
            <details open>
              <summary>
                <span className="avatar" aria-hidden="true">
                  {item.name.slice(0, 1)}
                </span>
                <span className="testimonial-person">
                  <small>{t("testimonials.about", { name: PEOPLE[item.about].givenName })}</small>
                  <b>{item.name}</b>
                  <span>
                    {item.role[lang]} · {item.company}
                  </span>
                </span>
                <span className="testimonial-toggle" aria-hidden="true" />
              </summary>
              <div className="testimonial-content">
                <blockquote lang={lang}>
                  <p>{lang === "de" ? `„${item.quote.de}“` : `“${item.quote.en}”`}</p>
                </blockquote>
                {lang !== "de" && <p className="testimonial-note">{t("testimonials.translated")}</p>}
                <a className="testimonial-source" href={item.url} target="_blank" rel="noopener noreferrer">
                  {t("testimonials.original")}
                  <Icon name="external" />
                  <span className="sr-only">
                    {" "}
                    – {item.name} ({t("a11y.newTab")})
                  </span>
                </a>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
