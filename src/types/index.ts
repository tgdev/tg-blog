export type PostNavItem = {
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
