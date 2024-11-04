'use client'
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ExperienceTimeLine = () => {
  const [result, setResult] = useState({ years: 0, months: 0 });
  const handleCalculate = () => {
    const startDate = moment("01/01/2021");

    const currentDate = moment();
    const years = currentDate.diff(startDate, "years");
    const months = currentDate.diff(startDate, "months") % 12;

    setResult({ years, months });
  };
  useEffect(()=>{

      handleCalculate()
  },[])
  return (
    <div className="ms-[25%]" id="work experience">
      <h1 className=" mx-[14%] mb-14 text-3xl font-semibold text-white ">
        Work Experience - {result.years} years {result.months + 1} months
      </h1>
      <ol className="mx-[30%] relative border-s border-gray-200 dark:border-gray-700">
        <p className="-ms-48 -mb-6 text-base font-normal text-gray-500 dark:text-gray-400">
        Dec 2022 - Present
        </p>
        <li className="mb-10 ms-9">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className=" flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Verraxis Technologies
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
              Current Company
            </span>
          </h3>
          <div className=" mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Working as UI and backend Developer in{" "}
            <span>
              <Link href="#projects" className="cursor-pointer">
                Authen, Solicitors and SLTC{" "}
              </Link>{" "}
            </span>
          </div>

        </li>

        <li className="mb-10 ms-9 ">
          <p className="-ms-60 -mb-6 text-base font-normal text-gray-500 dark:text-gray-400">
           Aug 2022-  Nov 2022 
          </p>
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className=" flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Shethink{" "}
          </h3>
          <p className=" mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Worked as UI Developer in{" "}
            <a href="#projects" className="cursor-pointer">
              {" "}
              Sourcebae and Recruitbae
            </a>{" "}
            projects for 4 months
          </p>
       
        </li>

        <li className="mb-10 ms-6">
          <p className="-ms-56 -mb-6 text-base font-normal text-gray-500 dark:text-gray-400">
          Jan 2021 - Aug 2022 
          </p>
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="ms-3 flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Infosys
          </h3>
          <p className="ms-3 text-base font-normal text-gray-500 dark:text-gray-400">
            Worked as UI Developer in Verizon Project for 1 year and 8 months
          </p>
        </li>
      </ol>
    </div>
  );
};

export default ExperienceTimeLine;
