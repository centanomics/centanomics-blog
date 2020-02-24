import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { useTrail, animated } from "react-spring"

const Intro = () => {
  const linksCSS = css`
    font-weight: bold;
    color: black;
    text-decoration: none;
  `

  const name = ["S", "h", "a", "n", "n", "o", "n"]
  const nickName = ["C", "e", "n", "t", "", "", ""]

  const [toggle, setToggle] = useState(true)

  const [trail, set, stop] = useTrail(name.length, () => ({
    opacity: 1,
    x: 0,
    y: -40,
    opacityX: 0,
  }))

  const onClick = () => {
    setToggle(!toggle)
    if (toggle) {
      set({ opacity: 0, x: -40 })

      setTimeout(() => {
        set({ opacityX: 1, y: 0 })
        stop()
      }, 2000)
    } else {
      set({ opacityX: 0, y: -40 })

      setTimeout(() => {
        set({ opacity: 1, x: 0 })
        stop()
      }, 2000)
    }
  }

  return (
    <section
      id="intro"
      css={css`
        margin: 10rem 0;
      `}
    >
      <h2
        css={css`
          color: #959595;
          font-weight: 200;
          font-size: 2.5rem;
          margin: 0;
          margin-bottom: 16px;
        `}
      >
        Hello, world!
      </h2>
      <h1
        css={css`
          font-size: 6rem;
          margin: 0;
          margin-left: -5px;
        `}
      >
        I'm{" "}
        <span style={{ position: "relative" }}>
          <span className="nameSpan">
            {trail.map(({ x, ...rest }, index) => (
              <animated.div
                key={index}
                style={{
                  transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`),
                  ...rest,
                  color: "var(--color)",
                  display: "inline-block",
                }}
                onClick={onClick}
              >
                {name[index]}
              </animated.div>
            ))}
          </span>
          <span>
            {trail.map(({ y, opacityX, ...rest }, index) => (
              <animated.div
                key={index}
                style={{
                  ...rest,
                  transform: y.interpolate(x => `translate3d(0, ${x}px, 0)`),
                  opacity: opacityX,
                  color: "var(--color)",
                  display: "inline-block",
                  zIndex: 3,
                }}
                onClick={onClick}
              >
                {nickName[index]}
              </animated.div>
            ))}
          </span>
        </span>
      </h1>
      <p
        css={css`
          font-size: 1.5rem;
          margin: 0;
          color: #000000;
        `}
      >
        I design and develop Full Stack Applications{" "}
      </p>
      <nav
        css={css`
          margin-top: 1rem;
        `}
      >
        <a href="#projects" css={linksCSS}>
          View Projects
        </a>
        <span
          css={css`
            color: #9f9f9f;
          `}
        >
          {" "}
          or{" "}
        </span>
        <Link to="/about" css={linksCSS}>
          Read About Me
        </Link>
      </nav>
    </section>
  )
}

export default Intro
