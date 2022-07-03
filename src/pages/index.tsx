import React from "react"

import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import Bio from "../components/Bio"
import { ContentBlock } from "../layouts/ContentBlock"
import { PageHeader } from "../components/PageHeader"
import { BlogPosts } from "../components/BlogPosts"
import { BlogPost } from "../types"
import { useStaticQuery, graphql } from "gatsby"

type Data = {
  allMarkdownRemark: {
    nodes: BlogPost[]
  }
}

const BlogIndex: React.FC<{}> = () => {
  const data: Data = useStaticQuery(graphql`
    query AllBlogPostsQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            tags
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.nodes
  const pageTitle = "All posts"

  return (
    <Layout>
      <Seo title={pageTitle} />
      <PageHeader title={pageTitle}>
        <Bio />
      </PageHeader>
      <ContentBlock>
        <BlogPosts posts={posts} />
      </ContentBlock>
    </Layout>
  )
}

export default BlogIndex
