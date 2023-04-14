import React from "react";
import "../Tailwind.css";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full h-20 px-4 text-white bg-black fixed bottom-0">
      <div>
        <p className="text-gray-500">Follow me on:</p>
      </div>
      <div className="flex ml-4">
        <a
          href="https://github.com/yourgithubusername"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-white transition duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedinusername"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-white transition duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://instagram.com/yourinstagramusername"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-white transition duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://facebook.com/yourfacebookusername"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-white transition duration-300"
        >
          <FaFacebook size={20} />
        </a>
        <p className="mx-2 text-gray-500 hidden lg:block">
          Phone: 123-456-7890
        </p>
      </div>
      <div className="flex ml-4 lg:hidden">
        <p className="mx-2 text-gray-500">123-456-7890</p>
      </div>
    </div>
  );
};

export default Footer;
