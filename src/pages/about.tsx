import React from "react"

import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { ContentBlock } from "../layouts/ContentBlock"
import { PageHeader } from "../components/PageHeader"

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
