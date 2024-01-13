import Link from 'next/link'
import React from 'react'

const ExperienceTimeLine = () => {
  return (
    <div className='ms-[25%]' id='work experience'>
        <h1
        className=" mx-[20%] mb-14 text-4xl font-bold text-white ">
Work Experience              
        </h1>
    <ol className="mx-[30%] relative border-s border-gray-200 dark:border-gray-700">                  
        <p className="-ms-48 -mb-6 text-base font-normal text-gray-500 dark:text-gray-400">Present - Dec 2022</p>          
        <li className="mb-10 ms-9">  
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className=" flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Verraxis Technologies<span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Current Company</span></h3>
            <div className=" mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Worked as UI Developer in <span><Link href='#projects' className='cursor-pointer'>Authen, Solicitors and SLTC </Link> </span>projects in 1 year 2 months</div>
            
        </li>

        <li className="mb-10 ms-9 ">  
        <p className="-ms-60 -mb-6 text-base font-normal text-gray-500 dark:text-gray-400">Nov 2022 - Aug 2022</p>          
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className=" flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Shethink </h3>
            <p className=" mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Worked as UI Developer in <a href='#projects' className='cursor-pointer'> Sourcebae and Recruitbae</a> projects in 4 months</p>
            {/* <a href="#" className="ms-40 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
      </svg> Download ZIP</a> */}
        </li>

        <li className="mb-10 ms-6">
        <p className="-ms-56 -mb-6 text-base font-normal text-gray-500 dark:text-gray-400">Aug 2022 - Jan 2021</p>          
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="ms-3 flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Infosys</h3>
            <p className="ms-3 text-base font-normal text-gray-500 dark:text-gray-400">Worked as UI Developer in Verizon Project for 1 year and 8 months</p>
        </li>
       
    </ol>
    
    </div>
  )
}

export default ExperienceTimeLine