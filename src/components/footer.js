import React from "react"
import { css } from "@emotion/core"

export default () => {
  return (
    <div
      css={css`
        background-color: var(--color);
      `}
    >
      <footer
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 3rem;
          margin-bottom: 3rem;
        `}
        className="frame"
      >
        <div
          css={css`
            max-width: 500px;
          `}
        >
          <p>
            Thanks for scrolling to the end of this page. If you want get to
            know me more, check out the links<span id="footer-span"></span>.
          </p>
          <p>
            Also, feel free to check{" "}
            <a href="https://drive.google.com/file/d/1WL11lS3BhI1pKEkdWe1NSJviUX9UUjzl/view">
              this
            </a>{" "}
            out
          </p>
        </div>
        <div>
          <p>Want to contact me about something?</p>
          <p>
            <a href="mailto:centanomics@gmail.com?subject=Hi Cent!" id="email">
              centanomics@gmail.com
            </a>
          </p>
          <p>Find me on</p>
          <nav>
            <a href="https://www.linkedin.com/in/shannon-myers-358b5814b/">
              LinkedIn
            </a>
            <a href="https://github.com/centanomics">Github</a>
            <a href="https://twitter.com/centanomics">Twitter</a>
            <a href="https://dev.to/centanomics">Dev.to</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
