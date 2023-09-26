import { SiGooglechat } from "react-icons/si";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import calltoaction from "../img/REV_WithPolygon160.webp";
import calltoaction2x from "../img/REV_WithPolygon320.webp";
import calltoaction3x from "../img/REV_WithPolygon640.webp";
import calltoaction4x from "../img/REV_WithPolygon1280.webp";
import Modals from "./Modals";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CallToAction = () => {
  const [modalState, setmodalState] = useState(false);
  const { t } = useTranslation();

  return (
    <div className=" dark:bg-gray-800 " id="contact">
      <div className="w-3/4 mx-auto pb-10 ">
        <div className="flex lg:my-20 flex-col lg:flex-row">
          <div className="lg:w-1/2 m-5">
            <div className="mb-5">
              <h2 className="text-center mb-4">{t("calltoaction.headline")}</h2>
              <p className="mb-5">{t("calltoaction.description")}</p>
              <ul className="list-disc ">
                <li className="py-1 px-3">{t("calltoaction.bulletpoint1")}</li>
                <li className="py-1 px-3">{t("calltoaction.bulletpoint2")}</li>
                <li className="py-1 px-3">{t("calltoaction.bulletpoint3")}</li>
              </ul>
            </div>
            <div className="w-full  justify-center">
              <button
                onClick={() => setmodalState(!modalState)}
                className="p-3 bg-gray-700 hover:bg-gray-900 rounded-lg text-white flex items-center gap-2 mx-auto"
              >
                <SiGooglechat /> Jetzt Verfügbarkeit anfragen{" "}
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:block hidden">
            <img
              className="rounded-xl  w-full"
              src={calltoaction}
              srcSet={`${calltoaction} 160w,
     ${calltoaction2x} 320w, 
     ${calltoaction3x} 640w, 
     ${calltoaction4x} 1280w`}
              sizes="(max-width: 640px) 160px, (max-width: 1280px) 320px, 640px"
            />
          </div>
        </div>
      </div>
      <Modals
        isVisible={modalState}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
        setModalState={setmodalState}
      >
        <h2>{t("calltoaction.call")}</h2>
        <br />
        <h3>{t("calltoaction.call2")}</h3>
        <br />
        <div className="gap-4 flex flex-col">
          <div className="p-2 border rounded-lg text-center font-bold flex items-center gap-1 justify-center">
            <AiOutlinePhone />
            0151 51303150
          </div>
          <div className="p-2 border rounded-lg text-center font-bold flex items-center gap-1 justify-center">
            <AiOutlineMail />
            kontakt@k-and-k.codes
          </div>
        </div>
      </Modals>
    </div>
  );
};

export default CallToAction;
