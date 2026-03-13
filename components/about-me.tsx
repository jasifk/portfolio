"use client"

import { useState } from "react"
import Image from "next/image"

export default function AboutMe() {
  const [scanning, setScanning] = useState(false)

  const handleScan = () => {
    if (scanning) return
    setScanning(true)
    setTimeout(() => setScanning(false), 2100)
  }

  return (
    <section id="about" className="px-6 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute -inset-3 animate-glow-pulse rounded-2xl bg-gradient-to-br from-cyber-cyan/20 via-cyber-violet/10 to-transparent opacity-60 blur-lg" />
              <div
                onClick={handleScan}
                className={`relative overflow-hidden rounded-2xl border border-white/10 ${scanning ? "cursor-default" : "cursor-crosshair"}`}
              >
                <Image
                  className={`size-72 object-cover transition-all duration-700 hover:scale-105 sm:size-80 ${scanning ? "brightness-90" : ""}`}
                  src="/profile-pic.jpg"
                  alt="Profile picture"
                  width={320}
                  height={320}
                />

                {/* Cyan tint overlay during scan */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-cyber-cyan/5 transition-opacity duration-200 ${scanning ? "opacity-100" : "opacity-0"}`}
                />

                {/* Scan line */}
                {scanning && (
                  <div
                    className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"
                    style={{
                      animation: "scan-line 2s linear forwards",
                      boxShadow: "0 0 10px 2px rgba(0,240,255,0.6)",
                      top: "-2px",
                    }}
                  />
                )}

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/50 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-mono text-sm tracking-widest text-cyber-cyan">
                {"// about me"}
              </p>
              <h2 className="section-heading">
                <span className="text-cyber-text">Hello, I&apos;m </span>
                <span className="gradient-text">Jasif</span>
                <span className="gradient-text">.</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-cyber-muted sm:text-base">
              <p>
                A passionate and experienced{" "}
                <span className="font-semibold text-cyber-cyan">
                  Backend Tech Lead and Full-Stack Engineer
                </span>{" "}
                based in Kerala, India. For over seven years, I&apos;ve been
                immersed in the world of software development, leading the
                architecture and creation of high-performance backend systems.
              </p>

              <p>
                My expertise lies in the Node.js ecosystem, particularly with
                TypeScript and ExpressJS, complemented by a strong command of
                technologies like RabbitMQ, Redis, and PostgreSQL to ensure
                optimal performance and reliability.
              </p>

              <p>
                I thrive in fast-paced startup environments and enjoy
                collaborating with product managers and cross-functional teams
                to bring ideas to life. My goal is always the same: to build
                efficient, scalable, and reliable software that solves
                real-world problems.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-2 sm:gap-4">
              <div className="glass-card px-5 py-3">
                <p className="gradient-text text-2xl font-bold">7+</p>
                <p className="text-xs text-cyber-dim">Years Experience</p>
              </div>
              <div className="glass-card px-5 py-3">
                <p className="gradient-text text-2xl font-bold">10+</p>
                <p className="text-xs text-cyber-dim">Projects Delivered</p>
              </div>
              <div className="glass-card px-5 py-3">
                <p className="gradient-text text-2xl font-bold">3+</p>
                <p className="text-xs text-cyber-dim">Teams Led</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
