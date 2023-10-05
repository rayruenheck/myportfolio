"use client"

import { useState } from "react";

export default function Navbar() {
  
  
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const dropdownMenu = (
    <ul className="dropdown-menu absolute top-0 w-1/2 mt-10 py-4 bg-white rounded-lg flex flex-col justify-center items-center border shadow-lg z-50">
      <a href="#about" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">About</a>
      <a href="#skills" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">Skills</a>
      <a href="#projects" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">Projects</a>
    </ul>
  )

  
  return (
    <header className="flex fixed z-10 text-neutral-dark w-screen bg-white">
      <a href="/" className="ml-12 items-center font-kaushan flex justify-start md:justify-center text-[20px] w-1/2">
        Ray Ruenheck
      </a>
  
      <nav className="hidden md:flex items-center justify-center w-1/2 mr-6 ">
        <a className="mr-5 hover:text-accent" href="#about">
          About
        </a>
        <a className="mr-5 hover:text-accent" href="#skills">
          Skills
        </a>
        <a className="mr-5 hover:text-accent" href="#projects">
          Projects
        </a>
        <a
          className="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          href="https://github.com/rayruenheck"
          target="_blank"
        >
          <span className="[&>svg]:w-5">
            <svg
              className="h-6 fill-neutral-dark hover:fill-accent"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 18"
            >
              {<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>}
            </svg>
          </span>
        </a>
        <a
          className="mr-4 text-neutral-500 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          href="https://www.linkedin.com/in/raymond-ruenheck-ba907127b/"
          target="_blank"
        >
          <span className="[&>svg]:w-5">
            <svg
              className="h-7 fill-neutral-dark hover:fill-accent"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>}
            </svg>
          </span>
        </a>
        </nav>
        <div className="dropdown relative md:hidden w-1/2 flex items-center justify-end">
      <button
        className="dropdown-toggle flex items-center justify-center h-10 w-1/2 transition-all"
        onClick={handleToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      {isOpen && dropdownMenu}
    </div>
      
    </header>
  );
}

