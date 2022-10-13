import logo from "../img/k-and-k_logo.png";
import logo_dark from "../img/logo-lightsaber.png";

import { IconContext } from "react-icons/lib";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function NavBar(props: any) {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState(true);

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
    setIsActive(!isActive);
  };

  return (
    <div className=" bg-neutral-100 mb-12 dark:bg-gray-900 dark:text-white">
      <nav
        id="nav"
        className="flex justify-between items-center min-h-24  max-w-[1280px] px-8 mx-auto mb-8 sm:flex-wrap sm:justify-center sm:pb-4 sm:px-2 "
      >
        <a href="#nav">
          <img
            alt="k-and-k logo"
            className="max-h-24 p-4"
            src={props.mode ? logo_dark : logo}
          ></img>
        </a>
        <div className="flex gap-5 content-center items-center sm:gap-4 md:gap-3 md:text-xs">
          <a href="#aboutUs">{t("navigation.part1")}</a>
          <a href="#projects">{t("navigation.part2")}</a>
          <a href="#contact">{t("navigation.part3")}</a>
          <div className="flex sm:gap-4 md:gap-3 ">
            <IconContext.Provider
              value={{
                color: props.mode ? "#671595" : "#224CA6",
                className: "hover:grayscale",
                size: "2em",
              }}
            >
              <button onClick={props.toggleMode}>
                {props.mode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
              </button>
              <div className="flex mx-5 pt-1 sm:mx-0 md:pt-0">
                <div className="pt-1">
                  <a
                    href="#"
                    className={isActive ? "opacity-50 " : "pointer-events-none"}
                    onClick={() => changeLanguage("en")}
                  >
                    <svg
                      viewBox="0 0 16 12"
                      width="20"
                      height="15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1040_5708)">
                        <path
                          d="M-0.12085 -0.371002V11.9949H15.9973V-0.371002H-0.12085Z"
                          fill="#012169"
                        ></path>
                        <path
                          d="M-0.12085 -0.371002L15.9973 11.9949L-0.12085 -0.371002ZM15.9973 -0.371002L-0.12085 11.9949L15.9973 -0.371002Z"
                          fill="black"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.1361 5.81194L-0.481323 0.735039L0.239502 -1.47704L7.93817 4.42939L15.6368 -1.47704L16.3577 0.735039L9.74023 5.81194L16.3577 10.8888L15.6368 13.1009L7.93817 7.19449L0.239502 13.1009L-0.481323 10.8888L6.1361 5.81194Z"
                          fill="white"
                        ></path>
                        <path
                          d="M-0.12085 -0.371002L15.9973 11.9949L-0.12085 -0.371002ZM15.9973 -0.371002L-0.12085 11.9949L15.9973 -0.371002Z"
                          fill="black"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.73677 5.81194L-0.361206 0.366364L0.119345 -1.10835L7.93815 4.89025L15.757 -1.10835L16.2375 0.366364L9.13953 5.81194L16.2375 11.2575L15.757 12.7322L7.93815 6.73364L0.119345 12.7322L-0.361206 11.2575L6.73677 5.81194Z"
                          fill="#C8102E"
                        ></path>
                        <path
                          d="M7.93823 -0.371002V11.9949V-0.371002ZM-0.12085 5.81194H15.9973H-0.12085Z"
                          fill="black"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.28141 7.87292V11.9949H6.59505V7.87292H-0.12085V3.75096H6.59505V-0.371002H9.28141V3.75096H15.9973V7.87292H9.28141Z"
                          fill="white"
                        ></path>
                        <path
                          d="M7.93823 -0.371002V11.9949V-0.371002ZM-0.12085 5.81194H15.9973H-0.12085Z"
                          fill="black"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.74414 7.04852V11.9949H7.13232V7.04852H-0.12085V4.57535H7.13232V-0.371002H8.74414V4.57535H15.9973V7.04852H8.74414Z"
                          fill="#C8102E"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1040_5708">
                          <rect width="16" height="12" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <span className="mx-1">|</span>
                <div className="pt-1">
                  <a
                    href="#"
                    className={
                      !isActive ? "opacity-50 " : "pointer-events-none"
                    }
                    onClick={() => changeLanguage("de")}
                  >
                    <svg
                      viewBox="0 0 16 12"
                      width="20"
                      height="15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1040_5720)">
                        <rect width="16" height="4" fill="black"></rect>
                        <rect y="4" width="16" height="4" fill="#D60000"></rect>
                        <rect y="8" width="16" height="4" fill="#FFC700"></rect>
                      </g>
                      <defs>
                        <clipPath id="clip0_1040_5720">
                          <rect width="16" height="12" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
