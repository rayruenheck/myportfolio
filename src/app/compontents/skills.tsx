"use client"
export default function Skills() {
  const skills = {
    "Programming Languages": ['JavaScript', 'TypeScript', 'Python', 'C', 'HTML', 'CSS'],
    "Frameworks": ['React', 'Node', 'Next.js', 'Tailwind CSS'],
    "Cloud Infrastructure": ['AWS', 'DynamoDB', 'EC2', 'Route 53'],
    "Certification": [{ name: 'Coding Temple Software Engineering', url: 'https://www.credly.com/badges/24502d48-ab41-4c8e-9cd7-6b01744c0a64' }],
  };

  return (
    <div id="skills" className="technical-skills-section mb-12 p-10">
      <h1 className="text-2xl font-bold mb-6">Technical Skills</h1>
      {Object.entries(skills).map(([category, items], index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold">{category}</h2>
          <ul>
            {items.map((item, idx) => (
              <li key={idx} className="text-gray-800">
                {typeof item === 'string' ? item : <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}



