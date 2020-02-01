import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default ({ data }) => {
  return (
    <Layout>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        `}
      >
        <header>
          <h2>Blog</h2>
        </header>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <article>
              <h3>
                {node.frontmatter.title} <span>- {node.frontmatter.date}</span>
              </h3>
              <p>{node.frontmatter.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
          }
          excerpt
        }
      }
    }
  }
`
