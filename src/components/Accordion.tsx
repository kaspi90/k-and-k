import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  open: boolean;
  color: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  open,
  color,
}) => {
  const [active, setActive] = useState(open);
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

    if (active) {
      initialHeight();
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
    <div
      className={`flex flex-col border rounded-xl px-16 border-gray-700 ${color} dark:bg-gray-600 `}
    >
      <button
        className="py-4 box-border appearance-none cursor-pointer  focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-xl text-footnote m-auto light">
          {title}
        </p>
        <FiChevronDown></FiChevronDown>
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
