import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "./app-button"

export default function Work() {
  return (
    <section id="work" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="my-2 w-full text-left text-3xl font-bold leading-tight text-slate-700 dark:text-slate-400">
            Professional Experience<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-lg sm:text-xl text-portfolio-secondary max-w-3xl">
            Here are a few case studies from my professional experience that
            showcase my skills in action.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Winmore Logistics Case Study */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Project Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-portfolio-card rounded-2xl h-64 sm:h-80 flex items-center justify-center">
                <Image
                  src="/winmore-app.png"
                  alt="Winmore Platform - Tender management"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover object-top w-full h-full grayscale transition-all hover:grayscale-0"
                  priority
                />
              </div>
            </div>

            {/* Project Content */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-portfolio-primary mb-2 sm:mb-4">
                  Winmore Logistics
                </h3>
                <p className="text-portfolio-muted text-sm mb-2 sm:mb-4">
                  Tender Management & RFP Software Platform
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-portfolio-secondary leading-relaxed text-sm sm:text-base">
                <p>
                  <strong>The Challenge:</strong> Winmore required a highly
                  scalable and maintainable platform for 3PLs, forwarders, and
                  carriers to manage pricing, tenders, and RFP processes with
                  complex data processing requirements.
                </p>
                <p>
                  <strong>My Role & Contribution:</strong> As Tech Lead, I
                  architected a microservices platform using Express.js APIs for
                  core services (users, spaces, records) and AWS Lambda for
                  long-running processes. Currently leading development of
                  RateAI, a sophisticated pricing feature for bid management
                  with advanced import/export capabilities.
                </p>
                <p>
                  <strong>Technical Challenges:</strong> Designing a scalable
                  architecture for complex currency handling with both value and
                  code components, implementing efficient pricing calculations,
                  and managing data flow across distributed services.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-portfolio-accent">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "AWS Lambda",
                    "AWS SNS/SQS",
                    "EKS",
                    "PostgreSQL",
                    "AWS S3",
                    "CloudWatch",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-portfolio-accent/10 text-portfolio-accent px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#2D3748]/50 p-4 rounded-lg">
                <p className="text-sm text-portfolio-secondary">
                  <strong>Current Impact:</strong> Leading a 3-year development
                  effort, successfully architecting a platform that enables
                  efficient tender management for logistics companies. Currently
                  researching and re-architecting currency handling systems to
                  support complex international pricing scenarios.
                </p>
              </div>

              <Link
                href={"https://winmore.app"}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  size: "lg",
                  className: "my-2 inline-flex items-center",
                  variant: "outline",
                })}
              >
                View Platform
                <svg
                  className="w-4 h-4 ml-2"
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

          {/* WhipFlip Case Study */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Project Content */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-portfolio-primary mb-2 sm:mb-4">
                  WhipFlip
                </h3>
                <p className="text-portfolio-muted text-sm mb-2 sm:mb-4">
                  AI-Powered Vehicle Valuation & Sales Platform
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-portfolio-secondary leading-relaxed text-sm sm:text-base">
                <p>
                  <strong>The Challenge:</strong> WhipFlip needed a
                  user-friendly platform for vehicle valuation and sales,
                  requiring seamless frontend experience, powerful backend APIs,
                  and integration with AI-powered valuation systems.
                </p>
                <p>
                  <strong>My Role & Contribution:</strong> As the architect of a
                  2-person development team, I built the entire platform from
                  scratch using Next.js for optimal performance after
                  identifying scaling issues with previous React
                  implementations. Developed both frontend features and complete
                  backend infrastructure, including AI valuation engine
                  integration and custom camera functionality for optimized
                  vehicle photography.
                </p>
                <p>
                  <strong>Technical Achievement:</strong> Successfully delivered
                  a high-performance platform that enables car sales to be
                  completed in under 5 minutes, earning a 4.8-star Google rating
                  with significantly improved page load speeds.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-portfolio-accent">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "Node.js",
                    "PostgreSQL",
                    "AI Integration",
                    "Custom Camera API",
                    "AWS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-portfolio-accent/10 text-portfolio-accent px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#2D3748]/50 p-4 rounded-lg">
                <p className="text-sm text-portfolio-secondary">
                  <strong>Outcome:</strong> Built a complete vehicle valuation
                  platform featuring AI-powered damage assessment, instant
                  transparent quotes, and streamlined digital transactions. The
                  Next.js architecture delivered significant performance
                  improvements and enhanced user experience.
                </p>
              </div>

              <Link
                href={"https://whipflip.com"}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  size: "lg",
                  className: "my-2 inline-flex items-center",
                  variant: "outline",
                })}
              >
                View Platform
                <svg
                  className="w-4 h-4 ml-2"
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

            {/* Project Image */}
            <div>
              <div className="bg-portfolio-card rounded-2xl h-64 sm:h-80 flex items-center justify-center overflow-hidden">
                <Image
                  src="/whipflip-com.png"
                  alt="WhipFlip Platform - AI Vehicle Valuation"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover object-top w-full h-full grayscale transition-all hover:grayscale-0"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
