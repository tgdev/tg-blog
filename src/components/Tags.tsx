import React from "react"

interface Props {
  tags: string[]
}

export const Tags = ({ tags }: Props) => (
  <div className="tags">
    {tags &&
      tags.map(tag => (
        <a href={`/tags/${tag}`} className="tag">
          #{tag}
        </a>
      ))}
  </div>
)
