export type BlogPost = {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    title: string
    description: string
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
