'use client'

import { useState } from "react";

export default function AboutMe() {
  const [activeMenu, setActiveMenu] = useState('skill');


  return (
    <div className="text-black p-15 text-[19px] text-center" id="about">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p>Passionate Front-End Developer and 3rd-semester Information Technology student at Universitas Bina Sarana Informatika Cikarang, specializing in modern web development. 
        Experienced in delivering innovative and user-friendly web applications for educational institutions and small-scale projects. Strong problem-solving and analytical skills, with a continuous focus on adopting emerging web technologies.</p>
    <div className="flex justify-center gap-3 mt-7 text-2xl font-bold">
        <button 
          className={`${activeMenu == "skill" ? 'text-blue-800 scale-150 pl-5 pr-5' : 'hover:text-blue-800 hover:scale-150 hover:pl-5 hover:pr-5'} duration-300`}
          onClick={() => setActiveMenu('skill')}
        >
            Skills & Tools
        </button> |
        <button
          className={`${activeMenu == "experience" ? 'text-blue-800 scale-150 pl-5 pr-5' : 'hover:text-blue-800 hover:scale-150 hover:pl-5 hover:pr-5'} duration-300`}
          onClick={() => setActiveMenu('experience')}
          >
            Experiences
          </button>
      </div>
    { activeMenu == 'skill' && (
      <div className="flex gap-3 justify-center mt-7">
        <div className="container bg-blue-800 text-white p-5 text-center w-30 rounded-xl hover:scale-110 duration-300 hover:bg-white hover:text-blue-800 border-3 border-blue-800">
          <p>TypeScript</p>
        </div>
        <div className="container bg-blue-800 text-white p-5 text-center w-30 rounded-xl hover:scale-110 duration-300 hover:bg-white hover:text-blue-800 border-3 border-blue-800">
          <p>Next.JS</p>
        </div>
        <div className="container bg-blue-800 text-white p-5 text-center w-30 rounded-xl hover:scale-110 duration-300 hover:bg-white hover:text-blue-800 border-3 border-blue-800">
          <p>React.JS</p>
        </div>
        <div className="container bg-blue-800 text-white p-5 text-center w-30 rounded-xl hover:scale-110 duration-300 hover:bg-white hover:text-blue-800 border-3 border-blue-800">
          <p>TailwindCSS</p>
        </div>
        <div className="container bg-blue-800 text-white p-5 text-center w-30 rounded-xl hover:scale-110 duration-300 hover:bg-white hover:text-blue-800 border-3 border-blue-800">
          <p>Shadcn</p>
        </div>
        <div className="container bg-blue-800 text-white p-5 text-center w-30 rounded-xl hover:scale-110 duration-300 hover:bg-white hover:text-blue-800 border-3 border-blue-800">
          <p>MaterialUI</p>
        </div>
        <div className="container bg-blue-800 text-white p-5 text-center w-30 rounded-xl hover:scale-110 duration-300 hover:bg-white hover:text-blue-800 border-3 border-blue-800">
          <p>MariaDB</p>
        </div>
        <div className="container bg-blue-800 text-white p-5 text-center w-30 rounded-xl hover:scale-110 duration-300 hover:bg-white hover:text-blue-800 border-3 border-blue-800">
          <p>MySQL</p>
        </div>
      </div>
    )}
    { activeMenu == 'experience' && (
      <div>
        <ul>
          <li>
            <h1>PT.Digital Access Indonesia</h1>
            <h2></h2>
            <p></p>
          </li>
        </ul>
      </div>
    )}
    </div>
  )
}