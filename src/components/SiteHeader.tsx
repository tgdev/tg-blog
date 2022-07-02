import { Link } from "gatsby"
import React from "react"

import { ContentBlock } from "../layouts/ContentBlock"

interface Props {
  title: string
}

const navItems = [
  { name: "Posts", path: "/" },
  { name: "About", path: "/about" },
]

export const SiteHeader = ({ title }: Props) => (
  <header className="site-header">
    <ContentBlock>
      <div className="site-header-content">
        <Link className="site-header-title" to="/">
          {title}
        </Link>

        <nav className="site-header-nav">
          {navItems.map(({ name, path }) => (
            <Link to={path} className="site-header-nav-item">
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </ContentBlock>
  </header>
)
