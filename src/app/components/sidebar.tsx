"use client"

import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

interface showState {
  show: boolean
  setter: Dispatch<SetStateAction<boolean>>
}

const menu = [
  { name: 'Projects', route: '/#projects', index: '01' },
  { name: 'Experience', route: '/#experience', index: '02' },
  { name: 'Education', route: '/#education', index: '03' },
  { name: 'Skills', route: '/#skills', index: '04' },
  { name: 'Contact', route: '/#contact', index: '05' },
]

export default function Sidebar({ show, setter }: showState) {
  const base =
    'w-[250px] flex-shrink-0 transition-[margin-left] ease-in-out duration-500 fixed md:sticky top-0 bottom-0 md:h-screen left-0 z-40 bg-bg border-r border-line flex flex-col'
  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0 md:flex hidden'

  return (
    <>
      <div className={`${base}${appendClass}`}>
        <div className="px-6 pt-8">
          <Link
            href="/"
            onClick={() => setter(false)}
            className="font-display text-lg font-semibold tracking-tight text-fg"
          >
            Ray Ruenheck
          </Link>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
            Software Engineer
          </p>
        </div>

        <nav className="mt-10 flex flex-col px-3">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.route}
              onClick={() => setter(false)}
              className="group flex items-baseline gap-3 rounded px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              <span className="font-mono text-[11px] text-faint transition-colors group-hover:text-accent">
                {item.index}
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-6 pb-8">
          <ThemeToggle />
        </div>
      </div>

      {show && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setter(false)}
        />
      )}
    </>
  )
}
