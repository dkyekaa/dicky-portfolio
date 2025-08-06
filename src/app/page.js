'use client'

import Image from "next/image";
import AnimatedText from "./animatedText";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-left justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="list-inside list-decimal text-xl text-center sm:text-left">
          <div className="mb-2 tracking-[-.01em]">
            Hi, My name is Dicky
          </div>
          <div className="tracking-[-.01em] text-6xl">
            Let&apos;s Build <AnimatedText />
          </div>
          <div className="tracking-[-.01em] text-5xl">
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
      </main>
    </div>
  );
}
