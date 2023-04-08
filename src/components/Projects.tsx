import javlis from "../img/javlis.png";
import { useTranslation } from "react-i18next";

import { Slide } from "react-awesome-reveal";
import { IconContext } from "react-icons";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiCypress,
  SiGitlab,
  SiFigma,
  SiChartdotjs,
} from "react-icons/si";

function Projects(props: any) {
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="w-5/6 mx-auto pt-12 h-fit overflow-y-hidden max-w-[1280px]"
    >
      <h3 className="justify-center m-auto flex p-4">Projekte</h3>
      <Slide direction="up" triggerOnce>
        <div className="flex  justify-center mb-12 flex-wrap w-full  ">
          <div className="items-center flex w-full justify-center  mb-12 flex-wrap">
            <div className=" rounded-xl p-12 w-1/2 sm:basis-96 ">
              <img
                src={javlis}
                className="rounded-xl shrink-0 shadow-md"
                alt="javlis projekt"
              ></img>
            </div>
            <div className="rounded-xl w-1/2 sm:w-full ">
              <div className="mb-6">
                <h3 className="mb-7 justify-center flex text-2xl font-semibold text-center text-gray-900 font-header dark:text-white ">
                  {t("projects.javlis1")}
                </h3>
                <p className="text-justify">{t("projects.javlis2")}</p>
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
                    <SiNextdotjs></SiNextdotjs>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Next.js
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiCypress></SiCypress>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Cypress
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiGitlab></SiGitlab>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Gitlab
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiChartdotjs></SiChartdotjs>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Chart.js
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiFigma></SiFigma>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Figma
                    </p>
                  </div>
                </IconContext.Provider>
              </div>
              <div className="justify-center flex ">
                <a
                  href="https://javlis.com/"
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
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Projects;
