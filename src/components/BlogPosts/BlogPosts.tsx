import { Link } from "gatsby"
import React from "react"

import { TagsList } from "../TagsList/TagsList"
import { PostMeta } from "../PostMeta/PostMeta"

import { BlogPost } from "../../types"

interface Props {
  posts: BlogPost[]
}

export const BlogPosts = ({ posts }: Props) => {
  if (posts.length === 0) {
    return <p>No blog posts found.</p>
  }

  return (
    <ol role="list" className="post-list">
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
                  <PostMeta
                    date={date}
                    category={category}
                    timeToRead={post.timeToRead}
                  />
                  <TagsList tags={tags ?? []} />
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
