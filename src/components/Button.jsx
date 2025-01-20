import React from "react";

function Button({ className, text, image, onClick }) {
  return (
    <div>
      <button
        className={`flex justify-center items-center gap-3 font-medium text-xs md:text-sm xl:text-base rounded-[8px] sm:rounded-[10px] ${className}`}
        onClick={onClick}
      >
        {text} {image ? <img className="w-5 sm:w-7" src={image} alt={text} /> : ""}
      </button>
    </div>
  );
}

export default Button;
