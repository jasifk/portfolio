"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { NavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Lock body scroll when sidebar is open
  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    if (isOpen) {
      html.style.overflow = "hidden"
      body.style.overflow = "hidden"
    } else {
      html.style.overflow = ""
      body.style.overflow = ""
    }
    return () => {
      html.style.overflow = ""
      body.style.overflow = ""
    }
  }, [isOpen])

  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      {/* ===== LOGO (always left-aligned) ===== */}
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="size-5 text-cyber-cyan drop-shadow-[0_0_6px_rgba(0,240,255,0.5)] md:size-6" />
        <span className="font-heading text-sm font-bold md:text-base">
          <span className="text-cyber-text">jasif</span>
          <span className="gradient-text">.</span>
          <span className="text-cyber-text">me</span>
        </span>
      </Link>

      {/* ===== DESKTOP NAV ===== */}
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "group relative flex items-center text-sm font-medium text-cyber-muted transition-colors duration-300 hover:text-cyber-text",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                  <span className="gradient-text ml-0.5 font-bold">.</span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyber-cyan to-cyber-violet transition-all duration-300 group-hover:w-full" />
                </Link>
              )
          )}
        </nav>
      ) : null}

      {/* ===== MOBILE: Hamburger Button (moved to header via portal-like approach, but placed here for state) ===== */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] flex size-10 flex-col items-center justify-center gap-[5px] md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={cn(
            "h-[2px] w-6 rounded-full bg-cyber-text transition-all duration-300 ease-in-out",
            isOpen && "translate-y-[7px] rotate-45 bg-cyber-cyan"
          )}
        />
        <span
          className={cn(
            "h-[2px] w-6 rounded-full bg-cyber-text transition-all duration-300 ease-in-out",
            isOpen && "opacity-0"
          )}
        />
        <span
          className={cn(
            "h-[2px] w-6 rounded-full bg-cyber-text transition-all duration-300 ease-in-out",
            isOpen && "-translate-y-[7px] -rotate-45 bg-cyber-cyan"
          )}
        />
      </button>

      {/* ===== MOBILE: Overlay ===== */}
      <div
        className={cn(
          "fixed inset-0 z-[55] bg-black/40 backdrop-blur-md transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeSidebar}
      />

      {/* ===== MOBILE: Sidebar ===== */}
      <div
        className={cn(
          "fixed right-0 top-0 z-[56] flex h-dvh w-[280px] flex-col transition-transform duration-300 ease-in-out md:hidden",
          "border-l border-white/5 bg-[rgba(3,0,20,0.85)] backdrop-blur-2xl backdrop-saturate-150",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Spacer for header height */}
        <div className="h-16 shrink-0" />

        {/* Glow line */}
        <div className="glow-line" />

        {/* Navigation links - big font */}
        <nav className="flex flex-1 flex-col gap-2 px-6 pt-8">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeSidebar}
                  className={cn(
                    "group flex items-center py-3 text-2xl font-semibold text-cyber-muted transition-all duration-300 hover:translate-x-2 hover:text-cyber-text",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <span className="mr-3 font-mono text-xs text-cyber-cyan/50">
                    0{index + 1}
                  </span>
                  {item.title}
                  <span className="gradient-text ml-1 text-3xl font-bold">
                    .
                  </span>
                </Link>
              )
          )}
        </nav>

        {/* Social icons pinned to bottom */}
        <div className="mt-auto border-t border-white/5 px-6 py-6">
          <p className="mb-3 font-mono text-xs tracking-widest text-cyber-dim">
            CONNECT
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              onClick={closeSidebar}
              className="group rounded-lg p-2 text-cyber-muted transition-all duration-300 hover:text-cyber-cyan"
            >
              <Icons.gitHub className="size-5 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
            </Link>
            <Link
              href={siteConfig.links.linkedIn}
              target="_blank"
              rel="noreferrer"
              onClick={closeSidebar}
              className="group rounded-lg p-2 text-cyber-muted transition-all duration-300 hover:text-cyber-cyan"
            >
              <Icons.linkedIn className="size-5 fill-current transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
            </Link>
            <Link
              href={siteConfig.links.x}
              target="_blank"
              rel="noreferrer"
              onClick={closeSidebar}
              className="group rounded-lg p-2 text-cyber-muted transition-all duration-300 hover:text-cyber-cyan"
            >
              <Icons.x className="size-5 fill-current transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
