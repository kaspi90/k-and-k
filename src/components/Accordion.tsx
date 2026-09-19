import React, { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

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
  const [height, setHeight] = useState(open ? "100%" : "0px");

  const contentSpace = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    setHeight(
      active ? "0px" : `${contentSpace.current?.scrollHeight ?? 0}px`
    );
  }

  return (
    <div
      className={`flex flex-col border rounded-xl px-16 sm:px-8 border-gray-700 ${color} dark:bg-gray-600 `}
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
