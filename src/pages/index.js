import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { useSpring, animated } from "react-spring"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ data }) => {
  const linksCSS = css`
    font-weight: bold;
    color: black;
    text-decoration: none;
  `
  const [{ size0, size1, size2 }, set] = useSpring(() => ({
    size0: "100",
    size1: "100",
    size2: "100",
  }))

  return (
    <Layout>
      <SEO title="Portfolio" description="Home page for my portfolio" />
      <div>
        <main
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          `}
          className="frame"
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
              I'm <span className="name">Cent</span>.
            </h1>
            <p
              css={css`
                font-size: 1.5rem;
                margin: 0;
                color: #000000;
              `}
            >
              I design and develop Full Stack Applications, among other things{" "}
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
            <div
              css={css`
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
              `}
            >
              {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <article
                  css={css`
                    width: 100%;
                  `}
                  key={index}
                >
                  <Link
                    to={node.fields.slug}
                    className="hoover"
                    css={css`
                      display: block;
                      margin: 50px 0 10px;
                    `}
                  >
                    <animated.div
                      css={css`
                        background: url(${node.frontmatter.image});
                        background-size: 100%;
                        background-repeat: no-repeat;
                        background-position: center;
                      `}
                      className="project-image"
                      onMouseEnter={
                        index === 0
                          ? () => set({ size0: "110" })
                          : index === 1
                          ? () => set({ size1: "110" })
                          : () => set({ size2: "110" })
                      }
                      onMouseLeave={
                        index === 0
                          ? () => set({ size0: "100" })
                          : index === 1
                          ? () => set({ size1: "100" })
                          : () => set({ size2: "100" })
                      }
                      style={
                        index === 0
                          ? { backgroundSize: size0.interpolate(v => `${v}%`) }
                          : index === 1
                          ? { backgroundSize: size1.interpolate(v => `${v}%`) }
                          : { backgroundSize: size2.interpolate(v => `${v}%`) }
                      }
                    >
                      >
                      <div className={`project ${node.frontmatter.dark}`}>
                        <span>{node.frontmatter.description}</span>
                        <p>{node.frontmatter.title}</p>
                        <small>{node.frontmatter.startDate}</small>
                      </div>
                    </animated.div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___index], order: ASC }) {
      edges {
        node {
          frontmatter {
            image
            startDate(formatString: "MMMM YYYY")
            title
            description
            dark
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
