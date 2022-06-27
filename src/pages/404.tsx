import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { PageDataProps } from "../types"
import { PageHeader } from "../components/PageHeader"

const NotFoundPage: React.FC<PageProps<PageDataProps>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <PageHeader title="Oh no!">
        <p>
          Looks like climate change has devasted the page you were trying to
          view which doesn&#39;t exist... the sadness.
        </p>
      </PageHeader>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
