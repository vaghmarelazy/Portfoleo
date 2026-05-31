'use client'

import Image from 'next/image'
import { ExternalLink, Code } from 'lucide-react'
import SectionHeading from './SectionHeading'
import AnimatedReveal from './AnimatedReveal'

const techIconMap = {
  "next.js": "/tech/nextjs-fill-svgrepo-com.svg",
  "next.js 16": "/tech/nextjs-fill-svgrepo-com.svg",
  "typescript": "/tech/typescript-icon-svgrepo-com.svg",
  "node.js": "/tech/nodejs-icon-svgrepo-com.svg",
  "express.js": "/tech/express-svgrepo-com.svg",
  "express": "/tech/express-svgrepo-com.svg",
  "postgresql": "/tech/postgresql.svg",
  "prisma": "/tech/prisma.svg",
  "prisma orm": "/tech/prisma.svg",
  "tailwind css": "/tech/tailwindcss-icon.svg",
  "tailwind css v4": "/tech/tailwindcss-icon.svg",
  "shadcn/ui": "/tech/shadcn-ui-seeklogo.svg",
  "shadcn ui": "/tech/shadcn-ui-seeklogo.svg",
  "mongodb": "/tech/mongodb-icon.svg",
  "react": "/tech/react-javascript-js-framework-facebook-svgrepo-com.svg",
  "react.js": "/tech/react-javascript-js-framework-facebook-svgrepo-com.svg",
  "javascript": "/tech/js-official-svgrepo-com.svg",
  "html5": "/tech/html-5-svgrepo-com.svg",
  "css3": "/tech/css-3-svgrepo-com.svg",
  "zod": "/tech/zod.svg",
  "vercel": "/tech/vercel-icon.svg",
  "resend smtp": "/tech/resend.svg",
  "resend api": "/tech/resend.svg",
  "gemini ai": "/tech/gemini.svg",
  "gemini api": "/tech/gemini.svg",
  "git": "/tech/git-icon.svg",
  "github": "/tech/github-142-svgrepo-com.svg",
  "git/github": "/tech/github-142-svgrepo-com.svg",
  "postman": "/tech/postman-icon.svg",
  "netlify": "/tech/netlify-icon.svg",
  "vscode": "/tech/vscode.svg",
  "vs code": "/tech/vscode.svg",
  "jwt": "/tech/jwt.svg",
  "mysql": "/tech/mysql.svg",
  "python": "/tech/python.svg",
  "kotlin": "/tech/kotlin.svg",
  "android sdk": "/tech/android.svg",
  "gsap": "/tech/gsap.svg",
  "cloudinary": "/tech/cloudinary.svg"
}

const projects = [
  {
    name: "GymFlow",
    description:
      "Multi-tenant SaaS platform for independent gym owners in India, handling member lifecycle management, automated WhatsApp renewal reminders, and revenue tracking.",
    highlights: [
      "Architected a multi-tenant SaaS platform for gym owners to manage 200+ member profiles, subscriptions, and payment renewals with real-time status tracking.",
      "Built automated WhatsApp notification system using WhatsApp Business API, cutting membership lapse rate by enabling proactive renewal reminders 5/3/1 day before expiry.",
      "Engineered a revenue dashboard surfacing MRR, churn rate, and renewal forecasts, giving gym owners financial visibility previously unavailable without manual spreadsheets.",
      "Deployed on Vercel with Neon PostgreSQL, handling cold-start latency via a custom withDB() retry wrapper ensuring <2s response times under real-world load."
    ],
    image: "/projects/GymFlow.png",
    techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS", "REST APIs", "Cloudinary"],
    liveLink: "https://gymfloww.in/",
    github: "",
    featured: true,
  },
  {
    name: "RentFlow",
    description:
      "Multi-tenant property management platform with room-level rent cycle tracking, supporting landlords managing properties and rent collection without spreadsheets.",
    highlights: [
      "Engineered automated rent collection reminders and payment status dashboard, giving landlords real-time visibility into overdue and upcoming payments.",
      "Implemented tenant onboarding flow with room assignment, rent amount configuration, and payment history reducing landlord setup time to under 5 minutes per property."
    ],
    image: "/projects/RentFlow.png",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "REST APIs", "Vercel"],
    liveLink: "https://rent-flow-black.vercel.app/",
    github: "",
    featured: true,
  },
  {
    name: "MystryMessages",
    description:
      "A full-stack anonymous feedback platform featuring secure JWT sessions, Gemini AI-powered message generation, and Zod schema validations.",
    image: "/projects/MystryMessages.png",
    techStack: ["Next.js", "MongoDB", "Resend SMTP", "Gemini AI", "Zod"],
    liveLink: "https://mystry-messages-delta.vercel.app/",
    github: "https://github.com/vaghmarelazy/Mystry-messages",
    featured: false,
  },
  {
    name: "FocusFlow",
    description:
      "Material Design-compliant lightweight Android application implementing custom Pomodoro workflows in Kotlin.",
    image: "/projects/FocusFlow.png",
    techStack: ["Kotlin", "Android SDK", "Material 3"],
    liveLink: null,
    github: "https://github.com/vaghmarelazy/FocusFlow",
    featured: false,
  },
  {
    name: "Workout Generator",
    description:
      "Interactive builder to structure fitness routines and customize exercise sets dynamically.",
    image: "/projects/Workout.png",
    techStack: ["React", "Tailwind CSS", "Local Storage"],
    liveLink: "https://workout-react-app.vercel.app/",
    github: "https://github.com/vaghmarelazy/workout-react-app",
    featured: false,
  },
]

function FeaturedProject({ project }) {
  return (
    <AnimatedReveal variant="fade-up" className="mb-20 last:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-start relative">
        {/* Left Side: Sticky Image */}
        {project.image && (
          <div className="lg:col-span-7 lg:sticky lg:top-28 w-full aspect-video rounded-2xl overflow-hidden p-1.5 transition-all duration-300">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 block cursor-pointer z-10"
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                </a>
              ) : (
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              )}
              {/* Ambient vignette */}
              <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-transparent to-transparent opacity-65 lg:hidden pointer-events-none" />
            </div>
          </div>
        )}

        {/* Right Side: Scrollable Details */}
        <div className={`lg:col-span-5 flex flex-col justify-center gap-6 glass-card p-8 lg:p-10 border border-border-subtle hover:border-white/12 hover:bg-white/2 transition-colors duration-300`}>
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-accent-start/10 border border-accent-start/20 text-accent-start mb-4">
              Featured Product
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary tracking-tight mb-4 group-hover:text-text-accent transition-colors">
              {project.name}
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-text-secondary text-sm leading-relaxed font-normal">
              {project.description}
            </p>
            {project.highlights && (
              <ul className="space-y-3 ml-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-text-secondary text-xs sm:text-sm leading-relaxed font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-start/50 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul> 
            )}
          </div>

          <div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.map((tech) => {
                const iconSrc = techIconMap[tech.toLowerCase()]
                return (
                  <span key={tech} className="tech-tag text-[10px] font-semibold flex items-center gap-1.5 py-1 px-2.5 rounded-lg">
                    {iconSrc && (
                      <Image
                        src={iconSrc}
                        alt={`${tech} icon`}
                        width={12}
                        height={12}
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                    {tech}
                  </span>
                )
              })}
            </div>

            {/* CTAs */}
            {(project.liveLink || project.github) && (
              <div className="flex items-center gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2! px-4! text-xs font-semibold tracking-wide"
                  >
                    <ExternalLink size={13} />
                    Live App
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2! px-4! text-xs font-semibold tracking-wide"
                  >
                    <Code size={13} />
                    Repository
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedReveal>
  )
}

function ProjectCard({ project, index }) {
  return (
    <AnimatedReveal variant="fade-up" delay={index * 0.05} className="h-full">
      <div className="glass-card overflow-hidden group h-full flex flex-col hover:border-white/12 hover:bg-white/2">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-zinc-900/50">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 block cursor-pointer z-10"
            >
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                fill
                className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </a>
          ) : (
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col grow border-t border-border-subtle group-hover:border-border-hover transition-colors duration-300">
          <h3 className="text-lg font-bold text-text-primary tracking-tight mb-2 group-hover:text-text-accent transition-colors">
            {project.name}
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-6 grow font-normal">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => {
              const iconSrc = techIconMap[tech.toLowerCase()]
              return (
                <span key={tech} className="tech-tag text-[9px] font-semibold py-0.5 px-2 flex items-center gap-1">
                  {iconSrc && (
                    <Image
                      src={iconSrc}
                      alt={`${tech} icon`}
                      width={10}
                      height={10}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  {tech}
                </span>
              )
            })}
          </div>

          {/* Links */}
          {(project.liveLink || project.github) && (
            <div className="flex items-center gap-4 pt-4 border-t border-white/4 group-hover:border-white/8 transition-colors">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary hover:text-text-accent transition-colors"
                >
                  <ExternalLink size={12} />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary hover:text-text-accent transition-colors"
                >
                  <Code size={12} />
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </AnimatedReveal>
  )
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading label="Showcase" title="Selected Projects" />

        {/* Featured Projects */}
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.name} project={project} />
        ))}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

