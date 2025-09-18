export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 px-4 bg-portfolio-card/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="my-2 w-full text-left text-3xl font-bold leading-tight text-slate-700 dark:text-slate-400">
            Skills & Expertise<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-400 max-w-3xl">
            7+ years of hands-on experience with modern technologies and
            frameworks
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Programming Languages */}
          <div className="bg-portfolio-card p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-portfolio-primary mb-3 sm:mb-4">
              Programming Languages
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">
                  JavaScript (ES6+)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">TypeScript</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">SQL</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">HTML5 & CSS3</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">Python (Basic)</span>
              </div>
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-portfolio-card p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-portfolio-primary mb-3 sm:mb-4">
              Frameworks & Libraries
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">Node.js</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">NestJS</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">ExpressJS</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">ReactJS</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">NextJS</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">Angular</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">React Native</span>
              </div>
            </div>
          </div>

          {/* Databases & Caching */}
          <div className="bg-portfolio-card p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-portfolio-primary mb-3 sm:mb-4">
              Databases & Caching
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">MySQL</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">MongoDB</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">Redis</span>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-portfolio-card p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-portfolio-primary mb-3 sm:mb-4">
              Cloud & DevOps
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">
                  AWS (EC2, S3, Lambda, RDS)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">Docker</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">
                  Kubernetes (Basic)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">
                  CI/CD & CircleCI
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">Git</span>
              </div>
            </div>
          </div>

          {/* Message Brokers & API */}
          <div className="bg-portfolio-card p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-portfolio-primary mb-3 sm:mb-4">
              Message Brokers & API
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">RabbitMQ</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">RESTful APIs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">JWT & OAuth</span>
              </div>
            </div>
          </div>

          {/* Methodologies */}
          <div className="bg-portfolio-card p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-portfolio-primary mb-3 sm:mb-4">
              Methodologies
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">Agile (Scrum)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">
                  Microservice Architecture
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                <span className="text-portfolio-secondary">
                  Test-Driven Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
