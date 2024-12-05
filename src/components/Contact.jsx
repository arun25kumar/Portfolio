import React from "react";
import { FaRegComment } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineTouchApp } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import resume from "../../src/assets/Arun.pdf"


const Contact = () => {
  return (
    <>
      <div className=" lg:px-[251px]" id="contact">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-[36px] font-semibold"> Contact Me</h1>
          <p className="text-[17px]  text-[#8a8f93]">Get in touch</p>
        </div>

        <div className="lg:flex justify-center px-[24px] gap-40 mt-20">
          {/* leftpart */}
          <div className=" flex flex-col gap-10  " data-aos="fade-down-left">
            <div className="flex justify-center">
              <h1 className="flex items-center gap-2 text-[18px]">
                {" "}
                <FaRegComment />
                Talk to me
              </h1>
            </div>
  <div className="mt-14">
  <div>
              <p className=" text-[#8a8f93] text-[18px]">Email</p>
              <p className="text-[18px] mt-5">arunkumar250421@gmail.com</p>
            </div>
            <div className="mt-10">
              <p className=" text-[#8a8f93] text-[18px]">Whatsapp</p>
              <p className="text-[18px] mt-2">+91 9087776293</p>
              <p className="flex items-center gap-4 text-[16px] mt-3">
                <a
                  href="https://wa.me/919087776293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5"
                >
                  Write me <FaArrowRight />
                </a>{" "}
              </p>
            </div>
  </div>
           
            <div>
              <p className=" text-[#8a8f93] text-[18px] ">Resume</p>
              <a className="text-[16px] flex items-center gap-4 mt-5" href={resume}>
                Click Here <FaArrowRight />
              </a>
            </div>
          </div>

          {/* rightpart */}
          <div
            className=" flex flex-col gap-10 md:mt-0 mt-10 lg:px-0 px-[24px] "
            data-aos="fade-down-left"
          >
            <div className="flex justify-center">
              <h1 className="flex items-center gap-2 text-[18px] ">
                <MdOutlineTouchApp />
                Get in Touch
              </h1>
            </div>
            <div>
              <form className="flex flex-col gap-5 mt-12 h-[518px] w-full">
                <div>
                  <legend>Name</legend>
                  <input
                    className="p-[20px] border-2 rounded-[40px] lg:w-[360px] w-full  mt-4"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Type your name here"
                    required
                  ></input>
                </div>
                <div>
                  <legend>Email</legend>
                  <input
                    className="p-[20px] border-2 rounded-[40px] lg:w-[360px] w-full mt-4"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Type your name here"
                    required
                  ></input>
                </div>

                <div>
                  <legend>Message</legend>
                  <input
                    className="p-[20px] border-2 rounded-[40px] lg:w-[360px] w-full mt-4"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Type your name here"
                    required
                  ></input>
                </div>
                <div>
                  <div className="flex items-center gap-3 mt-10">
                    <button className=" flex p-5 rounded-2xl text-[18px] font-semibold bg-[#b9d6ef]">
                      {" "}
                      Submit{" "}
                      <p className="text-[24px]">
                      <MdArrowOutward />
                    </p>
                    </button>
                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-black mt-2  w-full h-[0.5px]"></div>
      </div>
    </>
  );
};

export default Contact;
