import React from "react";
import search from "../assets/Search.svg";
import drug from "../assets/Drug.svg";
import consult from "../assets/Consult.svg";
import details from "../assets/Details.svg";
import emergency from "../assets//Emergency.svg";
import tracking from "../assets/Tracking.svg";
import image from "../assets/trafalgar-illustration sec02 1.png";

const services = [
  {
    id: 1,
    icon: search,
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialists, general, and trusted hospitals.",
  },
  {
    id: 2,
    icon: drug,
    title: "Online pharmacy",
    description:
      "Buy your medicines with our mobile application with a simple delivery system.",
  },
  {
    id: 3,
    icon: consult,
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recommendations.",
  },
  {
    id: 4,
    icon: details,
    title: "Details info",
    description:
      "Free consultation with our trusted doctors and get the best recommendations.",
  },
  {
    id: 5,
    icon: emergency,
    title: "Emergency care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family.",
  },
  {
    id: 6,
    icon: tracking,
    title: "Tracking",
    description: "Track and save your medical history and health data.",
  },
];

const Services = () => {
  return (
    <div className="w-full py-12 md:mb-24">
      <div className="flex flex-col justify-center gap-8 max-w-[1280px] mx-auto items-center py-6 px-8 md:px-16">
        <h1 className="text-[36px] font-bold text-center text-black">
          Our Services
        </h1>
        <div className="w-[56px] h-[2px] rounded-[5px] bg-[#000]"></div>
        <p className="text-center text-[#7D7987] text-[18px] mb-12 ">
          We provide to you the best choices for you. Adjust it to your health
          needs and make sure you undergo treatment with our highly qualified
          doctors. You can consult with us which type of service is suitable for
          your health.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-start bg-white  rounded-2xl p-6 text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 gap-6 cursor-pointer"
            >
              <img src={service.icon} alt="" className="w-20 h-20" />
              <h2 className="text-[20px] font-bold ">{service.title}</h2>
              <p className="text-[#7D7987] text-[16px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[200px] h-[56px] rounded-[55px] border-[1.4px] border-[#458FF6] flex items-center justify-center cursor-pointer">
          <p className="text-[#458FF6] text-[18px] font-bold ">
            Learn more
          </p>
        </div>
      </div>
      <div className="max-w-[1280px] justify-center mx-auto flex items-center py-6 px-8 md:px-16 md:justify-between flex-wrap gap-8">
        <img src={image} alt="" className="w-md" />
        <div className="w-[445px] h-auto flex flex-col gap-[24px] text-center items-center justify-center">
          <h1 className="text-[#000] text-[48px] font-bold">
          Leading healthcare providers          </h1>
          <p className="text-[#7D7987] text-[21px] font-light">
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
          in the solutions we deliver
          </p>
          <div className="w-[200px] h-[56px] rounded-[55px] border-[1.4px] border-[#458FF6] flex items-center justify-center  cursor-pointer">
          <p className="text-[#458FF6] text-[18px] font-bold">
            Learn more
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
