"use client";
import Image from "next/image";

import React, { useState } from "react";
interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  client: string;
  libraries: string;
}
const ProjectCard = ({
  src,
  title,
  description,
  link,
  libraries,
  client,
}: Props) => {
  const [pop, setPop] = useState(false);
  const popup = () => {
    setPop(true);
  };
  const closePopup = (e: any) => {
    // Prevent the click event from reaching the parent div
    // e.stopPropagation();
    setPop(false);
  };
  console.log("pop", pop);
  return (
    <div className=" ">
      <div
        className=" h-[100%] max-w-sm  bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 "
      
      >
        <Image
          width={400}
          height={600}
          className="rounded-t-lg "
          src={src}
          alt=""
        />
        <div className="p-5 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 text-md font-normal text-gray-700 dark:text-gray-300">
            Client : {client}
          </p>
          <p className="mb-3 text-md font-normal text-gray-700 dark:text-gray-300">
            Link : <a href={link} className="cursor-pointer text-blue-400 underline">{"Open Site"}</a>
          </p>
          <p className="mb-3 text-md font-normal text-gray-700 dark:text-gray-300">
            Stack and Libraries : {libraries}
          </p>

          <button
            type="button"
            className=" cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => popup()}
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
      {pop && (
        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-gray-300 p-6 rounded-md z-[50] w-[50%] ">
              <h1 className="text-2xl font-semibold mb-4">{title}</h1>
             
              <p className="my-6 text-md font-normal ">
                {description}
              </p>
              <button
                onClick={closePopup}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
