import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { FiMenu as Icon } from 'react-icons/fi'

interface setter {
  setter: Dispatch<SetStateAction<boolean>>
}

export default function SideBarMobile({ setter }: setter) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-20 flex h-[60px] items-center gap-4 border-b border-line bg-bg px-4 md:hidden">
      <button
        className="flex text-2xl text-fg"
        onClick={() => setter((oldVal) => !oldVal)}
        aria-label="Open navigation"
      >
        <Icon />
      </button>
      <Link href="/" className="font-display text-base font-semibold tracking-tight text-fg">
        Ray Ruenheck
      </Link>
    </nav>
  )
}
