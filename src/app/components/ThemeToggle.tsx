'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Render the frame before mount so the sidebar footer doesn't shift.
  if (!mounted) {
    return <div className="h-6" aria-hidden="true" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint transition-colors hover:text-accent"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? 'Light' : 'Dark'} mode
    </button>
  )
}
