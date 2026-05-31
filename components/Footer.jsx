'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Footer() {
  const [relativeTime, setRelativeTime] = useState('')

  useEffect(() => {
    const targetDate = new Date('2026-05-31T14:00:00')
    
    const getRelativeTimeString = (date) => {
      const timeMs = date.getTime()
      const now = Date.now()
      const deltaSeconds = Math.min(-1, Math.round((timeMs - now) / 1000))
      
      const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity]
      const units = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']
      
      const unitIndex = cutoffs.findIndex(cutoff => Math.abs(deltaSeconds) < cutoff)
      const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1
      const value = Math.round(deltaSeconds / divisor)
      
      try {
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
        return rtf.format(value, units[unitIndex])
      } catch {
        return 'recently'
      }
    }
    
    const timeString = getRelativeTimeString(targetDate)
    const handle = requestAnimationFrame(() => {
      setRelativeTime(timeString)
    })
    return () => cancelAnimationFrame(handle)
  }, [])

  return (
    <footer className="border-t border-border-subtle py-8 mt-auto bg-bg-secondary/40 backdrop-blur-sm">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-1.5 text-center sm:text-left">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Rupesh Vaghmare. Built with Next.js, Tailwind CSS, & Framer Motion.
          </p>
          <span className="text-text-muted/40 hidden sm:inline">|</span>
          <p className="text-xs text-text-muted">
            Last updated: {relativeTime || 'recently'}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vaghmarelazy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors duration-200 p-1 hover:scale-105 "
            aria-label="GitHub"
          >
            <Image
              src="/tech/github-142-svgrepo-com.svg"
              alt="GitHub"
              width={18}
              height={18}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
          <a
            href="https://linkedin.com/in/lazy-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary duration-200 p-1 hover:scale-105 transition-transform"
            aria-label="LinkedIn"
          >
            <Image
              src="/tech/linkedin-svgrepo-com.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

