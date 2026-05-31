'use client'

import AnimatedReveal from './AnimatedReveal'

export default function SectionHeading({ label, title, gradient = false, className = '' }) {
  return (
    <div className={`mb-16 md:mb-20 ${className}`}>
      {label && (
        <AnimatedReveal variant="fade-up" delay={0}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted mb-4">
            {label}
          </p>
        </AnimatedReveal>
      )}
      <AnimatedReveal variant="fade-up" delay={0.1}>
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight ${
            gradient ? 'gradient-text' : 'text-text-primary'
          }`}
        >
          {title}
        </h2>
      </AnimatedReveal>
    </div>
  )
}
