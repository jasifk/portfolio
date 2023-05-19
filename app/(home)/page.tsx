import Link from "next/link"

import { siteConfig } from "@/config/site"
import AboutMe from "@/components/about-me"
import { buttonVariants } from "@/components/app-button"
import Skills from "@/components/skills"

export default function HomePage() {
  return (
    <>
      <section className="container mx-auto grid h-screen min-h-screen items-center gap-6 p-0">
        <div className="flex flex-col items-start gap-2 px-6">
          <p className="max-w-[700px] py-2 text-lg text-emerald-400 sm:text-xl">
            Hi👋, my name is
          </p>
          <h1 className="lg:text-10xl py-2 text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl">
            Jasif Shameem<span className="text-emerald-400">.</span>
          </h1>
          <h2 className="py-2 text-4xl font-extrabold leading-tight tracking-tighter text-slate-700 dark:text-slate-400 sm:text-4xl md:text-5xl lg:text-6xl">
            Crafting digital experiences with code
            <span className="text-emerald-600">.</span>
          </h2>
          <p className="max-w-[540px] py-2 text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Building stunning and responsive websites with expertise in both
            front-end and back-end development. Let&apos;s bring your vision to
            life!
          </p>
          <Link
            href={siteConfig.links.linkedIn}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              className: "my-2",
              variant: "outline",
            })}
          >
            Let&apos;s chat
          </Link>
        </div>
      </section>
      <AboutMe />
      {/* <Skills /> */}
    </>
  )
}
