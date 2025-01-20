import React from "react";
import { aryan } from "../assets/images.js";

function About() {
  return (
    <div
      id="about"
      className="w-full text-white flex flex-col justify-center items-center mb-32 md:mb-40 lg:mb-44 xl:mb-56"
    >
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-Itim">About Us</h1>
        <svg
          className="relative left-[50%] translate-x-[-50%] -top-[39px] md:-top-[45px] lg:-top-[59px] xl:-top-[72px] w-[170px] md:w-[200px] lg:w-[260px] xl:w-[320px] h-auto"
          viewBox="0 0 300 100"
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
      <div className="w-[80%] sm:w-[90%] md:w-[80%] flex max-sm:flex-col max-sm:items-center max-sm:gap-14">
        <div className="w-52 sm:w-1/2 flex justify-center items-center">
          <img
            className="sm:w-[200px] md:w-[220px] lg:w-[280px] xl:w-[400px] rounded-2xl border-[3px] bg-[#646464] shadow-[20px_20px_rgba(50,50,50,1)]"
            src={aryan}
            alt="Founder"
          />
        </div>
        <div className="sm:w-1/2 md:px-6 lg:px-10 xl:px-20 flex flex-col justify-center text-justify text-xs lg:text-sm xl:text-base">
          At JHANM Media, we are passionate about bringing your vision to life
          through exceptional video editing services. <br />
          <br />
          Our team of skilled editors specializes in transforming raw footage
          into captivating content that aligns with your brand and goals. <br />
          <br />
          With a focus on quality, creativity, and timely delivery, we aim to
          help creators, businesses, and individuals tell their stories
          effectively. Whether it’s YouTube videos, corporate presentations, or
          social media content, we’re here to make your ideas shine. <br />
          <br />
          Partner with us to create videos that leave a lasting impression!{" "}
          <br />
          <br />
          <b>- Founder</b>
        </div>
      </div>
    </div>
  );
}

export default About;
