import Section from './section'

const educationHistory = [
  {
    institution: 'University of Massachusetts Amherst',
    degree: 'B.S. in Computer Science',
    duration: 'Expected June 2027',
  },
  {
    institution: 'Middlesex Community College',
    degree: 'A.S. in Computer Science',
    duration: 'Jan 2026',
  },
]

const coursework = [
  'Operating Systems & Security',
  'Data Structures',
  'Computer Organization & Assembly',
  'Reasoning Under Uncertainty',
  'Intro to Generative AI',
  'Computer Systems Principles',
  'Web Programming',
]

export default function Education() {
  return (
    <Section id="education" label="03 / Education" title="Where I've studied" tinted>
      <div className="divide-y divide-line border-y border-line">
        {educationHistory.map((edu) => (
          <div
            key={edu.institution}
            className="flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
                {edu.institution}
              </h3>
              <p className="mt-1 text-muted">{edu.degree}</p>
            </div>
            <p className="flex-shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-faint">
              {edu.duration}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Relevant coursework
        </h4>
        <p className="mt-3 max-w-prose leading-relaxed text-muted">
          {coursework.join(', ')}
        </p>
      </div>
    </Section>
  )
}
