import Image from 'next/image'
import { projectProp } from './projectCard';
import ProjectCard  from './projectCard';

export default function Projects() {
  const projects: projectProp[] = [
    {
      title: 'TimeFinder – Personal Task & Calendar Scheduler',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Flask', 'MongoDB', 'NextAuth', 'AWS'],
      desc: "Designed and implemented a scheduling algorithm that prioritizes tasks around daily peak-focus windows.\nIntegrated Google OAuth with NextAuth and synced user calendars via the Google Calendar API for real-time availability.\nBuilt a Flask backend with MongoDB for secure task storage, query patterns, and user-specific scheduling logic.\nDeployed the full-stack application using AWS EC2 with custom domain routing via Route 53.",
      src: '/images/timefinder.png',
      link: 'https://github.com/rayruenheck',
    },
    {
      title: 'PantryPal – Pantry & Recipe Planner',
      tech: ['Next.js', 'Tailwind CSS', 'Flask', 'Redis'],
      desc: "Developed a full-stack meal-planning app with user authentication and personalized recipe management.\nImplemented Redis-backed sessions and caching to improve responsiveness for frequent recipe and pantry queries.\nBuilt RESTful Flask endpoints to generate grocery lists and fetch recipes via external APIs.\nDeployed backend on AWS EC2 with custom domain routing via Route 53.",
      src: '/images/pantrypal.png',
      link: 'https://github.com/rayruenheck',
    },

  ];

  return (
    <div className='w-full min-h-screen py-20 px-6 bg-light-bg dark:bg-dark-bg'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12 text-center'>
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-light-subtext dark:text-dark-subtext max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development
          </p>
        </div>

        <div className='space-y-8'>
          {projects.map((project, index)=>
            <ProjectCard
              link={project.link}
              title={project.title}
              desc={project.desc}
              src={project.src}
              tech={project.tech}
              key={index}
            />
          )}
        </div>
      </div>
    </div>

  );
}   
        
      
        
        
      

   
