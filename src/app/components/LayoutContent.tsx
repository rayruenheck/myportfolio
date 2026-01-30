'use client'
import { useState, ReactNode } from 'react'
import SideBarMobile from './sidebarmobile'
import Sidebar from './sidebar'

export default function LayoutContent({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className="min-h-screen">
      <div className="flex">
        <SideBarMobile setter={setShowSidebar} />
        <Sidebar show={showSidebar} setter={setShowSidebar} />
        <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
          {children}
        </div>
      </div>
    </div>
  )
}
