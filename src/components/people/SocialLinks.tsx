import { instagramFor, PEOPLE, PersonId } from "../../config/site";
import { useLocale } from "../../i18n/LocaleContext";
import { Icon, IconName } from "../ui/Icon";

/**
 * Persönliche Profile – Instagram nur bei Heike und nur mit bestätigter URL,
 * Lebenslauf nur, wenn geprüfte PDFs in src/config/site.json eingetragen sind.
 */
export function SocialLinks({ person, withCv = false }: { person: PersonId; withCv?: boolean }) {
  const { t, lang } = useLocale();
  const data = PEOPLE[person];
  const links: Array<{ icon: IconName; label: string; href: string; external?: boolean }> = [
    { icon: "mail", label: data.email, href: `mailto:${data.email}` },
    { icon: "linkedin", label: "LinkedIn", href: data.linkedin, external: true },
  ];
  if (data.github) links.push({ icon: "github", label: "GitHub", href: data.github, external: true });
  const instagram = instagramFor(person);
  if (instagram) links.push({ icon: "instagram", label: t("people.instagram"), href: instagram, external: true });

  const cv = withCv && data.cv ? data.cv[lang] : null;

  return (
    <ul className="socials" aria-label={t("people.profilesOf", { name: data.name })}>
      {links.map((link) => (
        <li key={link.icon}>
          <a href={link.href} target={link.external ? "_blank" : undefined} rel="noopener noreferrer">
            <Icon name={link.icon} />
            <span>{link.label}</span>
            {link.external && <span className="sr-only"> ({t("a11y.newTab")})</span>}
          </a>
        </li>
      ))}
      {cv && (
        <li>
          <a href={cv} download type="application/pdf" hrefLang={lang}>
            <Icon name="download" />
            <span>{t("people.cvLink")}</span>
            <span className="sr-only">: {data.name}</span>
          </a>
        </li>
      )}
    </ul>
  );
}
