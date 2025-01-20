import React from "react";

function Accordion(props) {
  return (
    <div className="border-b border-[rgba(187,187,187,0.1)] lg:py-2 xl:py-3 lg:pl-10 lg:pr-8 xl:pl-16 xl:pr-12">
      <button
        className="w-full p-4 text-left text-white text-sm md:text-base xl:text-lg font-medium"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } 
		  transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          props.isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-8 text-[rgba(186,184,184,1)] text-xs md:text-sm xl:text-base font-normal">
          {props.data}
        </div>
      </div>
    </div>
  );
}

export default Accordion;