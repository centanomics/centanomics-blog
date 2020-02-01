import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const linkStyles = css`
    margin: ${rhythm(0.5)};
  `
  const siteTitleStyles = css`
    margin-bottom: 0;
  `
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      `}
    >
      <Link to="/">
        <h1 css={siteTitleStyles}>{title}</h1>
      </Link>
      <nav
        css={css`
          display: inline-block;
        `}
      >
        <Link to="about" css={linkStyles}>
          About
        </Link>
        <Link to="projects" css={linkStyles}>
          Projects
        </Link>
        <Link to="blog" css={linkStyles}>
          Blog
        </Link>
        <Link to="contact" css={linkStyles}>
          Contact
        </Link>
      </nav>
    </header>
  )
}

// const NavLink = ({ to, text }) => {
//   return (
//     <Link
//       to={to}
//       css={css`
//         margin: ${rhythm(0.5)};
//       `}
//     >
//       {text}
//     </Link>
//   )
// }
