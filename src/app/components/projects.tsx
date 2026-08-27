import Section from './section'
import ProjectCard, { projectProp } from './projectCard'

const projects: projectProp[] = [
  {
    title: 'Chess Analyzer',
    kicker: 'Multi-Platform Game Analysis API',
    tech: ['Python', 'FastAPI', 'SQLite', 'Stockfish', 'REST APIs', 'Anthropic API'],
    desc: [
      'Integrated four REST APIs behind one FastAPI service, normalizing Lichess and Chess.com game history into a single schema and throttling Lichess Opening Explorer calls to stay inside its rate limit',
      'Designed a SQLite schema storing one row per ply across 2,946 moves, deriving centipawn loss from a join on before and after positions instead of duplicating it, and keying caches on normalized FEN so transposed positions hit',
      'Ran Stockfish as a pool of single-threaded engines with the transposition table cleared per search, making analysis 3.9x faster than serial and cutting positions where the pool disagreed with serial from 9 of 44 to 0',
      'Aggregated ply rows into blunder rates by game phase, clock remaining, and move type, each measured against its own base rate: captures read as a weakness at 21% of blunders until set against 24% of all moves',
      "Defined the coaching output as a typed schema that puts each claim and its evidence ids before the prose, so recommendations are generated from engine-derived facts rather than the model's own chess knowledge",
      'Wrote 182 tests that stub every platform, explorer, and model call and never launch an engine, so the suite runs offline against a temp database and cannot bill the model API',
    ],
    src: '/images/chess-analyzer-poster.jpg',
    video: '/videos/chess-analyzer-preview.mp4',
    videoLabel: 'chess-analyzer — localhost:8000',
    link: 'https://github.com/rayruenheck/chess-analyzer',
  },
]

export default function Projects() {
  return (
    <Section id="projects" label="01 / Projects" title="What I've built" tinted>
      <div className="space-y-24">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}
