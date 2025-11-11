'use client'
import { useEffect,useRef } from "react";
import AnimatedText from "./animatedText"
import Typed from "typed.js"
import { DownloadIcon } from "lucide-react";

export default function HeroSection(){
    const el = useRef(null);
    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['a Beautiful', 'an Interactive', 'a Responsive'],
      typeSpeed: 40,
      loop: true,
      backDelay: 1500,
      backSpeed: 30,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };}, []);
    return(
        <section className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen pt-70">
            <div className="text-2xl text-center text-white">
                <div className="mb-2">
                    Hi, My name is Dicky
                </div>
                <div className="text-[70px]">
                    <span className="text-yellow-300">Let&apos;s Build </span>
                    <span ref={el}/>
                </div>
                <div className="text-[50px]">
                    Website With Me
                </div>
                <div className="flex gap-3 justify-center mt-10">
                    <a target="_blank" href="/Asta.pdf">
                        <button 
                            className="bg-white p-3 border-white text-blue-800 border-2 rounded-2xl hover:shadow-blue-300 hover:scale-105 hover:shadow-md cursor-pointer duration-300">
                            Download CV
                        </button>
                    </a>
                    <button 
                        className="border-white border-2 text-white rounded-2xl p-3 hover:scale-105 hover:bg-blue-800 hover:text-white duration-300 cursor-pointer hover:shadow-blue-300 hover:shadow-md"
                    >
                        My Projects
                    </button>
                </div>
            </div>
        </section>
    )
}