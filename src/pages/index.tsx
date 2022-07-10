import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../layouts/MainLayout"
import { ContentBlock } from "../layouts/ContentBlock"

import Seo from "../components/Seo/Seo"
import Bio from "../components/Bio/Bio"
import { PageHeader } from "../components/PageHeader/PageHeader"
import { BlogPosts } from "../components/BlogPosts/BlogPosts"

import { BlogPost } from "../types"

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
