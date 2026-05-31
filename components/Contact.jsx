'use client'

import { Code, Link, Mail, ArrowUpRight } from 'lucide-react'
// import { Mail, ArrowUpRight } from 'lucide-react'
import AnimatedReveal from './AnimatedReveal'

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:rupeshvaghmare1@gmail.com',
    icon: Mail,
    label: 'rupeshvaghmare1@gmail.com',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/lazy-developer',
    icon: Link,
    label: 'rupeshvaghmare',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/vaghmarelazy',
    icon: Code,
    label: 'vaghmarelazy',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container max-w-4xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Side: Call to Action */}
          <div className="md:col-span-6">
            <AnimatedReveal variant="fade-up">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-accent-start/10 border border-accent-start/20 text-accent-start mb-4">
                Get In Touch
              </span>
            </AnimatedReveal>
            
            <AnimatedReveal variant="fade-up" delay={0.05}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight mb-6">
                Let&apos;s build <br />
                <span className="gradient-text-accent">something together.</span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal variant="fade-up" delay={0.1}>
              <p className="text-text-secondary text-sm leading-relaxed max-w-md font-normal">
                I am currently seeking full-time opportunities as a Full Stack Developer. If you have any inquiries, project proposals, or just want to connect, feel free to reach out.
              </p>
            </AnimatedReveal>
          </div>

          {/* Right Side: Quick Action Links */}
          <div className="md:col-span-6 flex flex-col gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <AnimatedReveal
                  key={link.name}
                  variant="fade-up"
                  delay={index * 0.08}
                >
                  <a
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="glass-card p-5 flex items-center justify-between group hover:border-white/12 hover:bg-white/2"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/2 border border-white/6 text-text-secondary group-hover:text-accent-start group-hover:bg-white/4 transition-all duration-300">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-medium">{link.name}</p>
                        <p className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors mt-0.5">
                          {link.label}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-text-muted group-hover:text-text-accent transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </AnimatedReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

