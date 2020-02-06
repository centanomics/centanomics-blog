import React from "react"
import { css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"

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
      `}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}
