import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Not Found" description="Page not found" />
      <main
        css={css`
          text-align: center;
        `}
        id="oops"
      >
        <h1>Something went wrong.</h1>

        <Link
          to="/"
          css={css`
            color: black;
          `}
        >
          Get back to saftey
        </Link>
      </main>
    </Layout>
  )
}
