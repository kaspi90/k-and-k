import { FEATURES, PEOPLE, PERSON_IDS, PersonId } from "../../config/site";
import { profiles } from "../../content/profiles";
import { useLocale } from "../../i18n/LocaleContext";
import { Portrait } from "../people/Portrait";
import { SocialLinks } from "../people/SocialLinks";
import { Button } from "../ui/Button";
import { SectionHead } from "../ui/SectionHead";

function ProfileCard({ person, index }: { person: PersonId; index: number }) {
  const { t, lang, path } = useLocale();
  const data = PEOPLE[person];
  const profile = profiles[person][lang];
  const titleId = `profile-${person}`;

  return (
    <article className={`profile-card reveal ${person}`} aria-labelledby={titleId}>
      <Portrait person={person} sizes="(max-width: 1000px) 92vw, 620px" />
      <div className="profile-copy">
        <div className="profile-number" aria-hidden="true">
          0{index + 1} / 02
        </div>
        <h3 id={titleId}>{data.name}</h3>
        <p className="role">{profile.role}</p>
        <p className="profile-background">
          <span className="profile-background-label">{t("people.background")}</span>
          {profile.background}
        </p>
        <ul className="chips">
          {profile.skills.slice(0, 3).map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <p className="availability">
          <span className="availability-dot" aria-hidden="true" />
          {t("people.availability")}
        </p>
        <div className="profile-actions">
          {FEATURES.profilePages && (
            <Button to={path(person)} icon="arrow">
              {t("people.viewProfile")}
              <span className="sr-only">: {data.name}</span>
            </Button>
          )}
        </div>
        <SocialLinks person={person} withCv />
      </div>
    </article>
  );
}

export function People() {
  const { t } = useLocale();
  return (
    <section className="section people container" id="people" aria-labelledby="people-title">
      <SectionHead id="people-title" label={t("people.eyebrow")} title={t("people.title")} body={t("people.body")} />
      <div className="profiles">
        {PERSON_IDS.map((person, index) => (
          <ProfileCard key={person} person={person} index={index} />
        ))}
      </div>
    </section>
  );
}
