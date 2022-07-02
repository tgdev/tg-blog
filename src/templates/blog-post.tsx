import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../layouts/MainLayout"
import { ContentBlock } from "../layouts/ContentBlock"
import Seo from "../components/Seo"
import { PageHeader } from "../components/PageHeader"
import { TagsList } from "../components/TagsList"
import { NavItem, Tags } from "../types"
import { PostMeta } from "../components/PostMeta"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: {
    id: string
    timeToRead: number
    excerpt: string
    html: any
    frontmatter: {
      title: string
      date: string
      description: string
      category: string
      tags: Tags
    }
  }
  previous: NavItem
  next: NavItem
}

const BlogPostTemplate = ({ data, location }: PageProps<Data>) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <PageHeader title={post.frontmatter.title} isBlogArticle={true}>
          <PostMeta
            date={post.frontmatter.date}
            category={post.frontmatter.category}
            timeToRead={post.timeToRead}
            Component="p"
          />
          <small>
            <TagsList tags={post.frontmatter.tags} />
          </small>
        </PageHeader>
        <section itemProp="articleBody">
          <div
            className="content-wrapper"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </section>
        <hr />
        <footer>
          <ContentBlock>
            <Bio />
          </ContentBlock>
        </footer>
      </article>
      <ContentBlock>
        <nav className="blog-post-nav">
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </nav>
      </ContentBlock>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
