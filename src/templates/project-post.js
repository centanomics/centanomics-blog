import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={`Description page for the ${post.frontmatter.title} project`}
      />
      <div>
        
        <main className="frame article">
          
          <header
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              font-size: 3rem;
              position: relative;
              border-radius: 10px 10px 0 0;
            `}
          > 
          <button onClick={() => window.history.back()} css={css`
            border: none;
            background: none;
            position: absolute;
            top: 0;
            left: 0;
            cursor: pointer;
            padding: 8px;
          `}
          className={`back-button ${post.frontmatter.dark}`}
          >{'<'} Go Back</button>
            <img
              src={post.frontmatter.image}
              alt={`${post.frontmatter.title} cover`}
              css={css`
                display: block;
                width: 100%;
                height: 300px;
                object-fit: cover;
              `}
              />
            <h1>{post.frontmatter.title}</h1>
            <h2
              css={css`
                padding-left: 8px;
              `}
            >
              - {post.frontmatter.startDate}
            </h2>
          </header>
          <article
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="project-article"
          />
          <div className="live-site">
            <p>
              Click{' '}
              <a href={post.frontmatter.live}>here</a>
              {' '}to see the site in action!
            </p> 
          </div>
        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        startDate(formatString: "MMMM YYYY")
        live
        repo
        image
        dark
      }
    }
  }
`
