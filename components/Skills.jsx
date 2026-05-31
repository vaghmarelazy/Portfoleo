'use client'

import Image from 'next/image'
import { Monitor, Server, Settings } from 'lucide-react'
import SectionHeading from './SectionHeading'
import AnimatedReveal from './AnimatedReveal'

const skillCategories = [
  {
    title: 'Languages & Frontend',
    icon: Monitor,
    description: 'Developing responsive, interactive, and high-performance user interfaces.',
    skills: [
      { name: 'JavaScript', icon: '/tech/js-official-svgrepo-com.svg' },
      { name: 'TypeScript', icon: '/tech/typescript-icon-svgrepo-com.svg' },
      { name: 'Python', icon: '/tech/python.svg' },
      { name: 'React.js', icon: '/tech/react-javascript-js-framework-facebook-svgrepo-com.svg' },
      { name: 'Next.js', icon: '/tech/nextjs-fill-svgrepo-com.svg' },
      { name: 'Tailwind CSS', icon: '/tech/tailwindcss-icon.svg' },
      { name: 'ShadCn', icon: '/tech/shadcn-ui-seeklogo.svg' },
      { name: 'Zod', icon: '/tech/zod.svg' },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    description: 'Designing scalable server logic, API architectures, and robust databases.',
    skills: [
      { name: 'Node.js', icon: '/tech/nodejs-icon-svgrepo-com.svg' },
      { name: 'Express.js', icon: '/tech/express-svgrepo-com.svg' },
      { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
      { name: 'MongoDB', icon: '/tech/mongodb-icon.svg' },
      { name: 'MySQL', icon: '/tech/mysql.svg' },
      { name: 'Prisma ORM', icon: '/tech/prisma.svg' },
    ],
  },
  {
    title: 'APIs, Tools & Platforms',
    icon: Settings,
    description: 'Integrating external services, automating workflows, and deploying web applications.',
    skills: [
      { name: 'REST APIs', icon: '/tech/postman-icon.svg' },
      { name: 'JWT', icon: '/tech/jwt.svg' },
      { name: 'Resend API', icon: '/tech/resend.svg' },
      { name: 'Gemini API', icon: '/tech/gemini.svg' },
      { name: 'Git/GitHub', icon: '/tech/github-142-svgrepo-com.svg' },
      { name: 'VS Code', icon: '/tech/vscode.svg' },
      { name: 'Postman', icon: '/tech/postman-icon.svg' },
      { name: 'Vercel', icon: '/tech/vercel-icon.svg' },
      { name: 'Netlify', icon: '/tech/netlify-icon.svg' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading label="Expertise" title="Tech Stack & Competencies" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = category.icon;
            return (
              <AnimatedReveal
                key={category.title}
                variant="fade-up"
                delay={catIndex * 0.1}
                className="h-full"
              >
                <div className="glass-card p-6 lg:p-8 h-full flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-white/2 border border-white/6 text-accent-start">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-text-primary">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-800/40 hover:bg-gray-800/70 border border-white/6 hover:border-white/12 transition-all shadow-2xl hover:shadow-gray-300/10 hover:scale-105 duration-200 group cursor-default"
                      >
                        <div className="w-6 h-6 shrink-0 flex items-center justify-center relative">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={18}
                            height={18}
                            className="opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                          />
                        </div>
                        <span className="text-sm font-medium text-white group-hover:text-text-primary transition-colors duration-200 truncate">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

