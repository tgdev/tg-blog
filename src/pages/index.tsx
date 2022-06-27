import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { BlogPost, PageDataProps } from "../types"
import { ContentBlock } from "../layouts/ContentBlock"
import { PageHeader } from "../components/PageHeader"
import { BlogPosts } from "../components/BlogPosts"

interface Props extends PageDataProps {
  allMarkdownRemark: {
    nodes: BlogPost[]
  }
}

const BlogIndex: React.FC<PageProps<Props>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <PageHeader title="All posts...">
        <p>from {data.site.siteMetadata.author?.summary}</p>
      </PageHeader>
      <ContentBlock>
        <BlogPosts />
      </ContentBlock>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          summary
        }
      }
    }
  }
`
