import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/MainLayout"
import { ContentBlock } from "../layouts/ContentBlock"

import { PageHeader } from "../components/PageHeader/PageHeader"
import Seo from "../components/Seo/Seo"

interface Props {
  pageContext: {
    tag: string
  }
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: [
        {
          node: {
            frontmatter: {
              title: string
            }
            fields: {
              slug: string
            }
          }
        }
      ]
    }
  }
}

const TagPageTemplate = ({ pageContext, data }: Props) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const pageTitle = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <Seo title={pageTitle} />
      <PageHeader title={pageTitle} />
      <ContentBlock>
        <nav className="link-list">
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <Link key={slug} to={slug}>
                {title}
              </Link>
            )
          })}
        </nav>
        <div className="page-cta">
          <Link to="/tags" className="primary-button">
            All tags
          </Link>
        </div>
      </ContentBlock>
    </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
