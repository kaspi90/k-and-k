import { CONTACT_EMAIL, Lang } from "../config/site";

/**
 * Rechtstexte.
 *
 * Anbieterangaben stammen aus dem bisherigen Impressum der Website.
 * Vor Veröffentlichung rechtlich prüfen – offene Punkte (u. a. Registereintrag,
 * vertretungsberechtigte Geschäftsführung, Hosting-Details) stehen in
 * docs/CONTENT-TODO.md. Keine Prüfhinweise auf der öffentlichen Seite ausgeben.
 */
export interface LegalBlock {
  title: string;
  /** Zeilen eines Absatzes; `mail` wird als E-Mail-Link ausgegeben */
  paragraphs: Array<string | string[]>;
}

export const PROVIDER = {
  company: "Kadelo GmbH",
  street: "Grafenberger Allee 277–287",
  city: "40237 Düsseldorf",
  country: { de: "Deutschland", en: "Germany" },
  phone: "0211 436912303",
  vatId: "DE323782550",
  responsible: "Heike Kasper & Erik Kasper",
};

const address = (lang: Lang) => [PROVIDER.company, PROVIDER.street, PROVIDER.city, PROVIDER.country[lang]];

export const imprint: Record<Lang, LegalBlock[]> = {
  de: [
    { title: "Angaben gemäß § 5 DDG", paragraphs: [address("de")] },
    { title: "Kontakt", paragraphs: [[`Telefon: ${PROVIDER.phone}`, `E-Mail: ${CONTACT_EMAIL}`]] },
    { title: "Umsatzsteuer-Identifikationsnummer", paragraphs: [[`gemäß § 27a Umsatzsteuergesetz: ${PROVIDER.vatId}`]] },
    {
      title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      paragraphs: [[PROVIDER.responsible, ...address("de")]],
    },
  ],
  en: [
    { title: "Information pursuant to Section 5 DDG", paragraphs: [address("en")] },
    { title: "Contact", paragraphs: [[`Phone: +49 211 436912303`, `Email: ${CONTACT_EMAIL}`]] },
    { title: "VAT identification number", paragraphs: [[`pursuant to Section 27a of the German VAT Act: ${PROVIDER.vatId}`]] },
    {
      title: "Responsible for content pursuant to Section 18 (2) MStV",
      paragraphs: [[PROVIDER.responsible, ...address("en")]],
    },
  ],
};

export const privacy: Record<Lang, LegalBlock[]> = {
  de: [
    {
      title: "Verantwortliche Stelle",
      paragraphs: [
        "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
        [...address("de"), `E-Mail: ${CONTACT_EMAIL}`],
      ],
    },
    {
      title: "Datenschutz auf einen Blick",
      paragraphs: [
        "Diese Website informiert über die Leistungen von Heike Kasper und Erik Kasper unter der Marke k-and-k.codes. Wir setzen keine Cookies, keine Analyse- oder Tracking-Werkzeuge und keine Social-Media-Plugins ein. Personenbezogene Daten verarbeiten wir nur, soweit dies für die technische Bereitstellung der Website erforderlich ist oder Sie uns per E-Mail kontaktieren.",
      ],
    },
    {
      title: "Hosting und Server-Logdateien",
      paragraphs: [
        "Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf der Website verarbeitet der Hosting-Anbieter automatisch technisch erforderliche Informationen, die Ihr Browser übermittelt – insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL sowie Browser und Betriebssystem. Die Verarbeitung dient der sicheren und fehlerfreien Auslieferung der Website und erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Dabei kann eine Übermittlung von Daten in die USA stattfinden.",
      ],
    },
    {
      title: "Kontakt per E-Mail",
      paragraphs: [
        "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, andernfalls Art. 6 Abs. 1 lit. f DSGVO. Ihre Daten löschen wir, sobald sie für diesen Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      ],
    },
    {
      title: "Lokale Speicherung der Darstellung",
      paragraphs: [
        "Wenn Sie zwischen hellem und dunklem Modus wechseln, speichern wir diese Auswahl im lokalen Speicher (Local Storage) Ihres Browsers. Die Information verbleibt auf Ihrem Gerät, wird nicht an uns übermittelt und ist für die von Ihnen gewünschte Funktion unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Sie können sie jederzeit über die Einstellungen Ihres Browsers löschen.",
      ],
    },
    {
      title: "Schriftarten",
      paragraphs: [
        "Die verwendeten Schriftarten werden direkt von unserem Server ausgeliefert. Eine Verbindung zu Servern Dritter, etwa Google, findet dafür nicht statt.",
      ],
    },
    {
      title: "Links zu externen Profilen",
      paragraphs: [
        "Diese Website verlinkt auf Profile bei LinkedIn, GitHub und gegebenenfalls Instagram. Es handelt sich um einfache Links: Daten werden an diese Anbieter erst übermittelt, wenn Sie einen Link anklicken. Für die dortige Datenverarbeitung gelten die Datenschutzhinweise der jeweiligen Anbieter.",
      ],
    },
    {
      title: "Ihre Rechte",
      paragraphs: [
        "Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie auf Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO). Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO).",
      ],
    },
  ],
  en: [
    {
      title: "Controller",
      paragraphs: ["The controller responsible for data processing on this website is:", [...address("en"), `Email: ${CONTACT_EMAIL}`]],
    },
    {
      title: "Overview",
      paragraphs: [
        "This website provides information about the services of Heike Kasper and Erik Kasper under the brand k-and-k.codes. We do not use cookies, analytics or tracking tools, or social media plugins. We only process personal data where this is necessary to provide the website technically or when you contact us by email.",
      ],
    },
    {
      title: "Hosting and server log files",
      paragraphs: [
        "This website is hosted by Vercel Inc. (USA). When you visit the website, the hosting provider automatically processes technically necessary information transmitted by your browser – in particular your IP address, date and time of access, the page requested, the referrer URL, and your browser and operating system. This processing serves the secure and error-free delivery of the website and is based on Art. 6(1)(f) GDPR. Data may be transferred to the USA in the process.",
      ],
    },
    {
      title: "Contact by email",
      paragraphs: [
        "If you contact us by email, we process your details to handle your enquiry and any follow-up questions. The legal basis is Art. 6(1)(b) GDPR where your enquiry relates to a contract or pre-contractual measures, and Art. 6(1)(f) GDPR otherwise. We delete your data as soon as it is no longer required for this purpose, unless statutory retention obligations apply.",
      ],
    },
    {
      title: "Local storage of your display preference",
      paragraphs: [
        "If you switch between light and dark mode, we store this choice in your browser’s local storage. The information stays on your device, is not transmitted to us and is strictly necessary for the function you requested (Section 25(2) no. 2 TDDDG). You can delete it at any time in your browser settings.",
      ],
    },
    {
      title: "Fonts",
      paragraphs: [
        "The fonts used on this website are served directly from our own server. No connection to third-party servers, such as Google, is established for this purpose.",
      ],
    },
    {
      title: "Links to external profiles",
      paragraphs: [
        "This website links to profiles on LinkedIn, GitHub and, where applicable, Instagram. These are plain links: no data is transmitted to these providers until you click a link. The privacy policies of the respective providers apply to any processing there.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "Subject to the statutory requirements, you have the right of access (Art. 15 GDPR), rectification (Art. 16 GDPR), erasure (Art. 17 GDPR), restriction of processing (Art. 18 GDPR), data portability (Art. 20 GDPR) and the right to object to processing based on Art. 6(1)(f) GDPR (Art. 21 GDPR). You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR).",
      ],
    },
  ],
};
