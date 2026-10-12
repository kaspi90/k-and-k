import { useState } from "react";

import { CONTACT_EMAIL, mailto } from "../../config/site";
import { useLocale } from "../../i18n/LocaleContext";
import { Icon } from "../ui/Icon";
import { Eyebrow } from "../ui/SectionHead";

export function Contact() {
  const { t, list } = useLocale();
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };

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
        <button
          type="button"
          className="button"
          aria-expanded={optionsOpen}
          aria-controls="contact-options"
          onClick={() => {
            setOptionsOpen((open) => !open);
            setCopyState("idle");
          }}
        >
          <span>{t("contact.cta")}</span>
          <Icon name="mail" />
        </button>
        {optionsOpen && (
          <div className="contact-options" id="contact-options">
            <p>{t("contact.optionsTitle")}</p>
            <div className="contact-option-buttons">
              <a className="contact-option" href={mailto(t("contact.mailSubject"))}>
                {t("contact.openMail")}
              </a>
              <button type="button" className="contact-option" onClick={copyEmail}>
                {copyState === "copied" ? t("contact.copied") : t("contact.copyMail")}
              </button>
            </div>
            {copyState === "failed" && (
              <p className="contact-copy-status" role="status">
                {t("contact.copyFailed")}
              </p>
            )}
          </div>
        )}
        <a className="contact-mail" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
