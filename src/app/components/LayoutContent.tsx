'use client'
import { useState, ReactNode } from 'react'
import SideBarMobile from './sidebarmobile'
import Sidebar from './sidebar'

export default function LayoutContent({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className="flex min-h-screen">
      <SideBarMobile setter={setShowSidebar} />
      <Sidebar show={showSidebar} setter={setShowSidebar} />
      <main className="min-w-0 flex-grow pt-[60px] md:pt-0">{children}</main>
    </div>
  )
}
