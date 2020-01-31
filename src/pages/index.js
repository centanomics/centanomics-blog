import React from "react"
// import { graphql } from "gatsby"
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Hello to my blog</div>
    </Layout>
  )
}
