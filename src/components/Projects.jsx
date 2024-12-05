import React, { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
// import calculator from "../assets/calculatorproject.webp"
import crud from "../assets/project/Crud.png";
import clock from "../assets/project/Clockproject.png";
import Todo from "../assets/project/To-doListproject.png";
import dictionary from "../assets/project/DigitalDictionaryProject.png";
import weather from "../assets/project/Wheatherapp.png";
import elearn from "../assets/Elearn site.mp4";
import cafe from "../assets/cafe site.mp4";
import indochino from "../assets/project2.mp4";

const Resizable = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" mb-10 pt-[10px]  md:px-[251px] px-[24px]" id="project">
      <div
        className="flex flex-col justify-center items-center gap-2 mt-10"
        data-aos="flip-down"
      >
        <h1 className="text-[40px] font-semibold">Project</h1>
        <p className="text-[17px]  text-[#8a8f93]">Most Recent works</p>
      </div>
      <div data-aos="zoom-in-up" className="md:m-14">
        <div className="flex justify-between">
          {/* project1 */}

          <div
            className="mb-12 md:w-[450px] w-full  border border-solid hover:shadow-xl rounded-lg border-gray-300 md:mb-8 lg:mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <video
              src={elearn}
              alt=""
              loading="lazy"
              autoPlay
              muted
              className="max-h-64 object-cover w-full rounded-t-lg"
            />
            <div className="px-5 py-8 sm:px-6">
              <h5 className="mb-3 text-xl font-bold"> E-Learn</h5>
              <p className="flex-col text-gray-500">
                Single page Web site with Responsive
              </p>
              <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                  <p>UI DESIGN</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>HTML,CSS</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>RESPONSIVE</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href=" https://arun25kumar.github.io/E-learn/"
                  className="r flex max-w-full gap-2.5 d-sm font-bold uppercase"
                >
                  <p>VISIT WEBSITE</p>
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                    alt=""
                    className="inline-block"
                  />
                </a>
              </div>
            </div>
                      
          </div>
          {/* project2 */}

          <div
            className="mb-12 md:w-[450px] w-full  border border-solid hover:shadow-xl rounded-lg border-gray-300 md:mb-8 lg:mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <video
              src={cafe}
              alt=""
              loading="lazy"
              autoPlay
              muted
              className="max-h-64 object-cover w-full rounded-t-lg"
            />
            <div className="px-5 py-8 sm:px-6">
              <h5 className="mb-3 text-xl font-bold"> Cafe-shop</h5>
              <p className="flex-col text-gray-500">
                Cafe shop web site with responsive
              </p>
              <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                  <p>UI DESIGN</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>HTML,CSS, JAVASCRIPT</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>RESPONSIVE</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://arun25kumar.github.io/cafeshop/"
                  className="r flex max-w-full gap-2.5 d-sm font-bold uppercase"
                >
                  <p>VISIT WEBSITE</p>
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                    alt=""
                    className="inline-block"
                  />
                </a>
              </div>
            </div>
                      
          </div>
        </div>

        <div className="flex justify-between">
          {/* project1 */}

          <div
            className="mb-12 md:w-[450px] w-full  border border-solid hover:shadow-xl rounded-lg border-gray-300 md:mb-8 lg:mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <video
              src={indochino}
              alt=""
              loading="lazy"
              autoPlay
              muted
              className="max-h-64 object-cover w-full rounded-t-lg"
            />
            <div className="px-5 py-8 sm:px-6">
              <h5 className="mb-3 text-xl font-bold">
                {" "}
                Indochino Tailoring shop
              </h5>
              <p className="flex-col text-gray-500">
                Single page Web site with Responsive
              </p>
              <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                  <p>UI DESIGN</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>HTML,CSS</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>RESPONSIVE</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://arun25kumar.github.io/indochinotailoringweb/"
                  className="r flex max-w-full gap-2.5 d-sm font-bold uppercase"
                >
                  <p>VISIT WEBSITE</p>
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                    alt=""
                    className="inline-block"
                  />
                </a>
              </div>
            </div>
                      
          </div>
          {/* project2 */}

          <div
            className="mb-12 md:w-[450px] w-full  border border-solid hover:shadow-xl rounded-lg border-gray-300 md:mb-8 lg:mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={crud}
              alt=""
              loading="lazy"
              autoPlay
              muted
              className="max-h-64 object-cover w-full rounded-t-lg"
            />
            <div className="px-5 py-8 sm:px-6">
              <h5 className="mb-3 text-xl font-bold"> CRUD Operation</h5>
              <p className="flex-col text-gray-500">
                CRUD Operation Create,Read,Update,Delete
              </p>
              <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                  <p>UI DESIGN</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>HTML,CSS, JAVASCRIP</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>REACTJS</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://reactjs-crudwebsite.netlify.app"
                  className="r flex max-w-full gap-2.5 d-sm font-bold uppercase"
                >
                  <p>VISIT WEBSITE</p>
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                    alt=""
                    className="inline-block"
                  />
                </a>
              </div>
            </div>
                      
          </div>
        </div>
        <div className="flex justify-between">
          {/* project1 */}

          <div
            className="mb-12 md:w-[450px] w-full  border border-solid hover:shadow-xl rounded-lg border-gray-300 md:mb-8 lg:mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={dictionary}
              alt=""
              loading="lazy"
              autoPlay
              muted
              className="max-h-64 object-cover w-full rounded-t-lg"
            />
            <div className="px-5 py-8 sm:px-6">
              <h5 className="mb-3 text-xl font-bold"> Digital Dictionary</h5>
              <p className="flex-col text-gray-500">
                Digital Dictionar Using Api
              </p>
              <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                  <p>UI DESIGN</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>HTML,CSS</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>REACT JS ,API'S</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://digitaldictionary1.netlify.app"
                  className="r flex max-w-full gap-2.5 d-sm font-bold uppercase"
                >
                  <p>VISIT WEBSITE</p>
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                    alt=""
                    className="inline-block"
                  />
                </a>
              </div>
            </div>
                      
          </div>
          {/* project2 */}

          <div
            className="mb-12 md:w-[450px] w-full  border border-solid hover:shadow-xl rounded-lg border-gray-300 md:mb-8 lg:mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={Todo}
              alt=""
              loading="lazy"
              autoPlay
              muted
              className="max-h-64 object-cover w-full rounded-t-lg"
            />
            <div className="px-5 py-8 sm:px-6">
              <h5 className="mb-3 text-xl font-bold"> TO-DO List</h5>
              <p className="flex-col text-gray-500">
                TO-DO list operation Create,Delete
              </p>
              <div className="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
                <div className="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-blue-800">
                  <p>UI DESIGN</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>HTML,CSS</p>
                </div>
                <div className="rounded-sm bg-gray-300 p-2 d-sm font-semibold uppercase text-blue-800">
                  <p>JAVASCRIPT</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href=" https://arun25kumar.github.io/To-Do-list/"
                  className="r flex max-w-full gap-2.5 d-sm font-bold uppercase"
                >
                  <p>VISIT WEBSITE</p>
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg"
                    alt=""
                    className="inline-block"
                  />
                </a>
              </div>
            </div>
                      
          </div>
        </div>
      </div>
      <div className="bg-black w-full mt-24 h-[0.5px] flex items-center    "></div>
    </div>
  );
};

export default Resizable;
