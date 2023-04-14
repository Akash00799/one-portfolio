import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 md:mt-10 text-small-phone text-tablet">
          I am a full stack developer proficient in HTML, CSS, and JavaScript.
          With experience in both front-end and back-end development, I
          specialize in building responsive and dynamic web applications using
          modern frameworks like React , Node.js and Express JS. I am also
          well-versed in database management systems, particularly MongoDB, and
          am committed to creating scalable and secure solutions for my clients.
        </p>

        <br />

        <p className="text-xl md:text-lg text-small-phone text-tablet">
          I am deeply passionate about web development and constantly seek out
          opportunities to expand my knowledge and skillset.I believe that web
          development has the power to transform businesses and society, and I
          am committed to using my skills to create positive change.I am always
          excited to learn about the latest trends and technologies in web
          development, and I make it a priority to stay up-to-date on best
          practices in the field.For me, web development is more than just a job
          – it's a creative outlet that allows me to bring my ideas to life and
          make a difference in the world
        </p>
      </div>
    </div>
  );
}

export default About;
