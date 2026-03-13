"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (!mounted) return

    const html = document.documentElement
    const body = document.body

    if (isOpen) {
      html.style.overflow = "hidden"
      body.style.overflow = "hidden"
      html.classList.add("has-menu-open")
    } else {
      html.style.overflow = ""
      body.style.overflow = ""
      html.classList.remove("has-menu-open")
    }
    return () => {
      html.style.overflow = ""
      body.style.overflow = ""
      html.classList.remove("has-menu-open")
    }
  }, [isOpen, mounted])

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

      {/* ===== MOBILE: Hamburger Button ===== */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[150] flex size-10 flex-col items-center justify-center gap-[6px] md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={cn(
            "h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out",
            isOpen ? "translate-y-[8px] rotate-45 bg-cyber-cyan" : "bg-cyber-text"
          )}
        />
        <span
          className={cn(
            "h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out",
            isOpen ? "opacity-0" : "bg-cyber-text opacity-100"
          )}
        />
        <span
          className={cn(
            "h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out",
            isOpen ? "-translate-y-2 -rotate-45 bg-cyber-cyan" : "bg-cyber-text"
          )}
        />
      </button>

      {/* ===== MOBILE: Sidebar + Overlay (Portal) ===== */}
      {mounted &&
        createPortal(
          <div
            className={cn(
              "fixed inset-x-0 bottom-0 top-16 z-[100] md:hidden",
              isOpen ? "visible" : "invisible"
            )}
          >
            {/* Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 touch-none",
                isOpen ? "opacity-100" : "pointer-events-none opacity-0"
              )}
              onClick={closeSidebar}
            />

            {/* Sidebar */}
            <div
              className={cn(
                "absolute inset-y-0 right-0 flex w-[280px] flex-col transition-transform duration-300 ease-in-out",
                "border-l border-white/5 bg-[rgba(3,0,20,0.85)] backdrop-blur-2xl backdrop-saturate-150",
                isOpen ? "translate-x-0" : "translate-x-full"
              )}
            >
              {/* Glow line at the very top of sidebar area */}
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
              <div className="mt-auto border-t border-white/5 p-6 font-mono">
                <p className="mb-3 text-xs tracking-widest text-cyber-dim">
                  CONNECT
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    key="github"
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeSidebar}
                    className="group rounded-lg p-2 text-cyber-muted transition-all duration-300 hover:text-cyber-cyan"
                  >
                    <Icons.gitHub className="size-5 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                  </Link>
                  <Link
                    key="linkedin"
                    href={siteConfig.links.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeSidebar}
                    className="group rounded-lg p-2 text-cyber-muted transition-all duration-300 hover:text-cyber-cyan"
                  >
                    <Icons.linkedIn className="size-5 fill-current transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                  </Link>
                  <Link
                    key="x"
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
          </div>,
          document.body
        )}
    </>
  )
}
