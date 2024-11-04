"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../utils/motion";
import { ArrowDownTrayIcon, SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const HeroContent = () => {
  const handleDownload = () => {
     // Create a link element
  const link = document.createElement("a");

  // Set the href to the PDF file in the public directory
  link.href = "/Furqan_MERN_Stack_Resume.pdf";

  // Set the download attribute with the desired file name
  link.download = "Furqan_MERN_Stack_Resume.pdf";

  // Append the link to the document
  document.body.appendChild(link);

  // Trigger a click on the link to start the download
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-28 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#fffff] mr-[10px] h-5 w-5" />
          <h1 className=" text-[14px]">MERN Stack Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[900px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m Furqan.{" "}
            <span className=" Welcome-text block my-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white-600" >
              {" "}
              MERN | Full Stack Developer{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 mb-5 max-w-[600px]"
        >
          with 4+ years of expertise in Website and Software development.
          Please Navigate through this website and find out my skills, projects and
          experience.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="flex py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={() => handleDownload()}
        >
          <ArrowDownTrayIcon className="text-[#b49bff] mt-0.5 mx-[10px] h-5 w-5" />
          Download Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex p-18 ps-16"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
