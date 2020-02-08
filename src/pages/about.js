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
          margin-top: 3rem;
          margin-bottom: 2rem;
        `}
      >
        <h1>About Me!</h1>
        <p css={{ maxWidth: "600px", marginBottom: "3rem" }}>
          Hi, I'm Shannon Myers, also known as Cent, a full stack developer born
          and living in the Atlanta Metropolitan Area. I have been coding for 5
          years now, with roots robotics, and I am now pursuing a career in web
          developent.
          <br />
          <br />I am an avid language learner, both programming and foreign. In
          the past I studied Spanish and French in school. Recently, I decided
          to move on to German and I have plans in the future to tackle Finnish
          and Russian, in no particular order. While I'm not coding or
          practicing German, you can usually find me outside walking, listening
          to a podcast, trying some new food, or playing the occasional League
          of Legends game. I am always open to trying new things. You can also
          look at what I'm currently working on with the links below.
          <br />
          <br />I recently graduated from Full Sail University, learning about a
          plethora of programming languages, libraries, and frameworks. This is
          including, but not limited to: HTML, CSS, JavaScript, C#, PHP, React,
          Node and Express. However, the most important thing I learned was how
          to learn, allowing me to pick up new technologies easily.
        </p>
        <section className="current">
          <h2>What I'm currently doing.</h2>
          <div>
            <a href="https://courses.dcs.wisc.edu/wp/readinggerman/">
              <div>
                <span>Learning</span> German through an online textbook
              </div>
            </a>
            <a href="https://bulletjournal.com/">
              <div>
                <span>Building</span> an application based off the Bujo Method
              </div>
            </a>
            <a href="https://www.ladybug.dev/">
              <div>
                <span>Listening</span> to the Ladybug Podcast
              </div>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  )
}
