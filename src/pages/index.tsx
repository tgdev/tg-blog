import React from "react"

import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import Bio from "../components/Bio"
import { ContentBlock } from "../layouts/ContentBlock"
import { PageHeader } from "../components/PageHeader"
import { BlogPosts } from "../components/BlogPosts"

const BlogIndex: React.FC<{}> = () => {
  const pageTitle = "All posts"
  return (
    <Layout>
      <Seo title={pageTitle} />
      <PageHeader title={pageTitle}>
        <Bio />
      </PageHeader>
      <ContentBlock>
        <BlogPosts />
      </ContentBlock>
    </Layout>
  )
}

export default BlogIndex
