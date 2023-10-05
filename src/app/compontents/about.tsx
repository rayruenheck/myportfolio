"use client"

import { motion } from 'framer-motion'
import React from 'react'

export default function About() {
  return (
    <div id='about' className='h-[100vh] flex flex-col justify-center items-center '>
    <motion.div id='about' className='w-full h-full flex flex-col items-center'
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: .5,
        }}
      >
      
      <h1 className='text-7xl mb-[100px] font-mono'> About Me</h1>
      <div className='col-span-1 flex items-start font-mono flex-col p-4 border-2 rounded shadow-2xl lg:w-1/2 '>
      <p className='mb-4'>I am a recent graduate of Coding Temple, where I got my Certificate of Software Engineering. I am proficient in a variety of programming languages, including JavaScript, Typescript, and Python. I am also familiar with a variety of frameworks and technologies, such as Node.js, Next.js, and Flask.</p>
      <p className='mb-4'>During my time at Coding Temple, I completed several projects, including a web application for a mueseum. The project was cancelled before it was completed, but I learned a lot about front-end development and api methods.</p>

     <p className='mb-4'>I am passionate about building innovative and user-friendly web applications. I am also a quick learner and I am always eager to take on new challenges.</p>

      <p>In my spare time, I enjoy hiking, fishing, and playing chess.</p>
      </div>
    </motion.div>
    </div>
  )
}
