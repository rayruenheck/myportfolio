import React from 'react'
import Image from 'next/image'

export interface projectProp {
    src : string
    desc : string
    title : string
    tech : string[]
    link : string

}

export default function ProjectCard({src , desc , title, tech, link}: projectProp) {

  const techString  = (tech : string[]): string => {
        return tech.join(', ')
    }
    const techStringResult : string = techString(tech)



  return (
    <div className="w-full max-w-4xl mx-auto mb-8 group">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-dark-hover dark:to-dark-card">
          <Image
            width={800}
            height={400}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            src={src}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-2xl mb-3 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
            {title}
          </h3>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200 dark:border-primary-800"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-light-subtext dark:text-dark-subtext text-sm leading-relaxed whitespace-pre-line">
            {desc}
          </p>

          {/* View Project Button */}
          <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:gap-2 transition-all">
            <span>View Project</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  )
}
