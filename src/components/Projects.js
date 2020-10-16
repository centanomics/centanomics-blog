import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { useSpring, animated } from "react-spring"

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___index], order: ASC }) {
          edges {
            node {
              frontmatter {
                image
                startDate(formatString: "MMMM YYYY")
                title
                description
                repo
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
  )

  const [{ size0, size1, size2, size3 }, set] = useSpring(() => ({
    size0: "110",
    size1: "100",
    size2: "100",
    size3: "100",
  }))

  return (
    <section id="projects">
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 64px;
        `}
      >
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <article
              css={css`
                width: 100%;
              `}
              key={index}
            >
              <Link
                to={`/${node.fields.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hoover"
                css={css`
                  display: block;
                  margin: 50px 0 10px;
                  margin-bottom: 0;
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
                      ? () => set({ size0: "120" })
                      : index === 1
                      ? () => set({ size1: "110" })
                      : index === 2
                      ? () => set({ size2: "110" })
                      : () => set({ size3: "110" })
                  }
                  onMouseLeave={
                    index === 0
                      ? () => set({ size0: "110" })
                      : index === 1
                      ? () => set({ size1: "100" })
                      : index === 2
                      ? () => set({ size2: "100" })
                      : () => set({ size3: "100" })
                  }
                  style={
                    index === 0
                      ? { backgroundSize: size0.interpolate(v => `${v}%`) }
                      : index === 1
                      ? { backgroundSize: size1.interpolate(v => `${v}%`) }
                      : index === 2
                      ? { backgroundSize: size2.interpolate(v => `${v}%`) }
                      : { backgroundSize: size3.interpolate(v => `${v}%`) }
                  }
                >
                  <div className={`project ${node.frontmatter.dark}`}>
                    <span>{node.frontmatter.description}</span>
                    <p>{node.frontmatter.title}</p>
                    <small>{node.frontmatter.startDate}</small>
                  </div>
                </animated.div>
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
