import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql, PageProps } from "gatsby"

import { ContentBlock } from "../layouts/ContentBlock"
import Layout from "../layouts/MainLayout"

import Seo from "../components/Seo/Seo"
import { PageHeader } from "../components/PageHeader/PageHeader"

interface Props {
  allMarkdownRemark: {
    group: [
      {
        fieldValue: string
        totalCount: number
      }
    ]
  }
}

const TagsPage: React.FC<PageProps<Props>> = ({ data }) => {
  const pageTitle = "Tags"

  const tags = data.allMarkdownRemark.group

  return (
    <Layout>
      <Seo title={pageTitle} />
      <PageHeader title={pageTitle} />
      <ContentBlock>
        <nav className="link-list">
          {tags.map(tag => (
            <Link
              key={tag.fieldValue}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          ))}
        </nav>
      </ContentBlock>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
