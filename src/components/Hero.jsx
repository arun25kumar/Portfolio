import React, { useEffect, useState } from "react";
import Heroimg from "../assets/heroimg.jpg";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./Animation.css";
import circle from "../assets/Circle.png"
import wave from "../assets/wave.png"
import { MdOutlineEmail } from "react-icons/md";

const Hero = () => {
  const [exp, setExp] = useState(0);
  const [pro, setPro] = useState(0);
  const [comp, setComp] = useState(0);

  useEffect(() => {
    const incre = (setter, target, interval) => {
      const time = Math.ceil(target / 50);
      const timer = setInterval(() => {
        setter((prev) => {
          if (prev >= target) {
            clearInterval(timer);
            return target;
          }
          return prev + time;
        });
      }, interval);
    };

    incre(setExp, 24, 50);
    incre(setPro, 12, 50);
    incre(setComp, 2, 50);
  }, []);

  return (
    <div className=" lg:mx-[251px]  px-[24px]  ">
      {/* Header */}
      <div className=" flex justify-center mt-10 text-[36px] text-center lg:text-5xl pt-10 leading-normal lg:leading-[4rem] ">
        <h1 className=" ">
          Hi 👋, I'm <br />
          Arunkumar <br />
          <span className="hero-animation font-semibold">Full Stack Developer</span>
        </h1>
      </div>

      {/* Content */}
      <div className="flex lg:flex-row flex-col lg:gap-0  gap-14 lg:justify-between justify-center items-center  text-[16px] font-medium relative ">
        {/* Left Section */}
        <div className="flex flex-col lg:gap-0 mt-3  gap-8 lg:w-[250px]  w-full">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-[#848f93] text-[16px]">BIOGRAPHY</p>
            <p className="my-5 text-gray-800 text-[18px]">
              Hi, I'm Arunkumar, a skilled web developer with expertise in
              creating and delivering dynamic, user-friendly web solutions.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2000">
            <p className="text-[#848f93] text-[16px] my-5">CONTACT</p>
            <p className=" text-gray-800 text-[18px]">Viraganur, Madurai</p>   
            <p className=" text-gray-800 text-[18px]">arunkumar250421@gmail.com </p>  
             <p className=" text-gray-800 text-[18px]">+91 9087776293</p> 
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <p className="text-[#848f93] text-[16px] my-5">SERVICES</p>
             <p className=" text-gray-800 text-[18px]">UI/UX design</p> 
             <p className=" text-gray-800 text-[18px]">Digital Animation</p> 
             <p className=" text-gray-800 text-[18px]">Fullstack Web Development</p> 
          </div>
        </div>

        {/* Center Section */}
        <div className="" data-aos="flip-left">
          <img
            className="lg:w-[400px] lg:h-[580px] lg:mt-20 w-full h-auto  rounded-[30px] flex items-center"
            src={Heroimg}
            alt="Hero"
          />
        </div>

        {/* Right Section */}
        <div className="flex lg:ps-16  ps-0 flex-col lg:gap-20 gap-8 lg:w-[250px] w-full lg:text-end text-center ">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-[#848f93] text-[16px]"> COMPLETED PROJECTS</p>
            <h1 className="my-5 text-[36px]">{exp}+</h1>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2000">
            <p className="text-[#848f93] text-[16px]"> TECHNICAL SKILLS</p>
            <h1 className="my-5 text-[36px]">{pro}+</h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <p className="text-[rgb(132,143,147)] text-[16px]">LET'S CONNECT</p>
            <h1 className="md:text-[36px] flex lg:justify-end  justify-center gap-5 pt-[20px]  text-[40px]">
              {" "}
           <a href="http://www.linkedin.com/in/arun2504">  <CiLinkedin className="hover:animate-ping" data-aos="flip-left" data-aos-duration="3000" /></a>  
             <a href="https://github.com/arun25kumar"> <FaGithub className="hover:animate-ping"
                data-aos="zoom-in  "
                data-aos-duration="2000"
              /></a>
              <a href="www.gmail.com"><MdOutlineEmail className="hover:animate-ping" data-aos="flip-right" data-aos-duration="3000" /></a>
            </h1>
          </div>
        </div>
      </div>
      <img
  src={circle}
  className="absolute top-36 opacity-30 lg:w-80 w-0  right-[-130px] clock-wise"
  alt=""
/>
<div className="">
  <img src={wave} className=" absolute bottom-10 left-0 opacity-10 w-40" alt="" />

</div>
     
      <div className="lg:bg-black lg:w-full mt-24 h-[0.5px] flex items-center    "></div>
    </div>
  );
};

export default Hero;
