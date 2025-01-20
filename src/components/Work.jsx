import React from "react";
import ProjectSwiper from "./ProjectSwiper";

function Work() {
  return (
    <div
      id="work"
      className="w-full flex flex-col justify-center items-center absolute top-[650px] md:top-[730px] xl:top-[750px] text-white"
    >
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-Itim mb-6 sm:mb-16">
          Our Work
        </h1>
        <svg
          className="absolute left-[50%] translate-x-[-50%] top-0 md:top-1 lg:top-0 w-[170px] md:w-[200px] lg:w-[260px] xl:w-[320px] h-auto"
          viewBox="0 0 300 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 80 Q280 50 250 80"
            stroke="#5b1aff"
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>

      <div>
        <ProjectSwiper />
      </div>
    </div>
  );
}

export default Work;
