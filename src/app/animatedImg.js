'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'
import home from './images/logo-1.svg'
import logo from './images/logo.svg'

const images = [logo, home];

export default function AnimatedImg() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval) // Bersihkan interval saat unmount
  }, [])

  return (
    <div className="w-full max-w-xl mx-auto">
      <Image
        src={images[currentIndex]}
        alt="Logo Slideshow"
        width={150}
        height={50}
        className="flex items-center space-x-3"
      />
    </div>
  )
}
