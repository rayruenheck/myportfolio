const links = [
  { label: 'Email', value: 'rayruenheck@gmail.com', href: 'mailto:rayruenheck@gmail.com' },
  { label: 'GitHub', value: 'github.com/rayruenheck', href: 'https://github.com/rayruenheck' },
  {
    label: 'LinkedIn',
    value: 'in/raymond-ruenheck',
    href: 'https://www.linkedin.com/in/raymond-ruenheck/',
  },
]

export default function SocialLinks() {
  return (
    <section id="contact" className="border-t border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
          05 / Contact
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-prose leading-relaxed text-muted">
          I&apos;m looking for software engineering internships for summer 2027.
          The fastest way to reach me is email.
        </p>

        <dl className="mt-10 divide-y divide-line border-y border-line">
          {links.map((link) => (
            <div
              key={link.label}
              className="grid gap-1 py-4 md:grid-cols-[13rem_1fr] md:gap-8"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-faint md:pt-1">
                {link.label}
              </dt>
              <dd>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {link.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-16 font-mono text-xs text-faint">
          Built with Next.js and Tailwind. Set in Fraunces, Inter, and JetBrains Mono.
        </p>
      </div>
    </section>
  )
}
