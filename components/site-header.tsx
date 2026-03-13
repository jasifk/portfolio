"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { homeConfig } from "@/config/home"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      // Always show when near the top
      if (currentY < 10) {
        setHidden(false)
      } else if (currentY > lastY.current + 8) {
        // Scrolling down — hide
        setHidden(true)
      } else if (currentY < lastY.current - 8) {
        // Scrolling up — show
        setHidden(false)
      }
      lastY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`glass-nav sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <MainNav items={homeConfig.mainNav} />
        {/* Social icons — hidden on mobile, shown in sidebar instead */}
        <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg p-2 text-cyber-muted transition-all duration-300 hover:text-cyber-cyan"
            >
              <Icons.gitHub className="size-5 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.links.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg p-2 text-cyber-muted transition-all duration-300 hover:text-cyber-cyan"
            >
              <Icons.linkedIn className="size-5 fill-current transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={siteConfig.links.x}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg p-2 text-cyber-muted transition-all duration-300 hover:text-cyber-cyan"
            >
              <Icons.x className="size-5 fill-current transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
              <span className="sr-only">X</span>
            </Link>
          </nav>
        </div>
      </div>
      {/* Subtle glow line at bottom */}
      <div className="glow-line" />
    </header>
  )
}
