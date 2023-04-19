import React from "react";
import "../Tailwind.css";
import arrayDestruct from "../assets/portfolio/JPG-2.jpg";
import installNode from "../assets/portfolio/react.webp";
import navbar from "../assets/portfolio/Javascript.jpg";
import reactParallax from "../assets/portfolio/react.webp";
import reactSmooth from "../assets/portfolio/Javascript.jpg";
import reactWeather from "../assets/portfolio/react.webp";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoLink: "https://incomparable-banoffee-04aba0.netlify.app/",
      codeLink: "https://github.com/Akash00799/HtmlFW-Restaurent.git",
    },
    {
      id: 2,
      src: navbar,
      demoLink: "https://fastidious-crisp-0e1d11.netlify.app/",
      codeLink: "https://github.com/Akash00799/Caluculator-JS.git",
    },
    {
      id: 3,
      src: reactSmooth,
      demoLink: "https://spiffy-pony-5b0db6.netlify.app/",
      codeLink: "https://github.com/Akash00799/Musicplayer-JS.git",
    },
    {
      id: 4,
      src: installNode,
      demoLink: "https://rainbow-syrniki-3ec202.netlify.app/",
      codeLink: "https://github.com/Akash00799/KBCproject-React.git",
    },
    {
      id: 5,
      src: reactWeather,
      demoLink: "https://grand-donut-f4b6e7.netlify.app/",
      codeLink: "https://github.com/Akash00799/flagreactx.git",
    },
    {
      id: 6,
      src: reactParallax,
      demoLink: "https://stunning-hotteok-1ae1e3.netlify.app/",
      codeLink: "https://github.com/Akash00799/tictacreact.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
