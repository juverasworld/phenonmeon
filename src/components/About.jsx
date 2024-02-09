import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" lg:mt-[-170px] mt-10">
      <div className="video-wrap">
              <video
                width="1300"
                height="730"
                data-normal="https://phenomenonstudio.com/wp-content/uploads/2022/09/Reel_New_Preview_low1.mp4"
                data-retina="https://phenomenonstudio.com/wp-content/uploads/2022/09/Reel_New_Preview_low1.mp4"
                data-small="https://phenomenonstudio.com/wp-content/uploads/2022/09/Reel_New_Preview_mobile.mp4"
                className="view fadein delay0-7 active viewed"
                // id="main-video"
                muted
                controls
                loop
                autoPlay
                playsInline
                src="https://phenomenonstudio.com/wp-content/uploads/2022/09/Reel_New_Preview_low1.mp4"
                type='video/mp4; codecs="hvc1"'
                data-stop="true"
                style={{ visibility: "visible" }}
              ></video>
            </div>
          
      </motion.div>

    </>
  );
};

export default SectionWrapper(About, "about");
