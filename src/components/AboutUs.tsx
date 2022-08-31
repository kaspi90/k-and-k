import stix from "../img/stix.png";
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
import "flowbite";

function AboutUs() {
  return (
    <div className="flex flex-wrap content-center justify-center">
      <div className="flex content-center justify-center ">
        <div className="items-center flex w-full justify-center gap-20 mb-16">
          <div>
            <h3 className="flex justify-center mt-4 mb-4">Erik</h3>
            <div>
              <img
                src={stix}
                className="h-40 w-40 rounded-full border-4  border-[#224CA6] mb-4 "
              ></img>
            </div>
            <div className="flex justify-center gap-2">
              <IconContext.Provider
                value={{
                  color: "#224CA6",
                  className: "hover:grayscale",
                  size: "2em",
                }}
              >
                <SiGithub></SiGithub>
                <SiLinkedin></SiLinkedin>
                <SiXing></SiXing>
              </IconContext.Provider>
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="mb-4 ">Über mich</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
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
            <SiTypescript></SiTypescript>
            <SiJavascript></SiJavascript>
            <SiReact></SiReact>
            <SiTailwindcss></SiTailwindcss>
            <SiMaterialui></SiMaterialui>
          </IconContext.Provider>
        </div>
      </div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon=""
              className="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className=""
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <div>
              <h3>Projekte</h3>

              <ol className="relative border-l border-[#224CA6] dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-[#224CA6] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-[#224CA6] dark:text-gray-500">
                    February 2022
                  </time>
                  <div className="m-4">
                    <img src={brettspielguru} className="w-28 mx-auto "></img>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Brettspielguru
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
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
                  <div className="absolute w-3 h-3 bg-[#224CA6] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-[#224CA6] dark:text-gray-500">
                    March 2022
                  </time>
                  <div className="m-4">
                    <img src={seeders} className="w-28 mx-auto"></img>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Seeders
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    All of the pages and components are first designed in Figma
                    and we keep a parity between the two versions even as we
                    update the project.
                  </p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-[#224CA6] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-[#224CA6] dark:text-gray-500">
                    April 2022
                  </time>
                  <div className="m-4">
                    <img src={kadelo} className="w-28 mx-auto"></img>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Kadelo
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements built on top of Tailwind CSS.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>
              What are the differences between Flowbite and Tailwind UI?
            </span>
            <svg
              data-accordion-icon=""
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex content-center justify-center  ">
        <div className="items-center w-full ">
          <div>
            <h3>Projekte</h3>

            <ol className="relative border-l border-[#224CA6] dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#224CA6] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#224CA6] dark:text-gray-500">
                  February 2022
                </time>
                <div className="m-4">
                  <img src={brettspielguru} className="w-28 mx-auto "></img>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Brettspielguru
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
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
                <div className="absolute w-3 h-3 bg-[#224CA6] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#224CA6] dark:text-gray-500">
                  March 2022
                </time>
                <div className="m-4">
                  <img src={seeders} className="w-28 mx-auto"></img>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Seeders
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-[#224CA6] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#224CA6] dark:text-gray-500">
                  April 2022
                </time>
                <div className="m-4">
                  <img src={kadelo} className="w-28 mx-auto"></img>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Kadelo
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="items-center w-full ">
          <h3>Studium</h3>

          <ol className="relative border-l border-[#224CA6] dark:border-gray-700">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#224CA6] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-[#224CA6] dark:text-gray-500">
                February 2022
              </time>
              <div className="m-4">
                <img src={csueb} className="w-28 mx-auto "></img>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <b>
                  California State University, East Bay - Marketing Management
                </b>
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
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
              <div className="absolute w-3 h-3 bg-[#224CA6] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-[#224CA6 dark:text-gray-500">
                March 2022
              </time>
              <div className="m-4">
                <img src={adesso} className="w-28 mx-auto"></img>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Werkstudent - Softwareentwicklung
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-[#224CA6] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-[#224CA6] dark:text-gray-500">
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
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
