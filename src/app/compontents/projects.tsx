"use client"
import React from 'react'

import {motion} from 'framer-motion'
import Image from 'next/image'


  

export default function projects() {
    const projects = [{
        id: 1,
        title: 'To-Do List App',
        description: "",
        image: '/images/Screenshot 2023-09-27 100327.png',
        url: 'https://to-do-list-nextjs-1.vercel.app/'
      }]
  return (
      
       <div id='projects' className='h-[100vh] flex flex-col justify-center items-center '>
        
        <motion.div className='w-full h-full flex flex-col justify-center items-center'
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
        <h1 className='text-7xl font-mono'>Projects</h1>
        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center'>
        <a href="https://to-do-list-nextjs-1.vercel.app/" target="_blank">
        <div className=' h-full md:h-[400px] w-[400px] border rounded shadow-md md:mr-6 flex flex-col justify-center items-center'>
          <Image width={600} height={600} className='h-full w-full' src="/images/Screenshot 2023-09-27 100327.png" alt="" />
          <p>To-Do List</p>
        </div>
        </a>
        <a href="https://week7weekendproject.vercel.app/" target="_blank">
        <div className=' h-full md:h-[400px] w-[400px] flex flex-col justify-center items-center border rounded shadow-md mt-10 md:mt-0 '>
          <Image className='h-full w-full' src="/images/Screenshot 2023-10-04 154806.png" width={600} height={600} alt="" />
          <p>Weather App</p>
        </div>
        </a>
        </div>


      </motion.div>
      </div>
      
        
      
        
        
      

      
  )
}
