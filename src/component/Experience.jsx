import React from "react";
import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2 
           whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y:-100}}
           transition={{duration:0.5}}
          className="mt-20 text-center text-4xl ">Experience</motion.h2>

      <div className="mt-12">

      <motion.div 
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:1}}
       className="experience-section p-8 md:ml-16">
      <div className="experience-item mb-8">
        {/* <h3 className="text-2xl font-semibold">Frontend Developer (Personal Projects)</h3>
        <p className="italic mb-2">Freelance / Personal Work</p>
        <p className="text-sm text-gray-600">Dates: (Insert timeline)</p> */}
        
        <p className="mt-4">
          As a frontend web developer, I have built multiple projects focusing on user-friendly and scalable web applications. My personal projects showcase my skills in frontend technologies like React, Redux Toolkit, JavaScript, and TypeScript. I have also incorporated responsive design techniques using Tailwind CSS and Bootstrap. Additionally, I have experimented with backend technologies like Node.js and Express.js to create full-stack applications.
        </p>

        <h4 className="font-semibold mt-4">Key Responsibilities:</h4>
        <ul className="list-disc list-inside mt-2">
          <li>Developed and designed responsive web applications using <strong>React</strong> and <strong>Redux Toolkit</strong>.</li>
          <li>Styled applications using <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong> for modern, mobile-friendly UIs.</li>
          <li>Improved user interfaces with <strong>JavaScript</strong> and <strong>TypeScript</strong>.</li>
          <li>Built full-stack applications using <strong>Node.js</strong> and <strong>Express.js</strong>.</li>
        </ul>
      </div>

      <div className="project-section mb-8">
        <h3 className="text-2xl font-semibold">Key Projects:</h3>

        <div className="project-item mt-4">
          <h4 className="font-semibold">E-Commerce Platform (MERN Stack)</h4>
          <ul className="list-disc list-inside mt-2">
            <li>Built a scalable e-commerce platform using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.</li>
            <li>Implemented features like product filtering, user authentication, and a shopping cart.</li>
          </ul>
        </div>

        <div className="project-item mt-4">
          <h4 className="font-semibold">Personal Blog Website (MERN Stack)</h4>
          <ul className="list-disc list-inside mt-2">
            <li>Developed a blog website where users can create, edit, and delete posts using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.</li>
            <li>Focused on user authentication, CRUD operations, and responsive design.</li>
          </ul>
        </div>
      </div>
    </motion.div>


        {/* {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8  flex flex-wrap lg:justify-center">

            <motion.div 
               whileInView={{opacity:1, x:0}}
               initial={{opacity:0, x:-100}}
               transition={{duration:1}}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            <motion.div
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:0, x:100}}
                 transition={{duration:1}} 
               className="w-full max-w-xl lg:w-3/4 ">
              <h6 className="mb-2 font-semibold">
                {experience.role} - {""}
                <span className="text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm 
                font-medium text-purple-800 ">
                    {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))} */}

        
      </div>
    </div>
  );
};

export default Experience;
