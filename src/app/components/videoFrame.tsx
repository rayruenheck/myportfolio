"use client"
import { useRef, useState } from 'react'

export interface VideoFrameProps {
  src: string
  poster?: string
  /** Text shown in the frame's address bar. */
  label?: string
  title: string
}

export default function VideoFrame({ src, poster, label, title }: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return
    setStarted(true)
    video.play().catch(() => {
      // Gesture/autoplay rejection: the overlay is gone, native controls take over.
    })
  }

  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-surface">
      {/* Frame chrome: a plain title bar rather than fake traffic lights. */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
        {label && (
          <span className="truncate font-mono text-[11px] tracking-tight text-faint">
            {label}
          </span>
        )}
      </div>

      <div className="relative bg-black">
        <video
          ref={videoRef}
          className="block h-auto w-full"
          src={src}
          poster={poster}
          controls={started}
          preload="metadata"
          playsInline
          aria-label={title}
        />

        {!started && (
          <button
            type="button"
            onClick={handlePlay}
            className="group absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/15"
            aria-label={`Play ${title}`}
          >
            <span className="flex items-center gap-3 rounded-full bg-bg/95 py-2.5 pl-4 pr-5 shadow-sm transition-transform group-hover:scale-[1.03]">
              <svg
                className="h-3.5 w-3.5 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-fg">
                Play demo
              </span>
            </span>
          </button>
        )}
      </div>
    </figure>
  )
}
