import type { Lang, PersonId } from "../config/site";

/**
 * Manuell gepflegte Empfehlungen von LinkedIn – Originaltexte unverändert (Deutsch),
 * englische Fassung als sorgfältige Übersetzung. Namen, Rollen und Unternehmen
 * wie auf der bisherigen Website. Freigabe zur Wiederveröffentlichung:
 * siehe docs/CONTENT-TODO.md.
 */
export interface Testimonial {
  id: string;
  about: PersonId;
  name: string;
  role: Record<Lang, string>;
  company: string;
  quote: Record<Lang, string>;
  /** Link zur Originalempfehlung auf LinkedIn */
  url: string;
}

const HEIKE_RECOMMENDATIONS =
  "https://www.linkedin.com/in/heike-kasper-aa8162a9/details/recommendations/?detailScreenTabIndex=0";
const ERIK_RECOMMENDATIONS =
  "https://www.linkedin.com/in/erik-k-210a54a6/details/recommendations/?detailScreenTabIndex=0";

// Reihenfolge so gewählt, dass die zwei Spalten auf Desktop ähnlich lang sind.
export const testimonials: Testimonial[] = [
  {
    id: "igor-shelkovenkov",
    about: "heike",
    name: "Igor Shelkovenkov",
    role: { de: "CEO und Founder", en: "CEO and Founder" },
    company: "TopieT GmbH",
    quote: {
      de: "Ich hatte das Vergnügen, ein Jahr lang eng mit Heike Kasper zusammenzuarbeiten, und kann bestätigen, dass sie eine herausragende React-Entwicklerin ist. Heike hat eine beeindruckende Fähigkeit, sich schnell in komplexe Themen einzuarbeiten und stets professionelle und hochwertige Arbeit zu liefern. Sie hat immer die Erwartungen erfüllt und oft sogar übertroffen. Technisch gesehen ist ihr Verständnis und ihre Anwendung von React beeindruckend und hat in unseren Projekten einen signifikanten Unterschied gemacht. Kurz gesagt, Heike ist eine kompetente, zuverlässige und äußerst fähige Entwicklerin. Ich kann sie uneingeschränkt empfehlen und bin überzeugt, dass sie in jedem Team einen wertvollen Beitrag leisten wird.",
      en: "I had the pleasure of working closely with Heike Kasper for a year and can confirm that she is an outstanding React developer. Heike has an impressive ability to get to grips with complex topics quickly and to consistently deliver professional, high-quality work. She always met expectations and often even exceeded them. Technically, her understanding and application of React are impressive and made a significant difference in our projects. In short, Heike is a competent, reliable and extremely capable developer. I can recommend her without reservation and am convinced that she will make a valuable contribution to any team.",
    },
    url: HEIKE_RECOMMENDATIONS,
  },
  {
    id: "pouya-mesdaghi",
    about: "heike",
    name: "Pouya Mesdaghi",
    role: { de: "Product Owner", en: "Product Owner" },
    company: "meetago",
    quote: {
      de: "Ich durfte über drei Jahre als Product Owner eng mit Heike zusammenarbeiten und habe sowohl ihre fachliche Kompetenz als auch die Zusammenarbeit mit ihr sehr geschätzt. Heike gehört zu den Entwicklerinnen, die Anforderungen sehr schnell verstehen, zuverlässig und lösungsorientiert umsetzen und dabei auch über die eigentliche Anforderung hinausdenken. Besonders geschätzt habe ich, dass sie regelmäßig eigene Ideen und alternative Lösungsansätze eingebracht hat. Ihre hohe Zuverlässigkeit, ihre ausgeprägte Fachkompetenz und ihre lösungsorientierte Arbeitsweise haben unsere Zusammenarbeit für mich besonders wertvoll gemacht. Auch den direkten Austausch mit Heike habe ich immer sehr geschätzt. Unsere Gespräche waren produktiv, unkompliziert und auf Augenhöhe. Selbst bei komplexen Herausforderungen hatte sie stets ein offenes Ohr und hat aktiv dazu beigetragen, gemeinsam eine gute Lösung zu finden. Genau diese Art der Zusammenarbeit hat nicht nur zu guten Ergebnissen geführt, sondern auch dafür gesorgt, dass die gemeinsame Arbeit wirklich Spaß gemacht hat. Auch menschlich schätze ich Heike sehr. Sie ist offen, höflich, hilfsbereit und eine Kollegin, auf die man sich jederzeit verlassen kann. Ich würde jederzeit wieder sehr gerne mit Heike zusammenarbeiten und kann sie sowohl fachlich als auch menschlich uneingeschränkt empfehlen. 🙏🏽",
      en: "I had the opportunity to work closely with Heike for more than three years as Product Owner, and I greatly valued both her professional expertise and our collaboration. Heike is one of those developers who understands requirements very quickly, implements them reliably and with a solution-oriented mindset, and thinks beyond the immediate request. I particularly appreciated that she regularly contributed her own ideas and alternative approaches. Her exceptional reliability, strong technical expertise and solution-oriented way of working made our collaboration especially valuable to me. I also always appreciated the direct exchange with Heike. Our conversations were productive, straightforward and on equal terms. Even when facing complex challenges, she was always open to discussion and actively helped us find a good solution together. This way of working not only led to strong results, but also made our collaboration genuinely enjoyable. I also value Heike greatly as a person. She is open, courteous and helpful, and she is a colleague you can always rely on. I would be very happy to work with Heike again at any time and can recommend her without reservation, both professionally and personally. 🙏🏽",
    },
    url: HEIKE_RECOMMENDATIONS,
  },
  {
    id: "michael-zsilla",
    about: "erik",
    name: "Michael Zsilla",
    role: { de: "IT-Projektmanager", en: "IT Project Manager" },
    company: "Terra-Codes GmbH",
    quote: {
      de: "Erik hat sehr gute Kenntnisse in verschiedenen Webtechnologien und kann diese auch sehr produktiv umsetzen. Die Zusammenarbeit bei verschiedenen Projekten war jedes mal top!",
      en: "Erik has very good knowledge of various web technologies and is able to apply it very productively. Working together on various projects was excellent every time!",
    },
    url: ERIK_RECOMMENDATIONS,
  },
  {
    id: "sebastian-heinl",
    about: "erik",
    name: "Sebastian Heinl",
    role: { de: "Unternehmensinhaber", en: "Business owner" },
    company: "Webprojaggt GmbH & Co. KG",
    quote: {
      de: "Ich möchte mich bei Erik für die ausgezeichnete Zusammenarbeit bedanken. Erik hat uns bei der Auswahl der Frontend-Technologien (Next.js, Tailwind und i18n), dem Aufsetzen des Projekts sowie bei der Entwicklung tatkräftig unterstützt. Wir würden uns freuen, auch bei zukünftigen Projekten auf die Expertise von Erik zurückgreifen zu können.",
      en: "I would like to thank Erik for the excellent collaboration. Erik actively supported us in selecting the frontend technologies (Next.js, Tailwind and i18n), setting up the project and during development. We would be glad to draw on Erik’s expertise in future projects as well.",
    },
    url: ERIK_RECOMMENDATIONS,
  },
  {
    id: "kia-kahawa",
    about: "erik",
    name: "Kia Kahawa",
    role: { de: "Geschäftsführerin", en: "Managing Director" },
    company: "Kia Kahawa – Verlagsdienstleistungen",
    quote: {
      de: "Mit Erik zusammenzuarbeiten ist immer wieder eine angenehme Erfahrung. Kurze Kommunikationswege, agile Absprachen, wenn es notwendig ist, und als Basis funktioniert auch die zuverlässige Arbeit an langatmigen Projekten. Ich habe mit Erik nun schon einige Aufträge über mehrere Jahre durch und würde jederzeit zurückkommen, wenn es um kluge Websites geht.",
      en: "Working with Erik is always a pleasant experience. Short lines of communication, agile arrangements when needed – and, as the foundation, reliable work on long-running projects as well. I have now completed several assignments with Erik over a number of years and would come back at any time when it comes to smart websites.",
    },
    url: ERIK_RECOMMENDATIONS,
  },
];
