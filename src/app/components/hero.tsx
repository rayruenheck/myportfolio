"use client"
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className="relative p-8 md:p-20 h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-light-bg via-primary-50 to-light-bg dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
            <div className="container mx-auto max-w-5xl z-10">
                <div className="flex justify-center animate-fade-in">
                    <div className="flex flex-col gap-6 text-center">
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-5xl md:text-7xl bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent animate-slide-up">
                              Ray Ruenheck
                            </h1>
                            <p className="text-light-subtext dark:text-dark-subtext text-xl md:text-2xl font-medium animate-slide-up" style={{animationDelay: '0.1s'}}>
                              Computer Science Student | R&D Intern | Full-Stack Developer
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center text-sm md:text-base text-light-subtext dark:text-dark-subtext mt-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
                              <span className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">rayruenheck@gmail.com</span>
                              <span>•</span>
                              <span className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Harvard, MA</span>
                              <span>•</span>
                              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full font-medium">
                                Available May 2026
                              </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blinking down arrow */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
              <svg
                className="w-8 h-8 text-primary-600 dark:text-primary-400 animate-pulse"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
        </section>

  );
}
