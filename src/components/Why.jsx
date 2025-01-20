import React from "react";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import { send } from "../assets/images.js";
import "../index.css";

function Why() {
  return (
    <div className="w-full flex flex-col justify-center items-center text-white absolute top-[1300px] md:top-[1510px] lg:top-[1530px] xl:top-[1650px]">
      <div className="mb-16 sm:mb-20">
        <h1
          id="why"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-Itim"
        >
          Why choose us?
        </h1>
        <svg
          className="absolute left-[50%] translate-x-[-70%] top-0 md:top-1 lg:top-0 w-[170px] md:w-[200px] lg:w-[260px] xl:w-[320px] h-auto"
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
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 xl:gap-14 mb-20">
        <Card />
      </div>

      <div>
        <Button
          className="bg-[#f5f5dc] shadow-[0px_0px_10px_5px_rgba(18,133,255,1)] w-44 sm:w-64 h-10 sm:h-14 text-black hover:bg-[#f5f5dcdd] transition-all animate-blink-shadow"
          text="Send us a Message"
          image={send}
          onClick={() =>
            window.open(
              "https://wa.me/919928657477?text=Hi%20there,%20I%20want%20to%20know%20more%20about%20your%20services!",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
}

export default Why;
