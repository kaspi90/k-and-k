import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import sebastian from "../img/Sebastian Heinl.webp";
import michael from "../img/Michael Zsilla.webp";
import kia from "../img/Kia Kahawa.webp";

import igor from "../img/Igor Shelkovenkov.webp";
import { IconContext } from "react-icons";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiCypress,
  SiGitlab,
  SiChartdotjs,
  SiFigma,
} from "react-icons/si";
import { useState } from "react";

const Reference = () => {
  const { t } = useTranslation();
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div className="dark:bg-gray-900 bg-neutral-100 pb-20">
      <div id="references" className=" mx-auto pt-12 h-fit max-w-[1280px]">
        <h3 className="justify-center m-auto flex p-4 mb-5">Referenzen</h3>
        <Slide direction="up" triggerOnce>
          <div className="flex lg:flex-row flex-col justify-center lg:gap-20">
            <div className="rounded-lg m-4 lg:m-0 lg:w-3/12  p-4 bg-white dark:bg-gray-700 hover:scale-[1.03] transition-all overflow-visible h-fit">
              <p className="p-2">
                "Ich hatte das Vergnügen, ein Jahr lang eng mit Heike Kasper
                zusammenzuarbeiten, und kann bestätigen, dass sie eine
                herausragende React-Entwicklerin ist. Heike hat eine
                beeindruckende Fähigkeit, sich schnell in komplexe Themen
                einzuarbeiten und stets professionelle und hochwertige Arbeit zu
                liefern. Sie hat immer die Erwartungen erfüllt und oft sogar
                übertroffen.{" "}
                {!isExtended && (
                  <p className="pt-2">
                    <a
                      href=""
                      className="underline"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsExtended(!isExtended);
                      }}
                    >
                      mehr lesen
                    </a>
                  </p>
                )}
                {isExtended && (
                  <>
                    Technisch gesehen ist ihr Verständnis und ihre Anwendung von
                    React beeindruckend und hat in unseren Projekten einen
                    signifikanten Unterschied gemacht. Kurz gesagt, Heike ist
                    eine kompetente, zuverlässige und äußerst fähige
                    Entwicklerin. Ich kann sie uneingeschränkt empfehlen und bin
                    überzeugt, dass sie in jedem Team einen wertvollen Beitrag
                    leisten wird".
                    <p className="pt-2">
                      <a
                        href="#"
                        className="underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsExtended(!isExtended);
                        }}
                      >
                        weniger
                      </a>{" "}
                    </p>
                  </>
                )}
              </p>
              <div className="flex p-2 items-center">
                <img src={igor} className="w-[64px] h-[64px] rounded-full" />
                <div className="p-2">
                  <p className="font-bold">Igor Shelkovenkov</p>
                  <p>CEO und Founder </p>
                  <p>TopieT GmbH</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/heike-kasper-aa8162a9/details/recommendations/?detailScreenTabIndex=0"
                >
                  Original auf LinkedIn lesen
                </a>
              </div>
            </div>

            <div className=" lg:w-3/12 lg:m-0  flex flex-col lg:gap-6">
              <div className=" rounded-lg p-4 m-4 lg:m-0 bg-white dark:bg-gray-700  hover:scale-[1.03] transition-all overflow-visible h-fit">
                <p className="p-2">
                  "Erik hat sehr gute Kenntnisse in verschiedenen
                  Webtechnologien und kann diese auch sehr produktiv umsetzen.
                  Die Zusammenarbeit bei verschiedenen Projekten war jedes mal
                  top!"
                </p>
                <div className="flex p-2 items-center">
                  <img
                    src={michael}
                    className="w-[64px] h-[64px] rounded-full"
                  />
                  <div className="p-2">
                    <p className="font-bold">Michael Zsilla</p>
                    <p>IT-Projektmanager bei </p>
                    <p>Terra-Codes GmbH</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <a
                    className="underline"
                    href="https://www.linkedin.com/in/erik-k-210a54a6/details/recommendations/?detailScreenTabIndex=0"
                  >
                    Original auf LinkedIn lesen
                  </a>
                </div>
              </div>
              <div className="rounded-lg p-4 m-4 lg:m-0 bg-white  dark:bg-gray-700  hover:scale-[1.03] transition-all overflow-visible h-fit">
                <p className="p-2">
                  "Mit Erik zusammenzuarbeiten ist immer wieder eine angenehme
                  Erfahrung. Kurze Kommunikationswege, agile Absprachen, wenn es
                  notwendig ist, und als Basis funktioniert auch die
                  zuverlässige Arbeit an langatmigen Projekten. Ich habe mit
                  Erik nun schon einige Aufträge über mehrere Jahre durch und
                  würde jederzeit zurückkommen, wenn es um kluge Websites geht."
                </p>
                <div className="flex p-2 items-center">
                  <img src={kia} className="w-[64px] h-[64px] rounded-full" />
                  <div className="p-2">
                    <p className="font-bold">Kia Kahawa</p>
                    <p>Geschäftsführerin bei</p>
                    <p>Kia Kahawa - </p>
                    <p> Verlagsdienstleistungen</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <a
                    className="underline"
                    href="https://www.linkedin.com/in/erik-k-210a54a6/details/recommendations/?detailScreenTabIndex=0"
                  >
                    Original auf LinkedIn lesen
                  </a>
                </div>
              </div>
            </div>
            <div className=" rounded-lg m-4 lg:m-0 lg:w-3/12 p-4 bg-white hover:scale-[1.03] transition-all overflow-visible h-fit dark:bg-gray-700 ">
              <p className="p-2">
                "Ich möchte mich bei Erik für die ausgezeichnete Zusammenarbeit
                bedanken. Erik hat uns bei der Auswahl der Frontend-Technologien
                (Next.js, Tailwind und i18n), dem Aufsetzen des Projekts sowie
                bei der Entwicklung tatkräftig unterstützt. Wir würden uns
                freuen, auch bei zukünftigen Projekten auf die Expertise von
                Erik zurückgreifen zu können."
              </p>
              <div className="flex p-2 items-center">
                <img
                  src={sebastian}
                  className="w-[64px] h-[64px] rounded-full"
                />
                <div className="p-2">
                  <p className="font-bold">Sebastian Heinl</p>
                  <p>Unternehmensinhaber bei Webprojaggt GmbH & Co. KG</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/erik-k-210a54a6/details/recommendations/?detailScreenTabIndex=0"
                >
                  Original auf LinkedIn lesen
                </a>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Reference;
