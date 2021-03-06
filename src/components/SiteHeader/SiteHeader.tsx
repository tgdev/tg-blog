import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import { ContentBlock } from "../../layouts/ContentBlock"

type NavItem = { name: string; path: string }

const navItems: NavItem[] = [
  { name: "Posts", path: "/" },
  { name: "Topics", path: "/categories" },
  { name: "About", path: "/about" },
]

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const SiteHeader = () => {
  const data: Data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className="site-header">
      <a className="skip-to-content-link" href="#main">
        Skip to content
      </a>
      <ContentBlock>
        <div className="site-header-content">
          <Link className="site-header-title" to="/">
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>

          <nav className="site-header-nav">
            {navItems.map(({ name, path }, index) => (
              <Link
                key={`site-nav-item-${index}`}
                to={path}
                className="site-header-nav-item"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </ContentBlock>
    </header>
  )
}
