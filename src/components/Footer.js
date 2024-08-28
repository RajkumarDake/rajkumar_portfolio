import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex items-center justify-evenly bg-[#0F0416] text-white flex-wrap px-3 py-4">
      <p className="text-sm text-center m-2">
        Designed and Developed by Rajkumar
      </p>
      <p className="text-sm font-semibold text-center m-2">
        Copyright © 2024 Rajkumar.dev
      </p>
      <span className="flex items-center justify-center gap-7 m-2">
        <a
          href="https://github.com/RajkumarDake"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <BsGithub />
        </a>
        <a
          href="https://twitter.com/rajkumar_dake"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <RiTwitterXFill />
        </a>
        <a
          href="https://in.linkedin.com/in/rajkumar-dake-102670244"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/rajkumar_831_/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <AiFillInstagram />
        </a>
      </span>
    </div>
  );
}

export default Footer;
