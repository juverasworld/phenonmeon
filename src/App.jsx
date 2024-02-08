import { BrowserRouter } from "react-router-dom";
import { styles } from "./styles";
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
  return (
    <BrowserRouter>
      <div className="relative z-0 black-gradient">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <div className="mx-5 lg:mt-[-170px] mt-10">
            <video controls width="100%" autoplay>
              <source src="/heroVideo.mp4" type="video/mp4"  />
              {/* Add additional <source> elements for different video formats */}
            </video>

          </div>
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
                <div>
                  <img className="img" src="/imgA.webp" alt="" /></div>
                  <div className="flex items-center justify-between my-3">

                  <p className="text-[28px] leading-7 font-bold">Rapida- Branding for <br className="md:flex hidden" /> personal homes</p>
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white ">See more</button>
                  </div>
                  <div className="">
                  <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">branding</button>
<p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                  </div>
              </div>
              <div className="px-5 lg:mt-[-6%] mt-2">
                <div>
                  <img className="img hover:-translate-y-1 hover:scale-100 duration-300 leading-[28px] py-6 px-8 rounded-xl" src="/imgB.webp" alt="" /></div>
                  <div className="flex items-center justify-between my-3">

                  <p className="text-[28px] leading-7 font-bold">Rapida- Branding for <br className="md:flex hidden" /> personal homes</p>
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white ">See more</button>
                  </div>
                  <div className="">
                  <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">branding</button>
<p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quis  </p>
                  </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:flex-row flex-col my-16 ">
              <div className="px-5">
                <div>
                  <img className="img" src="/imgA.webp" alt="" /></div>
                  <div className="flex items-center justify-between my-3">

                  <p className="text-[28px] leading-7 font-bold">Rapida- Branding for <br className="md:flex hidden" /> personal homes</p>
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white ">See more</button>
                  </div>
                  <div className="">
                  <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">branding</button>
<p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                  </div>
              </div>
              <div className="px-5 lg:mt-[-6%] mt-2">
                <div>
                  <img className="img" src="/imgB.webp" alt="" /></div>
                  <div className="flex items-center justify-between my-3">

                  <p className="text-[28px] leading-7 font-bold">Rapida- Branding for <br className="md:flex hidden" /> personal homes</p>
                  <button className="bg-black rounded-[24px] px-5 py-2 text-white ">See more</button>
                  </div>
                  <div className="">
                  <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">branding</button>
<p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quis  </p>
                  </div>
              </div>
            </div>
          </div>

          {/* <Hero /> */}
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
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
