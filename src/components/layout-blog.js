import React from "react"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        padding: ${rhythm(1.5)};
      `}
    >
      {children}
    </div>
  )
}
