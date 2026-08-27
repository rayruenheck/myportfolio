import Image from 'next/image'
import VideoFrame from './videoFrame'

export interface projectProp {
  src: string
  /** One bullet per entry. */
  desc: string[]
  title: string
  /** Optional subtitle, e.g. "Multi-Platform Game Analysis API". */
  kicker?: string
  tech: string[]
  link: string
  /** When set, the card leads with a playable recording instead of an image. */
  video?: string
  videoLabel?: string
}

export default function ProjectCard({
  src,
  desc,
  title,
  kicker,
  tech,
  link,
  video,
  videoLabel,
}: projectProp) {
  return (
    <article className="space-y-8">
      {video ? (
        <VideoFrame src={video} poster={src} label={videoLabel} title={`${title} demo`} />
      ) : (
        <div className="overflow-hidden rounded-lg border border-line">
          <Image
            width={1440}
            height={708}
            className="block h-auto w-full"
            src={src}
            alt={title}
          />
        </div>
      )}

      <div>
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
            {title}
          </h3>
          {kicker && <p className="text-muted">{kicker}</p>}
        </div>

        <p className="mt-2 font-mono text-xs text-faint">{tech.join(' · ')}</p>

        <ul className="mt-6 max-w-prose space-y-3">
          {desc.map((point, index) => (
            <li
              key={index}
              className="relative pl-5 leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-line"
            >
              {point}
            </li>
          ))}
        </ul>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-mono text-sm text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
        >
          View source →
        </a>
      </div>
    </article>
  )
}
