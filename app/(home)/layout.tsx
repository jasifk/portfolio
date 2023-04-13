import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="max-[1600px] my-auto w-full px-28">{children}</main>
      <SiteFooter />
    </>
  )
}
