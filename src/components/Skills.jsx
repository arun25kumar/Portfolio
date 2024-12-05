import React from "react";
import Html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/media.png";
import javascript from "../assets/js.png";
import tailwindcss from "../assets/Tailwind CSS.png";
import reactjs from "../assets/Reactjs.png";
import git from "../assets/Git.png";
import figma from "../assets/figma.png";
import canva from "../assets/canva-icon.png";
import node from "../assets/nodejs.png";
import mango from "../assets/monogo-db.png";
import webdev from "../assets/webdev.png";
import webdes from "../assets/webdes.png";
import tri from "../assets/triangle.png"
import line from "../assets/line.png"
import backend from "../assets/backend.png"
import express from "../assets/express.png"

const Skills = () => {
  return (
    <>
      <div id="skills">
      
        <div className="lg:px-[251px] relative ">
          {/* skilltopic */}
          <div className="mt-10 mb-16  " data-aos="flip-up">
            <div className="flex justify-center text-[40px] font-semibold ">
              <h1>Skills</h1>
            </div>
            <div
              className="flex justify-center text-[18px] text-[#8a8f93]"
              data-aos="flip-up"
            >
              <p>My Favorite Skills</p>
            </div>
          </div>
          {/* web developer */}
          <div className=" md:flex   px-[24px]  ">
            <div className="md:w-6/12 w-full">
              <div
                className="  text-[#27292a] text-[20px]  flex gap-2 items-center justify-center  "
                data-aos="fade-right"
              >
                <img src={webdev} className="w-10  " alt="" />
                <h2> FrontEnd</h2>
              </div>
              <div data-aos="fade-right">
                <div className="flex md:justify-evenly mt-10 justify-evenly">
                  <div>
                    <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px] ">
                      <img className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50" src={Html} alt="" />
                    </div>
                    <h3 className=" mx-5 mt-5">HTML</h3>
                    <span className="mx-3  text-[#8a8f93]">Advance</span>
                  </div>
                  <div>
                    <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                      <img className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50" src={css} alt="" />
                    </div>
                    <h3 className=" mt-5 mx-5">CSS</h3>
                    <span className="mx-3  text-[#8a8f93]">Advance</span>
                  </div>{" "}
                  <div>
                    <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                      <img
                        className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50"
                        src={bootstrap}
                        alt=""
                      />
                    </div>
                    <h3 className=" mt-5 ms-3">Bootstrap</h3>
                    <span className="mx-3 text-[#8a8f93]">Advance</span>
                  </div>
                </div>
                <div className="flex justify-evenly mt-28">
                  <div>
                    <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                      <img
                        className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50"
                        src={javascript}
                        alt=""
                      />
                    </div>
                    <h3 className=" mt-5 ms-2">Javascript</h3>
                    <span className="ms-0  text-[#8a8f93]"> intermediate</span>
                  </div>
                  <div>
                    <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                      <img
                        className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50"
                        src={tailwindcss}
                        alt=""
                      />
                    </div>
                    <h3 className="mt-5 ">Tailwindcss</h3>
                    <span className="ms-3  text-[#8a8f93]">Advance</span>
                  </div>{" "}
                  <div>
                    <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                      <img className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50" src={reactjs} alt="" />
                    </div>
                    <h3 className="ms-3 mt-5">React js</h3>
                    <span className="ms-0  text-[#8a8f93]"> intermediate</span>
                  </div>
                </div>
                <div className=" flex justify-evenly  mt-10">
                  
                </div>
              </div>
            </div>
            <div></div>
            <div  className="flex flex-col md:w-6/12 md:mt-0 w-full mt-10 "  >
            <div className=" text-[#27292a] text-[20px] flex justify-center gap-5" data-aos="fade-right">
            <img src={webdes} className="w-10" alt="" />

              <h2> Web Designer / VCS</h2>
            </div>
               
               <div className="flex justify-evenly  mt-10" data-aos="fade-left">
               <div>
              <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                <img className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50 " src={figma} alt="" />
              </div>
              <h3 className="ms-3 mt-5"> Figma</h3>
              <span className="ms-0  text-[#8a8f93]">intermediate</span>
            </div>
            <div>
              <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                <img className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50 " src={canva} alt="" />
              </div>
              <h3 className="ms-3 mt-5"> Canva</h3>
              <span className="ms-1  text-[#8a8f93]">Advance</span>
            </div>
            <div>
                    <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                      <img className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50 " src={git} alt="" />
                    </div>
                    <h3 className="ms-7 mt-5">Git</h3>
                    <span className="ms-0  text-[#8a8f93]"> intermediate</span>
                  </div>


            </div>
               <div >
                <div className="flex justify-center mt-10 gap-5" data-aos="fade-right">
                <img src={backend} className="w-10" alt="" />
                <h1 className="text-[20px]">Backend</h1>
                </div>
              <div className="flex justify-evenly mt-10" data-aos="fade-left">
              <div>
                    <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                      <img className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50 " src={node} alt="" />
                    </div>
                    <h3 className="ms-2 mt-5">Node js</h3>
                    <span className="ms-1  text-[#8a8f93]">Beginner</span>
                  </div>
                  <div>
                    <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                      <img className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-50 " src={mango} alt="" />
                    </div>
                    <h3 className="ms-1 mt-5">Mongo DB</h3>
                    <span className="ms-2 text-[#8a8f93]">Beginner</span>
                  </div>
 <div>
            <div className="flex justify-center items-center w-[80px] h-[100px] bg-[#f2f3f2] rounded-[40px]">
                <img className="w-[45px] h-[40px] hover:animate-bounce transition-all duration-500" src={express} alt="" />
              </div>
              <h3 className="ms-3 mt-5">Express js</h3>
              <span className="ms-3  text-[#8a8f93]">Beginner</span>
            </div>
              </div>
           


          </div>


          </div>
          
          </div>
          <div className=" lg:bg-black mt-16  w-full h-[0.5px] " >
       

       </div>
       <div className="absolute top-0 left-[-100px] w-96 opacity-35 clock-wise">
          <img src={tri} alt="" />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Skills;
