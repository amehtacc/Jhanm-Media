import React, { useState } from "react";
import Accordion from "./Accordion";

function Faqs() {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "How fast will I receive my videos?",
      data: `The delivery time depends on the complexity of your project. Typically, it takes 1-3 days to deliver polished videos while maintaining high quality.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "Can I request revisions to my videos?",
      data: `Yes, we offer unlimited revisions to ensure your video meets your expectations. We’re not satisfied until you are.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "What types of videos can you edit?",
      data: `We specialize in editing YouTube videos, short-form content like Instagram Reels, corporate videos, tutorials, vlogs, gaming and more. Let us know your specific needs!`,
      isOpen: false,
    },
    {
      key: 4,
      title: "Do I need to provide any specific materials for editing?",
      data: `Yes, please provide raw footage, a brief description of your vision, and any logos, music, or branding elements you’d like included.`,
      isOpen: false,
    },
    {
      key: 5,
      title: "What if I don’t like the final video?",
      data: `If the video doesn't meet your expectations, we’ll work closely with you to understand your feedback and make additional revisions until you’re completely satisfied. Our goal is to ensure you love the final product.`,
      isOpen: false,
    },
    {
      key: 6,
      title: "Do I need to make an advance payment?",
      data: `Yes, we require a 50% advance payment before starting the project to ensure commitment from both sides. The remaining balance is due upon delivery of the final video. You can review the progress and request revisions throughout the process. If you have any concerns, feel free to discuss payment details with us during a call. Your satisfaction and security are our top priorities.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div
      id="faqs"
      className="w-full text-white relative flex flex-col justify-center items-center gap-12 mb-28 sm:mb-44"
    >
      <div>
        <h1 className="hidden sm:flex text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-Itim mb-16">
          Frequently asked questions
        </h1>
        <h1 className="sm:hidden text-4xl font-Itim mb-5">
          FAQ's
        </h1>
        <svg
          className="absolute left-[50%] translate-x-[-50%] sm:translate-x-[-70%] top-3 w-[350px] sm:w-[400px] md:w-[540px] lg:w-[670px] xl:w-[800px] h-auto"
          viewBox="0 0 800 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 80 Q880 50 350 90"
            stroke="#5b1aff"
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>

      <div className="w-[80%] lg:w-[60%] xl:w-[50%]">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  );
}

export default Faqs;
