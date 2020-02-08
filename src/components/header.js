import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import Logo from "./logo"

export default () => {
  const navCSS = css`
    padding: 0 20px;
  `

  return (
    <header
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        padding-top: 2rem;
      `}
    >
      <Link
        to="/"
        css={css`
          width: 25px;
          height: 25px;
        `}
      >
        <Logo />
      </Link>
      <nav
        css={css`
          display: inline-block;
        `}
      >
        <Link to="/about" css={navCSS}>
          About
        </Link>
        <Link to="/projects" css={navCSS}>
          Projects
        </Link>
      </nav>
    </header>
  )
}
