import React from "react"

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
    <h2 itemProp={isBlogArticle ? "headline" : undefined}>{title}</h2>
    {children ? <div className="page-header-meta">{children}</div> : null}
  </header>
)
