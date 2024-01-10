'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../../utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const SkillText = () => {
  return (
    <div>
       <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
         
  
          <motion.div
            variants={slideInFromTop}
            className="flex flex-col gap-6 my-4 text-4xl font text-white max-w-[900px] w-auto h-auto"
          >
            <span>
              Building Better Apps with modern tools
              
            </span>
          </motion.div>
  
         
        </div>  
    </div>
  )
}

export default SkillText