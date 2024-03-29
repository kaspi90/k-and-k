import erik from "../img/erik_160.webp";
import erik2x from "../img/erik_320.webp";
import erik3x from "../img/erik_640.webp";
import erik4x from "../img/erik_1280.webp";
import heike from "../img/heike_160.webp";
import heike2x from "../img/heike_320.webp";
import heike3x from "../img/heike_640.webp";
import heike4x from "../img/heike_1280.webp";
import erikLightsaber from "../img/erikLightsaber_160.webp";
import erikLightsaber2x from "../img/erikLightsaber_320.webp";
import erikLightsaber3x from "../img/erikLightsaber_640.webp";
import erikLightsaber4x from "../img/erikLightsaber_1280.webp";
import heikeLightsaber from "../img/heikeLightsaber_160.webp";
import heikeLightsaber2x from "../img/heikeLightsaber_320.webp";
import heikeLightsaber3x from "../img/heikeLightsaber_640.webp";
import heikeLightsaber4x from "../img/heikeLightsaber_1280.webp";
import essen from "../img/uni_essen.webp";
import csueb from "../img/csueb.webp";
import csuebh from "../img/csuebh.webp";

import kadelo from "../img/kadelo_logo.webp";
import seeders from "../img/seeders_logo.webp";
import webprojaggt from "../img/webprojaggt.webp";
import adesso from "../img/adesso_logo.webp";
import adessoh from "../img/adesso_logoh.webp";
import dortmund from "../img/Technische_Universität_Dortmund_Logo Kopie.webp";

import dortmundh from "../img/Technische_Universität_Dortmund_Logo Kopieh.webp";
import wuppertal from "../img/BUW_Logo.webp";
import wuppertalh from "../img/BUW_Logoh.webp";
import mimo from "../img/Mimo_Logo.webp";
import mimoh from "../img/Mimo_Logoh.webp";

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
  SiNextdotjs,
  SiFigma,
  SiGitlab,
  SiCypress,
  SiChartdotjs,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Accordion } from "./Accordion";

function AboutUs(props: any) {
  const { t } = useTranslation();

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
            <img
              src={heikeLightsaber}
              alt="Heike Lichtschwert Profilfoto"
              srcSet={`${heikeLightsaber} 1x,
            ${heikeLightsaber2x} 2x, 
            ${heikeLightsaber3x} 3x, 
            ${heikeLightsaber4x} 4x`}
            ></img>
          ) : (
            <img
              src={heike}
              alt="Heike Profilfoto"
              srcSet={`${heike} 1x,
            ${heike2x} 2x, 
            ${heike3x} 3x, 
            ${heike4x} 4x`}
            ></img>
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
          <img
            src={heike}
            alt="Heike Profilfoto"
            srcSet={`${heike} 1x,
            ${heike2x} 2x, 
            ${heike3x} 3x, 
            ${heike4x} 4x`}
          ></img>
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
            <img
              src={erikLightsaber}
              alt="Erik Lichtschwert Profilfoto"
              srcSet={`${erikLightsaber} 1x,
            ${erikLightsaber2x} 2x, 
            ${erikLightsaber3x} 3x, 
            ${erikLightsaber4x} 4x`}
            ></img>
          ) : (
            <img
              src={erik}
              alt="Erik Profilfoto"
              srcSet={`${erik} 1x,
           ${erik2x} 2x, 
           ${erik3x} 3x, 
           ${erik4x} 4x`}
            ></img>
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
          <img
            src={erik}
            alt="Erik Profilfoto"
            srcSet={`${erik} 1x,
           ${erik2x} 2x, 
           ${erik3x} 3x, 
           ${erik4x} 4x`}
          ></img>
        </div>
      );
  };

  const workHeike = (
    <div>
      <ol className="relative border-l border-violet dark:border-gray-400 mx-2">
        <li className="ml-4">
          <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
          <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
            {t("workheike.kadelodate")}
          </time>
          <div className="m-4">
            <img src={kadelo} className="w-28 mx-auto" alt="Kadelo Logo"></img>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("workheike.kadelo1")}
          </h3>
          <p className="mb-8 text-base font-normal text-gray-500 dark:text-gray-400">
            {t("workheike.kadelo2")}
            {t("workheike.kadelo3")}
            <br />
            <br />
            {t("workheike.kadelo4")}
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
          {t("universityheike.mimodate")}
        </time>
        <div className="m-4">
          <img
            src={mimo}
            className="w-28 mx-auto "
            alt="Mimo Dev Logo"
            srcSet={`${mimo} 160w,
            ${mimo} 320w, 
           ${mimoh} 640w, 
          ${mimoh} 1280w`}
            sizes="(max-width: 640px) 160px, (max-width: 1280px) 320px, 640px"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          <b>Mimo - Coding Bootcamp - Full-Stack</b>
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {t("universityheike.mimo1")}
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
          2015
        </time>
        <div className="m-4">
          <img
            src={csuebh}
            className="w-28 mx-auto"
            alt="csueb Logo"
            srcSet={`${csueb} 160w,
                   ${csueb} 320w, 
                  ${csuebh} 640w, 
                 ${csuebh} 1280w`}
            sizes="(max-width: 640px) 160px, (max-width: 1280px) 320px, 640px"
          ></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          <b>
            California State University, East Bay -{" "}
            {t("universityheike.semester")}
          </b>
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Drawing, Creative Photography & Creative Process
        </p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1  -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
          2014 - 2018
        </time>
        <div className="m-4">
          <img
            src={dortmund}
            className="w-28 mx-auto"
            alt="TU Dortmund Logo"
            srcSet={`${dortmund} 160w,
            ${dortmund} 320w, 
           ${dortmundh} 640w, 
          ${dortmundh} 1280w`}
            sizes="(max-width: 640px) 160px, (max-width: 1280px) 320px, 640px"
          ></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {t("universityheike.tudortmund1")}{" "}
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {t("universityheike.tudortmund2")}
        </p>
      </li>

      <li className="ml-4">
        <div className="absolute w-4 h-4 bg-violet rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-violet dark:text-gray-400">
          2010 - 2013
        </time>
        <div className="m-4">
          <img
            src={wuppertal}
            className="w-28 mx-auto"
            alt="Bergische Universität Wuppertal Logo"
            srcSet={`${wuppertal} 160w,
            ${wuppertal} 320w, 
           ${wuppertalh} 640w, 
          ${wuppertalh} 1280w`}
            sizes="(max-width: 640px) 160px, (max-width: 1280px) 320px, 640px"
          ></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {t("universityheike.uniwuppertal1")}{" "}
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {t("universityheike.uniwuppertal2")}
        </p>
      </li>
    </ol>
  );

  const work = (
    <div>
      <ol className="relative border-l border-blue dark:border-gray-400 mx-2">
        <li className="ml-4">
          <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400 "></div>
          <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
            {t("workerik.webprojaggtdate")}
          </time>
          <div className="m-4">
            <img
              src={webprojaggt}
              className="w-16 mx-auto"
              alt="Kadelo Logo"
            ></img>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("workerik.webprojaggt1")}
          </h3>

          <p className=" mb-8 text-base font-normal text-gray-500 dark:text-gray-400">
            {t("workerik.webprojaggt2")}
            <br /> {t("workerik.webprojaggt3")}
            <br /> {t("workerik.webprojaggt4")}
            <br /> {t("workerik.webprojaggt5")}
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400 "></div>
          <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
            {t("workerik.kadelodate")}
          </time>
          <div className="m-4">
            <img src={kadelo} className="w-28 mx-auto" alt="Kadelo Logo"></img>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("workerik.kadelo1")}
          </h3>

          <p className=" mb-8 text-base font-normal text-gray-500 dark:text-gray-400">
            {t("workerik.kadelo2")}
            <br />
            <br /> {t("workerik.kadelo3")}
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2 dark:border-gray-900 dark:bg-gray-400"></div>
          <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
            {t("workerik.seedersdate")}
          </time>
          <div className="m-4">
            <a href="https://www.seeders.de" target="_blank" rel="noreferrer">
              <img
                src={seeders}
                className="w-28 mx-auto"
                alt="Seeders Logo"
              ></img>
            </a>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("workerik.seeders1")}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {t("workerik.seeders2")} <br />
            {t("workerik.seeders3")}
          </p>
          <br />
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {t("workerik.seeders4")}
          </p>
        </li>

        <li className="ml-4">
          <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
          <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
            2011 - 2015
          </time>
          <div className="m-4">
            <img
              src={adesso}
              className="w-28 mx-auto"
              alt="adesso Logo"
              srcSet={`${adesso} 160w,
            ${adesso} 320w, 
           ${adessoh} 640w, 
          ${adessoh} 1280w`}
              sizes="(max-width: 640px) 160px, (max-width: 1280px) 320px, 640px"
            ></img>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("workerik.adesso1")}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {t("workerik.adesso2")}
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
          <img
            src={csueb}
            className="w-28 mx-auto "
            alt="csueb Logo"
            srcSet={`${csueb} 160w,
                   ${csueb} 320w, 
                  ${csuebh} 640w, 
                 ${csuebh} 1280w`}
            sizes="(max-width: 640px) 160px, (max-width: 1280px) 320px, 640px"
          ></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          <b>
            California State University, East Bay -{" "}
            {t("universityerik.semester")}
          </b>
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Marketing Management, International Business Law, Global Supply Chain
          Management
        </p>
      </li>

      <li className="ml-4">
        <div className="absolute w-4 h-4 bg-blue rounded-full mt-1 -left-2  dark:border-gray-900 dark:bg-gray-400"></div>
        <time className="mb-1 text-sm font-normal leading-none text-blue dark:text-gray-400">
          2010-2014
        </time>
        <div className="m-4">
          <img src={essen} className="w-28 mx-auto" alt="Uni Essen Logo"></img>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {t("universityerik.uniessen")}
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {t("universityerik.thesis")}
        </p>
      </li>
    </ol>
  );

  return (
    <div
      className="flex flex-wrap flex-col content-center justify-center  dark:bg-gray-800 dark:text-white "
      id="aboutUs"
    >
      <div className="w-full bg-neutral-100 dark:bg-gray-900 pt-10">
        <div className="max-w-[1280px] mx-auto ">
          <div className="w-full  ">
            <div className="flex content-center justify-center mb-16  ">
              <div className="items-center flex w-full justify-center gap-20  flex-wrap">
                <div>
                  <h3 className="flex justify-center mt-4 mb-4">Erik Kasper</h3>
                  <PortraitErik />
                  <div className="flex overflow-visible justify-center gap-2 ">
                    <IconContext.Provider
                      value={{
                        color: props.mode ? "#88E2FB" : "#224CA6",
                        className: "hover:grayscale",
                        size: "2em",
                      }}
                    >
                      <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                        <a
                          href="https://github.com/kaspi90"
                          aria-label="Github Erik"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub></SiGithub>
                        </a>
                        <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                          GitHub
                        </p>
                      </div>
                      <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                        <a
                          href="https://www.linkedin.com/in/erik-k-210a54a6/"
                          aria-label="Linkedin Erik"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiLinkedin></SiLinkedin>
                        </a>
                        <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                          LinkedIn
                        </p>
                      </div>
                      <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                        <a
                          href="https://www.xing.com/profile/Erik_Kasper"
                          aria-label="Xing Erik"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <SiXing></SiXing>{" "}
                        </a>
                        <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                          Xing
                        </p>
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
                <div className="w-1/2 sm:w-full">
                  <h3 className="mb-4 sm:text-center ">
                    {t("aboutme.headline")}
                  </h3>
                  <p className="sm:w-5/6 sm:mx-auto text-justify">
                    {t("aboutme.e1")} <br />
                    <br />
                    {t("aboutme.e2")} <br />
                    <br /> {t("aboutme.e3")}
                    <br /> <br />
                    {t("aboutme.e4")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-16 w-full mt-4 items-center flex flex-col">
              <h3 className="mb-4">Technologien</h3>
              <div className="flex gap-2 flex-wrap justify-center w-[90%]">
                <IconContext.Provider
                  value={{
                    color: props.mode ? "#88E2FB" : "#224CA6",
                    className: "hover:grayscale",
                    size: "2em",
                  }}
                >
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center ">
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
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center ">
                    <SiNodedotjs></SiNodedotjs>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Node.js
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
                    <SiFigma></SiFigma>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Figma
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiMaterialui></SiMaterialui>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      MateterialUI
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiNestjs></SiNestjs>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Nest.js
                    </p>
                  </div>
                  <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                    <SiPrisma></SiPrisma>
                    <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                      Prisma
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
            </div>

            <div className="flex content-center justify-center mb-16 ">
              <div className="flex-col flex items-center w-3/4 sm:w-5/6">
                <div className="w-3/4  sm:w-full">
                  <div>
                    <Accordion
                      title={t("aboutme.title")}
                      color="bg-neutral-100"
                      content={work}
                      open={false}
                    />
                    <div className="h-10"></div>
                    <Accordion
                      title={t("aboutme.titleStudy")}
                      color="bg-neutral-100"
                      content={studium}
                      open={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className=" pt-12 w-full max-w-[1280px] dark:bg-gray-800 dark:text-white mx-auto  ">
          <div className="flex content-center justify-center  dark:bg-gray-800 ">
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
                      <a
                        href="https://github.com/heikchen"
                        aria-label="Github Heike"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiGithub></SiGithub>
                      </a>
                      <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                        GitHub
                      </p>
                    </div>
                    <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                      <a
                        href="https://www.linkedin.com/in/heike-kasper-aa8162a9/"
                        aria-label="Linkedin Heike"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiLinkedin></SiLinkedin>
                      </a>
                      <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                        LinkedIn
                      </p>
                    </div>
                    <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                      <a
                        href="https://www.xing.com/profile/Heike_Kasper22"
                        aria-label="Xing Heike"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiXing></SiXing>
                      </a>
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
                  {t("aboutmeheike.h1")}
                  <br />
                  <br />
                  {t("aboutmeheike.h2")}
                  <br />
                  <br />
                  {t("aboutmeheike.h3")}
                  <br />
                  <br /> {t("aboutmeheike.h4")}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-16 mt-4 	w-full items-center flex flex-col dark:bg-gray-800">
            <h3 className="mb-4">Technologien</h3>
            <div className="flex gap-2 flex-wrap justify-center w-[90%]">
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
                <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                  <SiNextdotjs></SiNextdotjs>
                  <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                    Next.js
                  </p>
                </div>
                <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                  <SiFigma></SiFigma>
                  <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                    Figma
                  </p>
                </div>
                <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                  <SiGitlab></SiGitlab>
                  <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                    Gitlab
                  </p>
                </div>
                <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                  <SiCypress></SiCypress>
                  <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                    Cypress
                  </p>
                </div>
                <div className="group relative shrink-0 overflow-visible flex flex-col items-center	">
                  <SiChartdotjs></SiChartdotjs>
                  <p className="invisible group-hover:visible absolute top-10 bg-gray-700 text-white rounded-lg min-w-full	p-2 flex items-center justify-center min-h-12 text-lg text-center">
                    Chart.js
                  </p>
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex content-center justify-center mb-16  dark:bg-gray-800">
            <div className="flex-col flex items-center w-3/4 sm:w-5/6">
              <div className="w-3/4 sm:w-full">
                <div className=" dark:bg-gray-800">
                  <Accordion
                    title={t("aboutme.title")}
                    color=""
                    content={workHeike}
                    open={false}
                  />
                  <div className=" h-10 dark:bg-gray-800"></div>
                  <Accordion
                    title={t("aboutme.titleStudy")}
                    content={unversityHeike}
                    open={false}
                    color=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
