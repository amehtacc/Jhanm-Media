import React, { useEffect, useState } from "react";
import { Logo, hamburger, hamburger_open } from "../assets/images";
import Button from "./Button.jsx";
import "../index.css";

function Header() {
  const [activeItem, setActiveItem] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Our Work", href: "#work" },
    { label: "Why Us?", href: "#why" },
    { label: "About", href: "#about" },
    { label: "FAQs", href: "#faqs" },
  ];

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsMenuOpen(false);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.pushState({}, "", "/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`w-full max-lg:bg-[#0c0f14] h-[100px] lg:h-[80px] z-50 px-10 lg:px-2 lg:w-[90%] flex items-center lg:gap-20 xl:gap-32 lg:rounded-2xl fixed
        ${
          isScrolled
            ? `${
                isMenuOpen
                  ? ""
                  : "max-lg:shadow-[0px_-1px_7px_rgba(255,255,255,0.2)]"
              } lg:bg-[rgba(41,44,46,0.6)] lg:backdrop-blur-lg lg:border-4 lg:border-[#3d4146] transition-all duration-300`
            : "lg:border-4 lg:border-transparent transition-all duration-200"
        }`}
      >
        {/* Logo */}
        <div className="w-full lg:flex justify-center lg:w-[10%]">
          <img
            className="w-[90px] lg:w-[104px] cursor-pointer"
            src={Logo}
            alt="JHANM Media Logo"
            onClick={scrollToTop}
          />
        </div>

        {/* Desktop Menu */}
        <div className="lg:w-[70%] hidden lg:flex justify-end lg:gap-10 xl:gap-16">
          {menuItems.map((item) => (
            <a
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`font-medium lg:text-sm xl:text-lg border-b-2 ${
                activeItem === item.label
                  ? "border-transparent text-[rgba(237,217,85,1)]"
                  : "border-transparent text-white hover:border-[rgba(237,217,85,1)] transition duration-200"
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="sm:w-[15%] hidden sm:flex justify-end">
          <Button
            onClick={() => {
              document
                .querySelector("#footer")
                .scrollIntoView({ behavior: "smooth" });
                window.history.pushState({}, "", "/#contact");
            }}
            className="sm:w-44 sm:h-14 bg-transparent border border-[#5b5b5b] text-white "
            text="Work With Us"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex ml-sm-xl-5">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? (
              <img className="w-10" src={hamburger_open} alt="Mobile Menu" />
            ) : (
              <img className="w-10" src={hamburger} alt="Mobile Menu" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu rounded-b-xl ${
          isMenuOpen ? "slide-in" : "slide-out"
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.label}
            onClick={() => {
              setActiveItem(item.label);
              setIsMenuOpen(false);
            }}
            href={item.href}
            className={`text-white text-base ${
              activeItem === item.label
                ? "text-[rgba(237,217,85,1)]"
                : "hover:text-[rgba(237,217,85,1)]"
            }`}
          >
            {item.label}
          </a>
        ))}
        <Button
          onClick={() => {
            setIsMenuOpen(false);
            document
              .querySelector("#footer")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="w-36 h-10 hide-sm-lg bg-transparent border border-[#5b5b5b] text-white"
          text="Work With Us"
        />
      </div>
    </>
  );
}

export default Header;
