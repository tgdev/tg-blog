import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../layouts/MainLayout"
import { ContentBlock } from "../layouts/ContentBlock"

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

const CategoriesPage: React.FC<PageProps<Props>> = ({ data }) => {
  const pageTitle = "Article categories"

  const categories = data.allMarkdownRemark.group

  return (
    <Layout>
      <Seo title={pageTitle} />
      <PageHeader title={pageTitle} />
      <ContentBlock>
        <nav className="link-list">
          {categories.map(({ fieldValue, totalCount }) => (
            <Link key={fieldValue} to={`/category/${kebabCase(fieldValue)}/`}>
              {fieldValue} ({totalCount})
            </Link>
          ))}
        </nav>
      </ContentBlock>
    </Layout>
  )
}

export default CategoriesPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
