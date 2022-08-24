import logo from "../logo.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";
import xing from "../img/xing.svg";
import materialui from "../img/materialui.svg";
import react from "../img/react.svg";
import tailwind from "../img/tailwind.svg";
import typescript from "../img/typescript.svg";
import javascript from "../img/javascript.svg";
import jana from "../img/jana.png";
import stix from "../img/stix.png";
import wuppertal from "../img/wuppertal.svg";
import dortmund from "../img/logo_tu.png";
import essen from "../img/Uni-duisburg-essen-logo-2022.jpg";
import csueb from "../img/csueb.svg";

function AboutUs() {
  return (
    <div className="flex flex-wrap p-2 w-4/5 m-auto ">
      <div
        className="flex w-1/2 flex-col rounded-xl	shrink grow
 border-2 p-4 m-4 shadow-lg basis-64		"
      >
        <h3 className=" flex justify-center">Heike</h3>
        <div className="flex justify-center">
          <img src={jana} className="h-40 w-40 rounded-full mb-4 mt-4"></img>
        </div>
        <div className="flex justify-center">
          <img
            src={github}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img
            src={linkedin}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img src={xing} className="h-8 m-1 grayscale hover:grayscale-0"></img>
        </div>
        <h3>Über mich</h3>
        <p className="p-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <h3>Technologien</h3>
        <div className="flex justify-center">
          <img
            src={typescript}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img
            src={javascript}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img
            src={react}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img
            src={tailwind}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img
            src={materialui}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
        </div>
        <h3 className="m-2">Curriculum Vitae</h3>
        <ul className="flex flex-col justify-center m-auto ">
          <li className="text-red-500">
            <span className="text-black">Geschäftsführerin</span>
          </li>

          <li>TU-Dortmund - Master of Science</li>
          <img src={dortmund} className="h-10 flex justify-center"></img>

          <li>Unversität Wuppertal - Bachelor of Science</li>
          <img src={wuppertal} className="h-10 flex justify-center"></img>
        </ul>
      </div>
      <div
        className="flex w-1/2 flex-col	flex-wrap rounded-xl
 border-2	p-4 m-4 shadow-lg basis-64	 grow	shrink"
      >
        <h3 className="flex justify-center">Erik</h3>
        <div className="flex justify-center">
          <img src={stix} className="h-40 w-40 rounded-full mb-4 mt-4"></img>
        </div>
        <div className="flex justify-center">
          <img
            src={github}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img
            src={linkedin}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img src={xing} className="h-8 m-1 grayscale hover:grayscale-0"></img>
        </div>
        <h3>Über mich</h3>
        <p className="p-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <h3>Technologien</h3>
        <div className="flex justify-center">
          <img
            src={typescript}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img
            src={javascript}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img
            src={react}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img
            src={tailwind}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
          <img
            src={materialui}
            className="h-8 m-1 grayscale hover:grayscale-0"
          ></img>
        </div>
        <h3 className="m-2">Curriculum Vitae</h3>
        <ul className="flex flex-col justify-center m-auto list-disc">
          <li className="text-red-500">
            <span className="text-black">Geschäftsführerin</span>
          </li>
          <img src={csueb} className="h-20"></img>
          <li>California State University, East Bay - Marketing Management</li>
          <img src={essen} className="h-20 "></img>
          <li>Universität Duisburg-Essen - Bachelor of Science</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
