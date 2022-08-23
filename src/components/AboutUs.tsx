import logo from "../logo.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";
import xing from "../img/xing.svg";
import materialui from "../img/materialui.svg";
import react from "../img/react.svg";
import tailwind from "../img/tailwind.svg";
import typescript from "../img/typescript.svg";
import javascript from "../img/javascript.svg";

function AboutUs() {
  return (
    <div className="flex flex-wrap p-2 w-4/5 m-auto ">
      <div
        className="flex w-1/2 flex-col rounded-xl	shrink grow
 border-2 p-4 m-4 shadow-lg basis-64		"
      >
        <h3 className=" flex justify-center">Heike</h3>
        <img src={logo} className="h-40"></img>
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
        <ul className="flex flex-col justify-center m-auto">
          <li>
            <span className="flex justify-center items-center w-5 h-5 bg-sky-800 rounded-full border-4 "></span>
            Geschäftsführerin
          </li>
          <li>Master of Science</li>
          <li>Bachelor of Science</li>
        </ul>
      </div>
      <div
        className="flex w-1/2 flex-col	flex-wrap rounded-xl
 border-2	p-4 m-4 shadow-lg basis-64	 grow	shrink"
      >
        <h3 className="flex justify-center">Erik</h3>
        <img src={logo} className="h-40"></img>
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
          <li>Geschäftsführerin</li>
          <li>Master of Science</li>
          <li>Bachelor of Science</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
