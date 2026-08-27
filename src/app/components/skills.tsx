import Section from './section'

const skills: Record<string, string[]> = {
  Languages: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'HTML/CSS'],
  'Frameworks/Libraries': [
    'React',
    'Django REST Framework',
    'Flask',
    'FastAPI',
    'Next.js',
    'Highcharts',
    'React Query (TanStack)',
    'Zustand',
    'Tailwind CSS',
  ],
  Testing: ['Vitest', 'React Testing Library', 'pytest', 'unittest', 'Integration testing'],
  Databases: ['SQL Server (MSSQL)', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'DynamoDB'],
  'Cloud/DevOps': ['AWS (EC2, DynamoDB, Route 53)', 'Git/GitHub', 'GitHub Actions'],
  Tools: [
    'REST APIs',
    'Anthropic API',
    'HubSpot CRM API',
    'pyodbc',
    'Swagger UI',
    'NextAuth',
    'OAuth',
    'Figma',
    'Linux/Bash',
    'Agile/Scrum',
  ],
}

export default function Skills() {
  return (
    <Section id="skills" label="04 / Skills" title="What I work with">
      <dl className="divide-y divide-line border-y border-line">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="grid gap-2 py-5 md:grid-cols-[13rem_1fr] md:gap-8"
          >
            <dt className="font-mono text-xs uppercase tracking-[0.15em] text-faint md:pt-1">
              {category}
            </dt>
            <dd className="leading-relaxed text-muted">{items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
