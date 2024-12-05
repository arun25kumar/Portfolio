import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import loogo from "../assets/loogo.png"
import { MdOutlineEmail } from "react-icons/md";





const Footer = () => {
  return (
    <>
    <footer className="lg:block">
      {/* Container */}
      <div className="py-16 md:py-10 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="flex-col flex items-center ">
          <a href="#" className="mb-8 inline-block max-w-full text-black">
            <img data-aos="flip-up" data-aos-duration="10000"
              src={loogo}
              alt=""
              className="inline-block max-h-16 w-28 "
            />
          </a>
          <div className="text-center font-semibold">
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition text-xl hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#skills"
              className="inline-block px-6 py-2 font-normal text-black transition text-xl hover:text-blue-600"
            >
              Skills
            </a>
            <a
              href="#qual"
              className="inline-block px-6 py-2 font-normal text-black transition text-xl hover:text-blue-600"
            >
              Qualification
            </a>
            <a
              href="#project"
              className="inline-block px-6 py-2 font-normal text-black transition text-xl hover:text-blue-600"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-2 font-normal text-black transition text-xl hover:text-blue-600"
            >
              Contact
            </a>
          </div>
          
          <div className="mb-12 ms-10 grid-cols-4 grid-flow-col grid w-full max-w-52 gap-3 mt-5">
            <a
              href="#"
              className="mx-auto flex-col flex max-w-10 items-center justify-center text-black"
            >
              <  CiLinkedin className='text-4xl' />
            </a>
            <a
              href="#"
              className="mx-auto flex-col flex max-w-6 items-center justify-center text-black"
            >
              <FaGithub className='text-4xl'/>
            </a>
            <a
              href="#"
              className="mx-auto flex-col flex max-w-6 items-center justify-center text-black"
        
            >
            <MdOutlineEmail className='text-4xl' /> 
          

            </a>
         
          </div>
          <p className="text-sm sm:text-base">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    
    
    </>
  )
}

export default Footer