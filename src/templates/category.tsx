import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/MainLayout"
import { ContentBlock } from "../layouts/ContentBlock"

import Seo from "../components/Seo/Seo"
import { PageHeader } from "../components/PageHeader/PageHeader"
import { BlogPosts } from "../components/BlogPosts/BlogPosts"

import { BlogPost } from "../types"

interface Props {
  pageContext: {
    category: string
  }
  data: {
    allMarkdownRemark: {
      nodes: BlogPost[]
    }
  }
}

const CategoryPageTemplate = ({ data, pageContext: { category } }: Props) => {
  const pageTitle = `"${category}" articles`

  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo title={pageTitle} />
      <PageHeader title={pageTitle} />
      <ContentBlock>
        <BlogPosts posts={posts} />
      </ContentBlock>
    </Layout>
  )
}

export default CategoryPageTemplate

export const pageQuery = graphql`
  query PostsByCategory($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
`
