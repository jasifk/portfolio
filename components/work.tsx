import Image from "next/image"
import Link from "next/link"

export default function Work() {
  const projects = [
    {
      title: "Winmore Logistics",
      subtitle: "Tender Management & RFP Software Platform",
      image: "/winmore-app.png",
      imageAlt: "Winmore Platform - Tender management",
      link: "https://winmore.app",
      challenge:
        "Winmore required a highly scalable and maintainable platform for 3PLs, forwarders, and carriers to manage pricing, tenders, and RFP processes with complex data processing requirements.",
      role: "As Tech Lead, I architected a microservices platform using Express.js APIs for core services (users, spaces, records) and AWS Lambda for long-running processes. Currently leading development of RateAI, a sophisticated pricing feature for bid management.",
      achievement:
        "Leading a 3-year development effort, successfully architecting a platform that enables efficient tender management for logistics companies. Currently re-architecting currency handling systems for complex international pricing scenarios.",
      techStack: [
        "Node.js",
        "Express.js",
        "AWS Lambda",
        "AWS SNS/SQS",
        "EKS",
        "PostgreSQL",
        "AWS S3",
        "CloudWatch",
      ],
    },
    {
      title: "WhipFlip",
      subtitle: "AI-Powered Vehicle Valuation & Sales Platform",
      image: "/whipflip-com.png",
      imageAlt: "WhipFlip Platform - AI Vehicle Valuation",
      link: "https://whipflip.com",
      challenge:
        "WhipFlip needed a user-friendly platform for vehicle valuation and sales, requiring seamless frontend experience, powerful backend APIs, and integration with AI-powered valuation systems.",
      role: "As the architect of a 2-person development team, I built the entire platform from scratch using Next.js for optimal performance. Developed both frontend features and complete backend infrastructure, including AI valuation engine integration.",
      achievement:
        "Built a complete vehicle valuation platform featuring AI-powered damage assessment, instant transparent quotes, and streamlined digital transactions. The Next.js architecture delivered significant performance improvements.",
      techStack: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "AI Integration",
        "Custom Camera API",
        "AWS",
      ],
    },
  ]

  return (
    <section id="work" className="px-6 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-cyber-cyan">
            {"// professional experience"}
          </p>
          <h2 className="section-heading text-cyber-text">
            Featured <span className="gradient-text">Projects</span>
            <span className="gradient-text">.</span>
          </h2>
          <p className="section-subheading mt-3">
            Case studies from my professional experience that showcase my skills
            in action.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              {/* Project Image */}
              <div
                className={`${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="glass-card group relative overflow-hidden p-1">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={600}
                    height={400}
                    className="w-full rounded-xl object-cover object-top transition-all duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-cyber-bg/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`space-y-5 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold text-cyber-text sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-cyber-dim">
                    {project.subtitle}
                  </p>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-cyber-muted sm:text-base">
                  <p>
                    <span className="font-semibold text-cyber-cyan">
                      The Challenge:
                    </span>{" "}
                    {project.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-cyber-cyan">
                      My Role:
                    </span>{" "}
                    {project.role}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <p className="font-mono text-xs tracking-wider text-cyber-dim">
                    TECH STACK
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact card */}
                <div className="glass-card p-4">
                  <p className="text-sm text-cyber-muted">
                    <span className="font-semibold text-cyber-cyan">
                      Impact:
                    </span>{" "}
                    {project.achievement}
                  </p>
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-button inline-flex items-center gap-2"
                >
                  View Platform
                  <svg
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
