import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { AnimatedBackground } from "@/components/animated-background"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <SiteHeader />
        <main className="mx-auto w-full max-w-[1400px]">{children}</main>
        <SiteFooter />
      </div>
    </div>
  )
}
