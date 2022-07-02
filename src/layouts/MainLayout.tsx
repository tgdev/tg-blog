import * as React from "react"
import { Link } from "gatsby"
import { ContentBlock } from "./ContentBlock"
import { SiteHeader } from "../components/SiteHeader"

interface Props {
  location: any
  title: string
  children: any
}

const MainLayout = ({ location, title, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <SiteHeader title={title} />
      <main>{children}</main>
      <footer className="site-footer">
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
