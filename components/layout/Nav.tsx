'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

const navLinks = [
  { href: '/clinic-os', label: 'Clinic OS' },
  { href: '/about',     label: 'About' },
  { href: '/blog',      label: 'Blog' },
]

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(3,45,31,0.96)] backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,5vw,4rem)] h-16 flex items-center justify-between">
        <Link href="/" aria-label="Cureomax home">
          <Logo className="h-8 w-auto" variant={scrolled ? 'light' : 'dark'} />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors duration-200 hover:opacity-100 ${
                scrolled
                  ? 'text-[#FAFAF8] opacity-80'
                  : 'text-[#032D1F] opacity-70 hover:text-[#1B7A4E]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-[#1B7A4E] text-white font-body font-medium text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-px transition-all duration-200"
          >
            Book a Demo <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled || menuOpen ? 'bg-white' : 'bg-[#032D1F]'} ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled || menuOpen ? 'bg-white' : 'bg-[#032D1F]'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled || menuOpen ? 'bg-white' : 'bg-[#032D1F]'} ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-[#032D1F] z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#FAFAF8] font-heading text-3xl"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demo"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#1B7A4E] text-white font-body font-medium px-8 py-4 rounded-full text-lg"
          >
            Book a Demo →
          </Link>
        </div>
      )}
    </header>
  )
}
