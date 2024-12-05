import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "../../src/assets/Arun.pdf"
import loogo from "../assets/loogo.png"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // const opener = () => {
  //   setIsMobile(!isMobile);
  // };

  return (
    <>
      <header className=" md:py-4 bg-[#fafafa]  top-0 sticky w-full z-50  ">
        <div
          className="flex justify-between items-center px-[24px] md:px-[251px]  "
          data-aos="zoom-in"
        >
          <a className="text-[24px]   " href="">
            <img src={loogo} className=" w-28   " alt="" />
          </a>
          <ul className=" md:flex  hidden gap-16 items-center ">
            <li className="text-[18px]   text-[#8a8f93]  hover:text-blue-600">
              <a href="#" > Home</a>
            </li>
            <li className="text-[18px]  text-[#8a8f93]  hover:text-blue-600">
              <a href="#skills" >Skills</a>
            </li>
            <li className="text-[18px]  text-[#8a8f93]  hover:text-blue-600">
              <a href="#qual" >Qualification</a>
            </li>
            <li className="text-[18px]  text-[#8a8f93]  hover:text-blue-600">
              <a href="#project" >Projects</a>
            </li>
            <li className="text-[18px]  text-[#8a8f93]  hover:text-blue-600">
              <a href="#contact" >Contact</a>
            </li>
          </ul>
          <button className="text-[18px] md:flex  hidden   text-gray-700 bg-[#b9d6ef] px-6 py-3 rounded-md  ">
           <a href={resume}> Download CV</a> 
          </button>
          <p className="lg:hidden flex ">
            <GiHamburgerMenu onClick={() => setIsMobile(!isMobile)} />
          </p>
        </div>
        <ul
          className={`lg:hidden flex flex-col items-center justify-center gap-3 bg-white w-full h-auto py-7 fixed top-16 left-0 transition-transform duration-500 text-black ${
            isMobile ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li className="text-[20px]   text-[#8a8f93]">
            <a href="#" onClick={() => setIsMobile(!isMobile)}> Home</a>
          </li>
          <li className="text-[20px]  text-[#8a8f93]">
            <a href="#skills" onClick={() => setIsMobile(!isMobile)}>Skills</a>
          </li>
          <li className="text-[20px]  text-[#8a8f93]">
            <a href="#qual" onClick={() => setIsMobile(!isMobile)}>Qualification</a>
          </li>
          <li className="text-[20px]  text-[#8a8f93]">
            <a href="#project" onClick={() => setIsMobile(!isMobile)}>Projects</a>
          </li>
          <li className="text-[20px]  text-[#8a8f93]">
            <a href="#contact" onClick={() => setIsMobile(!isMobile)}>Contact</a>
          </li>
          <button className="text-[18px]   text-gray-700 bg-[#b9d6ef] px-6 py-3 rounded-md  " onClick={() => setIsMobile(!isMobile)}>
           <a href={resume}> Download CV</a>
          </button>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
