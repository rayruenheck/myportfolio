import Section from './section'

interface RoleProject {
  name?: string
  tech?: string
  details: string[]
}

interface ExperienceEntry {
  role: string
  company: string
  duration: string
  projects: RoleProject[]
}

const experiences: ExperienceEntry[] = [
  {
    role: 'R&D Intern',
    company: 'Regional Economic Models, Inc. (REMI)',
    duration: 'Jan 2026 — Present',
    projects: [
      {
        name: 'MTD — HubSpot Sync Service',
        tech: 'Python · Flask · SQL Server',
        details: [
          'Built and deployed a Flask service that syncs a legacy SQL Server CRM into HubSpot, keeping 2,800+ companies, contacts, and deals current on a 15-minute poll driven by per-table rowversion high-water marks',
          'Made recovery from lost state safe by matching existing HubSpot records on normalized name or phone and keeping the lowest record ID, so re-runs converge instead of creating duplicates',
          'Wrote 57 tests covering pure transforms, Flask routes, live SQL Server, and live HubSpot calls, including checks that remote record counts match local sync state',
          'Built an association auditor, a dry-run reconciler, and an orphan archiver to move the integration from per-purchase to per-client deals and repair drift in place',
        ],
      },
      {
        name: 'Proseris Platform',
        tech: 'React 19 · TypeScript · Django REST Framework',
        details: [
          "Shipped 36 merged pull requests across the frontend and backend and wrote 10 test files that hold 304 of the repo's 2,048 test cases",
          'Designed a Django REST app that saves tables, charts, and dashboard layouts as three UUID-keyed models with per-user CRUD, then wrote the typed API client and React Query hooks that consume it',
          'Traced a bug where a third-party grid stripped minus signs in two separate code paths, then replaced the cell with a drop-in component now used in 5 modules and covered by 98 new tests',
          'Built a Highcharts dashboard with stacked and treemap charts, year-range animation, and Excel and PDF export, then moved the render lifecycle into a hook and cut a 3,142-line component by about 690 lines',
        ],
      },
    ],
  },
  {
    role: 'Supplemental Instruction (SI) Leader & CS Tutor',
    company: 'Middlesex Community College',
    duration: 'Jan 2025 — Dec 2025',
    projects: [
      {
        details: [
          'Led weekly SI sessions for 3–5 students, covering fundamental C++ concepts through live-coding, guided practice, and problem sets',
          'Provided one-on-one tutoring for Programming I–III, creating study guides and example programs reinforcing OOP, introductory data structures, and debugging strategies',
        ],
      },
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience" label="02 / Experience" title="Where I've worked">
      <div className="space-y-16">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.role}`}
            className="relative border-l border-line pl-6 md:pl-10"
          >
            {/* Timeline node */}
            <span
              className="absolute -left-[4.5px] top-2 h-2 w-2 rounded-full bg-accent"
              aria-hidden="true"
            />

            <header className="mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
                {exp.duration}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-fg">
                {exp.role}
              </h3>
              <p className="mt-1 text-muted">{exp.company}</p>
            </header>

            <div className="space-y-8">
              {exp.projects.map((project, pIdx) => (
                <div key={project.name ?? pIdx}>
                  {project.name && (
                    <div className="mb-3">
                      <h4 className="font-medium text-fg">{project.name}</h4>
                      {project.tech && (
                        <p className="mt-1 font-mono text-xs text-faint">
                          {project.tech}
                        </p>
                      )}
                    </div>
                  )}

                  <ul className="max-w-prose space-y-3">
                    {project.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="relative pl-5 leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-line"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
