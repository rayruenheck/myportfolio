import { ReactNode } from 'react'

interface SectionProps {
  id: string
  /** Small mono label above the heading, e.g. "02 / Experience". */
  label: string
  title: string
  children: ReactNode
  /** Sections alternate ground so the page has some rhythm. */
  tinted?: boolean
}

export default function Section({ id, label, title, children, tinted }: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-line px-6 py-20 md:py-28 ${tinted ? 'bg-surface' : 'bg-bg'}`}
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
          {label}
        </p>
        <h2 className="mb-12 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
