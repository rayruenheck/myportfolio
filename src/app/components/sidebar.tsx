"use client"

import { Dispatch, ReactNode, SetStateAction } from "react";
import Link from "next/link";
import { SlHome } from 'react-icons/sl'
import { BsFileCode, BsBriefcase, BsBook, BsGear, BsEnvelopeAt } from 'react-icons/bs'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

interface menuItem{
  icon : ReactNode
  name : string
  route: string
}
interface showState {
  show : boolean
  setter : Dispatch<SetStateAction<boolean>>
    
  
}
export default function Sidebar({ show, setter } : showState) {

  const className = "w-[250px] transition-[margin-left] ease-in-out bg-white dark:bg-gray-900 md:bg-transparent duration-500 fixed md:static top-0 bottom-0 left-0 z-40";

  const appendClass = show ? " ml-0" : " ml-[-250px] md:hidden";

  const MenuItem = ({ icon, name, route } : menuItem) => {
    
      
    
      

      return (
          <Link
              href={route}
              onClick={() => {
                  setter(oldVal => !oldVal);
              }}
             className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
          >
             <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                {icon}
             </div>
             <div>{name}</div>
          </Link>
      )
  }
  const ModalOverlay = () => (
    <div
        className={`flex md:hidden bg-black/50 fixed top-0 right-0 bottom-0 left-0 z-30`}
        onClick={() => {
            setter(oldVal => !oldVal);
        }}
    />
  )

  
  return (    
    <>
    <div className={`${className}${appendClass}`}>
    <div className="p-2 flex">
                    <Link href="/">
                        <Image src="/images/Ray Ruenheck.png" alt="Ray Ruenheck" width={300} height={300} />
                    </Link>
                </div>
        <div className="flex flex-col">
            <MenuItem
                name="Home"
                route="/"
                icon={<SlHome/>}
            />
            <MenuItem
                name="Projects"
                route="/projects"
                icon={<BsFileCode/>}
            />
            <MenuItem
                name="Experience"
                route="/#experience"
                icon={<BsBriefcase/>}
            />
            <MenuItem
                name="Education"
                route="/#education"
                icon={<BsBook/>}
            />
            <MenuItem
                name="Skills"
                route="/#skills"
                icon={<BsGear/>}
            />
            <MenuItem
                name="Contact"
                route="/#contact"
                icon={<BsEnvelopeAt/>}
            />
        </div>
        <div className="p-4 mt-auto">
          <ThemeToggle />
        </div>
    </div>
    {show ? <ModalOverlay /> : <></>}
    </>
  )
}

