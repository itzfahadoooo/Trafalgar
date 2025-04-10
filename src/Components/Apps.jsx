import React from "react";
import image from "../assets/trafalgar-illustration sec03 1.png";
import { ArrowDown } from "lucide-react";

const Apps = () => {
  return (
    <div className="w-full mb-24">
      <div className="max-w-[1280px] justify-center mx-auto flex items-center py-6 px-8 md:px-16 md:justify-between flex-wrap gap-8">
        <div className="w-[445px] h-auto flex flex-col gap-8 items-center justify-center text-center">
          <h1 className="text-[#000] text-[48px] font-bold">
            Download our mobile apps{" "}
          </h1>
          <p className="text-[#7D7987] text-[21px] font-light">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <div className="w-[200px] h-[56px] rounded-[55px] border-[1.4px] border-[#458FF6] flex items-center justify-center cursor-pointer gap-2">
            <p className="text-[#458FF6] text-[18px] font-bold ">
              Download
            </p>
            <ArrowDown color="#458FF6" size={24} />
          </div>
        </div>
        <img src={image} alt="" className="w-md" />
      </div>
    </div>
  );
};

export default Apps;
