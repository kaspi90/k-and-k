import type { Lang, PersonId } from "../config/site";

/**
 * Profilinhalte von Heike und Erik.
 *
 * Quelle: bisherige Website k-and-k.codes (Werdegang, Studium, Technologien,
 * Selbstbeschreibungen) sowie die freigegebene Positionierung aus dem
 * Redesign-Briefing. Keine Angaben ergänzen, die nicht belegt sind –
 * offene Punkte stehen in docs/CONTENT-TODO.md.
 *
 * Schreibweise: Zeiträume „2014–2018“ bzw. „Seit 2022“, Rollen ohne „&“.
 */
export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  text: string;
  /** Im kompakten CV bleibt der Beschreibungstext dieser Station sichtbar. */
  cvHighlight?: boolean;
}

export interface TechnologyGroup {
  label: string;
  items: string[];
}

export interface Profile {
  role: string;
  /** Kurzbeschreibung für die Profilkarte – bei beiden ähnlich lang halten */
  bio: string;
  skills: string[];
  /** Fachlicher Hintergrund – kurzer Hinweis auf der Profilkarte der Startseite */
  background: string;
  eyebrow: string;
  /** Einleitung auf der Profilseite, in Absätzen */
  lead: string[];
  focus: string[];
  approach: string[];
  technologies: string[];
  /** Optionale Gruppierung für eine klarere Darstellung im CV */
  technologyGroups?: TechnologyGroup[];
  /** Optionale, bestätigte Interessen für den öffentlichen Lebenslauf */
  interests?: string[];
  /** Optionaler profilspezifischer Titel, z. B. „Projekte“ statt „Berufserfahrung“ */
  experienceLabel?: string;
  experience: TimelineEntry[];
  education: TimelineEntry[];
}

const heikeTech = ["AI", "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Storybook", "Cypress", "Chart.js", "GitLab", "Figma"];
const erikTech = ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "NestJS", "Prisma", "Firebase", "Tailwind CSS", "Material UI", "Figma"];

export const profiles: Record<PersonId, Record<Lang, Profile>> = {
  heike: {
    de: {
      role: "KI-gestützte Softwareentwicklung · React & TypeScript",
      bio: "Heike entwickelt KI-gestützt moderne Webanwendungen mit React und TypeScript. Sie verbindet produktive KI-Workflows mit Testing und hoher Softwarequalität. Ihr Architekturstudium prägt ihren strukturierten Blick auf komplexe Systeme.",
      skills: ["KI-gestützte Entwicklung", "React", "TypeScript", "Testing & Qualität", "Komplexe Systeme"],
      background: "Architektur, Gebäude und Energieeffizienz",
      eyebrow: "KI-gestützte Softwareentwicklung",
      lead: [
        "Heike ist selbstständige Softwareentwicklerin mit Schwerpunkt auf KI-gestützter Entwicklung. Sie verbindet produktive KI-Workflows mit React und TypeScript und setzt KI dort ein, wo sie Entwicklung, Qualität und Zusammenarbeit sinnvoll verbessert.",
        "Ihr Werdegang verbindet Softwareentwicklung mit Architektur und Energieeffizienz. Dadurch versteht sie digitale Lösungen rund um Gebäude, Energie und technische Planungsprozesse besonders gut.",
      ],
      focus: ["KI-gestützte Softwareentwicklung", "React und TypeScript", "Moderne Webanwendungen", "Testing und Softwarequalität", "Digitale Lösungen für Gebäude und Energie"],
      approach: [
        "Heike arbeitet eng mit funktionsübergreifenden Teams zusammen, etwa mit Design und Backend-Entwicklung. So passen Frontend und Backend nahtlos zusammen.",
        "Programmieren verbindet für sie das Lösen von Problemen mit Kreativität in der Gestaltung. Sie bildet sich laufend weiter und probiert neue Technologien und Methoden aus.",
        "Ihr Architekturstudium und ihre Masterarbeit zur Vakuumdämmung – einem Baustein energieeffizienter Gebäudehüllen – helfen ihr dabei, sich schnell in komplexe technische und fachübergreifende Anforderungen einzuarbeiten.",
      ],
      technologies: heikeTech,
      technologyGroups: [
        { label: "AI", items: ["KI-gestützte Entwicklung"] },
        { label: "Frontend & Web", items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Storybook", "Chart.js"] },
        { label: "Qualität & Workflow", items: ["Cypress", "GitLab", "Figma"] },
      ],
      interests: ["Laufen", "Brettspiele", "Skifahren", "Wandern", "Manga lesen", "Zeichnen"],
      experienceLabel: "Projekte",
      experience: [
        {
          period: "Seit Mai 2023",
          title: "Freelance Softwareentwicklerin",
          org: "Meetago",
          text: "Kontinuierliche Weiterentwicklung einer digitalen Plattform für die Planung und Buchung von Meetings und Veranstaltungen. Umsetzung und Pflege moderner Frontend-Funktionen mit React und TypeScript, Entwicklung wiederverwendbarer Komponenten sowie enge Abstimmung mit Design und Backend. Fokus auf intuitive Nutzerführung, responsive Oberflächen und verlässliche Softwarequalität durch Tests und strukturierte Reviews.",
        },
        {
          period: "Seit 2022",
          title: "Relaunch und Weiterentwicklung von Javlis.com",
          org: "TopieT GmbH",
          text: "Frontend-Entwicklung für ein Portal im Bereich Decentralized Finance. Technologien: React, TypeScript, Next.js, Tailwind CSS, Cypress und Chart.js.",
        },
      ],
      education: [
        {
          period: "2022",
          title: "Coding-Bootcamp Full-Stack Software Engineering",
          org: "Mimo",
          text: "Webentwicklung mit HTML, CSS, JavaScript, React und Node.js.",
        },
        {
          period: "2014–2018",
          title: "Master of Science, Architektur",
          org: "Technische Universität Dortmund",
          text: "Masterarbeit am Lehrstuhl Bauphysik und Technische Gebäudeausrüstung: Vakuumdämmung in der Baukonstruktion.",
          cvHighlight: true,
        },
        {
          period: "2015",
          title: "Auslandssemester, Design und angewandte Kunst",
          org: "California State University, East Bay",
          text: "Zeichnen, kreative Fotografie und kreativer Prozess.",
        },
        {
          period: "2010–2013",
          title: "Bachelor of Science, Architektur",
          org: "Bergische Universität Wuppertal",
          text: "Abschlussprojekt: Bauen im Bestand – Ehrenfeld Hybrids.",
        },
      ],
    },
    en: {
      role: "AI-assisted Software Development · React & TypeScript",
      bio: "Heike uses AI-assisted workflows to build modern web applications with React and TypeScript. She combines productive AI use with testing and high software quality, shaped by the structured view of complex systems she brings from architecture.",
      skills: ["AI-assisted development", "React", "TypeScript", "Testing & quality", "Complex systems"],
      background: "Architecture, buildings and energy efficiency",
      eyebrow: "AI-assisted software development",
      lead: [
        "Heike is an independent software developer specialising in AI-assisted development. She combines productive AI workflows with React and TypeScript, using AI where it meaningfully improves delivery, quality and collaboration.",
        "Her background brings together software development, architecture and energy efficiency – which gives her a particular feel for digital solutions around buildings, energy and technical planning processes.",
      ],
      focus: ["AI-assisted software development", "React and TypeScript", "Modern web applications", "Testing and software quality", "Digital solutions for buildings and energy"],
      approach: [
        "Heike works closely with cross-functional teams, including designers and backend developers, so that frontend and backend fit together seamlessly.",
        "For her, programming combines solving problems with creativity in design. She keeps learning and enjoys trying out new technologies and methods.",
        "Her architecture studies and her master’s thesis on vacuum insulation – a building block of energy-efficient building envelopes – help her get to grips quickly with complex technical and cross-disciplinary requirements.",
      ],
      technologies: heikeTech,
      technologyGroups: [
        { label: "AI", items: ["AI-assisted development"] },
        { label: "Frontend & Web", items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Storybook", "Chart.js"] },
        { label: "Quality & workflow", items: ["Cypress", "GitLab", "Figma"] },
      ],
      interests: ["Running", "Board games", "Skiing", "Hiking", "Reading manga", "Drawing"],
      experienceLabel: "Projects",
      experience: [
        {
          period: "Since May 2023",
          title: "Freelance Software Developer",
          org: "Meetago",
          text: "Ongoing development of a digital platform for planning and booking meetings and events. Implementation and maintenance of modern frontend features with React and TypeScript, development of reusable components, and close collaboration with design and backend teams. Focus on intuitive user journeys, responsive interfaces, and reliable software quality through testing and structured reviews.",
        },
        {
          period: "Since 2022",
          title: "Relaunch and further development of Javlis.com",
          org: "TopieT GmbH",
          text: "Frontend development for a decentralized finance portal. Technologies: React, TypeScript, Next.js, Tailwind CSS, Cypress and Chart.js.",
        },
      ],
      education: [
        {
          period: "2022",
          title: "Coding bootcamp, Full-Stack Software Engineering",
          org: "Mimo",
          text: "Web development with HTML, CSS, JavaScript, React and Node.js.",
        },
        {
          period: "2014–2018",
          title: "Master of Science, Architecture",
          org: "TU Dortmund University",
          text: "Master’s thesis at the Chair of Building Physics and Building Services on vacuum insulation in building construction.",
          cvHighlight: true,
        },
        {
          period: "2015",
          title: "Semester abroad, design and applied arts",
          org: "California State University, East Bay",
          text: "Drawing, creative photography and creative process.",
        },
        {
          period: "2010–2013",
          title: "Bachelor of Science, Architecture",
          org: "University of Wuppertal",
          text: "Final project: Building in existing contexts – Ehrenfeld Hybrids.",
        },
      ],
    },
  },
  erik: {
    de: {
      role: "Softwareentwickler · Produkt- und Frontend-Architektur",
      bio: "Erik ist Wirtschaftsinformatiker und hat mehr als zehn Jahre Erfahrung in IT und Webentwicklung. Er verbindet React und TypeScript mit Produktarchitektur und Projektmanagement – und mit seiner Erfahrung als Gründer und Geschäftsführer.",
      skills: ["10+ Jahre IT & Web", "React", "TypeScript", "Produktarchitektur", "Führung & Strategie"],
      background: "Wirtschaftsinformatik und Unternehmensführung",
      eyebrow: "Softwareentwicklung / Produktarchitektur",
      lead: [
        "Erik ist selbstständiger Softwareentwickler mit mehr als zehn Jahren Erfahrung in IT und Webentwicklung. Als Wirtschaftsinformatiker verbindet er die Entwicklung mit React und TypeScript mit Frontend- und Produktarchitektur.",
        "Er hat Unternehmen gegründet und geführt, Teams geleitet und direkt mit Kunden gearbeitet. Diese Perspektive bringt er in jedes Projekt ein.",
      ],
      focus: ["React und TypeScript", "Frontend- und Produktarchitektur", "Pragmatische Softwarelösungen", "Projektmanagement und Kundenkommunikation", "Strategisches und unternehmerisches Denken"],
      approach: [
        "Erik behält in jedem Projekt das Geschäftsziel im Blick und richtet die technische Umsetzung daran aus.",
        "Er setzt auf nachhaltige, pragmatische Lösungen und legt Wert auf klare Kommunikation mit allen Beteiligten.",
      ],
      technologies: erikTech,
      interests: ["Skifahren", "Radfahren", "Laufen", "Brettspiele"],
      experience: [
        {
          period: "Seit 2015",
          title: "Gründer und Geschäftsführer",
          org: "Kadelo GmbH, Düsseldorf",
          text: "Gründung und Geschäftsführung einer Online-Marketing-Agentur mit acht Mitarbeitenden und den Schwerpunkten WordPress, SEO und Amazon SEO. Bereichsverkauf an die Seeders Group. Aufgaben: Geschäftsführung, Projektmanagement, Kundenbetreuung, Mitarbeiterführung, Webentwicklung (Schwerpunkt WordPress), SEO, Google Ads sowie Amazon SEO und Ads.",
        },
        {
          period: "2020–2021",
          title: "Gründung und strategisches Management",
          org: "Seeders GmbH",
          text: "Gründung der Seeders GmbH als internationale SEO-Agentur im Joint Venture mit der Seeders Group. Nach raschem Wachstum Verkauf an die Seeders Group. Aufgaben: Investor, strategisches Management und Mitarbeitergewinnung.",
        },
        {
          period: "2011–2015",
          title: "Werkstudent Softwareentwicklung",
          org: "adesso",
          text: "Webentwicklung mit HTML, CSS, JavaScript, jQuery, FirstSpirit und Java.",
        },
      ],
      education: [
        {
          period: "2022–2026",
          title: "Masterstudium Wirtschaftsinformatik",
          org: "IU Internationale Hochschule",
          text: "Abschlussarbeit: Potenziale und Grenzen generativer KI als Decision-Support-System in der Immobilienbewertung – eine vergleichende Mixed-Methods-Analyse auf Basis realer Immobilienexposés.",
        },
        {
          period: "2015",
          title: "Auslandssemester",
          org: "California State University, East Bay",
          text: "Marketing Management, International Business Law, Global Supply Chain Management.",
        },
        {
          period: "2010–2014",
          title: "Bachelor of Science, Wirtschaftsinformatik",
          org: "Universität Duisburg-Essen",
          text: "Abschlussarbeit: End-User Programming für Wissensarbeiter.",
        },
      ],
    },
    en: {
      role: "Software Developer · Product & Frontend Architecture",
      bio: "Erik is a business information systems specialist with more than ten years in IT and web development. He combines React and TypeScript with product architecture and project management – and with his experience as a founder and managing director.",
      skills: ["10+ years IT & web", "React", "TypeScript", "Product architecture", "Leadership & strategy"],
      background: "Business informatics and company leadership",
      eyebrow: "Software development / Product architecture",
      lead: [
        "Erik is an independent software developer with more than ten years of experience in IT and web development. With a background in business information systems, he connects React and TypeScript engineering with frontend and product architecture.",
        "He has founded and managed companies, led teams and worked directly with clients – and brings that perspective to every project.",
      ],
      focus: ["React and TypeScript", "Frontend and product architecture", "Pragmatic software solutions", "Project management and client communication", "Strategic and entrepreneurial thinking"],
      approach: [
        "In every project, Erik keeps the business goal in view and aligns the technical implementation with it.",
        "He prefers sustainable, pragmatic solutions and values clear communication with everyone involved.",
      ],
      technologies: erikTech,
      interests: ["Skiing", "Cycling", "Running", "Board games"],
      experience: [
        {
          period: "Since 2015",
          title: "Founder and Managing Director",
          org: "Kadelo GmbH, Düsseldorf",
          text: "Founded and managed an online marketing agency with eight employees, focused on WordPress, SEO and Amazon SEO; divisional sale to the Seeders Group. Responsibilities: management, project management, client support, team leadership, web development (focus: WordPress), SEO, Google Ads, Amazon SEO and ads.",
        },
        {
          period: "2020–2021",
          title: "Founding and strategic management",
          org: "Seeders GmbH",
          text: "Founded Seeders GmbH as an international SEO agency in a joint venture with the Seeders Group; after rapid growth, sold it to the Seeders Group. Responsibilities: investor, strategic management, recruiting.",
        },
        {
          period: "2011–2015",
          title: "Working student, software development",
          org: "adesso",
          text: "Web development with HTML, CSS, JavaScript, jQuery, FirstSpirit and Java.",
        },
      ],
      education: [
        {
          period: "2022–2026",
          title: "Master’s Programme in Business Informatics",
          org: "IU International University of Applied Sciences",
          text: "Master’s thesis: Potentials and limitations of generative AI as a decision-support system in real estate valuation – a comparative mixed-methods analysis based on real-world property listings.",
        },
        {
          period: "2015",
          title: "Semester abroad",
          org: "California State University, East Bay",
          text: "Marketing management, international business law, global supply chain management.",
        },
        {
          period: "2010–2014",
          title: "Bachelor of Science, Business Informatics",
          org: "University of Duisburg-Essen",
          text: "Thesis: End-user programming for knowledge workers.",
        },
      ],
    },
  },
};
