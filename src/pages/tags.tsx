import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql, PageProps } from "gatsby"

import { ContentBlock } from "../layouts/ContentBlock"
import { PageHeader } from "../components/PageHeader"
import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { PageDataProps } from "../types"

interface Props extends PageDataProps {
  allMarkdownRemark: {
    group: [
      {
        fieldValue: string
        totalCount: number
      }
    ]
  }
}

const TagsPage: React.FC<PageProps<Props>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const pageTitle = "Tags"

  const tags = data.allMarkdownRemark.group

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={pageTitle} />
      <PageHeader title={pageTitle} />
      <ContentBlock>
        <ul>
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </ContentBlock>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
