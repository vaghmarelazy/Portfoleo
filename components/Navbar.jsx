'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(link =>
      document.querySelector(link.href)
    ).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const topOffset = target.offsetTop - 80
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl h-14 px-6 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-bg-secondary/70 backdrop-blur-lg border-border-hover shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
              : 'bg-bg-secondary/35 backdrop-blur-md border-border-subtle'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-base font-bold tracking-tight text-text-primary hover:text-text-accent transition-colors flex items-center gap-1.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-accent-start to-accent-end" />
            rupesh<span className="text-text-muted">.dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                  activeSection === link.href
                    ? 'text-text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-full"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
            
            <a
              href="/resume.pdf"
              download
              className="btn-primary ml-4 py-1.5! px-4! text-xs font-semibold tracking-wide flex items-center gap-1"
            >
              Resume
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-white/5 border border-transparent hover:border-border-subtle text-text-secondary hover:text-text-primary transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-2xl bg-bg-secondary/95 backdrop-blur-xl border border-border-hover shadow-[0_12px_40px_rgba(0,0,0,0.8)] md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    activeSection === link.href
                      ? 'text-text-accent bg-white/5 border border-white/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="btn-primary mt-4 justify-center text-sm font-semibold py-2.5"
              >
                Resume
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

