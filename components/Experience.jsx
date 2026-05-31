'use client'

import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import AnimatedReveal from './AnimatedReveal'

const experiences = [
  {
    type: 'work',
    role: 'Operations & Automation Intern',
    organization: 'Alliance Meditech Pvt Ltd.',
    duration: 'Sep 2025 – Mar 2026',
    location: 'Bhopal, India',
    icon: Briefcase,
    points: [
      'Built an Excel VBA automation system that processed invoices end-to-end, eliminating ~6 hours/week of manual data entry across the operations team.',
      'Designed secure and controlled templates, improving data consistency and reducing processing delays.'
    ],
  },
  {
    type: 'education',
    role: 'B.Tech in Computer Science & Engineering',
    organization: 'Scope College of Engineering, Bhopal',
    duration: 'Oct 2021 – May 2025',
    location: 'Bhopal, India',
    icon: GraduationCap,
    points: [
      'CGPA: 7.4/10',
      'Relevant Coursework: Data Structures & Algorithms, Web Development, Database Systems'
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading label="Trajectory" title="Experience & Education" />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line left-3 md:left-[15px]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <AnimatedReveal
                  key={index}
                  variant="fade-up"
                  delay={index * 0.15}
                >
                  <div className="relative pl-10 md:pl-14 group">
                    {/* Timeline Dot (Wrapper Container makes group hover pure CSS) */}
                    <div className="absolute left-5 md:left-5 top-6 w-3 h-3 rounded-full bg-bg-primary border-2 border-accent-start group-hover:bg-accent-start group-hover:scale-125 group-hover:shadow-[0_0_10px_var(--accent-start)] transition-all duration-300 z-10" />
                    
                    {/* Card */}
                    <div className="glass-card p-6 lg:p-8 hover:border-white/12 hover:bg-white/2">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2.5 rounded-xl bg-white/2 border border-white/6 text-text-secondary group-hover:text-accent-start transition-colors">
                            <Icon size={18} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-text-primary tracking-tight group-hover:text-text-accent transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-accent-start mt-0.5">
                              {exp.organization}
                            </p>
                          </div>
                        </div>
                        
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Points */}
                      <ul className="space-y-3.5">
                        {exp.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-start/65 mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

