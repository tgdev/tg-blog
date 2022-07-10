import React from "react"

import Layout from "../layouts/MainLayout"
import { ContentBlock } from "../layouts/ContentBlock"

import Seo from "../components/Seo/Seo"
import { PageHeader } from "../components/PageHeader/PageHeader"

const AboutPage: React.FC<{}> = () => {
  const pageTitle = "About"

  return (
    <Layout>
      <Seo title={pageTitle} />
      <PageHeader title={pageTitle} />
      <ContentBlock>
        <p>Blah.</p>
      </ContentBlock>
    </Layout>
  )
}

export default AboutPage
