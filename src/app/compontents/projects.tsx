"use client"
import Image from 'next/image'


export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: "Technologies: Tailwind CSS, NextJS, TypeScript, Flask, PostgreSQL \nUtilized Flask to service front end requests, and handle 3rd party API integrations.\nIntegrated with the Fake Store API to provide real product details.\nLeveraged PostgreSQL to persist user details, cart information, and favorite items between sessions.\nDeveloped standard shopping cart and favorites functionality in line with existing e-commerce providers.",
      imageUrl: '/images/Screenshot 2024-01-19 144131.png',
      link: 'https://ecommerce-nextjs-sandy.vercel.app/', 
    },
    {
      title: 'To-Do List App',
      description: "Technologies: Tailwind CSS, NextJS, TypeScript, Flask, Cloud Hosting, DynamoDB, Route 53 \nFully featured To-Do List application with user authentication.\nLearned about deploying to AWS Cloud Infrastructure and hosting high availability services.\nImplemented CRUD operations, allowing for standardized communication between application layers.",
      imageUrl: '/images/Screenshot 2024-01-19 133929.png',
      link: 'https://to-do-list-nextjs-phi.vercel.app/', 
    },
   
  ];

  return (
    <div id='projects' className="projects-section p-10">
      <h1 className="text-2xl font-bold mb-6">Software Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2 flex flex-col">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            {project.description.split('\n').map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image width={500} height={300} src={project.imageUrl} alt={project.title} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}   
        
      
        
        
      

   
