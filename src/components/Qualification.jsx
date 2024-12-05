import React from "react";
import { FaPencilRuler } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

const Qualification = () => {
  return (
    <>
      <div   id="qual" className="lg:px-[251px]"> 
        <div  className="flex  justify-center mt-10" data-aos="flip-up">
          <h1 className="text-[40px] font-semibold">Qualification</h1>
        </div>
        <div className="flex justify-center" data-aos="flip-up">
          <p className="text-[18px]  text-[#8a8f93]">Experience & Education</p>
        </div>
        <div className="lg:flex justify-between px-[24px]">
          <div className="flex flex-col gap-6 " data-aos="fade-right">
            <div className="flex my-10 justify-center">
              <div className="flex items-center w-6/12 justify-center gap-5 text-[30px]">
                <FaPencilRuler  className=""/>
                <span className="text-[20px] text-[#27292a]">Education</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-[21px]">
                B.E Computer Science Engineering-{" "}
                <span className="text-[15px] font-semibold">7.9 CGPA</span>
              </h3>
              <p className="text-[16px] text-[#8a8f93]">
                Velammal College of Engineering and Technology - Madurai{" "}
              </p>
              <p className="text-[14px] text-[#8a8f93]"> 2021 - 2024</p>
            </div>
            <div className="space-y-3"  >
              <h3 className="text-[20px]">
                Diploma in Electronics and Communication <br /> Engineering -{" "}
                <span className="text-[15px] font-semibold">89%</span>
              </h3>
              <p className="text-[16px] text-[#8a8f93]">
                Nagasiva Polytechnic College - Madurai{" "}
              </p>
              <p className="text-[14px] text-[#8a8f93]">2018 - 2021</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 " data-aos="fade-right">
            <div className="flex my-10 justify-center">
              <div className="flex items-center w-6/12 justify-center gap-5 text-[30px]">
                <PiCertificateBold className="" />{" "}
                <span className="text-[20px] text-[#27292a]">Certificate</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-[20px]">Full Stack Web Development (MERN)</h3>
              <p className="text-[#8a8f93]">Inetz Technologies -Chennai</p>
              <p className="text-[#8a8f93]">2024(Aug) - Date</p>
            </div>
          </div>
        </div>

        <div className="bg-black mt-16  w-full h-[0.5px]">
       

       </div>
      </div>
    </>
  );
};

export default Qualification;
