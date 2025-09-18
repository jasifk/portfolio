export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  title: string
  description: string
  url: string
  ogImage: string
  ogDescription: string
  links: {
    linkedIn: string
    x: string
    github: string
    email: string
  }
}

export type HomeConfig = {
  mainNav: MainNavItem[]
}
