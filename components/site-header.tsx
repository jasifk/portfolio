import Link from "next/link"

import { homeConfig } from "@/config/home"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="glass-nav sticky top-0 z-50 w-full transition-all duration-500 [.has-menu-open_&]:fixed [.has-menu-open_&]:z-[200] [.has-menu-open_&]:duration-0">
      <div className="container flex gap-6 h-16 items-center justify-between">
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
