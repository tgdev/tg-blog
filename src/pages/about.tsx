import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { ContentBlock } from "../layouts/ContentBlock"
import { PageHeader } from "../components/PageHeader"
import { PageDataProps } from "../types"

const AboutPage: React.FC<PageProps<PageDataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const pageTitle = "About"

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={pageTitle} />
      <PageHeader title={pageTitle} />
      <ContentBlock>
        <p>Blah.</p>
      </ContentBlock>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
