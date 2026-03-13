import { Inter as FontSans } from "next/font/google"
import { Space_Grotesk as FontHeading } from "next/font/google"

import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { absoluteUrl, cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { Toaster } from "@/components/ui/toaster"
import { Providers } from "./providers"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "Portfolio",
    "Personal",
    "Fullstack engineer",
    "NextJS",
    "ExpressJS",
    "jasif",
    "Nodejs",
    "React",
    "tailwind",
    "front-end",
    "back-end",
    "Tech Lead",
    "Backend Engineer",
    "Kerala",
    "India",
  ],
  authors: [
    {
      name: "jasif",
      url: "https://jasif.me",
    },
  ],
  referrer: "origin-when-cross-origin",
  creator: "jasif",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/api/og"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    images: [`${siteConfig.url}/api/og`],
    creator: "@jasifk",
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg" },
    shortcut: { url: "/favicon.svg", type: "image/svg" },
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans antialiased",
        fontSans.variable,
        fontHeading.variable
      )}
    >
      <body className="bg-cyber-bg font-sans text-cyber-text antialiased">
        <Providers>
          {children}
          <Analytics />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
