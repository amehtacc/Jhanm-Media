import React from "react";
import Button from "./Button.jsx";
import { mail, play } from "../assets/images.js";
import Header from "./Header";

function Home() {
  const handleMailRedirect = () => {
    window.location.href =
      "mailto:mehtaaryan2001@gmail.com?subject=Grow%20My%20Business&body=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";
  };

  return (
    <div className="w-full text-white z-10">
      <div className="w-full flex justify-center lg:mt-8 mb-40 sm:mb-48">
        <Header />
      </div>
      <div className="w-full flex flex-col justify-center items-center max-md:px-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-Itim mb-12 md:mb-16">
          Crafting Videos That Captivate
        </h1>
        <svg
          className="absolute top-[195px] max-sm:left-32 sm:top-[184px] md:top-[182px] lg:top-[212px] xl:top-[210px] w-[290px] sm:w-[300px] md:w-[370px] lg:w-[450px] xl:w-[540px] h-auto"
          viewBox="0 0 540 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 110 Q600 50 -100 110"
            stroke="#5b1aff"
            strokeWidth="6"
            fill="none"
          />
        </svg>

        <p className="text-[#c3c2c2] font-Itim text-xs sm:text-sm md:text-base xl:text-lg sm:w-[70%] text-center mb-12 sm:mb-16">
          Tired of videos that look polished but fail to truly engage? Our team
          goes beyond basic edits to bring out the soul of your story, creating
          visuals that captivate and resonate.
        </p>

        <div className="flex max-sm:flex-col max-sm:items-center gap-3 sm:gap-5 mb-10">
          <Button
            className="bg-[#5b1aff] w-44 sm:w-52 md:w-56 xl:w-64 h-10 md:h-11 xl:h-14 hover:bg-[#5b1affdd] transition-all"
            text="Grow my business"
            image={mail}
            onClick={handleMailRedirect}
          />
          <Button
            className="bg-[#f5f5dc] w-40 sm:w-44 md:w-48 xl:w-56 h-10 md:h-11 xl:h-14 text-black hover:bg-[#f5f5dcdd] transition-all"
            text="Explore Videos"
            image={play}
            onClick={() => {
              document
                .querySelector("#work")
                .scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>

        <div className="flex items-center gap-2 am:gap-4">
          <div className="w-1 sm:w-2 h-1 sm:h-2 bg-[#02861d] rounded-full ring-2 ring-[#0c5829]"></div>
          <p className="text-[10px] sm:text-xs text-[#c3c2c2]">
            Typically responds within a few hours
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
