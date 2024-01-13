"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Socials } from "../../../constants";
import { usePathname } from 'next/navigation'


interface Props {
}
const Navbar = ({  }: Props) => {
    const [url, setUrl] = useState('#about me')

console.log('url',url)
  const extLink = (link: string, name: string) => {
    if (name === "gmail") {
      window.location.href = `mailto:${link}`;
    } else if (name === "linkedin" || name === "github") {
      window.open(link, "_blank");
    } else if (name === "phone") {
      window.alert("Contact Number : 8639410779");
    }
  };


  return (
    <div className="w-full h-[65px] top-0 fixed shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-30 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-10">
        <a
          href="#about me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin rounded-full m-2 p-2"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Web Developer
          </span>
        </a>
        <div className="w-[500px]  h-full flex flex-row items-center justify-between ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145E]  px-[20px] py-[10px] rounded-full text-white">
            <a
              href="#about me"
              className={`cursor-pointer ${
                url === "#about me" && "rounded-full px-4 py-1 bg-[#3544cf8b] "
              } `}
              onClick={()=>setUrl('#about me')}
              >
              About me
            </a>
            <a
              href="#skills"
              className={`cursor-pointer ${
                  url === "#skills" && "rounded-full px-4 py-1 bg-[#3544cf8b]"
                } `}
                onClick={()=>setUrl('#skills')}
                >
              Skills
            </a>
            <a
              href="#projects"
              className={`cursor-pointer ${
                  url === "#projects" && "rounded-full px-4 py-1 bg-[#3544cf8b]"
                } `}
                onClick={()=>setUrl('#projects')}
                >
              Projects
            </a>
            <a
              href="#work experience"
              className={`cursor-pointer ${
                  url === "#work experience" && "rounded-full px-4 py-1 bg-[#3544cf8b]"
                } `}
                onClick={()=>setUrl('#work experience')}
                >
              Experience
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5 cursor-pointer ">
          {Socials.map((z) => (
            <Image
              src={z.src}
              alt={z.name}
              width={28}
              height={28}
              key={z.name}
              onClick={() => extLink(z?.link, z?.name)}
              title={
                z.name === "phone"
                  ? "8639410779"
                  : z.name === "gmail"
                  ? "gsmfurqan@gmail.com"
                  : ""
              }
              className="mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
