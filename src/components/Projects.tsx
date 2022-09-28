import code from "../img/code.svg";
import brettspielguru from "../img/brettspielguru_de.png";
import mangaAnime from "../img/manga-anime.png";
import pokemon from "../img/pokemon.png";
import boardgame from "../img/boardgame.png";

import { Slide } from "react-awesome-reveal";
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
  SiCss3,
} from "react-icons/si";

function Projects(props: any) {
  return (
    <div id="projects" className="w-5/6 mx-auto pt-12">
      <h3 className="justify-center m-auto flex p-4">Projekte</h3>
      <Slide direction="up" triggerOnce>
        <div className="flex justify-center mb-12 flex-wrap w-full  ">
          <div className="items-center flex w-full justify-center mb-12 flex-wrap">
            <div className=" rounded-xl p-12 w-1/2 sm:basis-96 ">
              <img
                src={brettspielguru}
                className="rounded-xl shrink-0 shadow-md"
              ></img>
            </div>
            <div className="rounded-xl w-1/2 sm:w-full">
              <div className="mb-6">
                <h3 className="mb-7 justify-center flex text-2xl font-semibold text-center text-gray-900 font-header dark:text-white ">
                  Brettspielguru
                </h3>
                <p className="text-justify">
                  Die Webseite von Brettspielguru sollte einerseits die Produkte
                  präsentieren, andererseits eine Möglichkeit bereitstellen, um
                  die passgenauen Kartenhüllen für verschiedene Brettspiele zu
                  finden. Außerdem können im Backend eigenständig neue Spiele
                  mit den passenden Kartenhüllen eingepflegt werden.
                </p>
              </div>
              <div className="flex overflow-visible justify-center gap-2 mb-7">
                <IconContext.Provider
                  value={{
                    color: props.mode ? "#6B7280" : "#374151",
                    className: "hover:grayscale",
                    size: "2em",
                  }}
                >
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
                    <SiMaterialui></SiMaterialui>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      MaterialUI
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiFirebase></SiFirebase>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Firebase
                    </p>
                  </div>
                </IconContext.Provider>
              </div>
              <div className="justify-center flex ">
                <a
                  href="https://www.brettspielguru.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 inline-flex items-center px-6 py-4 space-x-2 text-sm font-bold text-white uppercase bg-gray-700 rounded-lg hover:bg-gray-900 dark:bg-gray-500 dark:hover:bg-gray-400"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className=" w-4  h-4 undefined"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </span>
                  <span>website</span>
                </a>

                <a
                  href="https://github.com/kaspi90/brettspielguru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex items-center px-6 py-4 space-x-2 text-sm font-bold text-gray-700 uppercase border border-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900  dark:text-white dark:border-gray-500 dark:hover:bg-gray-400"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="
          w-4 
          h-4
          text-gray-700 hover:text-gray-900
          undefined  dark:text-white"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </span>
                  <span>Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div className="flex content-center justify-center flex-wrap-reverse">
          <div className="items-center flex w-full justify-center  mb-12 flex-wrap-reverse">
            <div className=" flex-col  rounded-xl w-1/2  sm:w-full   ">
              <div className="mb-6 ">
                <h3 className="mb-7 justify-center flex text-2xl font-semibold text-center text-gray-900 font-header dark:text-white ">
                  Manga-Anime
                </h3>
                <p className="text-justify">
                  Ein Manga- und Animeportal, welches die derzeit beliebtesten
                  Mangas und Animes inkl. Beschreibung und Bewertungen von
                  Myanimelist anzeigt. Zusätzlich können eigene Sammlungen
                  erstellt und verwaltet werden.
                </p>
              </div>
              <div className="flex overflow-visible justify-center gap-2 mb-7">
                <IconContext.Provider
                  value={{
                    color: props.mode ? "#6B7280" : "#374151",
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
                </IconContext.Provider>
              </div>
              <div className="justify-center flex ">
                <a
                  href="https://mangashelf.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 inline-flex items-center px-6 py-4 space-x-2 text-sm font-bold text-white uppercase bg-gray-700 rounded-lg hover:bg-gray-900 dark:bg-gray-500 dark:hover:bg-gray-400 "
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className=" w-4  h-4 undefined"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </span>
                  <span>website</span>
                </a>

                <a
                  href="https://github.com/Heikchen/Manga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex items-center px-6 py-4 space-x-2 text-sm font-bold text-gray-700 uppercase border border-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900  dark:text-white dark:border-gray-500 "
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="
          w-4 
          h-4
          text-gray-700 hover:text-gray-900
          undefined  dark:text-white"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </span>
                  <span>Github</span>
                </a>
              </div>
            </div>
            <div className=" rounded-xl p-12 w-1/2 sm:basis-96">
              <img
                src={mangaAnime}
                className="rounded-xl shrink-0 shadow-md"
              ></img>
            </div>
          </div>
        </div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div className="flex  justify-center mb-12 flex-wrap w-full  ">
          <div className="items-center flex w-full justify-center  mb-12 flex-wrap">
            <div className=" rounded-xl p-12 w-1/2 sm:basis-96 ">
              <img
                src={pokemon}
                className="rounded-xl shrink-0 shadow-md"
              ></img>
            </div>
            <div className="rounded-xl w-1/2 sm:w-full ">
              <div className="mb-6">
                <h3 className="mb-7 justify-center flex text-2xl font-semibold text-center text-gray-900 font-header dark:text-white ">
                  Pokémon
                </h3>
                <p className="text-justify">
                  Das Pokémon Projekt ermöglicht eine Übersicht über alle
                  derzeit offiziel am Markt erhältlichen Pokémon Karten. Für
                  jede Karte wird ein entsprechender Verkaufswert von TCG-Player
                  anzeigt. Es ist möglich, eigene Sammlungen anzulegen und zu
                  verwalten.
                </p>
              </div>
              <div className="flex overflow-visible justify-center gap-2 mb-7">
                <IconContext.Provider
                  value={{
                    color: props.mode ? "#6B7280" : "#374151",
                    className: "hover:grayscale",
                    size: "2em",
                  }}
                >
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
                    <SiCss3></SiCss3>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      CSS
                    </p>
                  </div>
                </IconContext.Provider>
              </div>
              <div className="justify-center flex ">
                <a
                  href="https://pokemon-cards-cyan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 inline-flex items-center px-6 py-4 space-x-2 text-sm font-bold text-white uppercase bg-gray-700 rounded-lg hover:bg-gray-900 dark:bg-gray-500 dark:hover:bg-gray-400"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className=" w-4  h-4 undefined"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </span>
                  <span>website</span>
                </a>

                <a
                  href="https://github.com/Heikchen/pokemon-cards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex items-center px-6 py-4 space-x-2 text-sm font-bold text-gray-700 uppercase border border-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900  dark:text-white dark:border-gray-500"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="
          w-4 
          h-4
          text-gray-700 hover:text-gray-900
          undefined  dark:text-white"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </span>
                  <span>Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div className="flex content-center justify-center  flex-wrap-reverse">
          <div className="items-center flex w-full justify-center  mb-16 flex-wrap-reverse">
            <div className=" flex-col   rounded-xl w-1/2  sm:w-full  ">
              <div className="mb-6 ">
                <h3 className="mb-7 justify-center flex text-2xl font-semibold text-center text-gray-900 font-header dark:text-white">
                  Boardgames
                </h3>
                <p className="text-justify">
                  Projekt für die Übersicht über die derzeit gefragtesten
                  Brettspiele am Markt. Weiterhin wurde eine Brettspielsuche
                  implementiert, die eine genaue Brettspielbeschreibung inkl.
                  Spieleranzahl, Altersempfehlung und Spielzeit ausgibt.
                </p>
              </div>
              <div className="flex overflow-visible justify-center gap-2 mb-7">
                <IconContext.Provider
                  value={{
                    color: props.mode ? "#6B7280" : "#374151",
                    className: "hover:grayscale",
                    size: "2em",
                  }}
                >
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
                    <SiCss3></SiCss3>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      CSS
                    </p>
                  </div>
                </IconContext.Provider>
              </div>
              <div className="justify-center flex ">
                <a
                  href="https://board-games-eosin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 inline-flex items-center px-6 py-4 space-x-2 text-sm font-bold text-white uppercase bg-gray-700 rounded-lg hover:bg-gray-900 dark:bg-gray-500 dark:hover:bg-gray-400"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className=" w-4  h-4 undefined"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </span>
                  <span>website</span>
                </a>

                <a
                  href="https://github.com/Heikchen/board-games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex items-center px-6 py-4 space-x-2 text-sm font-bold text-gray-700 uppercase border border-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 dark:border-gray-500 dark:text-white"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="
          w-4 
          h-4
          text-gray-700 hover:text-gray-900
          undefined dark:text-white"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </span>
                  <span>Github</span>
                </a>
              </div>
            </div>
            <div className=" rounded-xl p-12 sm:basis-96 w-1/2 mx-auto">
              <img src={boardgame} className="rounded-xl shadow-md"></img>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Projects;
