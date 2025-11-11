'use client'

import { act, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function AboutMe() {
  const [activeMenu, setActiveMenu] = useState('about');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="text-black p-15 text-[19px] text-center" id="about">
    <div className="flex justify-center gap-3 mt-7 text-2xl font-bold">      
        <button 
          className={`${activeMenu == "about" ? 'text-blue-800 scale-150 pl-5 pr-5' : 'hover:text-blue-800 hover:scale-150 hover:pl-5 hover:pr-5'} duration-300`}
          onClick={() => setActiveMenu('about')}
        >
          About Me
        </button> |
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
    { activeMenu == 'about' && (
      <div className="mt-7">
        <p>Passionate Front-End Developer and 3rd-semester Information Technology student at Universitas Bina Sarana Informatika Cikarang, specializing in modern web development. 
          Experienced in delivering innovative and user-friendly web applications for educational institutions and small-scale projects. Strong problem-solving and analytical skills, with a continuous focus on adopting emerging web technologies.</p>
      </div>
    ) }
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
      <div className="mt-7 flex flex-col md:flex-row justify-center items-center gap-6 bg-gradient-to-r from-blue-500 to-blue-800 p-6 rounded-xl shadow-xl">
        <div className="flex-1 rounded-2xl text-white">
          <h1 className="text-2xl font-bold mb-2">PT. Digital Access Indonesia</h1>
          <h2 className="text-lg font-semibold">Fullstack Developer Intern</h2>
          <p className="text-lg font-semibold">(July 2025 - September 2025)</p>
        </div>
        <Image
          src="/assets/dai-internship.jpeg"
          alt="daiportfolio"
          width={500}
          height={300}
          className="rounded-2xl object-cover shadow-md"
        />
      </div>
    )}
    </div>
  )
}