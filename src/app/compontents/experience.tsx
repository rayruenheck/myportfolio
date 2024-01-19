export default function Experience() {
    const experiences = [
      {
        role: "Assistant Manager",
        company: "Antonio’s Pizza",
        duration: "December 2020 - February 2023",
        details: [
          "Led a team of 14 employees, overseeing daily operations, and ensuring customer satisfaction.",
          "Rebalanced duties among the team during peak hours, prioritizing pizza preparation to ensure deliveries remained on schedule.",          
          "Mentored and trained new employees, providing ongoing coaching, support, and feedback.",
          "Implemented strategies to streamline production and improve team performance.",          
          "Collaborated with kitchen staff to ensure order completion, enhancing accuracy, and customer satisfaction while reducing complaints"         
        ],
      },
    ];
  
    return (
      <div id="employment" className="experience-section p-10">
        <h1 className="text-2xl font-bold mb-6">Employment</h1>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold">{exp.role} - {exp.company}</h2>
            <p className="text-gray-600">{exp.duration}</p>
            <ul>
              {exp.details.map((detail, idx) => (
                <li key={idx} className="text-gray-800">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }