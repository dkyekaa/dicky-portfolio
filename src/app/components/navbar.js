'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../logo.svg'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center h-full">
        
        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Logo" width={150} height={50} />
        </div>

        {/* Navigation Items */}
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:underline ${
                  pathname === item.href ? 'font-bold text-yellow-300' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
