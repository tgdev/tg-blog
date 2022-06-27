import React from "react"
import { Link, graphql } from "gatsby"
import { PageHeader } from "../components/PageHeader"
import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { ContentBlock } from "../layouts/ContentBlock"

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

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout location={location} title={""}>
      <Seo title={""} />
      <PageHeader title={tagHeader} />
      <ContentBlock>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <Link key={slug} to={slug}>
              {title}
            </Link>
          )
        })}
        <div>
          <Link to="/tags">All tags</Link>
        </div>
      </ContentBlock>
    </Layout>
  )
}

export default Tags

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
