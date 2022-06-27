import * as React from "react"
import { Link } from "gatsby"
import { ContentBlock } from "./ContentBlock"

interface Props {
  location: any
  title: string
  children: any
}

const MainLayout = ({ location, title, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = (
    <Link className="header-link-home" to="/">
      {title}
    </Link>
  )

  return (
    <div data-is-root-path={isRootPath}>
      <header className="global-header">
        <ContentBlock>{header}</ContentBlock>
      </header>
      <main>{children}</main>
      <footer className="global-footer">
        <ContentBlock>
          <small>
            © {new Date().getFullYear()} Tom Gillard | Built with{" "}
            <a href="https://www.gatsbyjs.com">Gatsby</a> | Committed to{" "}
            <a href="https://github.com/tgdev/">Github</a> | Deployed &amp;
            Hosted on <a href="https://netlify.com">Netlify</a>
          </small>
        </ContentBlock>
      </footer>
    </div>
  )
}

export default MainLayout
