import React from "react";
import image1 from "../assets/image 2.png";
import image2 from "../assets/image 2 (1).png";
import image3 from "../assets/image 3.png";


const articles = [
  {
    image: image1, // update with actual paths
    title: "Disease detection, check up in the laboratory",
    description:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    image: image2,
    title: "Herbal medicines that are safe for consumption",
    description:
      "Herbal medicine is very widely used at this time because of its very good for your health...",
  },
  {
    image: image3,
    title: "Natural care for healthy facial skin",
    description:
      "A healthy lifestyle should start from now and also for your skin health. There are some...",
  },
];

const AboutUs = ({ id }) => {
  return (
    <div id={ id } className="w-full">
      <div className="flex flex-col justify-center gap-8 max-w-[1280px] mx-auto items-center py-6 px-8 md:px-16">
        <h1 className="text-black text-4xl font-bold ">Check out our latest article</h1>
        <div className="w-[56px] h-[2px] rounded-[5px] mb-8 bg-[#000]"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mb-8 w-full">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] overflow-hidden shadow-md transition hover:shadow-xl"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-black leading-snug">
                  {article.title}
                </h3>
                <p className="text-[#7D7987] text-lg ">{article.description}</p>
                <a
                  href="#"
                  className="text-[#4089ED] text-lg font-semibold flex items-center gap-2"
                >
                  Read more <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[200px] h-[56px] rounded-[55px] mb-8 border-[1.4px] border-[#458FF6] flex items-center justify-center cursor-pointer gap-2">
            <p className="text-[#458FF6] text-[18px] font-bold ">
              View all
            </p>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
