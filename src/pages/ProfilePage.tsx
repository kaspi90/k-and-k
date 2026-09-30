import { Link } from "react-router-dom";

import { Portrait } from "../components/people/Portrait";
import { SocialLinks } from "../components/people/SocialLinks";
import { Button } from "../components/ui/Button";
import { Eyebrow } from "../components/ui/SectionHead";
import { mailto, PEOPLE, PersonId } from "../config/site";
import { profiles, TimelineEntry } from "../content/profiles";
import { useLocale } from "../i18n/LocaleContext";
import { useDocumentMeta } from "../seo/useDocumentMeta";

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="timeline">
      {entries.map((entry) => (
        <li key={`${entry.period}-${entry.title}`}>
          <span className="timeline-period">{entry.period}</span>
          <div>
            <h3>{entry.title}</h3>
            <p className="timeline-org">{entry.org}</p>
            <p>{entry.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ProfilePage({ person }: { person: PersonId }) {
  useDocumentMeta(person);
  const { t, lang, section } = useLocale();
  const data = PEOPLE[person];
  const profile = profiles[person][lang];

  return (
    <div className={`profile-page container ${person}`}>
      <Link className="back-link" to={section("people")}>
        <span aria-hidden="true">←</span> {t("profile.back")}
      </Link>

      <div className="profile-hero">
        <Portrait person={person} sizes="(max-width: 1000px) 92vw, 500px" priority className="portrait-large" />
        <div className="profile-intro">
          <Eyebrow>{profile.eyebrow}</Eyebrow>
          <h1>{data.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="profile-status">
            <span className="availability-dot" aria-hidden="true" />
            {t("profile.status")}
          </p>
          {profile.lead.map((paragraph) => (
            <p className="profile-lead" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="profile-actions">
            <Button href={mailto(t("profile.mailSubject", { name: data.name }), data.email)} icon="mail">
              {t("profile.contact")}
            </Button>
            {data.cv && (
              <Button href={data.cv[lang]} variant="secondary" icon="download" download>
                {t("people.cv")}
                <span className="sr-only">: {data.name}</span>
              </Button>
            )}
          </div>
          <SocialLinks person={person} />
        </div>
      </div>

      <div className="profile-detail-grid">
        <section aria-labelledby="focus-title">
          <h2 id="focus-title">{t("profile.focus")}</h2>
          <ul className="plain-list">
            {profile.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="approach-title">
          <h2 id="approach-title">{t("profile.approach", { name: data.givenName })}</h2>
          {profile.approach.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <section aria-labelledby="experience-title" className="span-2">
          <h2 id="experience-title">{profile.experienceLabel ?? t("profile.experience")}</h2>
          <Timeline entries={profile.experience} />
        </section>
        <section aria-labelledby="education-title" className="span-2">
          <h2 id="education-title">{t("profile.education")}</h2>
          <Timeline entries={profile.education} />
        </section>
        <section aria-labelledby="tech-title" className="span-2">
          <h2 id="tech-title">{t("profile.technologies")}</h2>
          <ul className="chips">
            {profile.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
