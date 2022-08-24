import code from "../img/code.svg";

function Service() {
  return (
    <div className="bg-[#88e2fb]">
      <h3 className="justify-center m-auto flex p-4">Leistungen</h3>
      <div className="flex flex-wrap  m-auto w-4/5 justify-center">
        <div className="flex w-1/3 flex-col p-2 rounded-xl border-2 basis-44 m-2">
          <h3 className="mb-2">Web Development</h3>
          <img src={code} className="h-8 m-1 "></img>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
        </div>
        <div className="flex w-1/3 flex-col p-2 rounded-xl border-2 basis-44 m-2">
          <h3 className="mb-2">Web Design</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
        </div>
        <div className="flex w-1/3 flex-col p-2 rounded-xl border-2 basis-44 m-2">
          <h3 className="mb-2">Web Development</h3>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
        </div>
      </div>
    </div>
  );
}

export default Service;
