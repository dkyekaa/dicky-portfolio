'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState('home');
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener saat komponen unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'projects', label: 'Projects', href: '/#projects' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white z-50 text-xl p-7 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">

          {/* Menu Navigation */}
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:scale-115 duration-300  ${
                  pathname === item.href ? 'font-bold text-yellow-300 scale-115 pr-2 pl-2' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
