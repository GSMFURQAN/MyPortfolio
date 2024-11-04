"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  name: string;
}

const SkillDataProvider = ({ src, width, height, index, name }: Props) => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.5;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <div className="px-1.5">
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          className="cursor-pointer m-auto"
        />
        <div className="flex rounded-full text-white p-1 my-3 w-28 justify-center items-center">{name}</div>
      </div>
    </motion.div>
  );
};

export default SkillDataProvider;
