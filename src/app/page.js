'use client'

import Image from "next/image";
import AnimatedText from "./animatedText";
import gif from './images/home.gif'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-xl text-center sm:text-left text-white">
          <div className="mb-2 tracking-[-.01em]">
            Hi, My name is Dicky
          </div>
          <div className="tracking-[-.01em] text-6xl">
            <span className="text-yellow-300">Let&apos;s Build </span> <AnimatedText />
          </div>
          <div className="tracking-[-.01em] text-6xl">
            Website With Me
          </div>
        </div>

        <footer className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-center py-3 shadow-md z-50">
          <p>Made with ❤️ by Dicky Eka</p>
        </footer>
      </main>
    </div>
  );
}
