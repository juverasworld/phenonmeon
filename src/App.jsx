import { BrowserRouter } from "react-router-dom";
import { FaBehance, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import { fadeIn, textVariant } from "./utils/motion";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should only happen once
      // Additional AOS configuration options...
    });
  }, []);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 black-gradient">
        {/* Your app content */}
        <div
          className="custom-cursor"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        ></div>

        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <About/>
         
          <motion.div variants={fadeIn("up", "spring", )}
          className="white-background">
            <div className=" flex lg:flex-row flex-col py-24 px-6 mt-32">
              <motion.div 
              data-aos="zoom-in"
              variants={fadeIn("up", "spring", )} className="basis-2/6">
                <p className="">Selected Cases</p>
              </motion.div>
              <div
              data-aos="fade-up"
              className="basis-4/6 ">
                <h1  data-aos="fade-up" className={`${styles.heroHeadTexts} `}>
                  Full service studio for both startups and established
                  businesses
                </h1>
              </div>
           
            </div>

            <div data-aos="zoom-out" className="flex items-center justify-center lg:flex-row flex-col my-16 ">
              <div className="px-5">
                <div className="image-container">
                  <img className="img" src="/imgA.webp" alt="" />
                </div>
                <div className="flex items-center justify-between my-3">
                  <p className="text-[28px] leading-7 font-bold">
                    Rapida- Branding for <br className="md:flex hidden" />{" "}
                    personal homes
                  </p>
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white whitespace-nowrap ">
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
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white whitespace-nowrap ">
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
            <div data-aos="zoom-in" className="flex items-center justify-center lg:flex-row flex-col my-16 ">
              <div className="px-5">
                <div className="image-container">
                  <img className="img" src="/imgC.webp" alt="" />
                </div>
                <div className="flex items-center justify-between my-3">
                  <p className="text-[28px] leading-7 font-bold">
                    Rapida- Branding for <br className="md:flex hidden" />{" "}
                    personal homes
                  </p>
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white whitespace-nowrap ">
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
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white whitespace-nowrap ">
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

            <div  className="my-24 items-center flex justify-center text-slide ">
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
            <div className="flex lg:flex-row flex-col s ">
              <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="basis-2/6">
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
              <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-black basis-4/6">
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
          </motion.div>
          
          <div className="black-gradient">
            <div className=" flex lg:flex-row flex-col py-24 px-6 mt-32">
              <div  data-aos="fade-up" className="basis-2/6">
                <p className="">Selected Cases</p>
              </div>
              <div className="basis-4/6 ">
                <h1 data-aos="fade-down" className={`${styles.heroHeadTexts} `}>
                  Phenomenon in facts and figures
                </h1>
              </div>
            </div>
          </div>
          <div className="black-gradients h-[500px] "></div>
          <div className="black-gradient">
            <div className=" flex lg:flex-row flex-col py-24 px-6 mt-32">
              <div data-aos="zoom-in" className="basis-2/6">
                <p className="">Home - Photo 3</p>
              </div>
              <div className="basis-4/6 border-b-[1px] pb-5">
                <h1 data-aos="zoom-out" className="text-[#fff] font-black  font-syne lg:text-[50px] sm:text-[30px] xs:text-[20px] text-[40px] lg:leading-[40px] mt-2">
                  We are inspired to reach even greater heights when our clients
                  share project results with us.
                </h1>
              </div>
            </div>
          </div>

          <div className=" relative  ">
            <div className="black-gradientss flex items-center justify-end lg:flex-row flex-col relative">
              <div data-aos="zoom-out" className="lg:w-2/6 lg:absolute left-0 bottom-0 w-full">
                <img src="/illustration.webp" alt="" className="" />
              </div>

              <div className=" lg:w-[60.666667%;] mx-10 lg:mx-5 lg:mt-0 mt-[50px]">
                <div className=" flex py-16 border-b-[0.5px]  border-zinc-800 items-center justify-end lg:flex-row flex-col ">
                  <div className="">
                    <div data-aos="fade-up" className="">
                      <p className="lg:text-[56px] text-[40px] leading-[45px] lg:leading-[84px]">
                        $16M+
                      </p>
                      <p className="text-[18px] leading-[27px]">
                      Hours/month one specialist allocates to studying 
                      </p>
                    </div>

                    <div data-aos="fade-up" className="">
                      <p className="lg:text-[56px] text-[40px] leading-[45px] lg:leading-[84px]">
                        4.9
                      </p>
                      <p className="text-[18px] leading-[27px]">
                        Average rating of Studio clients’ apps on the App Store
                      </p>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="flex flex-col items-center justify-start">
                    <div className="">
                      <p className="lg:text-[56px] text-[40px] leading-[45px] lg:leading-[84px]">
                        15.3
                      </p>
                      <p className="text-[18px] leading-[27px] flex items-center">
                        Hours/month one specialist allocates to studying new
                         
                      </p>
                    </div>

                    <div className="">
                      <p className="lg:text-[56px] text-[40px] leading-[45px] lg:leading-[84px]">
                        5.0
                      </p>
                      <p className="text-[18px] leading-[27px]">
                        Rating on the most reputable review platform, Clutch
                      </p>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-down" className="py-10">
                  <div className="my-16">
                    <p className="text-[24px] font-bold leading-[27px] py-2">
                      Proud to be partnering with ...
                    </p>
                    <div className="flex lg:flex-row flex-col items-center justify-evenly ">
                      <p>
                        <img src="/agency.svg" alt="" className="lg:w-32 w-auto" />
                      </p>
                      <p>
                        <img src="/good.webp" alt="" className="lg:w-32 w-auto" />
                      </p>
                      <p>
                        <img src="/topdev.webp" alt="" className="lg:w-32 w-auto" />
                      </p>
                      <p>
                        <img src="/webflow.svg" alt="" className="lg:w-32 w-auto" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="orange-background">
              <div className=" flex lg:flex-row flex-col py-24 px-6 mt-32">
                <div className="basis-2/6">
                  <p className="">Home - Photo 3</p>
                </div>
                <div className="basis-4/6 ">
                  <div className="">
                    <div className="flex flex-col my-12 items-start">
                      <p className="">
                        <img src="/b1.webp" alt="" className="w-48 animate-bounce" />
                      </p>
                      <p className="lg:text-[39px] font-bold text-[27px] leading-[45px] lg:leading-[84px]">
                        Turnkey product development
                      </p>
                      <p className="text-[18px] leading-[27px]">
                        Using advanced analytics, we formulate a strategy and
                        project implementation <br className="lg:flex hidden" />{" "}
                        stages from start to finish.
                      </p>
                    </div>

                    <div className="flex flex-col my-12 items-start">
                      <p className="">
                        <img src="/b2.webp" alt="" className="w-48 animate-bounce" />
                      </p>
                      <p className="lg:text-[39px] font-bold text-[27px] leading-[25px] lg:leading-[44px]">
                        Rethinking existing products with{" "}
                        <br className="lg:flex hidden" /> the aim to scale them
                      </p>
                      <p className="text-[18px] leading-[27px]">
                        Using advanced analytics, we formulate a strategy and
                        project implementation <br className="lg:flex hidden" />{" "}
                        stages from start to finish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:text-[79px] flex items-center justify-center text-center font-bold text-[37px] leading-[35px] lg:leading-[70px]">
                Web app Website Mobile app Motion design Branding 2D/3D
                Illustration Development
              </div>

              <div className="py-16 items-center flex justify-center text-slide ">
                <a href="" className="circle-btn black">
                  <span className="flex items-center hover-effect border-[0.5px] border-black bg-[#f2751a] justify-center h-[180px] w-[180px] rounded-full">
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
            </div>
          </div>
          <div className="lemon-background py-24">
            <footer className="">
              <p className="">Locations</p>
              <div className="flex items-center justify-between flex-col lg:flex-row px-4">

              <div className="flex md:flex-row flex-col items-center justify-center ">
                <div className="lg:mx-5 mx-0">
                  <p className="">Switzerland / Lugano</p>
                  <p className="">Phenomenon Studio Sagl</p>
                  <p className="">Register number: CH-501.4.028.340-3c/o</p>
                  <p className="">
                    Via Giacomo Brentani 16, Lugano 6900, Switzerland
                  </p>
                  <p className="">+41 77 955 16 24</p>
                </div>
                <div className="lg:mx-5 mx-0">
                  <p className="">Switzerland / Lugano</p>
                  <p className="">Phenomenon Studio Sagl</p>
                  <p className="">Register number: CH-501.4.028.340-3c/o</p>
                  <p className="">
                    Via Giacomo Brentani 16, Lugano 6900, Switzerland
                  </p>
                  <p className="">+41 77 955 16 24</p>
                </div>
              </div>
                <div className="flex flex-row  items-center space-x-4">
                  <a
                    href="https://www.behance.net/phenomenon-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black py-5 px-5 border-[1px] border-black hover:text-gray-900"
                  >
                    <FaBehance size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/26241149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black py-5 px-5 border-[1px] border-black hover:text-gray-900"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/phenomenon__studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black py-5 px-5 border-[1px] border-black hover:text-gray-900"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/phenomenonstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black py-5 px-5 border-[1px] border-black hover:text-gray-900"
                  >
                    <FaFacebook size={24} />
                  </a>
                </div>
              </div>
            </footer>
          </div>
          {/* <Hero /> */}
        </div>
        {/* <About /> */}
        {/* <Experience />
        <Tech />
        <Works /> */}
        {/* <Feedbacks /> */}
        {/* <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
