import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" description="Blog page for my portfolio" />
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
            <Link to={node.frontmatter.href}>
              <article>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>- {node.frontmatter.date}</span>
                </h3>
                <p>{node.frontmatter.description}</p>
              </article>
            </Link>
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
            href
          }
        }
      }
    }
  }
`
