import { Button } from "../components/ui/Button";
import { Eyebrow } from "../components/ui/SectionHead";
import { useLocale } from "../i18n/LocaleContext";
import { useDocumentMeta } from "../seo/useDocumentMeta";

export default function NotFoundPage() {
  useDocumentMeta("notFound");
  const { t, path } = useLocale();
  return (
    <div className="container not-found">
      <Eyebrow>{t("notFound.eyebrow")}</Eyebrow>
      <h1>{t("notFound.title")}</h1>
      <p>{t("notFound.body")}</p>
      <Button to={path("home")} icon="arrow">
        {t("notFound.cta")}
      </Button>
    </div>
  );
}
