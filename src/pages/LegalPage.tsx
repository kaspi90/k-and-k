import { Link } from "react-router-dom";

import { Eyebrow } from "../components/ui/SectionHead";
import { CONTACT_EMAIL, pathFor } from "../config/site";
import { imprint, LegalBlock, privacy } from "../content/legal";
import { useLocale } from "../i18n/LocaleContext";
import { useDocumentMeta } from "../seo/useDocumentMeta";

function Line({ text }: { text: string }) {
  if (!text.includes(CONTACT_EMAIL)) return <>{text}</>;
  const [before, after] = text.split(CONTACT_EMAIL);
  return (
    <>
      {before}
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      {after}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  return (
    <section>
      <h2>{block.title}</h2>
      {block.paragraphs.map((paragraph, i) =>
        Array.isArray(paragraph) ? (
          <p key={i}>
            {paragraph.map((line, j) => (
              <span key={j} className="legal-line">
                <Line text={line} />
              </span>
            ))}
          </p>
        ) : (
          <p key={i}>
            <Line text={paragraph} />
          </p>
        )
      )}
    </section>
  );
}

export default function LegalPage({ type }: { type: "imprint" | "privacy" }) {
  useDocumentMeta(type);
  const { t, lang } = useLocale();
  const blocks = (type === "imprint" ? imprint : privacy)[lang];

  return (
    <div className="container legal-content">
      <Eyebrow>{t("legal.eyebrow")}</Eyebrow>
      <h1>{t(`meta.${type}.title`).split(" | ")[0]}</h1>
      {lang !== "de" && (
        <p className="legal-note">
          {t("legal.translationNote")}{" "}
          <Link to={pathFor(type, "de")} hrefLang="de" lang="de">
            {type === "imprint" ? "Impressum" : "Datenschutzerklärung"}
          </Link>
        </p>
      )}
      {blocks.map((block) => (
        <Block key={block.title} block={block} />
      ))}
    </div>
  );
}
