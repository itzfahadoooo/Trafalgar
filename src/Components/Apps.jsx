import React from 'react'
import image from "../assets/trafalgar-illustration sec03 1.png"

const Apps = () => {
  return (
    <div className="w-full">
          <div className="max-w-[1280px] justify-center mx-auto flex items-center py-6 px-8 md:px-16 md:justify-between flex-wrap">
            <div className="w-[445px] h-auto flex flex-col gap-[24px]">
              <h1 className="text-[#000] text-[48px] font-bold">
              Download our 
              mobile apps              </h1>
              <p className="text-[#7D7987] text-[21px] font-light">
              Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely
              </p>
              <div className="w-[200px] h-[56px] text-center rounded-[55px] bg-[#458FF6] flex items-center justify-center">
                <p className="text-white text-[18px] font-bold cursor-pointer">Download</p>
              </div>
            </div>
            <img src={image} alt="" className="w-[492px] h-[340px]" />
          </div>
        </div>
  )
}

export default Apps