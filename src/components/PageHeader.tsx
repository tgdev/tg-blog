import React from "react"

interface Props {
  title: string
  text?: string
  isBlogArticle?: boolean
}

export const PageHeader = ({ title, text, isBlogArticle = false }: Props) => (
  <header className="page-header">
    <h2 itemProp={isBlogArticle ? "headline" : undefined}>{title}</h2>
    {text ? <p>{text}</p> : null}
  </header>
)
