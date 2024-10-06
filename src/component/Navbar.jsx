import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center">
         <h1 className="text-2xl font-custom ">VS</h1>
      </div>

      <div className="flex items-center justify-center gap-4 text-2x1 mr-5">

        <a href="https://www.linkedin.com/in/vinothSaravanan" target='_blank' className='text-2xl' >
        <FaLinkedin />
        </a>

        <a href="https://github.com/vinosaravanan" target='_blank' className='text-2xl' >
        <FaGithub />
        </a>

        <a href="https://x.com/home" target='_blank' className='text-2xl' >
        <FaSquareTwitter />
        </a>

        <a href="https://github.com/vinosaravanan" target='_blank' className='text-2xl' >
        <FaInstagramSquare />
        </a>
      </div>
    </nav>
  );
};
