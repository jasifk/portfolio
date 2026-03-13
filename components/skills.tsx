"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    accent: "from-cyber-cyan/20",
    dot: "bg-cyber-cyan shadow-[0_0_6px_rgba(0,240,255,0.5)]",
    border: "border-cyber-cyan/30",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5 & CSS3", "Python (Basic)"],
  },
  {
    title: "Frameworks & Libraries",
    accent: "from-cyber-violet/20",
    dot: "bg-cyber-violet shadow-[0_0_6px_rgba(124,58,237,0.5)]",
    border: "border-cyber-violet/30",
    items: ["Node.js", "ExpressJS", "ReactJS", "NextJS", "Angular", "React Native"],
  },
  {
    title: "Databases & Caching",
    accent: "from-cyber-pink/20",
    dot: "bg-cyber-pink shadow-[0_0_6px_rgba(236,72,153,0.5)]",
    border: "border-cyber-pink/30",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    accent: "from-cyber-cyan/20",
    dot: "bg-cyber-cyan shadow-[0_0_6px_rgba(0,240,255,0.5)]",
    border: "border-cyber-cyan/30",
    items: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Kubernetes (Basic)", "CI/CD & CircleCI", "Git"],
  },
  {
    title: "Message Brokers & API",
    accent: "from-cyber-violet/20",
    dot: "bg-cyber-violet shadow-[0_0_6px_rgba(124,58,237,0.5)]",
    border: "border-cyber-violet/30",
    items: ["RabbitMQ", "RESTful APIs", "JWT & OAuth"],
  },
  {
    title: "Methodologies",
    accent: "from-cyber-pink/20",
    dot: "bg-cyber-pink shadow-[0_0_6px_rgba(236,72,153,0.5)]",
    border: "border-cyber-pink/30",
    items: ["Agile (Scrum)", "Microservice Architecture", "Test-Driven Development"],
  },
]

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="skills" className="px-6 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-cyber-cyan">
            {"// skills & expertise"}
          </p>
          <h2 className="section-heading text-cyber-text">
            My <span className="gradient-text">Tech Stack</span>
            <span className="gradient-text">.</span>
          </h2>
          <p className="section-subheading mt-3">
            7+ years of hands-on experience with modern technologies and
            frameworks
          </p>
        </div>

        {/* ── Mobile accordion (hidden on sm+) ── */}
        <div className="space-y-2 sm:hidden">
          {skillCategories.map((category, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`glass-card overflow-hidden transition-colors duration-300 ${isOpen ? category.border + " border" : ""}`}
              >
                {/* Accent line */}
                <div
                  className={`h-px bg-gradient-to-r ${category.accent} to-transparent`}
                />

                {/* Header */}
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-cyber-text">
                    {category.title}
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-cyber-dim transition-transform duration-300 ${isOpen ? "-rotate-180" : ""}`}
                  />
                </button>

                {/* Collapsible content — grid-rows trick for smooth animation */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-2.5 px-5 pb-5">
                      {category.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className={`size-1.5 shrink-0 rounded-full ${category.dot}`} />
                          <span className="text-sm text-cyber-muted">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Desktop grid (hidden below sm) ── */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {skillCategories.map((category, i) => (
            <div key={i} className="glass-card group relative overflow-hidden p-5 sm:p-6">
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${category.accent} to-transparent`}
              />
              <h3 className="mb-4 text-lg font-semibold text-cyber-text">
                {category.title}
              </h3>
              <div className="space-y-2.5">
                {category.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className={`size-1.5 rounded-full ${category.dot}`} />
                    <span className="text-sm text-cyber-muted transition-colors duration-300 group-hover:text-cyber-text">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
