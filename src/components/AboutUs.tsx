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
import dortmund from "../img/tu_dortmund.svg";
import essen from "../img/uni_essen.svg";
import csueb from "../img/csueb.svg";
import kadelo from "../img/kadelo_logo.png";
import seeders from "../img/seeders_logo.png";
import brettspielguru from "../img/brettspielguru_logo.jpeg";
import adesso from "../img/adesso_logo.svg";
import Divider from "./Divider";

function AboutUs() {
  return (
    <div className="flex flex-wrap p-2 w-4/5 m-auto ">
      <div
        className="flex w-1/2 flex-col	flex-wrap rounded-xl
 border-2	p-4 m-4 shadow-lg basis-5/12		 grow	shrink"
      >
        <h3 className="flex justify-center">Erik</h3>
        <div className="flex flex-col justify-center mx-auto">
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
        <p className="p-4 justify-center flex">
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
        <h3 className="m-2 flex justify-center">Curriculum Vitae</h3>

        <div className="flex flex-col justify-center mx-auto  ">
          <div className="m-4">
            <img
              src={brettspielguru}
              className="w-28 justify-center flex  mx-auto "
            ></img>
          </div>
          <b className="flex  mx-auto justify-center">Brettspielguru</b>
          <p className="p-4 justify-center flex">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <div className="m-4">
            <img
              src={seeders}
              className="w-28  flex  m-auto  justify-center"
            ></img>
          </div>
          <b className="flex  m-auto justify-center">Seeders</b>
          <p className="p-4 justify-center flex">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <div className="m-4">
            <img
              src={kadelo}
              className="w-28 justify-center flex  m-auto"
            ></img>
          </div>
          <b className="flex  m-auto justify-center">Kadelo</b>
          <p className="p-4 justify-center flex">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <h3 className="flex  m-auto justify-center">Studium</h3>

          <div className="m-4">
            <img src={csueb} className="w-28  m-auto"></img>
          </div>
          <b className="flex  m-auto justify-center">
            California State University, East Bay - Marketing Management
          </b>
          <p className="p-4 justify-center flex">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <div className="m-4">
            <img src={adesso} className="w-28 m-auto"></img>
          </div>
          <p className="flex  m-auto justify-center">
            Werkstudent - Softwareentwicklung
          </p>
          <div className="m-4">
            <img src={essen} className="w-28 m-auto"></img>
          </div>
          <p className="flex  m-auto justify-center">
            Universität Duisburg-Essen - Bachelor of Science -
            Wirtschaftsinformatik
          </p>
        </div>
      </div>

      <div
        className="flex w-1/2 flex-col rounded-xl	shrink grow
 border-2 p-4 m-4 shadow-lg basis-5/12			"
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
        <p className="p-4">
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
        <h3 className="m-2 flex justify-center">Curriculum Vitae</h3>
        <div className="flex flex-col justify-center mx-auto  ">
          <div className="m-4">
            <img
              src={brettspielguru}
              className="w-28 justify-center flex  mx-auto "
            ></img>
          </div>
          <b className="flex  m-auto justify-center">Brettspielguru</b>

          <p className="p-4 justify-center flex">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <div className="m-4">
            <img
              src={kadelo}
              className="w-28  flex  m-auto justify-center"
            ></img>
          </div>
          <b className="flex  m-auto justify-center">Kadelo</b>
          <p className="p-4 justify-center flex">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <h3 className="flex  m-auto justify-center">Studium</h3>

          <div className="m-4">
            <img
              src={csueb}
              className="w-28   flex  m-auto justify-center"
            ></img>
          </div>
          <b className="flex  m-auto justify-center">
            California State University, East Bay - Marketing Management
          </b>
          <p className="p-4 justify-center flex">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <div className="m-4">
            <img
              src={dortmund}
              className="w-28  m-auto flex justify-center"
            ></img>
          </div>

          <p className="flex  m-auto justify-center">
            TU-Dortmund - Master of Science - Architektur
          </p>
          <div className="m-4">
            <img
              src={wuppertal}
              className="w-28   m-auto flex justify-center"
            ></img>
          </div>
          <p className="flex m-auto justify-center">
            Unversität Wuppertal - Bachelor of Science - Architektur
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
