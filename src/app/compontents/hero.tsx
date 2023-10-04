"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

export default function Hero() {
  return (
    
      <motion.div className='grid lg:grid-cols-4 h-[100vh]'
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
        <div></div>
        <div className='col-span-1 flex flex-col justify-center m-6'>
            <p className=' font-mono flex lg:text-7x1 mb-5 text-4xl'>Hi, Im Ray.</p>
            <p className='font-mono text-lg'>Passionate Fullstack Engineer skilled in creating cohesive web solutions, combining design aesthetics with robust functionality for seamless user experiences.</p>
        </div>
        <div className='col-span-1 mx-4 flex items-center justify-center'>
          <Image className="object-none w-48 h-48 rounded-full object-[50%_-3px]" src='/images/profile pic.jpg' alt='profile pic' width={140} height={200}></Image>
        </div>
        </motion.div>
        
    
  )
}
