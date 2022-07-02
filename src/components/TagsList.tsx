import React from "react"
import kebabcase from "lodash.kebabcase"
interface Props {
  tags: string[]
}

export const TagsList = ({ tags }: Props) => (
  <div className="tags">
    {tags &&
      tags.map(tag => (
        <a href={`/tags/${kebabcase(tag)}`} className="tag">
          #{tag}
        </a>
      ))}
  </div>
)
