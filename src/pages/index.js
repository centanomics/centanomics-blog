import React from "react"
import { css } from "@emotion/core"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/Intro"
import Projects from "../components/Projects"

export default () => {
  return (
    <Layout>
      <SEO title="Portfolio" description="Home page for my portfolio" />
      <div>
        <main
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          `}
          className="frame"
        >
          <Intro />
          <Projects />
        </main>
      </div>
    </Layout>
  )
}

// export default () => {
//   const getDate = () => {
//     let d = new Date()
//     let h = d.getHours()
//     let m = d.getMinutes()
//     let s = d.getSeconds()

//     if (h <= 9) {
//       h = "0" + h
//     }
//     if (m <= 9) {
//       m = "0" + m
//     }
//     if (s <= 9) {
//       s = "0" + s
//     }
//     return "#" + h + m + s
//   }
//   const hexTime = getDate()
//   return (
//     <main
//       css={css`
//         height: 100vh;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//       `}
//     >
//       <div
//         css={css`
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         `}
//       >
//         <Logo size="128" color={hexTime} />
//         <span
//           css={css`
//             font-size: 3rem;
//           `}
//         >
//           Coming soon
//         </span>
//       </div>
//     </main>
//   )
// }
