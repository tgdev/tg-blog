import React from "react"

import { ContentBlock } from "./ContentBlock"
import { SiteHeader } from "../components/SiteHeader"

interface Props {
  children: any
}

const MainLayout = ({ children }: Props) => (
  <div>
    <SiteHeader />
    <main>{children}</main>
    <footer className="site-footer">
      <ContentBlock>
        <small>
          © {new Date().getFullYear()} Tom Gillard | Built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a> | Committed to{" "}
          <a href="https://github.com/tgdev/">Github</a> | Deployed &amp; Hosted
          on <a href="https://netlify.com">Netlify</a>
        </small>
      </ContentBlock>
    </footer>
  </div>
)

export default MainLayout
