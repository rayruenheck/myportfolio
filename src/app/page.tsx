import { Metadata } from 'next'
import Skills from './compontents/skills'

import Projects from './compontents/projects'
import Hero from './compontents/hero'
import Navbar from './compontents/navbar'
import Experience from './compontents/experience'
import Education from './compontents/education'
import SocialLinks from './compontents/sociallinks'




export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SocialLinks/>       
      <Hero/>
      <Skills/>
      <Education/> 
      <Projects />
      <Experience/>     
    </div>
    

  )
}
