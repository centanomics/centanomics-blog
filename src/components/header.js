import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import Logo from "./logo"

export default () => {
  const navCSS = css`
    padding: 0 20px;
    color: black;
    text-decoration: none;
  `

  return (
    <div>
      <header
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          padding-top: 2rem;
        `}
        className="frame"
      >
        <Link
          to="/"
          css={css`
            width: 25px;
            height: 25px;
          `}
        >
          <Logo size="25" color="black" />
        </Link>
        <nav
          css={css`
            display: inline-block;
          `}
        >
          <Link
            to="/about"
            css={navCSS}
            activestyle={{ color: `var(--color)` }}
          >
            About
          </Link>
          <a
            href="https://dailytwocents.dev"
            css={navCSS}
            activestyle={{ color: `var(--color)` }}
          >
            Blog
          </a>
          <a href="mailto:centanomics@gmail.com?subject=Hi Cent!" css={navCSS}>
            Contact
          </a>
        </nav>
      </header>
    </div>
  )
}
