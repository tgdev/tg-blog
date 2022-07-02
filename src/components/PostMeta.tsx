import React, { ElementType } from "react"
import kebabcase from "lodash.kebabcase"

interface Props {
  date: string
  category: string
  timeToRead: number
  Component?: ElementType
}

export const PostMeta = ({
  date,
  category,
  timeToRead,
  Component = "span",
}: Props) => (
  <Component>
    {date} | {timeToRead} min |{" "}
    <a href={`/topics/${kebabcase(category)}`}>{category}</a>
  </Component>
)
