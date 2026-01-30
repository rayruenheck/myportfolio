import Skills from './components/skills'
import Projects from './components/projects'
import Hero from './components/hero'
import Experience from './components/experience'
import Education from './components/education'
import SocialLinks from './components/sociallinks'

export default function Home() {
  return (
    <>
      <div className="wrap">
        <div id='square' className="w-12 h-12 border-2 border-white dark:border-gray-700" />
        <div id='square' className="w-12 h-12 border-2 border-white dark:border-gray-700" />
        <div id='square' className="w-12 h-12 border-2 border-white dark:border-gray-700" />
        <div id='square' className="w-12 h-12 border-2 border-white dark:border-gray-700" />
        <div id='square' className="w-12 h-12 border-2 border-white dark:border-gray-700" />
        <div id='square' className="w-12 h-12 border-2 border-white dark:border-gray-700" />
        <div id='square' className="w-12 h-12 border-2 border-white dark:border-gray-700" />
        <div id='square' className="w-12 h-12 border-2 border-white dark:border-gray-700" />
        <div id='square' className="w-12 h-12 border-2 border-white dark:border-gray-700" />
      </div>
      <Hero/>
      <Projects/>
      <section id="experience">
        <Experience/>
      </section>
      <section id="education">
        <Education/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="contact">
        <SocialLinks/>
      </section>
    </>
  )
}
