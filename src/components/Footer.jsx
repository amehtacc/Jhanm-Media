import React from "react";
import { Logo, paypal, upi } from "../assets/images.js";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.pushState({}, "", "/");
  };
  return (
    <>
      <div
        id="footer"
        className="w-full h-auto py-14 md:py-24 lg:py-32 md:px-12 lg:px-16 xl:px-28 text-white flex max-sm:flex-col justify-center items-center max-sm:gap-10 shadow-[0px_-5px_10px_rgba(18,133,255,0.2)] animate-footer-blink-shadow"
      >
        <div className="w-[80%] md:w-[50%] lg:w-[40%] xl:w-[50%] md:pr-[70px] lg:pr-20 xl:pr-28 flex flex-col gap-2 sm:gap-4">
          <img
            className="w-[100px] xl:w-[150px] cursor-pointer"
            src={Logo}
            alt="JHANM Media Logo"
            onClick={scrollToTop}
          />
          <p className="text-sm xl:text-base">
            We are a video editing agency, helping creators and businesses grow
            through high conversion videos.
          </p>
        </div>
        
        <div className="w-[80%] md:w-[50%] lg:w-[60%] xl:w-[50%] md:pl-28 lg:pl-0 lg:flex justify-center items-center">
          <div className="md:w-full lg:w-1/2 flex flex-col lg:items-center mb-8 lg:mb-0">
            <div className="flex flex-col gap-2 sm:gap-4">
              <h3 className="font-semibold text-base">CONTACT</h3>
              <p className="text-sm xl:text-base">mehtaaryan2001@gmail.com</p>
            </div>
          </div>
          <div className="md:w-full lg:w-1/2 flex flex-col lg:items-center">
            <div className="flex flex-col gap-2 sm:gap-4 relative top-[10px]">
              <h3 className="font-semibold text-base">ACCEPTED PAYMENTS</h3>
              <div className="flex gap-10">
                <img className="w-[45px]" src={paypal} alt="PayPal" />
                <img className="w-[60px]" src={upi} alt="UPI" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full h-1 border-gray-800" />

      <div className="w-full h-20 sm:h-14 sm:px-16 text-xs lg:text-sm xl:text-base text-white flex max-sm:gap-3 max-sm:flex-col justify-center sm:justify-between items-center">
        <p className="text-center">
          Copyright © 2024 JHANM Media. All rights reserved.
        </p>
        <p>Build with {`<3`} by Aryan</p>
      </div>
    </>
  );
}

export default Footer;
