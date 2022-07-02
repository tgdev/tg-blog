export type NavItem = {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}

export type Tags = string[]

export type BlogPost = {
  timeToRead: number
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    title: string
    description: string
    category: string
    tags?: Tags
  }
}

export interface PageDataProps {
  site: {
    siteMetadata: {
      author?: {
        name: string
        summary?: string
      }
      title: string
      description?: string
    }
  }
}
