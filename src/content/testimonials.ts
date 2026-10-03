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
    id: "kristina-nettelbeck",
    about: "heike",
    name: "Kristina Nettelbeck",
    role: {
      de: "User Experience Design & Frontend Development",
      en: "User Experience Design & Frontend Development",
    },
    company: "meetago GmbH",
    quote: {
      de: "Von 2023 bis 2026 konnte ich mit Heike als Duo im Frontend-Team der meetago GmbH arbeiten und ich zähle diese Zeit zu den besten Erfahrungen meiner Laufbahn. Gleich zu Beginn hat sie eigenständig ein Mammutprojekt gestemmt: den Umbau eines großen Teils unserer Anwendung von Handlebars und Laravel Blade auf modernes React. Ins kalte Wasser geworfen, hat sie das souverän gemeistert, sich selbst organisiert und alles vorbildlich dokumentiert. Später hat sie außerdem die Testautomatisierung bei uns von Grund auf eingeführt, ein weiteres großes Projekt, das sie mit viel Engagement vorangetrieben und ebenso selbstständig organisiert hat. Heike beherrscht TypeScript, React und Next.js auf höchstem Niveau, hat ein herausragendes Auge für Design, setzt Mockups pixelgenau um und treibt das Frontend mit eigenen Ideen aktiv voran. Sie ist absolut verlässlich, geht immer die Extrameile und denkt mit, wo andere einfach abarbeiten würden. Menschlich ist sie genauso stark: Sie begegnet allen mit Wertschätzung, ob im Austausch mit dem PO oder im Code Review. Ihre Reviews waren voller kluger Impulse, und man konnte offen über alles diskutieren. Ihre Kolleginnen und Kollegen unterstützt sie mit viel Geduld und Hilfsbereitschaft, denn ihr Wissen hat sie nicht nur, sie gibt es auch großartig weiter. Falls das alles nach zu viel Lob klingt: Ich habe eher noch untertrieben. Ich würde jederzeit wieder sehr gerne mit ihr zusammenarbeiten.",
      en: "From 2023 to 2026, I had the opportunity to work with Heike as a two-person frontend team at meetago GmbH, and I count that time among the best experiences of my career. Right from the start, she independently tackled a mammoth project: migrating a large part of our application from Handlebars and Laravel Blade to modern React. Thrown in at the deep end, she handled it with confidence, organized herself and documented everything in an exemplary manner. Later, she also introduced test automation from the ground up—another major project that she drove forward with tremendous dedication and organized just as independently. Heike has an exceptional command of TypeScript, React and Next.js, has an outstanding eye for design, implements mockups with pixel-perfect precision and actively advances the frontend with her own ideas. She is absolutely reliable, always goes the extra mile and thinks ahead where others would simply work through tasks. She is just as strong on a personal level: she treats everyone with appreciation, whether in discussions with the PO or in code reviews. Her reviews were full of thoughtful insights, and everything could be discussed openly. She supports her colleagues with great patience and helpfulness; she not only possesses knowledge, but is also excellent at sharing it. If all of this sounds like too much praise: if anything, I have understated it. I would be very happy to work with her again at any time.",
    },
    url: "https://www.linkedin.com/in/kristina-net/details/recommendations/?detailScreenTabIndex=0",
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
