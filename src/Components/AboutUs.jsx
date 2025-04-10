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

const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center gap-8 max-w-[1280px] mx-auto items-center py-6 px-8 md:px-16">
        <h1 className="text-black text-[36px] font-bold ">Check out our latest article</h1>
        <div className=""></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] overflow-hidden shadow-md transition hover:shadow-xl"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-[#1F1534] leading-snug">
                  {article.title}
                </h3>
                <p className="text-[#7D7987] text-sm">{article.description}</p>
                <a
                  href="#"
                  className="text-[#4089ED] text-sm font-medium flex items-center gap-2"
                >
                  Read more <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
