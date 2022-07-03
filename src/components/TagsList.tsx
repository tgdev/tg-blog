import React from "react"
import kebabcase from "lodash.kebabcase"
import { Link } from "gatsby"
interface Props {
  tags: string[]
}

export const TagsList = ({ tags }: Props) => {
  if (tags) {
    return (
      <div className="tags">
        {tags.map(tag => (
          <Link key={tag} to={`/tags/${kebabcase(tag)}`} className="tag">
            #{tag}
          </Link>
        ))}
      </div>
    )
  }
  return null
}
