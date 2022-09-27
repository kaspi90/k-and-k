import erik from "../img/erik.jpg";
import heike from "../img/heike.jpg";
import erikLightsaber from "../img/erikLightsaber.jpg";
import heikeLightsaber from "../img/heikeLightsaber.jpg";

import essen from "../img/uni_essen.svg";
import csueb from "../img/csueb.svg";
import kadelo from "../img/kadelo_logo.png";
import seeders from "../img/seeders_logo.png";
import brettspielguru from "../img/Logo_Brettspielguru_Final.png";
import adesso from "../img/adesso_logo.svg";
import dortmund from "../img/Technische_Universität_Dortmund_Logo Kopie.png";
import wuppertal from "../img/BUW_Logo.svg";
import mimo from "../img/Mimo_Logo.png";
import sramek from "../img/SRAMEK+LOGO+NEU+ohne+Hintergrund+2017-640w.png";
import { IconContext } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMaterialui,
  SiXing,
  SiLinkedin,
  SiGithub,
  SiFirebase,
  SiNodedotjs,
  SiStorybook,
} from "react-icons/si";
import { useState } from "react";

import { Accordion } from "./Accordion";

function AboutUs(props: any) {
  const [isHovered, setIsHovered] = useState(false);

  const PortraitHeike = () => {
    if (props.mode) {
      return (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="h-40 w-40 rounded-full border-4  border-violet mb-4 overflow-hidden "
        >
          {isHovered ? (
            <img src={heikeLightsaber}></img>
          ) : (
            <img src={heike}></img>
          )}
        </div>
      );
    } else
      return (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="h-40 w-40 rounded-full border-4  border-violet mb-4 overflow-hidden "
        >
          <img src={heike}></img>
        </div>
      );
  };

  const PortraitErik = () => {
    if (props.mode) {
      return (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="h-40 w-40 rounded-full border-4  border-blue dark:border-lightblue mb-4 overflow-hidden "
        >
          {isHovered ? (
            <img src={erikLightsaber}></img>
          ) : (
            <img src={erik}></img>
          )}
        </div>
      );
    } else
      return (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="h-40 w-40 rounded-full border-4  border-blue mb-4 overflow-hidden "
        >
          <img src={erik}></img>
        </div>
      );
  };

  const workHeike = (
    <div>
      <ol className="relative border-l border-violet dark:border-gray-400 mx-2">
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-violet rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
          <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
            Oktober 2020 - heute
          </time>
          <div className="m-4">
            <img src={brettspielguru} className="w-28 mx-auto "></img>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Brettspielguru
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Geschäftführung der Kasperlino GmbH zum Vertrieb von Brettspielen
            und Brettspielzubehör.
            <br /> <br />- Aufgabenfelder: Geschäftsführung, Produktentwicklung,
            Amazon-Management
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
          <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
            September 2016 - heute
          </time>
          <div className="m-4">
            <img src={kadelo} className="w-28 mx-auto"></img>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Kadelo
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Geschäftsführung der Kadelo GmbH mit acht Mitarbeitern als
            Online-Marketing Agentur mit Schwerpunkt SEO & Amazon SEO.
            Erfolgreicher Bereichsverkauf an die Seeders Group.
            <br />
            <br />- Aufgabenfelder: Geschäftsführung, Buchführung,
            Kundenbetreuung, Amazon SEO & Ads, Webentwicklung (Schwerpunkt:
            Wordpress)
          </p>
        </li>
      </ol>
    </div>
  );

  const unversityHeike = (
    <ol className="relative border-l border-violet dark:border-gray-400 mx-2">
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
          März 2022 - Oktober 2022
        </time>
        <div className="m-4">
          <img src={mimo} className="w-28 mx-auto "></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          <b>Mimo - Coding Bootcamp - Full-Stack</b>
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Webentwicklung mit HTML, CSS, JavaScript, React, Node.js
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
          2015
        </time>
        <div className="m-4">
          <img src={csueb} className="w-28 mx-auto "></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          <b>
            California State University, East Bay - Design und angewandte Kunst
          </b>
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Drawing, Creative Photography und Creative Process
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
          2014 - 2018
        </time>
        <div className="m-4">
          <img src={dortmund} className="w-28 mx-auto"></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Technische Universität Dortmund - Master of Science - Architektur
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Abschlussarbeit: Vakuumdämmung in der Baupraxis
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
          2013 - 2016
        </time>
        <div className="m-4">
          <img src={sramek} className="w-28 mx-auto "></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          <b>Werkstudent - Architektur</b>
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Entwurfs- und Ausführungsplanung von verschiedenen Projekten mit
          Spirit und SketchUp
        </p>
      </li>
      <li className="ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
          2010 - 2013
        </time>
        <div className="m-4">
          <img src={wuppertal} className="w-28 mx-auto"></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Bergische Universität Wuppertal - Bachelor of Science - Architektur
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Abschlussprojekt: Bauen im Bestand - Ehrenfeld Hybrids
        </p>
      </li>
    </ol>
  );

  const work = (
    <div>
      <ol className="relative border-l border-blue dark:border-gray-400 mx-2">
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2 dark:border-gray-900 dark:bg-gray-400"></div>
          <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
            November 2020 - Dezember 2021
          </time>
          <div className="m-4">
            <a href="https://Www.seeders.de" target="_blank">
              <img src={seeders} className="w-28 mx-auto"></img>
            </a>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Seeders GmbH
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Gründung der Seeders GmbH als internationale SEO Agentur im Joint
            Venture mit der Seeders Group. <br />
            Nach einem rasanten Wachstum: Verkauf der Seeders GmbH an die
            Seeders Group.
          </p>
          <br />
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            - Aufgabenfelder: Investor, Strategisches Management,
            Mitarbeitergewinnung
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
          <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
            Oktober 2020 - heute
          </time>
          <div className="m-4">
            <a href="https://www.brettspielguru.de" target="_blank">
              <img src={brettspielguru} className="w-28 mx-auto "></img>
            </a>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Kasperlino GmbH - Brettspielguru
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Gründung der Kasperlino GmbH zum Vertrieb von Brettspielen und
            Brettspielzubehör.
            <br /> <br />- Aufgabenfelder: Investor, Produktentwicklung,
            Amazon-Management, Webentwicklung (Javascript, React, MUI, Firebase)
          </p>
        </li>

        <li className="ml-4">
          <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400 "></div>
          <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
            Februar 2015 - heute
          </time>
          <div className="m-4">
            <img src={kadelo} className="w-28 mx-auto"></img>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Kadelo GmbH
          </h3>

          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Gründung und Geschäftsführung der Kadelo GmbH mit acht Mitarbeitern
            als Online-Marketing Agentur mit Schwerpunkt SEO & Amazon SEO.
            Erfolgreicher Bereichsverkauf an die Seeders Group.
            <br />
            <br />- Aufgabenfelder: Geschäftsführung, Projektmanagement,
            Kundenbetreuung, Mitarbeiterführung, SEO-Optimierung, Google Ads
            Optimierung, Amazon SEO & Ads, Webentwicklung (Schwerpunkt:
            Wordpress)
          </p>
        </li>
      </ol>
    </div>
  );

  const studium = (
    <ol className="relative border-l border-blue dark:border-gray-400 mx-2">
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-blue rounded-full mt-1  -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
          2015
        </time>
        <div className="m-4">
          <img src={csueb} className="w-28 mx-auto "></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          <b>California State University, East Bay - Auslandssemester</b>
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Marketing Management, International Business Law, Global Supply Chain
          Management
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
          2011 - 2015
        </time>
        <div className="m-4">
          <img src={adesso} className="w-28 mx-auto"></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Werkstudent - Softwareentwicklung
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Webentwicklung mit HTML, CSS, JavaScript, JQuery, FirstSpirit & Java
        </p>
      </li>
      <li className="ml-4">
        <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
          2010-2014
        </time>
        <div className="m-4">
          <img src={essen} className="w-28 mx-auto"></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Universität Duisburg-Essen - Bachelor of Science -
          Wirtschaftsinformatik
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Abschlussarbeit: End-User Programming für Wissensarbeiter
        </p>
      </li>
    </ol>
  );

  return (
    <div
      className="flex flex-wrap content-center justify-center  dark:bg-gray-800 dark:text-white"
      id="aboutUs"
    >
      <div className="w-full">
        <div className="flex content-center justify-center mb-16  ">
          <div className="items-center flex w-full justify-center gap-20  flex-wrap">
            <div>
              <h3 className="flex justify-center mt-4 mb-4">Erik Kasper</h3>
              <PortraitErik />
              <div className="flex overflow-visible justify-center gap-2">
                <IconContext.Provider
                  value={{
                    color: props.mode ? "#88E2FB" : "#224CA6",
                    className: "hover:grayscale",
                    size: "2em",
                  }}
                >
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiGithub></SiGithub>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      GitHub
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiLinkedin></SiLinkedin>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      LinkedIn
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiXing></SiXing>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Xing
                    </p>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div className="w-1/2 sm:w-full">
              <h3 className="mb-4 sm:text-center ">Über mich</h3>
              <p className="sm:w-5/6 sm:mx-auto text-justify">
                Hallo, ich bin Erik, <br />
                <br />
                Ich bin Wirtschaftsinformatiker und habe über zehn Jahre
                Erfahrung in der IT. Ich arbeite als Software Engineer mit
                Schwerpunkt: React & TypeScript. Zusätzlich habe ich viel
                Expertise im Bereich Unternehmensführung, Wachstum und
                Projektmanagement. Ich achte in allen Projekten darauf immer das
                Geschäftsziel im Auge zu behalten und eine dementsprechende
                Umsetzung anzustreben. <br />
                <br /> Ich bin ein Fan von pragmatischen Lösungen, sofern diese
                nachhaltig sind und lege viel Wert auf eine gute Kommunikation
                zwischen allen Stakeholdern. <br /> <br />
                Persönliche Interessen abseits der Arbeit: Radsport, Ski &
                Brettspiele
              </p>
            </div>
          </div>
        </div>
        <div className="mb-16 w-full mt-4 items-center flex flex-col">
          <h3 className="mb-4">Technologien</h3>
          <div className="flex gap-2">
            <IconContext.Provider
              value={{
                color: props.mode ? "#88E2FB" : "#224CA6",
                className: "hover:grayscale",
                size: "2em",
              }}
            >
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiTypescript></SiTypescript>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  Typescript
                </p>
              </div>
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiJavascript></SiJavascript>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  Javascript
                </p>
              </div>
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiReact></SiReact>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  React
                </p>
              </div>
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiTailwindcss></SiTailwindcss>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  Tailwind
                </p>
              </div>
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiMaterialui></SiMaterialui>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  MateterialUI
                </p>
              </div>{" "}
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiFirebase></SiFirebase>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  Firebase
                </p>
              </div>
            </IconContext.Provider>
          </div>
        </div>

        <div className="flex content-center justify-center mb-16 ">
          <div className="flex-col flex items-center w-3/4 sm:w-5/6">
            <div className="w-3/4  sm:w-full">
              <div>
                <Accordion
                  title="Arbeit"
                  color="bg-white"
                  content={work}
                  open={false}
                />
                <div className="h-10"></div>
                <Accordion
                  title="Studium"
                  color="bg-white"
                  content={studium}
                  open={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 pt-12 w-full dark:bg-gray-900 dark:text-white">
        <div className="flex content-center justify-center bg-neutral-100 dark:bg-gray-900 ">
          <div className="items-center flex flex-row-reverse w-full flex-wrap justify-center gap-20 ">
            <div className="flex flex-col ">
              <h3 className="flex justify-center mt-4 mb-4">Heike Kasper</h3>
              <PortraitHeike />
              <div className="flex overflow-visible justify-center gap-2">
                <IconContext.Provider
                  value={{
                    color: "#671595",
                    className: "hover:grayscale",
                    size: "2em",
                  }}
                >
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiGithub></SiGithub>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      GitHub
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiLinkedin></SiLinkedin>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      LinkedIn
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiXing></SiXing>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Xing
                    </p>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div className=" w-1/2 sm:w-full ">
              <h3 className="mb-4 sm:text-center">Über mich</h3>
              <p className="sm:w-5/6 sm:mx-auto text-justify">
                Hallo, ich bin Heike,
                <br />
                <br />
                Nach meinem Architekturstudium habe ich als Geschäftsführerin
                der Kadelo GmbH gearbeitet und bin dabei mit Web Development in
                Kontakt gekommen. Es hat mir so viel Spaß gemacht, dass ich
                dabei immer mehr Aufgaben übernommen und mich letztendlich dazu
                entschieden habe ein Coding Bootcamp bei Mimo anzufangen.
                <br />
                <br />
                Ich liebe die Herausforderungen beim Coding und zugleich die
                Kreativität beim Design.
                <br />
                <br /> Abseits der Arbeit mag ich: Brettspiele, Ski fahren,
                wandern, Mangas lesen und zeichnen.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-16 mt-4 bg-neutral-100	w-full items-center flex flex-col dark:bg-gray-900">
          <h3 className="mb-4">Technologien</h3>
          <div className="flex gap-2">
            <IconContext.Provider
              value={{
                color: "#671595",
                className: "hover:grayscale",
                size: "2em",
              }}
            >
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiTypescript></SiTypescript>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  Typescript
                </p>
              </div>
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiJavascript></SiJavascript>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  Javascript
                </p>
              </div>
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiReact></SiReact>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  React
                </p>
              </div>
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiTailwindcss></SiTailwindcss>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  Tailwind
                </p>
              </div>
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiNodedotjs></SiNodedotjs>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  Node.js
                </p>
              </div>
              <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                <SiStorybook></SiStorybook>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  Storybook
                </p>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="flex content-center justify-center mb-16 bg-neutral-100  dark:bg-gray-900">
          <div className="flex-col flex items-center w-3/4 sm:w-5/6">
            <div className="w-3/4 sm:w-full">
              <div className="bg-neutral-100 dark:bg-gray-900">
                <Accordion
                  title="Arbeit"
                  color="bg-neutral-100"
                  content={workHeike}
                  open={false}
                />
                <div className="bg-neutral-100 h-10 dark:bg-gray-900"></div>
                <Accordion
                  title="Studium"
                  content={unversityHeike}
                  open={false}
                  color="bg-neutral-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
