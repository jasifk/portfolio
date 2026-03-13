export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      accent: "from-cyber-cyan/20",
      items: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5 & CSS3", "Python (Basic)"],
    },
    {
      title: "Frameworks & Libraries",
      accent: "from-cyber-violet/20",
      items: ["Node.js", "NestJS", "ExpressJS", "ReactJS", "NextJS", "Angular", "React Native"],
    },
    {
      title: "Databases & Caching",
      accent: "from-cyber-pink/20",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      accent: "from-cyber-cyan/20",
      items: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Kubernetes (Basic)", "CI/CD & CircleCI", "Git"],
    },
    {
      title: "Message Brokers & API",
      accent: "from-cyber-violet/20",
      items: ["RabbitMQ", "RESTful APIs", "JWT & OAuth"],
    },
    {
      title: "Methodologies",
      accent: "from-cyber-pink/20",
      items: ["Agile (Scrum)", "Microservice Architecture", "Test-Driven Development"],
    },
  ]

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

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card group relative overflow-hidden p-5 sm:p-6">
              {/* Top accent gradient line */}
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${category.accent} to-transparent`}
              />

              <h3 className="mb-4 text-lg font-semibold text-cyber-text">
                {category.title}
              </h3>
              <div className="space-y-2.5">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-cyber-cyan shadow-[0_0_6px_rgba(0,240,255,0.5)]" />
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
