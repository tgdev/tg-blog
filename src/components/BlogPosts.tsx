import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import kebabcase from "lodash.kebabcase"
import { TagsList } from "./TagsList"

export const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query BlogPostQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            tags
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
    )
  }

  return (
    <ol className="post-list">
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const { category, date, tags } = post.frontmatter

        return (
          <li key={post.fields.slug} className="post-list-item">
            <article itemScope itemType="http://schema.org/Article">
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <div className="post-list-item-meta">
                  <span>
                    {date} |{" "}
                    <a href={`/topics/${kebabcase(category)}`}>{category}</a>
                  </span>
                  <TagsList tags={tags} />
                </div>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        )
      })}
    </ol>
  )
}
