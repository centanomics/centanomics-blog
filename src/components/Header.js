import React from "react"
import { useStaticQuery, Link } from "gatsby"

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
  return (
    <header>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}
