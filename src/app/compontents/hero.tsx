"use client"
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div id='objective' className='flex flex-col md:flex-row w-full justify-center items-center h-[100vh] p-10'>
      <div className='w-full md:w-1/2 flex flex-col justify-center p-6 text-center md:text-left'>
        <p className='text-4xl lg:text-7xl mb-5 font-bold'>Hi, I'm Ray.</p>
        <p className='text-lg'>
        Driven individual with over five years in high-pressure customer service environments, seeking to leverage transferable
skills in communication, problem-solving, and teamwork to transition to an entry-level role as a software developer.
Passionate about learning and growth, I've established a foundation of full-stack skills through the Coding Temple
bootcamp and personal projects. Eager to collaborate and apply technical skills to solve real-world business needs.
        </p>
      </div>
      <div className='w-full md:w-1/2 flex items-center justify-center p-4'>
        <Image 
          src='/images/profile pic.jpg' 
          alt='profile pic' 
          width={300} 
          height={300} 
          className="rounded-full object-cover" 
          priority={true} 
        />
      </div>
    </div>
  );
}
