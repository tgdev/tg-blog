import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../layouts/MainLayout"
import { ContentBlock } from "../layouts/ContentBlock"

import Seo from "../components/Seo/Seo"
import Bio from "../components/Bio/Bio"
import { PageHeader } from "../components/PageHeader/PageHeader"
import { PostMeta } from "../components/PostMeta/PostMeta"
import { TagsList } from "../components/TagsList/TagsList"

import { PostNavItem, Tags } from "../types"

type Data = {
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
  previous: PostNavItem
  next: PostNavItem
}

const BlogPostTemplate = ({ data }: PageProps<Data>) => {
  const post = data.markdownRemark
  const { previous, next } = data

  return (
    <Layout>
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
