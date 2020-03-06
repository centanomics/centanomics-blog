import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={`Description page for the ${post.frontmatter.title} project`}
      />
      <div>
        <Link to="/">Back</Link>
        <main className="frame">
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.startDate}</h2>
          <article dangerouslySetInnerHTML={{ __html: post.html }} />
          <div>
            <a href={post.frontmatter.repo}>Repo</a>
            <a href={post.frontmatter.live}>Live Site</a>
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
        description
        startDate
        live
        repo
      }
    }
  }
`
