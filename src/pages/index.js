import React from "react"
import { css } from "@emotion/core"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/Intro"
import Projects from "../components/Projects"

export default () => {
  return (
    <Layout>
      <SEO title="Portfolio" description="Home page for my portfolio" />
      <div>
        <main
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          `}
          className="frame"
        >
          <Intro />
          <Projects />
        </main>
      </div>
    </Layout>
  )
}
