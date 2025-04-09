import React from "react";
import image from "../assets/trafalgar-header illustration 1.png";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] justify-center mx-auto flex items-center py-6 px-8 md:px-16 md:justify-between flex-wrap">
        <div className="w-[445px] h-auto flex flex-col gap-[24px]">
          <h1 className="text-[#000] text-[48px] font-bold">
            Virtual healthcare for you
          </h1>
          <p className="text-[#7D7987] text-[21px] font-light">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <div className="w-[200px] h-[56px] text-center rounded-[55px] bg-[#458FF6] flex items-center justify-center">
            <p className="text-white text-[18px] font-bold cursor-pointer">Consult today</p>
          </div>
        </div>
        <img src={image} alt="" className="w-[492px] h-[432px]" />
      </div>
    </div>
  );
};

export default Hero;
