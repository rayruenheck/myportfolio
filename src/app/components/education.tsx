import React from 'react';

export default function Education() {
  const educationHistory = [
    {
      institution: 'University of Massachusetts Amherst',
      degree: 'B.S. in Computer Science',
      duration: 'Expected Graduation: June 2027',
      details: 'Relevant Coursework: Programming I–III, Programming Methodology, Data Structures, Computer Organization & Assembly, Operating Systems & Security, Calculus I–III, Physics I–II, Intro to Generative AI',
    },
    {
      institution: 'Middlesex Community College',
      degree: 'A.S. in Computer Science',
      duration: 'January 2026',
    },
  ];

  return (
    <div id='education' className="min-h-screen py-20 px-6 bg-light-hover dark:bg-dark-card">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            Education
          </h2>
          <p className="text-lg text-light-subtext dark:text-dark-subtext">
            My academic background
          </p>
        </div>

        <div className="space-y-6">
          {educationHistory.map((edu, index) => (
            <div
              key={index}
              className="bg-light-card dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {edu.institution}
                </h3>
                <p className="text-xl text-light-text dark:text-dark-text font-medium mb-2">
                  {edu.degree}
                </p>
                <p className="text-sm text-light-subtext dark:text-dark-subtext font-medium inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  {edu.duration}
                </p>
              </div>

              {/* Details */}
              {edu.details && (
                <div className="mt-4 pt-4 border-t border-light-border dark:border-dark-border">
                  <p className="text-light-subtext dark:text-dark-subtext leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}