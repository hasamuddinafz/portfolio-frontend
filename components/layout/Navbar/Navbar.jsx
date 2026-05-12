'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

const links = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  return (
    <div>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={scrolled ? 'navbar navbar-scrolled' : 'navbar'}
      >
        <nav className="max-w-6xl mx-auto py-12 px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-semibold text-lg text-text-primary hover:text-accent transition-colors duration-200">
            Hasamuddin<span className="text-accent">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map(function (link) {
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-4 py-2 text-sm text-text-muted hover:text-text-primary hover:bg-bg-tertiary rounded-md transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a href="/hasamuddin-afzali-cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-sm">
              Download CV
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-text-primary"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu p-6"
          >
            <ul className="flex flex-col mt-4">
              {links.map(function (link, i) {
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-5 text-2xl font-semibold text-text-secondary hover:text-text-primary border-b border-border transition-colors duration-200"
                    >
                      {link.label}
                      <span className="text-sm font-mono text-text-muted">0{i + 1}</span>
                    </a>
                  </motion.li>
                )
              })}
            </ul>

            <div className="mt-10">
              <a href="/hasamuddin-afzali-cv.pdf" className="btn btn-outline w-full justify-center">Download CV</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}