"use client"
import Image from 'next/image'
import { ProjectCard } from './projectcard'
import { projectcard } from '../types';


  

export default function Projects() {
  
    const projectsData: projectcard[] = [
      {
        title: 'To-Do List',
        description: 'A simple To-Do List application built with Next.js. Manage your tasks efficiently.',
        link: 'https://to-do-list-nextjs-1.vercel.app/',
        image: '/images/Screenshot 2023-09-27 100327.png',
      },
      {
        title: 'Weather App',
        description: 'Check the weather forecast with this Weather App. Get real-time updates and plan your day.',
        link: 'https://week7weekendproject.vercel.app/',
        image: '/images/Screenshot 2023-10-04 154806.png',
      },
      {
        title: 'Ecommerce Website',
        description: 'Explore a fully functional Ecommerce Website with a variety of products. Shop with ease.',
        link: '#', // Add the link for your Ecommerce Website when available
        image: '/images/Screenshot 2023-11-20 163232.png',
      },
    ];
  
    return (
      <div id='projects' className='mb-[300px] md:mb-0 h-[100vh] flex flex-col justify-center items-center'>
        <h1 className='text-5xl md:text-7xl font-mono mb-[100px] md:mb-0'>Projects</h1>
        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center'>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    );
  }
;
      
        
      
        
        
      

   
