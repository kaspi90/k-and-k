import stix from "../img/stix.png";
import jana from "../img/jana.png";

import wuppertal from "../img/wuppertal.svg";
import dortmund from "../img/tu_dortmund.svg";

import essen from "../img/uni_essen.svg";
import csueb from "../img/csueb.svg";
import kadelo from "../img/kadelo_logo.png";
import seeders from "../img/seeders_logo.png";
import brettspielguru from "../img/brettspielguru_logo.jpeg";
import adesso from "../img/adesso_logo.svg";
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
} from "react-icons/si";

import { Accordion } from "./Accordion";
import Divider from "./Divider";

function AboutUs() {
  const workHeike = (
    <div>
      <ol className="relative border-l border-violet dark:border-gray-700 mx-2">
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-violet rounded-full mt-1 -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-500">
            February 2022
          </time>
          <div className="m-4">
            <img src={brettspielguru} className="w-28 mx-auto "></img>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Brettspielguru
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more{" "}
            <svg
              className="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-violet rounded-full mt-1 -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-500">
            March 2022
          </time>
          <div className="m-4">
            <img src={seeders} className="w-28 mx-auto"></img>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Seeders
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-500">
            April 2022
          </time>
          <div className="m-4">
            <img src={kadelo} className="w-28 mx-auto"></img>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Kadelo
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  );

  const unversityHeike = (
    <ol className="relative border-l border-violet dark:border-gray-700 mx-2">
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-500">
          February 2022
        </time>
        <div className="m-4">
          <img src={csueb} className="w-28 mx-auto "></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          <b>California State University, East Bay - Marketing Management</b>
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <a
          href="#"
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Learn more{" "}
          <svg
            className="ml-2 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-500">
          March 2022
        </time>
        <div className="m-4">
          <img src={adesso} className="w-28 mx-auto"></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Werkstudent - Softwareentwicklung
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          All of the pages and components are first designed in Figma and we
          keep a parity between the two versions even as we update the project.
        </p>
      </li>
      <li className="ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1 -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-500">
          April 2022
        </time>
        <div className="m-4">
          <img src={essen} className="w-28 mx-auto"></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Universität Duisburg-Essen - Bachelor of Science -
          Wirtschaftsinformatik
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Get started with dozens of web components and interactive elements
          built on top of Tailwind CSS.
        </p>
      </li>
    </ol>
  );

  const work = (
    <div>
      <ol className="relative border-l border-blue dark:border-gray-700 mx-2">
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-500">
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
          <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-500">
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
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more{" "}
            <svg
              className="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>

        <li className="ml-4">
          <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-500">
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
    <ol className="relative border-l border-blue dark:border-gray-700 mx-2">
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-blue rounded-full mt-1  -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-500">
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
        <a
          href="#"
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Learn more{" "}
          <svg
            className="ml-2 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-500">
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
        <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-500">
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
      className="flex flex-wrap content-center justify-center  dark:bg-slate-800 dark:text-white"
      id="aboutUs"
    >
      <div className="flex content-center justify-center mb-16  ">
        <div className="items-center flex w-full justify-center gap-20  flex-wrap">
          <div>
            <h3 className="flex justify-center mt-4 mb-4">Erik Kasper</h3>
            <div>
              <img
                src={stix}
                className="h-40 w-40 rounded-full border-4  border-blue mb-4 "
              ></img>
            </div>
            <div className="flex overflow-visible justify-center gap-2">
              <IconContext.Provider
                value={{
                  color: "#224CA6",
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
            <p className="sm:w-4/5 sm:mx-auto ">
              Hallo, ich bin Erik, <br />
              <br />
              Ich bin Wirtschaftsinformatiker und habe über zehn Jahre Erfahrung
              in der IT.
              <br /> Ich arbeite als Software Engineer mit Schwerpunkt: React &
              TypeScript. Zusätzlich habe ich viel Erfahrung im Bereich
              Unternehmensführung, Wachstum und Projektmanagement. Ich achte in
              allen Projekten darauf immer das Geschäftsziel im Auge zu behalten
              und eine dementsprechende Umsetzung anzustreben. <br /> Ich bin
              ein Fan von pragmatischen Lösungen, sofern diese nachhaltig sind
              und lege viel Wert auf eine gute Kommunikation zwischen allen
              Stakeholdern.
              <br />
              <br />
              Persönliche Interessen abseits der Arbeit: Radsport, Ski &
              Brettspiele
            </p>
          </div>
        </div>
      </div>
      <div className="mb-16  items-center flex flex-col">
        <h3 className="mb-4">Technologien</h3>
        <div className="flex gap-2">
          <IconContext.Provider
            value={{
              color: "#224CA6",
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
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <div className="flex content-center justify-center mb-16  ">
        <div className="flex-col flex items-center">
          <div className="w-3/4 ">
            <div>
              <Accordion title="Arbeit" content={work} open={false} />
              <br />
              <Accordion title="Studium" content={studium} open={false} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 pt-12 dark:bg-slate-700 dark:text-white">
        <div className="flex content-center justify-center bg-neutral-100 dark:bg-slate-700 mx-auto	 ">
          <div className="items-center flex flex-row-reverse w-full flex-wrap justify-center gap-20 ">
            <div className="flex flex-col ">
              <h3 className="flex justify-center mt-4 mb-4">Heike Kasper</h3>
              <div>
                <img
                  src={jana}
                  className="h-40 w-40 rounded-full border-4  border-violet mb-4 "
                ></img>
              </div>
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
              <p className="sm:w-4/5 sm:mx-auto">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-16 bg-neutral-100	 items-center flex flex-col dark:bg-slate-700">
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
                <SiMaterialui></SiMaterialui>
                <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                  MateterialUI
                </p>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="flex content-center justify-center bg-neutral-100 mb-16 dark:bg-slate-700">
          <div className="flex-col flex items-center">
            <div className="w-3/4  ">
              <div className="bg-neutral-100 dark:bg-slate-700">
                <Accordion title="Projekte" content={workHeike} open={false} />
                <div className="bg-neutral-100 h-10 dark:bg-slate-700"></div>
                <Accordion
                  title="Studium"
                  content={unversityHeike}
                  open={false}
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
