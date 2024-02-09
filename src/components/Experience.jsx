import React from "react";

import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";



const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <div className="white-background">
            <div className=" flex lg:flex-row flex-col py-24 px-6 mt-32">
              <div className="basis-2/6">
                <p className="">Selected Cases</p>
              </div>
              <div className="basis-4/6 ">
                <h1 className={`${styles.heroHeadTexts} `}>
                  Full service studio for both startups and established
                  businesses
                </h1>
              </div>
              {/* <div className="basis-2/6">

              <p className="">Selected Cases</p>
              </div>
              <div className="basis-4/6">
              <h1 className={`${styles.heroHeadText} text-white`}>
                  Full service studio for both startups and established
                  businesses
                </h1> */}
              {/* </div> */}
            </div>
            <div className="flex items-center justify-center lg:flex-row flex-col my-16 ">
              <div className="px-5">
                <div className="image-container">
                  <img className="img" src="/imgA.webp" alt="" />
                </div>
                <div className="flex items-center justify-between my-3">
                  <p className="text-[28px] leading-7 font-bold">
                    Rapida- Branding for <br className="md:flex hidden" />{" "}
                    personal homes
                  </p>
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white ">
                    See more
                  </button>
                </div>
                <div className="">
                  <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">
                    branding
                  </button>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </div>
              <div className="px-5 lg:mt-[-6%] mt-2">
                <div className="image-container">
                  <img
                    className="img hover:-translate-y-1 hover:scale-100 duration-300 leading-[28px] py-6 px-8 rounded-xl"
                    src="/imgB.webp"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between my-3">
                  <p className="text-[28px] leading-7 font-bold">
                    Rapida- Branding for <br className="md:flex hidden" />{" "}
                    personal homes
                  </p>
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white ">
                    See more
                  </button>
                </div>
                <div className="">
                  <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">
                    branding
                  </button>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates quis{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:flex-row flex-col my-16 ">
              <div className="px-5">
                <div className="image-container">
                  <img className="img" src="/imgC.webp" alt="" />
                </div>
                <div className="flex items-center justify-between my-3">
                  <p className="text-[28px] leading-7 font-bold">
                    Rapida- Branding for <br className="md:flex hidden" />{" "}
                    personal homes
                  </p>
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white ">
                    See more
                  </button>
                </div>
                <div className="">
                  <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">
                    branding
                  </button>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </div>
              <div className="px-5 lg:mt-[-6%] mt-2">
                <div className="image-container">
                  <img className="img" src="/imgD.webp" alt="" />
                </div>
                <div className="flex items-center justify-between my-3">
                  <p className="text-[28px] leading-7 font-bold">
                    Rapida- Branding for <br className="md:flex hidden" />{" "}
                    personal homes
                  </p>
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white ">
                    See more
                  </button>
                </div>
                <div className="">
                  <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">
                    branding
                  </button>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates quis{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="my-24 items-center flex justify-center text-slide ">
              <a href="" className="circle-btn black">
                <span className="flex items-center hover-effect bg-[#f2751a] justify-center h-[180px] w-[180px] rounded-full">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.5 0L11 5.5L5.5 11L4.67022 10.1702L8.7537 6H0V5H8.7537L4.67022 0.829781L5.5 0Z"
                      fill="#1F2122"
                    ></path>
                  </svg>
                  All projects
                </span>
              </a>
            </div>
            <div className="flex lg:flex-row flex-col">
              <div className="basis-2/6">
                <video
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="none"
                  style={{
                    clipPath:
                      "polygon(1px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 1px), 1px calc(100% - 1px))",
                    visibility: "visible",
                  }}
                  data-stop="true"
                >
                  <source
                    src="https://phenomenonstudio.com/wp-content/uploads/2021/10/home-1.mov"
                    type='video/mp4; codecs="hvc1"'
                  />
                  <source
                    src="https://phenomenonstudio.com/wp-content/uploads/2021/10/Home-2.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://phenomenonstudio.com/wp-content/uploads/2021/10/Home-2.webm"
                    type="video/webm"
                  />
                </video>
              </div>
              <div className="text-black basis-4/6">
                <h1 className="styles.heroHeadText text-black font-black  font-syne lg:text-[60px] sm:text-[40px] xs:text-[50px] text-[40px] lg:leading-[80px] mt-2">
                  We support you in achieving your business goals by solving the
                  problems your users face. We analyze projects from a fresh
                  perspective.
                </h1>
                <p className="my-2">
                  Our experts in analytics, marketing, design, and{" "}
                  <br className="" />
                  development will give you a 360-degree view of your
                  challenges.
                </p>
              </div>
            </div>
          </div>
      </motion.div>

     
    </>
  );
};

export default SectionWrapper(Experience, "work");
