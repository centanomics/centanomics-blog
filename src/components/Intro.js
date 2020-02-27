import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { useTrail, animated as a, useSpring } from "react-spring"

import Logo from "./logo"

const Intro = () => {
  const linksCSS = css`
    font-weight: bold;
    color: black;
    text-decoration: none;
  `

  const name = ["S", "h", "a", "n", "n", "o", "n"]
  const nickName = ["C", "e", "n", "t", " ", " ", " "]

  const [toggle, setToggle] = useState(true)

  const [trail, set, stop] = useTrail(name.length, () => ({
    opacity: 1,
    x: 0,
    y: -100,
    opacityX: 0,
  }))

  const [flipped, flip] = useState(false)

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 100 },
  })

  const onClick = () => {
    setToggle(!toggle)
    if (toggle) {
      set({ opacity: 0, x: 100 })

      setTimeout(() => {
        set({ opacityX: 1, y: 0 })
        stop()
      }, 0)
    } else {
      set({ opacityX: 0, y: -100 })

      setTimeout(() => {
        set({ opacity: 1, x: 0 })
        stop()
      }, 0)
    }
  }

  return (
    <section
      id="intro"
      css={css`
        margin: 10rem 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div>
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
                <a.div
                  key={index}
                  style={{
                    transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`),
                    ...rest,
                    color: "var(--color)",
                    display: "inline-block",
                  }}
                >
                  {nickName[index]}
                </a.div>
              ))}
            </span>
            <span>
              {trail.map(({ y, opacityX, ...rest }, index) => (
                <a.div
                  key={index}
                  style={{
                    transform: y.interpolate(x => `translate3d(0, ${x}px, 0)`),
                    opacity: opacityX,
                    color: "var(--color)",
                    display: "inline-block",
                  }}
                >
                  {name[index]}
                </a.div>
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
      </div>
      <button
        onClick={() => {
          onClick()
          flip(!flipped)
        }}
        css={css`
          margin: 0;
          padding: 0;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          width: 200px;
          height: 200px;
        `}
        className="photo-hover"
      >
        <a.div
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
          className="c"
        >
          <Logo size="200px" />
        </a.div>
        <a.div
          style={{
            opacity,
            transform: transform.interpolate(
              t => `${t} rotateX(180deg) rotate(180deg)`
            ),
          }}
          className="c"
        >
          <div
            css={css`
              height: 200px;
              width: 200px;
              background-image: url("/me.png");
              background-size: cover;
              background-repeat: no-repeat;
              border-radius: 50%;
            `}
          ></div>
        </a.div>
      </button>
    </section>
  )
}

export default Intro
