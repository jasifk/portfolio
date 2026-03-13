import Link from "next/link"

import { siteConfig } from "@/config/site"
import AboutMe from "@/components/about-me"
import Contact from "@/components/contact"
import Skills from "@/components/skills"
import Work from "@/components/work"

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="container relative mx-auto flex h-[calc(100vh-4rem)] items-center p-0">
        <div className="flex flex-col items-start gap-4 px-6">
          {/* Greeting */}
          <p className="font-mono text-sm tracking-widest text-cyber-cyan sm:text-base">
            &lt;hello world /&gt;
          </p>

          {/* Name */}
          <h1 className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-cyber-text">Jasif</span>{" "}
            <span className="gradient-text">Shameem</span>
            <span className="gradient-text">.</span>
          </h1>

          {/* Tagline */}
          <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-cyber-muted sm:text-3xl md:text-4xl lg:text-5xl">
            Backend Tech Lead &{" "}
            <span className="gradient-text-cyan">Full-Stack Developer</span>
          </h2>

          {/* Description */}
          <p className="max-w-[540px] text-base leading-relaxed text-cyber-dim sm:text-lg">
            Building high-performance backend systems and crafting seamless
            digital experiences with modern web technologies.
          </p>

          {/* CTA */}
          <Link
            href={siteConfig.links.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="cyber-button my-4 inline-flex items-center gap-2"
          >
            Let&apos;s connect
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-cyber-dim">SCROLL</span>
          <div className="animate-scroll-hint">
            <svg
              className="size-5 text-cyber-cyan opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        {/* Decorative geometric shape */}
        <div className="pointer-events-none absolute right-8 top-1/4 hidden lg:block">
          <div className="relative size-64">
            <div
              className="absolute inset-0 animate-spin-slow rounded-full border border-cyber-cyan/10"
              style={{ animationDuration: "30s" }}
            />
            <div
              className="absolute inset-8 animate-spin-slow rounded-full border border-cyber-violet/10"
              style={{ animationDuration: "20s", animationDirection: "reverse" }}
            />
            <div
              className="absolute inset-16 animate-spin-slow rounded-full border border-cyber-pink/10"
              style={{ animationDuration: "25s" }}
            />
          </div>
        </div>
      </section>

      <AboutMe />
      <Skills />
      <Work />
      <Contact />
    </>
  )
}
