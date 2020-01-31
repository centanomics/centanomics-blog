import React from "react"
import { css } from "@emotion/core"

import Header from "./Header"
import Footer from "./Footer"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}
