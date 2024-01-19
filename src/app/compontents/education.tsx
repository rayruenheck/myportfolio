import React from 'react';

export default function Education() {
  const educationHistory = [
    {
      institution: 'Coding Temple',
      degree: 'Certificate in Software Engineering',
      duration: 'April 2023 – June 2023',
    },
    {
      institution: 'Greenfield Community College',
      degree: 'Continuing Education in Mathematics',
      duration: 'September 2018 – May 2022',
    },
    {
      institution: 'Westfield University',
      degree: 'Continuing Education Finance Studies',
      duration: 'September 2018 – May 2022',
    },
    {
      institution: 'Coastal Carolina University',
      degree: 'Bachelor of Science in Business Management',
      details: 'Completed 60 credit hours',
      duration: 'September 2016 – May 2018',
    },
    
  ];

  return (
    <div id='education' className="education-section p-10">
      <h1 className="text-2xl font-bold mb-6">Education</h1>
      {educationHistory.map((edu, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold">{edu.institution}</h2>
          <p className="text-gray-600">{edu.degree}</p>
          <p className="text-gray-600">{edu.duration}</p>
          {edu.details && <p className="text-gray-800">{edu.details}</p>}
        </div>
      ))}
    </div>
  );
}