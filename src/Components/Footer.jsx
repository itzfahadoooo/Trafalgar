import React from "react";
const footerLinks = [
  {
    title: "Company",
    items: ["About", "Testimonials", "Find a doctor", "Apps"],
  },
  {
    title: "Region",
    items: ["Indonesia", "Singapore", "Hongkong", "Canada"],
  },
  {
    title: "Help",
    items: ["Help center", "Contact support", "Instructions", "How it works"],
  },
];

const Footer = () => {
  return (
    <footer className="w-full h-96 bg-[linear-gradient(183deg,_#67C3F3_-8.57%,_#5A98F2_82.96%)] text-white pt-12 pb-6 px-8 md:px-16 mt-8">
      <div className="max-w-[1280px] justify-center mx-auto flex items-center py-6 px-8 md:px-16 md:justify-between flex-wrap">
        <div className="w-sm flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex justify-center w-[41px] h-[41px] rounded-full border bg-white items-center">
              <p className="text-[#5B9BF3] text-[26px] font-bold">T</p>
            </div>
            <h1 className=" text-[24px] font-bold ">Trafalgar</h1>
          </div>
          <p className=" text-[18px] font-light ">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className="text-[16px] font-light">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="text-[20px] font-bold leading-[60px]">{section.title}</h4>
            <ul className="text-[18px] font-light leading-[38px]">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
