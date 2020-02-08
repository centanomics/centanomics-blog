import React from "react"
import { css } from "@emotion/core"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <SEO title="About" description="About Centanomics" />
      <main
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        `}
      >
        <h1>About Me!</h1>
        <p>
          Hi, I'm Shannon Myers, also known as Cent, a full stack developer
          based in the Atlanta Metropolitan Area. As a recent grad, I'm
          currently pursuing a career in web development
        </p>
        <section className="current">
          <h2>What I'm currently doing</h2>
          <a href="https://courses.dcs.wisc.edu/wp/readinggerman/">
            <div>
              <span>Learning</span>
              German
            </div>
          </a>
          <a href="https://bulletjournal.com/">
            <div>Building</div>
            an application based off the Bujo Method
          </a>
          <a href="https://www.ladybug.dev/">
            <div>Listening</div>
            to the Ladybug Podcast
          </a>
        </section>
      </main>
    </Layout>
  )
}
