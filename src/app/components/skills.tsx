"use client"
export default function Skills() {
  const skills = {
    "Languages": ['C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'HTML/CSS'],
    "Frameworks/Libraries": ['Django', 'Flask', 'React', 'Next.js', 'Tailwind CSS'],
    "Databases": ['MongoDB', 'DynamoDB', 'Redis', 'PostgreSQL', 'SQLite', 'MSSQL'],
    "Cloud/DevOps": ['AWS (EC2, DynamoDB, Route 53)', 'Docker', 'Git/GitHub', 'GitHub Actions'],
    "Tools": ['REST APIs', 'Swagger UI', 'NextAuth', 'OAuth', 'Figma', 'Linux/Bash', 'Agile/Scrum'],
  };

  return (
    <div id="skills" className="min-h-screen py-20 px-6 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-light-subtext dark:text-dark-subtext">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4 pb-3 border-b border-light-border dark:border-dark-border text-center">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 text-sm bg-primary-50 dark:bg-primary-900/20 text-light-text dark:text-dark-text rounded-lg border border-primary-200 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {typeof item === 'string' ? item : (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400">
                        {item.name}
                      </a>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



