import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Firebase from "../assets/firebase.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies i have worked with </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="Html Icon" className="w-20 mx-auto" />
            <p className="my-4">HTMl</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="Html Icon" className="w-20 mx-auto" />
            <p className="my-4">Css</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="Html Icon" className="w-20 mx-auto" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Javascript} alt="Html Icon" className="w-20 mx-auto" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Node} alt="Html Icon" className="w-20 mx-auto" />
            <p className="my-4">NODE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} alt="Html Icon" className="w-20 mx-auto" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Firebase} alt="Html Icon" className="w-20 mx-auto" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Github} alt="Html Icon" className="w-20 mx-auto" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
