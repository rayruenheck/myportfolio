"use client"

import { useState } from "react";

export default function Navbar() {
  
  

  
  return (    
      <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-white shadow-md z-10">
        <a href="#objective" className="hover:text-gray-700">Objective</a>
        <a href="#skills" className="hover:text-gray-700">Skills</a>
        <a href="#education" className="hover:text-gray-700">Education</a>
        <a href="#projects" className="hover:text-gray-700">Projects</a>
        <a href="#employment" className="hover:text-gray-700">Employment</a>
      </nav>
    );
}

