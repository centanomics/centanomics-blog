import React from "react"
import { css } from "@emotion/core"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <SEO title="About" description="About Centanomics" />
      <div>
        <main
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-top: 6rem;
            margin-bottom: 2rem;
          `}
          className="frame"
        >
          <header
            css={css`
              display: flex;
              flex-direction: column-reverse;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <h1
              css={css`
                font-size: 6rem;
              `}
            >
              About Me!
            </h1>
            <img
              src="/me.png"
              width="200"
              height="200"
              alt="a vector portrait of Shannon"
              style={{ borderRadius: "50%" }}
            />
          </header>
          <p
            css={css`
              max-width: "600px";
              margin: 2rem auto;
              font-size: 1.5rem;
              line-height: 2.5rem;
              max-width: 700px;
            `}
          >
            Hello, I'm Shannon - also known as Cent - a Full Stack Developer
            with a year of experience based in the Atlanta Area. I enjoy taking
            ideas and bringing them to life through robust web applications.
            Currently, I'm working towards getting a junior developer role and
            further advancing my current skills. Offline, I like to learn
            foreign languages, participate in tea ceremonies, and hike. You can
            also check out the links in the next section to see what I'm up to
            currently - code related or not.
          </p>
          <section className="current">
            <h2>What I'm Up To:</h2>
            <ul>
              <a href="https://courses.dcs.wisc.edu/wp/readinggerman/">
                <div>Currently Learning:</div>
                <span>German,</span> thanks to an online textbook.
              </a>
              <a href="https://bulletjournal.com/">
                <div>Currently Building:</div>
                <span>Bujo,</span> an application based off the Bujo Method.
              </a>
              <a href="https://www.ladybug.dev/">
                <div>Currently Listening to:</div>
                <span>The CodeNewbie Podcast,</span> a podcast about people from
                all stages of their coding journey.
              </a>
              <a href="https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/">
                <div>Cureently Completing:</div>
                <span>Project Euler,</span> a series of challenging
                mathematical/computer programming problems.
              </a>
              <a href="https://www.stardewvalley.net/">
                <div>Currently Playing:</div>
                <span>Stardew Valley,</span> a simple game about escaping from
                modern life.
              </a>
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  )
}
