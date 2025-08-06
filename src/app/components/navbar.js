'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="h-14 bg-linear-to-t from-sky-500 to-indigo-500 text-white px-6 py-4 shadow">
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
    </nav>
  )
}
