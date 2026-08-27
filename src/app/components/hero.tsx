export default function Hero() {
  return (
    <section className="px-6 pb-20 pt-28 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-4xl">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Amherst, MA
        </p>

        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-fg md:text-7xl">
          Ray Ruenheck
        </h1>

        <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted md:text-xl">
          Computer Science student at UMass Amherst and R&amp;D Intern at{' '}
          <span className="text-fg">REMI</span>, where I build data-heavy
          backends and the interfaces that make them legible — CRM sync
          services, Django REST APIs, and React dashboards.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
          <a
            href="mailto:rayruenheck@gmail.com"
            className="text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            rayruenheck@gmail.com
          </a>
          <a
            href="https://github.com/rayruenheck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raymond-ruenheck/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
