import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="border-t border-t-slate-200 bg-white text-slate-600  dark:border-t-slate-700 dark:bg-slate-900 dark:text-slate-400">
      <div className="container flex h-16 items-center justify-between space-x-4">
        <div className="flex flex-row items-center gap-2 px-8">
          <Icons.logo className="size-6" />
          <p className="hidden text-center text-sm leading-loose md:inline-block md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              jasifk
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            . Components by{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn/ui
            </a>
            .
          </p>
        </div>
        <p className="text-left text-sm">
          <Link
            href={`mailto:${siteConfig.links.email}`}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            {siteConfig.links.email}
          </Link>
          {/* <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Source code
          </Link> */}
        </p>
      </div>
    </footer>
  )
}
