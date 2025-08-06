'use client';

import { useEffect, useState } from 'react';

export default function AnimatedText() {
  const animatedText = [
    { label: 'a Beautiful' },
    { label: 'an Interactive' },
    { label: 'a Powerful' },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // trigger fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % animatedText.length);
        setFade(false); // fade in
      }, 500); // sinkron dengan transition
    }, 3000); // setiap 3 detik ganti teks

    return () => clearInterval(interval);
  }, [animatedText.length]);

  return (
    <span
      className={`text-blue-500 transition-opacity duration-500 ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {animatedText[index].label}
    </span>
  );
}
