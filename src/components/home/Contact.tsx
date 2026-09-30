import { CONTACT_EMAIL, mailto } from "../../config/site";
import { useLocale } from "../../i18n/LocaleContext";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/SectionHead";

export function Contact() {
  const { t, list } = useLocale();
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-inner reveal">
        <Eyebrow>{t("contact.eyebrow")}</Eyebrow>
        <h2 id="contact-title">
          {t("contact.title")} <br />
          <em>{t("contact.titleAccent")}</em>
        </h2>
        <p className="contact-sub">{t("contact.sub")}</p>
        <p className="contact-direct">{t("contact.direct")}</p>
        <ul className="contact-topics">
          {list("contact.topics").map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
        <Button href={mailto(t("contact.mailSubject"))} icon="mail">
          {t("contact.cta")}
        </Button>
        <a className="contact-mail" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
