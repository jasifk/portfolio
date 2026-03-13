import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Glow line at top */}
      <div className="glow-line" />

      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row sm:py-6">
        <div className="flex flex-row items-center gap-2">
          <Icons.logo className="size-5 text-cyber-cyan drop-shadow-[0_0_4px_rgba(0,240,255,0.4)]" />
          <p className="text-center text-sm text-cyber-dim sm:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="text-cyber-muted transition-colors duration-300 hover:text-cyber-cyan"
            >
              jasifk
            </a>
            {" · "}
            Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="text-cyber-muted transition-colors duration-300 hover:text-cyber-cyan"
            >
              Vercel
            </a>
          </p>
        </div>
        <p className="text-sm text-cyber-dim">
          <Link
            href={`mailto:${siteConfig.links.email}`}
            className="transition-colors duration-300 hover:text-cyber-cyan"
          >
            {siteConfig.links.email}
          </Link>
        </p>
      </div>
    </footer>
  )
}
