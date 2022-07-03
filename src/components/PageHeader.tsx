import React from "react"
import { ContentBlock } from "../layouts/ContentBlock"

interface Props {
  title: string
  children?: any
  isBlogArticle?: boolean
}

export const PageHeader = ({
  title,
  children,
  isBlogArticle = false,
}: Props) => (
  <header className="page-header">
    <ContentBlock>
      <h2 itemProp={isBlogArticle ? "headline" : undefined}>{title}</h2>
      {children ? <div className="page-header-meta">{children}</div> : null}
    </ContentBlock>
  </header>
)
