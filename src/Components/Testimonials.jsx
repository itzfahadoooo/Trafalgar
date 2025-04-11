import React from "react";
import profile from "../assets/Group 5.png";
import { ArrowLeft, ArrowRight, Dot } from "lucide-react";

const Testimonials = ({ id }) => {
  return (
    <div id={ id } className="w-full flex flex-col gap-10 items-center justify-center px-4 pt-24">
      <div className="w-full max-w-6xl py-8 px-6 md:p-16 flex flex-col items-center justify-center gap-8 rounded-[24px] bg-gradient-to-br from-[#67C3F3] to-[#5A98F2]">
        
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          What our customer are saying
        </h1>
        <div className="w-[56px] h-[2px] rounded-[6px] bg-white"></div>


        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
            <img
              src={profile}
              alt="Customer profile"
              className="w-[100px] md:w-[133px]"
            />
            <div>
              <h2 className="text-white text-lg md:text-[22px] font-bold">
                Edward Newgate
              </h2>
              <p className="text-white/85 text-sm md:text-[18px]">
                Founder Circle
              </p>
            </div>
          </div>

          <p className="text-white/90 text-sm md:text-[19px] max-w-md">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedious forms, long calls, or
            administrative hassle) and securely”
          </p>
        </div>
      </div>
      <div className=" hidden md:flex text-[#91d7fd] gap-8 cursor-pointer">
        <ArrowLeft size={31} />
        <div className="flex">
          <Dot className="text-[#458FF6]" size={31}/>
          <Dot size={31}/>
          <Dot size={31}/>
          <Dot size={31}/>
        </div>
        <ArrowRight className="text-[#458FF6]" size={31}/>
      </div>
    </div>
  );
};

export default Testimonials;
