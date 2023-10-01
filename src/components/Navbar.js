import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="text-2xl text-pink-600 font-bold">HS</div>

      <ul className="hidden md:flex">
        <li className=" px-4 cursor-pointer">Home</li>
        <li className=" px-4 cursor-pointer">About</li>
        <li className=" px-4 cursor-pointer">Skills</li>
        <li className=" px-4 cursor-pointer">Work</li>
        <li className=" px-4 cursor-pointer">Contact</li>
      </ul>

      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 ml-[10px]">
              Linkdin <FaLinkedin size={30} className="mr-[14px]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 ml-[10px]">
              Github <FaGithub size={30} className="mr-[14px]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 ml-[10px]">
              Email <HiOutlineMail size={30} className="mr-[14px]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 ml-[10px]">
              Resume <FaTimes size={30} className="mr-[14px]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
