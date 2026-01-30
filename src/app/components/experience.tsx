export default function Experience() {
    const experiences = [
      {
        role: "R&D Intern",
        company: "Regional Economic Models Inc",
        duration: "January 2026 - Present",
        details: [
          "Designed customer account settings UI and interaction flows in Figma, then implemented the frontend in React, enabling end-to-end ownership of user-facing features",
          "Developed 5+ REST API endpoints in Django to support account and organization management workflows",
          "Built admin interfaces using Django Admin for managing customer accounts, organizations, and access codes",
          "Conducted QA testing on account management flows using Swagger UI, identifying and documenting 10+ reproducible bugs to improve release quality",
          "Evaluated Redis as a caching layer to improve performance in admin workflows",
          "Contributed to team codebase through Git-based workflows, including feature branches, pull requests, and code reviews"
        ],
      },
      {
        role: "Supplemental Instruction (SI) Leader & CS Tutor",
        company: "Middlesex Community College",
        duration: "January 2025 - December 2025",
        details: [
          "Led weekly SI sessions for 3–5 students, covering fundamental C++ concepts through live-coding, guided practice, and problem sets",
          "Created study guides and example programs reinforcing OOP, introductory data structures, and debugging strategies",
          "Provided one-on-one tutoring for Programming I–III, helping students with assignment planning, code quality, and conceptual understanding"
        ],
      },
    ];
  
    return (
      <div id="employment" className="min-h-screen py-20 px-6 bg-light-hover dark:bg-dark-card">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
              Experience
            </h2>
            <p className="text-lg text-light-subtext dark:text-dark-subtext">
              My professional journey
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-light-card dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Header */}
                <div className="mb-4 pb-4 border-b border-light-border dark:border-dark-border">
                  <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-light-text dark:text-dark-text font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-light-subtext dark:text-dark-subtext font-medium inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                    {exp.duration}
                  </p>
                </div>

                {/* Details */}
                <ul className="space-y-3">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-light-subtext dark:text-dark-subtext">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }