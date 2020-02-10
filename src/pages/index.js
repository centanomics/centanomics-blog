import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ data }) => {
  const linksCSS = css`
    font-weight: bold;
    color: black;
    text-decoration: none;
  `

  return (
    <Layout>
      <SEO title="Portfolio" description="Home page for my portfolio" />
      <main
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        `}
      >
        <section
          id="intro"
          css={css`
            margin: 10rem 0;
          `}
        >
          <h2
            css={css`
              color: #b2aba4;
              font-weight: 200;
              font-size: 2rem;
              margin: 0;
            `}
          >
            Hello, world!
          </h2>
          <h1
            css={css`
              font-size: 6rem;
              margin: 0;
              margin-left: -5px;
            `}
          >
            I'm Cent.
          </h1>
          <p
            css={css`
              font-size: 1.5rem;
              margin: 0;
              color: #5a5956;
            `}
          >
            I am a <span css={{ color: "#5E4737" }}>Full Stack Developer</span>{" "}
            based in Atlanta, GA{" "}
          </p>
          <nav
            css={css`
              margin-top: 1rem;
            `}
          >
            <a href="#projects" css={linksCSS}>
              View Projects
            </a>
            <span
              css={css`
                color: #9f9f9f;
              `}
            >
              {" "}
              or{" "}
            </span>
            <Link to="/about" css={linksCSS}>
              Read About Me
            </Link>
          </nav>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
            `}
          >
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <article
                css={css`
                  text-align: center;
                `}
                key={index}
              >
                <a
                  href={node.frontmatter.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoover"
                  css={css`
                    display: block;
                    margin: 50px 0 10px;
                  `}
                >
                  <div
                    css={css`
                      border-radius: 15px;
                      background: url(${node.frontmatter.image});
                      background-size: cover;
                      background-repeat: no-repeat;
                      background-position: center;
                    `}
                    className="project-image"
                  ></div>
                </a>
                <p
                  css={css`
                    margin: 0;
                    font-weight: bold;
                  `}
                >
                  {node.frontmatter.title}
                </p>
                <small css={{ color: "#b2aba4" }}>
                  {node.frontmatter.startDate}
                </small>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___startDate], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            image
            startDate(formatString: "MMMM YYYY")
            title
            repo
            live
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
