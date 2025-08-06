'use client'

import Image from "next/image";
import AnimatedText from "./animatedText";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-left justify-items-left min-h-screen pt-25 p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="list-inside list-decimal text-xl text-center sm:text-left text-white">
          <div className="mb-2 tracking-[-.01em]">
            Hi, My name is Dicky
          </div>
          <div className="tracking-[-.01em] text-6xl">
            <span className="text-yellow-300">Let&apos;s Build</span> <AnimatedText />
          </div>
          <div className="tracking-[-.01em] text-6xl">
            Website With Me
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get my CV
          </a>
        </div>

        <footer className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-center py-3 shadow-md z-50">
          <p>Made with ❤️ by Dicky Eka</p>
        </footer>
      </main>
    </div>
  );
}
