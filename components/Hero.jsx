'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault()
    const target = document.querySelector('#projects')
    if (target) {
      const topOffset = target.offsetTop - 80
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background Effects */}
      <div className="grid-pattern" />
      <div className="hero-glow" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 section-container text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Status Badge */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/2 border border-white/2 text-text-secondary hover:border-white/12 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6 max-w-3xl"
        >
          Building high-performance <span className="gradient-text-accent">systems for the web.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Hi, I&apos;m <span className="text-text-accent font-semibold">Rupesh Vaghmare</span>, a Full Stack Developer who has shipped <span className="text-text-primary font-medium">GymFlow</span>, a live SaaS platform handling member lifecycle, automated WhatsApp reminders, and revenue tracking. Specialize in Next.js, TypeScript, PostgreSQL, and Prisma.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a href="#projects" onClick={scrollToWork} className="btn-primary w-1/2 sm:w-auto text-xs sm:text-sm font-semibold tracking-wide">
            View Projects
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="/resume.pdf" download className="btn-secondary w-1/2 sm:w-auto text-xs sm:text-sm font-semibold tracking-wide">
            Download Resume
            <Download size={14} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <a 
          href="#skills" 
          onClick={(e) => {
            e.preventDefault()
            const target = document.querySelector('#skills')
            if (target) {
              window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
              })
            }
          }}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-text-muted group-hover:text-text-secondary uppercase transition-colors">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-border-subtle flex justify-center pt-1.5 group-hover:border-border-hover transition-colors"
          >
            <motion.div className="w-1 h-1.5 rounded-full bg-text-muted group-hover:bg-text-secondary transition-colors" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

