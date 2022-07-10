import React from "react"

import Layout from "../layouts/MainLayout"

import Seo from "../components/Seo/Seo"
import { PageHeader } from "../components/PageHeader/PageHeader"

const NotFoundPage: React.FC<{}> = () => (
  <Layout>
    <Seo title="404: Not Found" />
    <PageHeader title="Oh no!">
      <p>
        Looks like climate change has devasted the page you were trying to view
        which doesn&#39;t exist... the sadness.
      </p>
    </PageHeader>
  </Layout>
)

export default NotFoundPage
