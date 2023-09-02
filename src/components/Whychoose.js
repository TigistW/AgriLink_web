import React from "react";
import Cards from "./Cards";
import { speed, simplicity, support, transparency, diversity } from "./imports";


function Whychoose() {
  const documents = [
    {
      title: "SIMPLICITY",
      paragraphs:
        "Easily explore our intuitive platform and tools for a stress-free farm investment journey.",
      image : simplicity
      
    },
    {
      title: "SPEED",
      paragraphs:
        "Explore and select promising farm projects quickly with our streamlined investment process.",
      image: speed
    },
    {
      title: "TRANSPARENCY",
      paragraphs:
        " Access detailed farm profiles, projected returns, and associated risks to make informed decisions",
      image: transparency
    }
  ];

    const files = [
      {
        title: "DIVERSITY",
        paragraphs:
          "Access a wide range of farms across diverse regions and crop types for strategic investment opportunities.",
        image: diversity,
      },
      {
        title: "SUPPORT",
        paragraphs:
          "Count on our dedicated team for prompt and reliable assistance throughout your investment journey",
        image: support,
      },
    ];

  return (
    <div className="bg-light-blue mt-[50px] md:mt-[85px] py-10">
      <div className="">
        <h1 className="text-center text-[30px] md:text-[45px] font-bold text-green">
          Why choose Cultify
        </h1>
        <div className="w-5/6 mx-auto md:mt-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mx-auto mt-[30px]">
            {documents.map((item) => (
              <Cards
                image={item.image}
                title={`${item.title}`}
                paragraph={`${item.paragraphs}`}
              />
            ))}
          </div>
          <div className="md:flex md:justify-between md:w-2/3 mx-auto md:mt-10 mt-5">
            <Cards
              image = {files[0].image}
              title={files[0].title}
              paragraph={files[0].paragraphs}
            />
            <div className="mt-5 md:mt-0">
              <Cards
                image={files[1].image}
                title={files[1].title}
                paragraph={files[1].paragraphs}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychoose;
