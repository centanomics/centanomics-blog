import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description="Home page for my portfolio" />
      <div>Hello to my blog</div>
    </Layout>
  )
}
