import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden:{x:-100, opacity: 0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay}
  }
})


const Hero = () => {
  return (
    <div className=" border-b border-neutral-900 pb-2 lg:mb-35 ">
      {/* i add absolute and top-11 */}

      <div className=" flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="mt-10 flex flex-col items-center lg:items-start">
            {/* i add mt-10 */}
            <motion.h1 
               variants={container(0)}
               initial='hidden'
               animate='visible'
               className="pb-10 text-4xl font-thin tracking-tight lg:mt-12 lg:text-6xl">
             Vinoth Saravanan
            </motion.h1>

            <motion.span
               variants={container(0.5)}
               initial='hidden'
               animate='visible'
              className="bg-gradient-to-r from-pink-300 via-slate-500 
              to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              FrontEnd Developer
            </motion.span>

            <motion.p 
                variants={container(1)}
                initial='hidden'
                animate='visible'
                className="my-2  py-3 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 lg:mt-14 ">
          <div className="flex justify-center md:mt-20">
            <motion.img
             initial={{x:100, opacity:0}} 
             animate={{x:0, opacity:1}}
             transition={{duration:1, delay:1.2}}
             src={profilePic} alt="kevin Rush" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
