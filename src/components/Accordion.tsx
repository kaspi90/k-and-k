import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  open: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  open,
}) => {
<<<<<<< HEAD
  const [active, setActive] = useState(false);
  const [opener, setOpener] = useState(open);
=======
  const [active, setActive] = useState(open);
>>>>>>> 7950621c2df78b6adc4974ae54a335d484c455e9
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");
  const targetRef = useRef();

  const contentSpace = useRef(null);

  const initialHeight = async () => {
    // @ts-ignore

    setHeight(`100%`);

    setRotate("transform duration-700 ease");
  };

  useEffect(() => {
    // Update the document title using the browser API
<<<<<<< HEAD
    if (opener) {
      // @ts-ignore
      setHeight(`${contentSpace.current.scrollHeight}px`);
      // @ts-ignore
      setRotate(
        active
          ? "transform duration-700 ease"
          : "transform duration-700 ease rotate-180"
      );
      setOpener(false);
=======

    if (active) {
      initialHeight();
>>>>>>> 7950621c2df78b6adc4974ae54a335d484c455e9
    }
  }, []);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease rotate-180"
    );
  }

  return (
    <div className="flex flex-col border-2 rounded-xl px-16">
      <button
        className="py-6 box-border appearance-none cursor-pointer  focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-footnote light">{title}</p>
        <FiChevronUp></FiChevronUp>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-10">{content}</div>
      </div>
    </div>
  );
};
